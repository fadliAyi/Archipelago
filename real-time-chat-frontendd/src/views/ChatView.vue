<template>
  <div class="home">
    <Chat />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Chat from '@/components/Chat.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    Chat
  }
})
</script>
