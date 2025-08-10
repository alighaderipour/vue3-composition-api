<script setup>
import { reactive, watch } from 'vue'

// یک شیء reactive
const user = reactive({
  name: 'Ali',
  skills: ['JavaScript', 'Python'],
})

// ❌ حالت اشتباه: دادن مقدار مستقیم
watch(user.skills, (newVal, oldVal) => {
  console.log('❌ مستقیم: skills تغییر کرد', { newVal, oldVal })
})

// ✅ حالت درست: استفاده از getter function
watch(
  () => user.skills,
  (newVal, oldVal) => {
    console.log('✅ Getter: skills تغییر کرد', { newVal, oldVal })
  },
)

// تست تغییرات
function addSkill() {
  user.skills.push(`Skill ${user.skills.length + 1}`)
}

function replaceArray() {
  user.skills = ['Vue', 'Django'] // تعویض کامل آرایه
}
</script>

<template>
  <div>
    <h2>{{ user.name }}'s Skills</h2>
    <ul>
      <li v-for="(s, i) in user.skills" :key="i">{{ s }}</li>
    </ul>

    <button @click="addSkill">Add Skill</button>
    <button @click="replaceArray">Replace Array</button>
  </div>
</template>
