<script setup lang="ts">
import { ref } from "vue";

const name = ref('');
const age = ref('');
const email = ref('');
const errors = ref<{ [key:string]:string }>({})

function validation() {
  errors.value = {};
  if (!name.value.trim()) errors.value.name = 'please enter name';
  if (!age.value || isNaN(Number(age.value))) errors.value.age = "please enter valid number for age";
  if (!/^\S+@\S+\.\S+$/.test(email.value)) errors.value.email = "please enter a valid email address";
  return Object.keys(errors.value).length == 0;
}

function reset(){
  name.value = ''
  age.value = ''
  email.value = ''
  errors.value = {}
}

function submit() {
  if (validation()) {
    alert(`information sent ${name.value} ${email.value} ${age.value}`);
    reset();
  }
}
</script>

<template>
  <label>
    name : <input v-model="name" :class="{ error: !!errors.name }"/>
    <span v-if="errors.name" style="color: red">{{ errors.name }}</span>
  </label> <br>
  <label>
    age : <input v-model="age" :class="{ error: !!errors.age }"/>
    <span v-if="errors.age" style="color:red">{{ errors.age }}</span>
  </label><br>
  <label>
    email : <input v-model="email" :class="{ error: !!errors.email }"/>
    <span v-if="errors.email" style="color: red">{{ errors.email }}</span>
  </label>
  <button @click="submit">submit</button>
</template>

<style scoped>
.error {
  border: 1px solid red;
}
</style>
