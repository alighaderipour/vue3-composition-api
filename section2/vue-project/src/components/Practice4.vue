<script setup lang="ts">
import {ref, reactive} from 'vue';
import { useSharedUserInfo } from '../composables/useSharedUserInfo';
const uInfo = useSharedUserInfo()

const newName = ref('')
const newAddress = ref('')

function setNewName(){
  uInfo.userInfo.name = newName.value
}
function setNewAddress(){
  uInfo.userInfo.address = newAddress.value
}
</script>

<template>
   <p>Name: {{ uInfo.userInfo.name }}</p>
<p>Address: {{ uInfo.userInfo.address }}</p>
  <label for="nameInput">new name</label>
  <input type="text" name="nameInput" v-model="newName">
  <button type="button" @click="setNewName">submit new name</button>

  <label for="addressInput">new address</label>
  <input type="text" name="addressInput" v-model="newAddress">
  <button type="button" @click="setNewAddress">submit new name</button>






</template>

<style scoped>

</style>