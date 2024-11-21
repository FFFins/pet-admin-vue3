<!-- <script setup lang="ts">
import {onMounted, ref} from "vue";
import {ElLoading, ElMessage} from "element-plus";
import request from "~/axios";
import TaskCard from "~/components/layouts/admin/task/TaskCard.vue";
import TaskCardDetail from "~/components/layouts/admin/task/TaskCardDetail.vue";

const urgentTasks = ref([])
const activeTasks = ref([])
const completedTasks = ref([])

const fetchData = async () => {
  const loading = ElLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.7)',
  })

  request.get({ url: '/task/get?needImg=true' },).then((res) => {
    urgentTasks.value = res.data['urgent']
    activeTasks.value = res.data['active']
    completedTasks.value = res.data['completed']

    loading.close()
    console.log(urgentTasks.value)
    console.log(activeTasks.value)
  })}


const deleteData = async (id) =>{
  const loading = ElLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(-1, 0, 0, 0.7)',
  })
  request.delete({ url: '/task/delete?id='+id },).then((res) =>{
    loading.close()
    ElMessage.success("Delete success!")
  })

}

onMounted(() => {
  fetchData();
});
</script>

<template>
  <div class="task-list">
    <TaskCardDetail
        v-for="task in urgentTasks" :key="task.id"
        :title="task.title"
        :description="task.description"
        :payment="task.amount"
        :target-date="task.targetDate"
        :task-status="task.taskStatus"
        :img-url="task.imgUrl"
        :id="task.id"
        title-background-color="#F40C0C"
        backgroundColor="#F46A6A" />
    <TaskCardDetail
        v-for="task in activeTasks" :key="task.id"
        :title="task.title"
        :description="task.description"
        :payment="task.amount"
        :target-date="task.targetDate"
        :img-url="task.imgUrl"
        :task-status="task.taskStatus"
        :id="task.id"
        title-background-color="#1A22E7"
        backgroundColor="#7B77F9" />
    <TaskCardDetail
        v-for="task in completedTasks" :key="task.id"
        :title="task.title"
        :description="task.description"
        :payment="task.amount"
        :target-date="task.targetDate"
        :img-url="task.imgUrl"
        :task-status="task.taskStatus"
        :id="task.id"
        title-background-color="#1a661f"
        backgroundColor="#43BF24" />

  </div>

</template>

<style scoped>
.task-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5vh;
  padding: 20px;
}
</style> -->


<template>
  <transition name="fade">
    <div class="profile-container">
      <div class="section account">
        <h2>Your Account</h2>
        <div class="account-info">
          <div class="profile-picture">
            <img :src="profileImage" alt="Profile Picture" />
            <el-button
              @click="uploadProfilePicture"
              size="small"
              class="upload-button"
            >
              Profile Picture
            </el-button>
          </div>
          <div class="account-fields">
            <el-row :gutter="20">
              <el-col :span="12">
                <el-input v-model="form.name" placeholder="Name" />
              </el-col>
              <el-col :span="12">
                <el-input v-model="form.contactNumber" placeholder="Contact Number" />
              </el-col>
              <el-col :span="12">
                <el-input v-model="form.email" placeholder="Email" />
              </el-col>
              <el-col :span="12">
                <el-select v-model="form.country" placeholder="Country">
                  <el-option label="Canada" value="Canada" />
                  <el-option label="USA" value="USA" />
                </el-select>
              </el-col>
              <el-col :span="12">
                <el-select v-model="form.state" placeholder="State">
                  <el-option label="Ontario" value="Ontario" />
                  <el-option label="British Columbia" value="British Columbia" />
                </el-select>
              </el-col>
              <el-col :span="12">
                <el-input v-model="form.city" placeholder="City" />
              </el-col>
              <el-col :span="12">
                <el-input v-model="form.streetAddress" placeholder="Street Address" />
              </el-col>
              <el-col :span="12">
                <el-upload
                  action="#"
                  :on-change="handlePhotoUpload"
                  class="upload"
                >
                  <el-button size="small" class="upload-button">Photo ID Upload</el-button>
                </el-upload>
              </el-col>
              <el-col :span="12">
                <el-select v-model="form.sex" placeholder="Sex">
                  <el-option label="Male" value="Male" />
                  <el-option label="Female" value="Female" />
                </el-select>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>

      <div class="section info">
        <h2>Info</h2>
        <el-input
          v-model="form.selfIntroduction"
          type="textarea"
          placeholder="Self Introduction"
          rows="5"
        />
        <el-row :gutter="20" class="info-fields">
          <el-col :span="12">
            <el-input v-model="form.petExperience" placeholder="Pet experience" />
          </el-col>
          <el-col :span="12">
            <el-input v-model="form.skills" placeholder="Skills" />
          </el-col>
        </el-row>
        <el-upload
          action="#"
          :on-change="handleSupportingDocument"
          class="upload"
        >
          <el-button size="small" class="upload-button">
            Supporting Document Upload
          </el-button>
        </el-upload>
        <div class="submit-button">
          <el-button type="primary" @click="submitForm" class="submit-button">
            Submit for verification
          </el-button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      profileImage: "https://via.placeholder.com/100",
      form: {
        name: "",
        contactNumber: "",
        email: "",
        country: "",
        state: "",
        city: "",
        streetAddress: "",
        sex: "",
        photoID: null,
        selfIntroduction: "",
        petExperience: "",
        skills: "",
        supportingDocument: null,
      },
    };
  },
  methods: {
    uploadProfilePicture() {
      console.log("Uploading profile picture...");
    },
    handlePhotoUpload(file) {
      this.form.photoID = file;
    },
    handleSupportingDocument(file) {
      this.form.supportingDocument = file;
    },
    submitForm() {
      console.log("Form submitted:", this.form);
    },
  },
};
</script>

<style scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.profile-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
  background-color: #f3f3f3;
  border-radius: 12px;
  width: 80%;
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.section {
  background-color: #e6e6e6;
  padding: 20px;
  border-radius: 12px;
  transition: box-shadow 0.3s;
}
.section:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.upload-button {
  background-color: #ddd;
  border: none;
  transition: background-color 0.3s, transform 0.2s;
}
.upload-button:hover {
  background-color: #bbb;
  transform: scale(1.05);
}

.submit-button {
  text-align: right;
  margin-top: 20px;
}
.submit-button button {
  background-color: #8c7b75;
  color: white;
  transition: background-color 0.3s;
}
.submit-button button:hover {
  background-color: #6e5a54;
}
</style>


