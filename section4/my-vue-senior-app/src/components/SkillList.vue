<script setup lang="ts">
import { defineProps} from "vue";
const props = defineProps({
  skills: {
    default: () => []   // یعنی اگه پرنت skills نفرسته خودش آرایه خالی میشه
  }
})

</script>

<template>
<ul>
  <li v-for="(skill, index) in props.skills" :key="index">
    {{skill}}
  </li>
</ul>
</template>

<style scoped>

</style>