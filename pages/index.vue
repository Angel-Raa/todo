<template>
  <main
    class="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16"
  >
    <div class="px-4 py-2">
      <h1 class="text-gray-800 font-bold text-2xl uppercase">To-Do List</h1>
    </div>
    <Input />
    <div v-if="pending">
      <span>Cargando......</span>
    </div>
    <div v-if="error">
      <span>Error</span>
    </div>
    <List
      v-for="todo of todos?.data"
      :key="todo.id"
      :title="todo.title"
      :completed="todo.completed"
    />
  </main>
</template>

<script lang="ts" setup>
const { data: todos, error, pending } = useFetch("/api/todos");
</script>

<style></style>
