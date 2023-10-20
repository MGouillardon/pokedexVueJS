<script setup>
import { RouterView } from 'vue-router'
import ContainerLayout from './layouts/ContainerLayout.vue'
</script>

<template>
  <main class="bg-gradient-to-r from-green-100 to-blue-200 min-h-screen">
    <ContainerLayout>
      <RouterView />
    </ContainerLayout>
  </main>
</template>
