<template>
  <el-form :model="form" :rules="rules" ref="formRef" label-width="auto" style="max-width: 600px">
    <el-form-item label="Task name" prop="title">
      <el-input v-model="form.title" placeholder="Input the task title."/>
    </el-form-item>
    <el-form-item label="Task description" prop="description">
      <el-input v-model="form.description" type="textarea" placeholder="Please describe your task."/>
    </el-form-item>

    <el-form-item label="Task Priority" prop="priority">
      <el-select v-model="form.priority" placeholder="Select the priority for your task."> >
        <el-option label="normal" value="0" />
        <el-option label="urgent" value="1" />
      </el-select>
    </el-form-item>

    <el-form-item label="Task time" prop="targetDate">
      <el-date-picker
          v-model="form.targetDate"
          type="date"
          placeholder="Pick a day for your task."
          format="YYYY-MM-DD"
          value-format="YYYY-MM-DD"
      />
    </el-form-item>

    <el-form-item label="Task Amount" prop="amount">
      <el-input
          v-model="form.amount"
          style="width: 240px"
          :formatter="(value:any) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
          :parser="(value:any) => value.replace(/\$\s?|(,*)/g, '')"
      />
    </el-form-item>

    <el-form-item label="Upload Pet photo" prop="imgUrl">
      <el-upload
          ref="uploadRef"
          class="upload-demo"
          action="/"
          :auto-upload="false"
          :on-change="uploadFile"
          accept=".jpg, .jpeg, .png">
        <template #trigger>
          <el-button type="primary">Select file</el-button>
        </template>

        <template #tip>
          <div class="el-upload__tip" style="color:#A49384">
            *jpg/png files with a size less than 500kb
          </div>
        </template>
      </el-upload>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitRequest">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import {reactive, ref} from 'vue'
import {ElMessage, UploadInstance} from 'element-plus'
import request from "~/axios";
import router from "~/router/router";
import dayjs from 'dayjs';

const formRef = ref();
const form = reactive({
  title: '',
  priority: '',
  description: '',
  amount: '',
  targetDate: '',
  imgUrl: ''
})

const rules = reactive({
  title: [{ required: true, message: 'Task name is required.', trigger: 'blur' }],
  description: [{ required: true, message: 'Task description is required.', trigger: 'blur' }],
  priority: [{ required: true }],
  amount: [{ required: true, message: 'Task amount is required.', trigger: 'blur' }],
  imgUrl: [{ required: true }],
  targetDate: [
    {
      validator: (rule, value, callback) => {
        if (dayjs(value).isBefore(dayjs(), 'day')) {
          callback(new Error('Date must be after today.'));
        } else {
          callback();
        }
      },
      trigger: 'change'
    }
  ]
})

const uploadRef = ref<UploadInstance>()

const submitUpload = () => {
  uploadRef.value!.submit()
}

const getBase64 =  (file: any) => {
  return new Promise(function(resolve, reject) {
    let reader = new FileReader();
    let imgResult: string | ArrayBuffer | null = "";
    reader.readAsDataURL(file);
    reader.onload = function() {
      imgResult = reader.result;
    };
    reader.onerror = function(error) {
      reject(error);
    };
    reader.onloadend = function() {
      resolve(imgResult);
    };
  });
}

const uploadFile = async (file: any) => {
  let typeArray = ['jpg', 'jpeg', 'png'];
  let isType = typeArray.some((ele) => {
    return file.raw.type.indexOf(ele) > -1
  })
  if (!isType) {
    ElMessage.warning(`File format supported: .jpg, .jpeg, .png`);
    return false;
  } else {getBase64(file.raw).then(res => {
    form.imgUrl = res;
  })}
}

const submitRequest = () => {
  formRef.value.validate((valid: boolean) => {
    if (valid) {
      request.post({ url: '/task/create', data: form }).then((res) => {
        if (res === undefined) {
          ElMessage.error('Task creation failed!');
        } else {
          ElMessage.success('Task created successfully!');
          router.push('/admin');
        }
      });
    } else {
      ElMessage.error('Please fill in all required fields correctly!');
    }
  });
}
</script>
