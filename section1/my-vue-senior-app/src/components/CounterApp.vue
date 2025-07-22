<script setup lang="ts">
import {ref} from "vue";

const counter = ref(0);

function inc(){
  counter.value++
}
function dec(){
  counter.value--
}
</script>

<template>
  <p>counter : {{counter}}</p>
  <button type="button" @click="inc">increase</button>
  <button type="button" @click="dec">decrease</button>
</template>

<style scoped>

</style>