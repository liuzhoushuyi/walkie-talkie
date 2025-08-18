<template>
  <view>
    <group-list />
    <chat-message v-for="msg in messages" :key="msg.id" :message="msg" />
    <voice-button @tap="sendVoice" />
  </view>
</template>

<script>
import GroupList from '@/components/GroupList.vue'
import ChatMessage from '@/components/ChatMessage.vue'
import VoiceButton from '@/components/VoiceButton.vue'

export default {
  components: { GroupList, ChatMessage, VoiceButton },
  data() {
    return {
      messages: []
    }
  },
  methods: {
    sendVoice() {
      // handle voice sending
    }
  }
}
</script>