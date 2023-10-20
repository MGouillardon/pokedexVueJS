<script setup>
import CardComponent from './CardComponent.vue'
import { TYPES } from '@/config/types'

const props = defineProps({
  types: {
    required: true
  }
})
</script>

<template>
  <CardComponent>
    <div class="flex flex-col items-center justify-center gap-4">
      <h2 class="text-xl font-semibold">Types</h2>
      <ul class="flex gap-4">
        <li
          :style="{
            backgroundColor: TYPES[type.type.name],
            borderColor: TYPES[type.type.name]
          }"
          class="px-2 py-1 rounded-md text-white"
          v-for="type in props.types"
          :key="type.type.name"
        >
          {{ type.type.name }}
        </li>
      </ul>
    </div>
  </CardComponent>
</template>
