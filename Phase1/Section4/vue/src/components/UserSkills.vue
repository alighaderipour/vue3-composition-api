<script setup lang="ts">
import { ref, reactive, watch, computed } from 'vue'

const user = reactive({
  name: 'ali',
  age: 34,
  skills: ['python', 'hs', 'rust', 'c'],
})

const skill = ref<string>('')
const errorMessage = ref<string>('')

function addSkill() {
  const newSkill = skill.value.trim()
  if (!newSkill) {
    errorMessage.value = 'please fill the field'
    return
  }
  user.skills.push(newSkill)
  skill.value = ''
}

function resetSkill() {
  user.skills.splice(0)
}
const skillBiggerThanThreeLetters = computed(() => {
  return user.skills.filter((skill) => skill.length > 3)
})

watch(
  () => user.name,
  (newVal) => {
    if (newVal) {
      console.log(newVal)
    }
  },
)

watch(
  () => user.skills.length,
  (newVal) => {
    if (newVal > 5) {
      alert('you have more than 5 skills, nice!')
    }
  },
)
watch(
  () => skill.value.trim(),
  (newVal) => {
    if (skill.value.trim()) {
      errorMessage.value = ''
    }
  },
)
</script>

<template>
  <div>
    <p>skills bigger than 3 letters :</p>
    <span
      v-if="user.skills.length === 0 || skillBiggerThanThreeLetters.length === 0"
      class="noSkillSpan"
      >there is no skill bigger than 3 letters yet</span
    >
    <ul>
      <li v-for="(skill, i) in skillBiggerThanThreeLetters" :key="i">{{ skill }}</li>
    </ul>
  </div>
  <div>
    <label for="inputAddSkill">add skill : </label>
    <input type="text" name="inputAddSkill" v-model="skill" :class="{ inputError: errorMessage }" />
    <button type="button" @click="addSkill">Add Skill</button>
    <button type="button" @click="resetSkill">Reset Skill</button>
    <p v-if="errorMessage" class="errorSpan">{{ errorMessage }}</p>
  </div>
  <div>
    <ul>
      <li v-for="(sk, i) in user.skills" key="i">{{ sk }}</li>
    </ul>
  </div>
</template>
<style>
.inputError {
  border: solid 1px red;
}
.errorSpan {
  color: red;
  font-size: 1rem;
}
.noSkillSpan {
  color: red;
}
</style>
