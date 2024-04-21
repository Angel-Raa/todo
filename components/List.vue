<template>
  <section>
    <div v-if="pending">
      <span>pending ...</span>
    </div>
    <ul
      class="divide-y divide-gray-200 px-4"
      v-for="tarea of todos?.data"
      :key="tarea.id"
    >
      <li class="px-4">
        <div class="flex items-center">
          <input
            type="checkbox"
            :id="id"
            v-model="tarea.completed"
            class="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
          />
          <label :for="id" class="ml-3 block text-gray-900">
            <span class="text-lg font-medium">{{ tarea.title }}</span>
          </label>
        </div>
      </li>
    </ul>

    <div v-if="error">
      <span>No a tarea </span>
    </div>
  </section>
</template>

<script lang="ts" setup>
const {
  data: todos,
  error,
  pending,
  refresh,
} = await useFetch("/api/todos", {
  method: "get",
});
const id = useId();
</script>

<style></style>
