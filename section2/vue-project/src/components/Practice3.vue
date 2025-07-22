<script setup lang="ts">
import {useSharedCounter} from '../composables/useSharedCounter';
const myCounter = useSharedCounter()

function incMyCounter(){
  myCounter.counter.value++
}
</script>

<template>
  <button @click="incMyCounter">increase</button>

</template>

<style scoped>

</style>