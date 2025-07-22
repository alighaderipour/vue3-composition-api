<script setup lang="ts">
import { useSharedCounter } from '../composables/useSharedCounter';
const counterPrieview = useSharedCounter()
</script>

<template>
<p> {{counterPrieview}}</p>
</template>

<style scoped>

</style>