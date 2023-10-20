<script setup>
import CardComponent from './CardComponent.vue'

const props = defineProps({
  stats: {
    required: true
  }
})
</script>

<template>
  <CardComponent>
    <div class="flex justify-center gap-8">
      <div class="flex flex-col items-center justify-center">
        <h2 class="text-xl font-semibold mb-4">Stats</h2>
        <ul>
          <li
            class="md:grid md:grid-cols-2 gap-4"
            v-for="stat in props.stats"
            :key="stat.stat.name"
          >
            <div class="flex justify-between">
              <div class="text-gray-600">
                {{ stat.stat.name }}
              </div>
              <div class="font-bold">
                {{ stat.base_stat }}
              </div>
            </div>
            <div class="bg-gray-200 h-5 w-60 relative mt-1 rounded-full">
              <div
                :style="{ width: `${(stat.base_stat / 255) * 100}%` }"
                class="bg-lime-400 h-5 rounded-full"
              ></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </CardComponent>
</template>
