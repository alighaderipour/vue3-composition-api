<script setup lang="ts">
import { ref, watch } from 'vue'

const counter = ref<number>(0)
watch(counter, (newVal, oldVal) => {
  console.log(`counter changed from ${oldVal} to ${newVal}`)
})
</script>

<template>
  <div>
    <button type="button" @click="counter++">increase</button>
  </div>
</template>
