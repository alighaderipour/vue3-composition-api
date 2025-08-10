<script setup lang="ts">
import { ref, reactive, computed, watch } from 'vue'

// User data
const user = reactive({
  name: 'ali',
  age: 34,
  skills: [] as string[],
})

// New skill input
const skill = ref('')

// Computed property → count skills
const skillsCount = computed(() => user.skills.length)

// Computed property → sorted skills
const sortedSkills = computed(() => [...user.skills].sort((a, b) => a.localeCompare(b)))

// Add skill function
function addSkill() {
  const newSkill = skill.value.trim()
  if (newSkill && !user.skills.includes(newSkill)) {
    user.skills.push(newSkill)
  }
  skill.value = ''
}

// Watch → save skills to localStorage on change
watch(
  () => user.skills,
  (newVal) => {
    localStorage.setItem('skills', JSON.stringify(newVal))
  },
  { deep: true },
)

// Load skills from localStorage on mount
if (localStorage.getItem('skills')) {
  user.skills = JSON.parse(localStorage.getItem('skills')!)
}

function resetData() {
  user.skills = []
}
</script>

<template>
  <input v-model="skill" placeholder="Type any skill here" />
  <button @click="addSkill">Add Skill</button>

  <p>Total skills: {{ skillsCount }}</p>
  <ul>
    <li v-for="(s, i) in sortedSkills" :key="i">
      {{ s }}
    </li>
  </ul>
  <button type="button" @click="resetData" style="background-color: green">Reset</button>
</template>
