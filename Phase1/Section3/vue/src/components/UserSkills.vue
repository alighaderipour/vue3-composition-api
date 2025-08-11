<script setup lang="ts">
import { ref, reactive, watch, computed } from 'vue'

const user = reactive({
  name: 'Ali',
  skills: ['JavaScript', 'Python'],
})
const errorMessage = ref<string>('')
const skill = ref<string>('')
function addSkill() {
  const newSkill = skill.value.trim()
  if (!newSkill) {
    errorMessage.value = 'input cannot be empty'
    return
  }
  user.skills.push(newSkill)
}
function resetSkills() {
  user.skills = []
}
const countSkills = computed(() => {
  return user.skills.length
})
watch(
  () => skill.value.trim(),
  (newVal) => {
    if (newVal) {
      errorMessage.value = ''
    }
  },
)
</script>

<template>
  <div>
    {{ countSkills }}
    <ul>
      <li v-for="(sk, i) in user.skills" key="i">
        {{ sk }}
      </li>
    </ul>
    <label for="inputNewSkill">Add Skill : </label>
    <input
      type="text"
      name="inputNewSkill"
      v-model="skill"
      :class="{ errorBorderInput: errorMessage }"
    />
    <p v-if="errorMessage" class="errorMessage">{{ errorMessage }}</p>
    <button type="button" @click="addSkill">Add Skill</button>
    <button type="button" @click="resetSkills">reset Skills</button>
  </div>
</template>

<style>
.errorBorderInput {
  border: solid 1px red;
}
.errorMessage {
  color: red;
  font-size: 1rem;
}
</style>
