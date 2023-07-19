<template>
  <div class="flex justify-center items-center bg-gray-200 h-screen">
    <div class="max-w-lg bg-white border border-gray-300 rounded-lg p-4">
      <h3 class="mb-4 text-2xl font-bold">Manage State with Pinia</h3>
      <div class="flex mb-3 space-x-4">
        <TaskForm />
      </div>
      <div class="flex space-x-4">
        <button class="border border-gray-300 rounded-lg px-4 py-2 bg-gray-200" :class="{ 'bg-pink-500 text-white': filter === 'all' }" @click="filter = 'all'">All</button>
        <button class="border border-gray-300 rounded-lg px-4 py-2 bg-gray-200" :class="{ 'bg-pink-500 text-white': filter === 'favs' }" @click="filter = 'favs'">Favourite</button>
      </div>

      <div v-if="taskStore.isLoading" class="flex justify-center mt-4">
        <div class="loader">Loading.....</div>
      </div>

      <div v-if="filter === 'all'">
        <p class="text-center mt-4">All Tasks ({{ taskStore.totalCount }})</p>
        <div v-for="task in taskStore.tasks" :key="task.id" class="mb-4">
          <TaskCard :task="task" />
        </div>
      </div>

      <div v-if="filter === 'favs'">
        <p class="text-center mt-4">Favourite Tasks ({{ taskStore.favCount }})</p>
        <div v-for="task in taskStore.favs" :key="task.id" class="mb-4">
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
   taskStore.getTasks()
    let filter = ref('all')
    return{taskStore,filter}
  }
}
</script>

<style>
.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
  margin: auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
