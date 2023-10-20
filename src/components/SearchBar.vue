<script setup>
import { usePokemonStore } from '@/stores/pokemon'
import { ref } from 'vue'

const search = ref('')
const store = usePokemonStore()

const { searchPokemonByName } = store

const searchPokemon = async () => {
  store.currentPage = 1
  await searchPokemonByName(search.value)
}

const reset = () => {
  search.value = ''
  store.getAllPokemons()
}
</script>

<template>
  <div class="mb-4 relative">
    <button class="absolute right-0 flex h-full items-center pr-2" type="button" @click="reset">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-4 h-4 text-slate-500"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    <label for="searchBar" class="sr-only">SearchBar</label>
    <input
      @keyup="searchPokemon"
      v-model="search"
      type="text"
      id="searchBar"
      name="searchBar"
      placeholder="Search Pokemon by name"
      class="w-full border border-1 rounded-md shadow-sm p-2"
    />
  </div>
</template>
