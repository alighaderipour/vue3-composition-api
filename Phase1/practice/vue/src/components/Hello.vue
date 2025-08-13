<script setup>
import { ref, onMounted, onBeforeUnmount, onActivated, onDeactivated } from 'vue'

const dataPoints = ref([])
let intervalId = null

function startFetching() {
  intervalId = setInterval(() => {
    dataPoints.value.push(Math.random() * 100)
    console.log('📊 Fetched new point')
  }, 1000)
}

function stopFetching() {
  clearInterval(intervalId)
  intervalId = null
  console.log('⏸ Fetching stopped')
}

// اولین بار که Mount میشه → دیتای اولیه رو بگیر
onMounted(() => {
  startFetching()
})

// اگر صفحه رو بستن (واقعاً Destroy) → همه چی تمیز کن
onBeforeUnmount(() => {
  stopFetching()
})

// کاربر به تب برگشت
onActivated(() => {
  console.log('✅ Activated')
  startFetching()
})

// کاربر از تب رفت
onDeactivated(() => {
  console.log('🚫 Deactivated')
  stopFetching()
})
</script>

<template>
  <div>
    <h3>Live Data Points</h3>
    <ul>
      <li v-for="(p, i) in dataPoints" :key="i">{{ p.toFixed(2) }}</li>
    </ul>
  </div>
</template>
