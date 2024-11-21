<template>
  <div class="chat-container">
    <!-- Chat history -->
    <div class="chat-history">
      <div
          v-for="(message, index) in messages"
          :key="index"
          :class="{'message-other': message.sender === 'other', 'message-self': message.sender === 'self'}"
          class="chat-message"
      >
        <div class="message-content">{{ message.text }}</div>
      </div>
    </div>

    <!-- Message input -->
    <div class="chat-input">
      <input
          type="text"
          v-model="newMessage"
          @keyup.enter="sendMessage"
          placeholder="Type a message..."
          class="message-box"
      />
      <button @click="sendMessage" class="send-button">Send</button>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const messages = reactive([
  { sender: 'other', text: 'Hello! How are you?' },
  { sender: 'self', text: 'I am fine, thank you!' },
])

const newMessage = ref('')

function sendMessage() {
  if (newMessage.value.trim()) {
    // Push the new message to the chat as 'self'
    messages.push({ sender: 'self', text: newMessage.value.trim() })
    newMessage.value = ''

    // Optionally simulate a response from 'other'
    setTimeout(() => {
      messages.push({ sender: 'other', text: 'Got it!' })
    }, 1000)
  }
}
</script>

<style lang="scss">
.chat-container {
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: auto;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.chat-history {
  flex-grow: 1;
  overflow-y: auto;
  padding: 10px;
  background-color: #f0f0f0;
}

.chat-message {
  margin: 5px 0;
}

.message-other {
  text-align: left;
}

.message-self {
  text-align: right;
}

.message-content {
  display: inline-block;
  padding: 10px;
  border-radius: 10px;
  max-width: 60%;
}

.message-other .message-content {
  background-color: #e0e0e0;
}

.message-self .message-content {
  background-color: #bda997;
}

.chat-input {
  display: flex;
  padding: 10px;
  border-top: 1px solid #ccc;
  background-color: #fff;
}

.message-box {
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.send-button {
  margin-left: 10px;
  padding: 10px 20px;
  border: none;
  background-color: #A68966;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
}

.send-button:hover {
  background-color: #6E5543;
}
</style>