<template>
  <form class="w-full max-w-sm mx-auto py-2" @submit.prevent="addTodo">
    <div class="flex items-center border-b-2 border-teal-500 py-2">
      <input
        required
        type="text"
        v-model="input"
        class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        placeholder="Add"
      />
      <button
      type="submit"
        class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
      >
        Add
      </button>
    </div>
  </form>
</template>

<script lang="ts" setup>
const input = ref("");
const completed = ref(false);
const addTodo = async () => {
  const res = await $fetch('/api/todos', {
    method:'POST',
    body:{
      title:input.value,
      completed:completed.value
    }
  })
  input.value  = ""
};
</script>
