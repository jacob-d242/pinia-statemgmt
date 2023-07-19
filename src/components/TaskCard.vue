<template>
  <div class="flex items-center space-x-4 border border-gray-300 rounded-lg p-4">
    <h3 class="mr-2">{{ task.title }}</h3>
    <div class="flex">
      <button @click="taskStore.toggleFav(task.id)"
        :class="{
          'bg-pink-500 text-white': task.isFav,
          'text-black': !task.isFav,
          'px-3 py-2 rounded-lg hover:bg-pink-600': !task.isFav,
          'px-3 py-2 rounded-lg': task.isFav
        }"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-5 w-5">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4C6.47 4 2 8.5 2 13C2 17.42 6.58 22 12 22C17.42 22 22 17.42 22 13C22 8.5 17.53 4 12 4Z"></path>
        </svg>
      </button>
      <button @click="taskStore.deleteTask(task.id)" class="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-5 w-5">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6L5 6L6 6L8 6L9 6L11 6L12 6L14 6L15 6L17 6L18 6L20 6L21 6L21 8L20 8L20 18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20L6 20C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18L4 8L3 8L3 6ZM6 8L18 8L18 18L6 18L6 8ZM9 8L9 15M15 8L15 15"></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import {usetaskStore} from '../stores/TaskStore.js'
export default {
  props: ['task'],
  setup(){
      const taskStore = usetaskStore()
      return{taskStore}
  }

};
</script>
