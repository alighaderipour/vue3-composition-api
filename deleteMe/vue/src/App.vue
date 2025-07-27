<script setup lang="ts">
import { ref } from 'vue'
import AddSkills from '@/components/AddSkills.vue'
const skills = ref<string[]>([])
</script>

<template>
  <add-skills v-model="skills" />
  <div v-if="skills.length">
    <ul>
      <li v-for="(skill, index) in skills">{{ skill }}</li>
    </ul>
  </div>
  <div v-else :class="{ 'no-skill': skills.length === 0 }">list is empty</div>
</template>

<style scoped>
.noSkill {
  color: red;
}
</style>
