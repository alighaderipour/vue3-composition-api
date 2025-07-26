<template>
  <div>
    <input type="text"    v-model="newSkill" placeholder="enter a skill" :class="{'border' : !!customError}" />
    <button type="button" @click="handleAddSkill">submit</button>
    <p v-if="customError" :class="{'errorText':!! customError}">{{ customError }}</p>
    <ul>
        <li v-for="(skill, index) in props.modelValue">{{ skill }} <button @click="handleRemoveSkill(index)">remove</button></li>
    </ul>
    <p v-if="props.modelValue.length === 0" style="color: #888;">No skills yet.</p>
  </div>
</template>

<script setup lang="ts">
import { PropType, defineProps, ref } from 'vue';
const newSkill = ref('')
const customError = ref('')
const props = defineProps({
   modelValue : {
    type : Array as PropType<string[]>,
    default : () =>[]
   }
})
const emit = defineEmits<{
  (e: 'update:modelValue', value: string[]): void ;

}>();

function handleAddSkill(){
  if (!newSkill.value.trim()){
    customError.value = 'please enter a skill'
    return
  }
  if (props.modelValue.includes(newSkill.value.trim())){
    customError.value = 'duplicate, the skill is already in the list'
    newSkill.value = ''
    return
  }
  const clone = [...props.modelValue, newSkill.value.trim()]
  emit('update:modelValue', clone)
  newSkill.value = ''
  customError.value =''
}
function handleRemoveSkill(index: number){
    const clone = [...props.modelValue]
    clone.splice(index, 1)
    emit('update:modelValue', clone)
    newSkill.value =''
}

</script>


<style scoped>
.border{
    border: solid red 1px
}
.errorText{
    color:red
}

</style>
