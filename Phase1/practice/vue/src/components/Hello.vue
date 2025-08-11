<script setup lang="ts">
import { ref, onBeforeUpdate } from 'vue'

const message = ref('Hello')

onBeforeUpdate(() => {
  console.log('🕒 Before update: message قرار است تغییر کند.')
})
</script>

<template>
  <input v-model="message" />
  <p>{{ message }}</p>
</template>
