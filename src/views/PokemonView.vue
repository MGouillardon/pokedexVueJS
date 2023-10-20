<script setup>
import { usePokemonStore } from '@/stores/pokemon'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { onMounted, computed } from 'vue'
import CardComponent from '@/components/CardComponent.vue'
import PokemonWeightAndHeight from '@/components/PokemonWeightAndHeight.vue'
import PokemonAbilities from '@/components/PokemonAbilities.vue'
import PokemonStats from '@/components/PokemonStats.vue'
import PokemonType from '@/components/PokemonType.vue'
import EmptyState from '@/components/EmptyState.vue'

const store = usePokemonStore()
const { getPokemonById } = store
const { pokemon } = storeToRefs(store)
const route = useRoute()
const pokemonId = route.params.id

onMounted(async () => {
  await getPokemonById(pokemonId)
  console.log(pokemon.value)
})

const capitalizedPokemonName = computed(() => {
  return store.pokemon.name.charAt(0).toUpperCase() + store.pokemon.name.slice(1)
})
</script>

<template>
  <div class="mb-4">
    <router-link to="/">← Back to Home</router-link>
  </div>
  <CardComponent v-if="pokemon">
    <div class="flex flex-col gap-4">
      <h1 class="text-2xl font-bold text-center">{{ capitalizedPokemonName }}</h1>
    <div class="text-md text-center">#{{ pokemon.id }}</div>
    <div class="flex justify-center">
      <img :src="pokemon.sprites.front_default" :alt="pokemon.name" class="w-48 h-48" />
    </div>
    <PokemonWeightAndHeight :height="pokemon.height" :weight="pokemon.weight" />
    <PokemonAbilities :abilities="pokemon.abilities" />
    <PokemonStats :stats="pokemon.stats" />
    <PokemonType :types="pokemon.types" />
    </div>
  </CardComponent>
  <EmptyState v-else> Pokémon introuvable </EmptyState>
</template>
