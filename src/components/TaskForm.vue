<template>
    <div>
        <h1>Create a new task below</h1>
        <form @submit.prevent="handelAddTask">
        <input 
         class="border border-gray-300 rounded-lg px-4 py-2" 
         type="text" 
         placeholder="Enter task title"
         v-model="newTask"
          />
        <button 
        class="border border-gray-300 rounded-lg px-4 py-2 bg-blue-500 text-white"
         type="submit"
         >Add Task</button>
      </form>
    </div>
</template>


<script>
import {ref} from 'vue'
import {usetaskStore} from '../stores/TaskStore'

export default {
    setup() {
        const taskStore = usetaskStore()
        const newTask = ref('')
        const handelAddTask = ()=>{
            if(newTask.value.length > 0){
                taskStore.addTask({
                    title: newTask.value,
                    isFav : false,
                    id : Math.floor(Math.random() * 10000)
                })
                newTask.value= ''
            }

        }
        return{handelAddTask,newTask}
    },
}
</script>
