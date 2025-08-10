<script setup lang="ts">
import { ref, reactive } from 'vue'
const user = reactive({
  name: 'ali',
  age: 34,
  skills: [] as string[],
})
const skill = ref<string>('')
function addSkill() {
  if (skill.value.trim()) {
    user.skills.push(skill.value)
    skill.value = ''
  }
}
</script>

<template>
  <label for="addSkill"></label>
  <input name="addSkill" type="text" placeholder="type any skill here" v-model="skill" />
  <button type="button" @click="addSkill">Add Skill</button>
  <ul>
    <li v-for="skill in user.skills">{{ skill }}</li>
  </ul>
</template>
