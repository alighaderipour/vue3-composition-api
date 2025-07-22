<script setup>
import Child from './Child.vue'
import { ref } from 'vue'
const parentNum = ref(10)
</script>

<template>
  <div>
    <h2>Parent</h2>
    <p>عدد والد: {{ parentNum }}</p>
    <Child :num="parentNum" />
  </div>
</template>
