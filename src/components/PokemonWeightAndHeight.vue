<script setup>
import { computed } from 'vue'
import CardComponent from './CardComponent.vue'

const props = defineProps({
  height: {
    required: true
  },
  weight: {
    required: true
  }
})

const formattedHeight = computed(() => {
  return `${props.height / 10} m`
})

const formattedWeight = computed(() => {
  return `${props.weight / 10} kg`
})
</script>

<template>
  <CardComponent class="pokemon-weight-and-height">
    <div class="flex justify-center gap-8">
      <div class="flex flex-col items-center justify-center">
        <h2 class="text-xl font-semibold">Height</h2>
        <p>{{ formattedHeight }}</p>
      </div>
      <div class="flex flex-col items-center justify-center">
        <h2 class="text-xl font-semibold">Weight</h2>
        <p>{{ formattedWeight }}</p>
      </div>
    </div>
  </CardComponent>
</template>
