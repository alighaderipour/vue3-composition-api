<script setup lang="ts">
import SkillList from "./components/SkillList.vue";
import {ref} from "vue";

const skills = ref<string[]>([])
skills.value.push('test')
</script>

<template>


<skill-list :skills="skills"/>
</template>

<style scoped>

</style>
