<template>
  <div class="app">
    <h1>🛠 Hook Visualizer – Skill List Pro</h1>

    <div style="margin-bottom: 1rem">
      <button @click="toggleShow">
        {{ showList ? 'Hide Skill List (Unmount)' : 'Show Skill List (Mount)' }}
      </button>

      <button @click="toggleKeepAlive">
        {{ keepAliveMode ? 'Disable Keep-Alive' : 'Enable Keep-Alive' }}
      </button>
    </div>

    <hr />

    <keep-alive v-if="keepAliveMode">
      <SkillList v-if="showList" />
    </keep-alive>

    <SkillList v-else-if="showList" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SkillList from './components/SkillList.vue'

const showList = ref(true)
const keepAliveMode = ref(true)

function toggleShow() {
  showList.value = !showList.value
}

function toggleKeepAlive() {
  keepAliveMode.value = !keepAliveMode.value
}
</script>

<style>
.app {
  max-width: 800px;
  margin: auto;
  font-family: sans-serif;
}
button {
  margin-right: 8px;
  padding: 6px 12px;
}
</style>
