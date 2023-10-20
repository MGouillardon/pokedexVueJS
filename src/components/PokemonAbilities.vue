<script setup>
import CardComponent from './CardComponent.vue'

const props = defineProps({
  abilities: {
    required: true
  }
})
</script>

<template>
  <CardComponent>
    <div class="flex justify-center gap-8">
      <div class="flex flex-col items-center justify-center">
        <h2 class="text-xl font-semibold">Abilities</h2>
        <ul class="flex space-x-8">
          <li v-for="ability in props.abilities" :key="ability.ability.name">
            {{ ability.ability.name }}
          </li>
        </ul>
      </div>
    </div>
  </CardComponent>
</template>
