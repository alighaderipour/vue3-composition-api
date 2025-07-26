<script setup lang="ts">
interface Props {
  skills: string[]
}
const props = defineProps<Props>()

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