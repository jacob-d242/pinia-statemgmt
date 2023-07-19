<template>
  <div class="flex justify-center items-center bg-gray-200 h-screen">
    <div class="max-w-lg bg-white border border-gray-300 rounded-lg p-4">
      <h3 class="mb-4">Manage State with Pinia</h3>
      <div class="flex mb-3 space-x-4">
        <TaskForm />
      </div>
      <div class="flex space-x-4">
        <button class="border border-gray-300 rounded-lg px-4 py-2 bg-gray-200" @click="filter = 'all'">All</button>
        <button class="border border-gray-300 rounded-lg px-4 py-2 bg-gray-200" @click="filter = 'favs'">Favourite</button>
      </div>


      <div v-if="filter === 'all'">
        <p class="justify-items-center">All Tasks {{taskStore.totalCount}} </p>
        <div v-for="task in taskStore.tasks"  class="mb-4">
          <TaskCard :task="task" />
        </div>
      </div>

      <div  v-if="filter === 'favs'">
        <p>Favourite Tasks {{taskStore.favCount}}</p>
        <div v-for="task in taskStore.favs"  class="mb-4">
          <TaskCard :task="task" />
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import {usetaskStore} from "@/stores/TaskStore";
import TaskCard from "@/components/TaskCard.vue";
import TaskForm from "./components/TaskForm.vue";
import {ref} from 'vue'
export  default {
  components: {TaskCard,TaskForm},
  setup(){
   const taskStore = usetaskStore()
    let filter = ref('all')
    return{taskStore,filter}
  }
}
</script>