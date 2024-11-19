<template>
  <div>
    <div class="chat-window">
      <div class="messages" v-for="(message, index) in messages" :key="index">
        <p>{{ message }}</p>
      </div>
    </div>
    <input v-model="newMessage" @keydown.enter="sendMessage" placeholder="Type a message..." />
  </div>
</template>

<script lang="ts">
import { ref, onMounted, watch } from 'vue'

export default {
  name: 'ChatComponent',
  setup () {
    const newMessage = ref('')
    const messages = ref<string[]>([])
    let socket: WebSocket

    onMounted(() => {
      // Connect to WebSocket server
      socket = new WebSocket('ws://localhost:3000')
      socket.onmessage = (event) => {
        if (event.data instanceof Blob) {
          console.log('Received a Blob:', event.data)
          // If the data is a Blob, you can convert it to a text string (if needed)
          const reader = new FileReader()
          reader.onloadend = () => {
            const textData = reader.result as string
            messages.value.push(textData) // Push the text data into messages
          }
          reader.readAsText(event.data) // Convert the Blob to a string
        } else {
          console.log('Received a string:', event.data)
          messages.value.push(event.data) // If it's a string, display it directly
        }
      }

      socket.onopen = () => {
        console.log('Connected to the WebSocket server')
      }

      socket.onclose = () => {
        console.log('Disconnected from the WebSocket server')
      }
    })

    const sendMessage = () => {
      if (newMessage.value.trim()) {
        socket.send(newMessage.value)
        messages.value.push(newMessage.value)
        newMessage.value = ''
      }
    }

    return {
      newMessage,
      messages,
      sendMessage
    }
  }
}
</script>

<style scoped>
.chat-window {
  width: 100%;
  height: 400px;
  border: 1px solid #ccc;
  overflow-y: scroll;
  padding: 10px;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  margin-top: 10px;
}
</style>
