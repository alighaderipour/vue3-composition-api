<script setup>
defineProps({
  num: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div>
    <h3>Child</h3>
    <p>عدد فرستاده شده از والد: {{ num }}</p>
  </div>
</template>
