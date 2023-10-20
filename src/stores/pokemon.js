import { defineStore } from 'pinia'
import { fetchAllPokemons, fetchPokemonById } from '@/api/pokemon'
import { TYPES } from '@/config/types'
import { ref, computed } from 'vue'

export const usePokemonStore = defineStore('pokemonStore', () => {
  const pokemons = ref([])
  const pokemon = ref(null)
  const pokemons_types = ref([])
  const currentPage = ref(1)
  const pokemonsPerPage = ref(20)
  const loading = ref(false)

  const getAllPokemons = async () => {
    loading.value = true
    const data = await fetchAllPokemons()
    pokemons.value = data
    loading.value = false
  }

  const getPokemonById = async (id) => {
    const data = await fetchPokemonById(id)
    pokemon.value = data
  }

  const searchPokemonByName = async (name) => {
    loading.value = true
    const data = await fetchAllPokemons()
    pokemons.value = data.filter((pokemon) => pokemon.name.includes(name))
    loading.value = false
  }

  const getAllPokemonsTypes = computed(() => {
    return (pokemons_types.value = Object.keys(TYPES))
  })

  const getPokemonByType = async (type) => {
    const data = await fetchAllPokemons()
    pokemons.value = data.filter((pokemon) => {
      return pokemon.types.some((t) => t.type.name === type)
    })
  }

  const getPokemonsByPage = computed(() => {
    const start = (currentPage.value - 1) * pokemonsPerPage.value
    const end = start + pokemonsPerPage.value
    return pokemons.value.slice(start, end)
  })

  return {
    pokemon,
    pokemons,
    pokemons_types,
    currentPage,
    pokemonsPerPage,
    loading,
    getAllPokemons,
    getPokemonById,
    searchPokemonByName,
    getAllPokemonsTypes,
    getPokemonByType,
    getPokemonsByPage
  }
})
