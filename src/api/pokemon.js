const URL = 'https://pokeapi.co/api/v2/pokemon'

export const fetchAllPokemons = async () => {
  const response = await fetch(`${URL}?limit=151`)
  const { results: pokemons } = await response.json()
  const pokemonData = []
  for (const pokemon of pokemons) {
    const response = await fetch(pokemon.url)
    const data = await response.json()
    pokemonData.push(data)
  }
  return pokemonData
}

export const fetchPokemonById = async (id) => {
  const response = await fetch(`${URL}/${id}`)
  const data = await response.json()
  return data
}


