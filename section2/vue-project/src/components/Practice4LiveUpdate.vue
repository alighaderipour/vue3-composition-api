
<script setup>
import { useSharedUserInfo } from '../composables/useSharedUserInfo'
const { userInfo } = useSharedUserInfo()
</script>
<template>
  <div>
    <h3>Live Card</h3>
    <p>Name: {{ userInfo.name }}</p>
    <p>Address: {{ userInfo.address }}</p>
  </div>
</template>
