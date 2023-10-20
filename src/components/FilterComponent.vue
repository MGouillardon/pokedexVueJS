<script setup>
import { usePokemonStore } from '@/stores/pokemon'
import { ref } from 'vue'

const store = usePokemonStore()
const { getAllPokemonsTypes } = store

const selectedType = ref(null)

const filterPokemons = async () => {
  store.currentPage = 1
  store.getPokemonByType(selectedType.value)
}

const reset = () => {
  store.currentPage = 1
  store.getAllPokemons()
  selectedType.value = null
}
</script>

<template>
  <div class="mb-4 border rounded-md shadow-sm p-4 bg-white">
    <ul class="grid grid-cols-2 md:grid-cols-4 mb-4">
      <li
        class="flex items-center justify-center gap-2 space-x-2"
        v-for="(type, index) in getAllPokemonsTypes"
        :key="index"
      >
        <div class="flex w-24 justify-between items-center gap-4">
          <label class="text-sm font-medium text-gray-900 ml-2 block" :for="type">{{ type }}</label>
          <input
            type="radio"
            class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
            :id="type"
            :value="type"
            v-model="selectedType"
            @change="filterPokemons"
          />
        </div>
      </li>
    </ul>
    <div class="w-full flex justify-center">
      <button
        @click="reset()"
        class="inline-flex items-center px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-medium rounded-md"
      >
        Reset
      </button>
    </div>
  </div>
</template>
