<script setup>
import {ref, reactive} from "vue";

const  userInfo = reactive({age : 13, name:'ali'})

const newName = ref('')
const newAge = ref(0)
function incAge(){
  userInfo.age++
}

function decAge(){
  userInfo.age--
}
function setAge(){
   if (newAge) userInfo.age = newAge.value
}
function setName(){
  if (newName.value.trim())
  userInfo.name = newName.value
  newName.value=''
}


</script>

<template>
<p>user info :</p>
  <p> age : {{userInfo.age}}</p>
  <p> name : {{userInfo.name}}</p>
  <label for="inputName">new name</label>
  <input type="text" name="inputName" v-model="newName">
  <button type="button" @click="incAge">increase</button>
  <button type="button" @click="decAge">decrease</button>
  <button type="button" @click="setName">submit name</button>
  <label for="inputAge">new age</label>
  <input type="text" name="inputage" v-model="newAge">
  <button type="button" @click="setAge">submit age</button>

</template>

<style scoped>

</style>