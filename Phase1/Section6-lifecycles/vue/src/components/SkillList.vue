<template>
  <div>
    <h2>📋 Skills</h2>

    <input ref="inputRef" v-model="newSkill" placeholder="Add a skill" @keyup.enter="addSkill" />
    <button @click="addSkill">Add</button>

    <ul ref="listRef">
      <li v-for="(skill, i) in skills" :key="skill">
        {{ i + 1 }} - {{ skill }}
        <button @click="removeSkill(i)">x</button>
      </li>
    </ul>

    <p>⏳ Component alive for: {{ timer }}s</p>

    <h3>Hook Execution Log:</h3>
    <ul>
      <li v-for="(log, i) in logs" :key="i">{{ log }}</li>
    </ul>

    <button @click="triggerError">Trigger Error</button>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  reactive,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onActivated,
  onDeactivated,
  onErrorCaptured,
} from 'vue'

// --- State ---
const skills = reactive<string[]>([])
const newSkill = ref('')
const inputRef = ref<HTMLInputElement | null>(null)
const listRef = ref<HTMLUListElement | null>(null)
const timer = ref(0)
const intervalId = ref<number | null>(null)
const logs = reactive<string[]>([])
const lastScroll = ref(0)

// --- Utils ---
function log(msg: string) {
  const timestamp = new Date().toLocaleTimeString()
  logs.push(`[${timestamp}] ${msg}`)
}

// --- Lifecycle Hooks ---

onBeforeMount(() => {
  log('onBeforeMount → reading from localStorage')
  const saved = localStorage.getItem('skills')
  if (saved) {
    skills.push(...JSON.parse(saved))
  }
})

onMounted(() => {
  log('onMounted → focusing input & starting timer')
  inputRef.value?.focus()
  intervalId.value = window.setInterval(() => timer.value++, 1000)

  window.addEventListener('keydown', handleKey)
})

onBeforeUpdate(() => {
  log('onBeforeUpdate → saving scroll position')
  lastScroll.value = listRef.value?.scrollTop || 0
})

onUpdated(() => {
  log('onUpdated → restoring scroll position & syncing localStorage')
  if (listRef.value) {
    listRef.value.scrollTop = lastScroll.value
  }
  localStorage.setItem('skills', JSON.stringify(skills))
})

onBeforeUnmount(() => {
  log('onBeforeUnmount → cleaning timer & events')
  if (intervalId.value) clearInterval(intervalId.value)
  window.removeEventListener('keydown', handleKey)
})

onUnmounted(() => {
  log('onUnmounted → component destroyed from DOM')
})

onActivated(() => {
  log('onActivated → resume timer')
  intervalId.value = window.setInterval(() => timer.value++, 1000)
})

onDeactivated(() => {
  log('onDeactivated → pause timer')
  if (intervalId.value) clearInterval(intervalId.value)
})

onErrorCaptured((err, instance, info) => {
  log(`onErrorCaptured → ${err} | Info: ${info}`)
  return false
})

// --- Methods ---
function addSkill() {
  if (!newSkill.value) return
  skills.push(newSkill.value)
  newSkill.value = ''
}

function removeSkill(index: number) {
  skills.splice(index, 1)
}

function handleKey(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    log('ESC pressed → clearing skills')
    skills.splice(0)
  }
}

function triggerError() {
  throw new Error('This is a simulated error!')
}
</script>

<style scoped>
input {
  padding: 5px;
  margin-right: 5px;
}
ul {
  max-height: 100px;
  overflow: auto;
  border: 1px solid #ccc;
  padding: 5px;
  margin-top: 10px;
}
li {
  display: flex;
  justify-content: space-between;
}
</style>
