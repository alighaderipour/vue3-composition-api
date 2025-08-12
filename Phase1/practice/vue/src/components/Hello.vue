<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const counter = ref(0)
let intervalId = null

onMounted(() => {
  intervalId = setInterval(() => {
    counter.value++
  }, 1000)
  console.log('▶ تایمر شروع شد')
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
  console.log('⏹ تایمر قبل حذف شدن متوقف شد')
})
</script>

<template>
  <p>⏱ شمارنده: {{ counter }}</p>
</template>
