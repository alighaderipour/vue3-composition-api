<script setup lang="ts">
import SkillList from "./components/SkillList.vue";
import SkillListNew from "./components/SkillListNew.vue"
import {ref} from "vue";

const skills = ref<string[]>([])

function addSkill(newSkill: string){
    skills.value.push(newSkill)
}
function removeSkill(index){
    skills.value.splice(index, 1)
}
</script>

<template>


<skill-list  :skills="skills" @add-skill="addSkill" @remove-skill="removeSkill"/> 
<hr />
    <p style="color:green" > Custom v-model </p>
<hr />
<skill-list-new v-model="skills"/>
</template>

<style scoped>

</style>
