<script setup lang="ts">
import { ref } from "vue";

const newSkill = ref('');
const skills = ref<string[]>([]);
const error = ref('');

function addSkill() {
  const skill = newSkill.value.trim();
  error.value = '';
  if (!skill) {
    error.value = "فیلد مهارت نمیتونه خالی باشه";
    return;
  }
  if (skills.value.includes(skill)) {
    error.value = "این مهارت قبلا اضافه شده!";
    return;
  }
  skills.value.push(skill);
  newSkill.value = '';
}

function removeSkill(index: number) {
  skills.value.splice(index, 1);
}
</script>

<template>
  <h3>لیست مهارت‌ها</h3>
  <input
    v-model="newSkill"
    placeholder="یک مهارت وارد کن"
    :class="{ error: !!error }"
    @keydown.enter="addSkill"
  />
  <button @click="addSkill">افزودن مهارت</button>
  <span v-if="error" style="color: red;">{{ error }}</span>
  <ul>
    <li v-for="(skill, idx) in skills" :key="skill">
      {{ skill }}
      <button @click="removeSkill(idx)">حذف</button>
    </li>
  </ul>
  <div v-if="skills.length === 0">هیچ مهارتی ثبت نشده</div>
</template>

<style scoped>
.error {
  border: 1px solid red;
}
ul {
  margin-top: 1em;
}
li {
  margin-bottom: 5px;
}
button {
  margin-right: 10px;
}
</style>
