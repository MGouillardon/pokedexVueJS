<script setup>
import { usePokemonStore } from '@/stores/pokemon'
import { onMounted, computed } from 'vue'
import GridLayout from '@/layouts/GridLayout.vue'
import PokemonCard from '@/components/PokemonCard.vue'
import EmptyState from '@/components/EmptyState.vue'
import SearchBar from '@/components/SearchBar.vue'
import FilterComponent from '@/components/FilterComponent.vue'
import LoaderComponent from '@/components/LoaderComponent.vue'
import PaginationComponent from '@/components/PaginationComponent.vue'

const store = usePokemonStore()
onMounted(async () => {
  await store.getAllPokemons()
})

const totalPages = computed(() => {
  return Math.ceil(store.pokemons.length / store.pokemonsPerPage)
})
</script>

<template>
  <main>
    <SearchBar :pokemons="store.pokemons" />
    <FilterComponent />
    <div v-if="!store.loading">
      <GridLayout v-if="store.pokemons.length">
        <PokemonCard
          v-for="pokemon in store.getPokemonsByPage"
          :key="pokemon.name"
          :pokemon="pokemon"
        />
      </GridLayout>
      <EmptyState v-else> No Pokemons Found </EmptyState>
    </div>
    <div v-else class="my-8 w-full flex justify-center">
      <LoaderComponent />
    </div>
    <PaginationComponent
      :currentPage="store.currentPage"
      :pokemonsPerPage="store.pokemonsPerPage"
      :totalPages="totalPages"
      :totalPokemons="store.pokemons.length"
      @update:currentPage="store.currentPage = $event"
    />
  </main>
</template>
