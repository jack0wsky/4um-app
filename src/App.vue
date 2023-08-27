<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-flow: column;
}
</style>
