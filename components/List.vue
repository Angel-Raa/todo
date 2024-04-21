<template>
  <section>
    <ul class="divide-y divide-gray-200 px-4">
      <li class="px-4">
        <div class="flex items-center">
          <input
            type="checkbox"
            :id="id"
            class="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
          />
          <label :for="id" class="ml-3 block text-gray-900">
           <span class="text-lg font-medium">{{ title }}</span>
          </label>
        </div>
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
const id = useId();
defineProps<{
  title: string;
  completed: boolean;
}>();
</script>

<style></style>
