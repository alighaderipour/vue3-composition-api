<script setup>
import {ref, reactive} from "vue";

const  user_info = reactive({age : 13, name:'ali'})

const newName = ref('')
function incAge(){
  user_info.age++
}

function decAge(){
  user_info.age--
}

function setName(){
  user_info.name = newName.value
  newName.value=''
}


</script>

<template>
<p>user info :</p>
  <p> age : {{user_info.age}}</p>
  <p> name : {{user_info.name}}</p>
  <label for="inputName">new name</label>
  <input type="text" name="inputName" v-model="newName">
  <button type="button" @click="incAge">increase</button>
  <button type="button" @click="decAge">decrease</button>
  <button type="button" @click="setName">submit name</button>

</template>

<style scoped>

</style>