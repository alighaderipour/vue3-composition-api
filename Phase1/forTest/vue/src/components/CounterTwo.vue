<script setup lang="ts">
import { ref, reactive, watch } from 'vue'

const user = reactive({
  name: 'Ali',
  age: 34,
  skills: ['python', 'javascript'],
})

watch(
  user,
  (newVal, oldVal) => {
    const oldSnapShot = JSON.parse(JSON.stringify(oldVal))
    const newSnapShot = JSON.parse(JSON.stringify(newVal))
    console.log('user changed from', oldSnapShot, 'to', newSnapShot)
  },
  { deep: true },
)

const skill = ref<string>('')
function addSkill() {
  user.skills.push(skill.value)
  skill.value = ''
}
</script>

<template>
  <div>
    <input type="text" placeholder="skill name" v-model="skill" />
    <button type="button" @click="addSkill">Add</button>
  </div>
</template>
