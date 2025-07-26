<script setup>
import Parent from "./components/Parent.vue";
import Child from "./components/Child.vue";
import UserForm from "./views/UserForm.vue";
import Skill from "./views/Skill.vue";
import SkillTwo from "./views/SkillTwo.vue";
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div>
    <ul>
      <li><RouterLink to="/skill">Skill</RouterLink></li>
      <li><RouterLink to="/skilltwo">Skill Two</RouterLink></li>
    </ul>
    <RouterView />
  </div>
</template>

<style scoped>

</style>
