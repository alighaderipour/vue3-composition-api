<template>
  <h1>skills list</h1>
  <input v-model="newSkill" placeholder="add skill here" :class="{error}"/>
  <button @click="addSkill">add new skill</button>
  <p style="color: red" v-if="error">{{error}}</p>
  <ul>
    <li v-for="(skill, index) in skills">{{skill}}
    <button @click="deleteSkill(index)">delete</button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import {ref} from "vue";

const newSkill = ref('')
const skills = ref<string[]>([])
const error = ref('')

function addSkill(){
  error.value=''
  if (!newSkill.value.trim()) {
    error.value= 'please enter a skill'
    newSkill.value = ''
    return
  }
  if (skills.value.includes(newSkill.value.trim()))
  {error.value = 'skill already exists'
    newSkill.value = ''
    return;}


  skills.value.push((newSkill.value.trim()))
  newSkill.value =''
}

function deleteSkill(index){
  skills.value.splice(index, 1)

}
</script>

<style scoped>
.error{
  border: solid red 1px
}
</style>