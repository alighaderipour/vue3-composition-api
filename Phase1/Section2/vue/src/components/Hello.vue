<template>
  <div>
    <label for="n1">number 1 : </label>
    <input name="n1" type="number" placeholder="type a number here" v-model="number1" />
    <br />
    <label for="n1">number 2 : </label>
    <input name="n2" type="number" placeholder="type a number here" v-model="number2" />
    <br />
    <label for="sum">sum : </label>
    <p>{{ sumTwoNumbers }}</p>
    <label for="product">sum : </label>
    <p>{{ productTwoNumbers }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const number1 = ref<string>('')
const number2 = ref<string>('')

const sumTwoNumbers = computed(() => {
  const n1 = Number(number1.value) || 0
  const n2 = Number(number2.value) || 0
  return n1 + n2
})

const productTwoNumbers = computed(() => {
  const n1 = Number(number1.value) || 0
  const n2 = Number(number2.value) || 0
  return n1 * n2
})
</script>

<style scoped></style>
