<!--ک آرایه todo به شکل reactive نگه دار؛ آیتم اضافه و حذف کن. مقدارش را live نمایش بده.-->
<script setup lang="ts">
import  {ref, reactive} from "vue";

const todo = reactive({id : 1, tasks:['finish books', 'clearn room']})


const newTask = ref('');

function setNewTask(){
  todo.tasks.push(newTask.value)
  newTask.value =''
}
</script>

<template>
  <p>tasks : </p>
 <ul>
   <li v-for="task in todo.tasks" :key="task">{{task}}</li>
 </ul>

  <p>add new tasks here</p>
  <label for="inputTask">add task here</label>
  <input type="text" name="inputTask" placeholder="add new name here" v-model="newTask">
  <button type="button" @click="setNewTask">add task</button>
</template>

<style scoped>

</style>