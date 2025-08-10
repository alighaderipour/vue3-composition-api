<script setup lang="ts">
import { ref } from 'vue'
const counter = ref<number>(0)

function increment(step: number) {
  counter.value += step
}

function decrement() {
  counter.value--
}
</script>

<template>
  <div>
    <p>{{ counter }}</p>
    <button type="button" @click="increment(3)">increment</button>
    <button type="button" @click="decrement">decrement</button>
  </div>
</template>

<style scoped></style>
