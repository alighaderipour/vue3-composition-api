<script setup lang="ts">
import { PropType, defineProps, ref} from "vue";
const props = defineProps({
  skills: {
    type: Array as PropType<string[]>,
    default: () => []
  }
})
const newSkill = ref('')
const customError = ref('')


const emit = defineEmits<{
  (e: 'add-skill', value: string): void;
  (e: 'remove-skill', index: number): void;
}>();


function handleAddSkill(){
  if (!newSkill.value.trim()){
    customError.value = 'please enter a skill'
    return
  }
  if (props.skills.includes(newSkill.value.trim())){
    customError.value = 'duplicate, the skill is already in the list'
    newSkill.value = ''
    return
  }
  emit('add-skill', newSkill.value.trim())
  newSkill.value = ''
  customError.value =''
}
function handleRemoveSkill(index){
  emit('remove-skill', index)
  newSkill.value =''
}
</script>

<template>

<input type="text" v-model="newSkill" placeholder="enter a skill"  :class="{ 'borderError': !!customError }">
<button type="button" @click="handleAddSkill">Submit</button>
<ul>
 
  <span v-if="customError"  :class="{ error: !!customError }" >{{ customError }}</span>
  <div>
    <p v-if="props.skills.length === 0">list is empty</p>
    <li v-for="(skill, index) in props.skills" :key="index">
    {{skill}}
    <button type="button" @click="handleRemoveSkill(index)">removeSkill</button>
    </li>
  </div>

</ul>
</template>

<style scoped>
.borderError{
  border : solid red 1px;
}
.error{
  color: red
}

</style>