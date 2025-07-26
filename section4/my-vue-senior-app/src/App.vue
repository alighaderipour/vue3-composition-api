<script setup lang="ts">
import SkillList from "./components/SkillList.vue";
import {ref} from "vue";

const skills = ref<string[]>([])

</script>

<template>


<skill-list :skills="skills"/>
</template>

<style scoped>

</style>
