<script setup>
const props = defineProps({
  currentPage: Number,
  pokemonsPerPage: Number,
  totalPages: Number,
  totalPokemons: Number
})

const emit = defineEmits(['update:currentPage'])

const nextPage = () => {
  if (props.currentPage < props.totalPages) {
    emit('update:currentPage', props.currentPage + 1)
  }
}

const prevPage = () => {
  if (props.currentPage > 1) {
    emit('update:currentPage', props.currentPage - 1)
  }
}
</script>

<template>
  <div class="flex items-center justify-between pb-4">
    <button
      class="inline-flex items-center px-4 py-2 bg-white hover:bg-black hover:text-white transition text-black-800 text-xs font-medium rounded-md shadow-md"
      :class="{ 'cursor-not-allowed': props.currentPage === 1 }"
      @click="prevPage"
      :disabled="props.currentPage === 1"
    >
      Previous
    </button>
    <div v-if="props.totalPages > 0">Page {{ props.currentPage }} of {{ props.totalPages }}</div>
    <div v-else>Page 1 of 1</div>
    <button
      class="inline-flex items-center px-4 py-2 bg-white hover:bg-black hover:text-white transition text-black-800 text-xs font-medium rounded-md shadow-md"
      :class="{
        'cursor-not-allowed': props.currentPage * props.pokemonsPerPage >= props.totalPokemons
      }"
      @click="nextPage"
      :disabled="props.currentPage * props.pokemonsPerPage >= props.totalPokemons"
    >
      Next
    </button>
  </div>
</template>
