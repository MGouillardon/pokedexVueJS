<script setup>
import { computed } from 'vue'
import { TYPES } from '../config/types'
const props = defineProps({
  pokemon: {
    type: Object,
    required: true
  }
})

const capitalizedPokemonName = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1)
}

const pokemonName = computed(() => {
  return capitalizedPokemonName(props.pokemon.name)
})
</script>

<template>
  <router-link :to="`/pokemon/${pokemon.name}`">
    <div
      class="w-full flex flex-col items-center justify-center border border-1 rounded-md shadow-sm p-4 mb-4"
      :style="{
        backgroundColor: TYPES[props.pokemon.types[0].type.name],
        borderColor: TYPES[props.pokemon.types[0].type.name]
      }"
    >
      <img :src="pokemon.sprites.front_default" :alt="pokemon.name" class="w-24 h-24" />
      <div class="text-sm">#{{ pokemon.id }}</div>
      <div class="font-bold">{{ pokemonName }}</div>
    </div>
  </router-link>
</template>
