<script setup lang="ts">
import { ref } from 'vue'
const counter = ref(0)

function increment() {
  counter.value++
}

function decrement() {
  counter.value--
}
</script>

<template>
  <div>
    <p>{{ counter }}</p>
    <button type="button" @click="increment">increment</button>
    <button type="button" @click="decrement">decrement</button>
  </div>
</template>

<style scoped></style>
