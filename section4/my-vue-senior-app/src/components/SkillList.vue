<script setup lang="ts">
import { defineProps} from "vue";
const props = defineProps({
  skills: {
    default: () => []
  }
})

</script>

<template>
<ul>
  <div>
    <p v-if="props.skills.length === 0">list is empty</p>
    <li v-for="(skill, index) in props.skills" :key="index">
    {{skill}}
    </li>
  </div>

</ul>
</template>

<style scoped>

</style>