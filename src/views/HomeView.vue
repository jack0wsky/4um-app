<script setup lang="ts">
import ThreadsList from "@/modules/threads/ThreadsList.vue";
import { useThreadsStore } from "@/stores/threads";

const store = useThreadsStore();
</script>

<template>
  <div class="main-wrapper">
    <section class="threads">
      <input
        type="search"
        class="threads__search-input"
        @input="store.updateSearchPhrase($event.target.value)"
        placeholder="Search threads..."
      />
      <ThreadsList />
    </section>
  </div>
</template>

<style scoped lang="scss">
.main-wrapper {
  align-items: center;
  display: flex;
  flex-flow: column;
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
}

.threads {
  display: flex;
  flex-flow: column;
  width: 100%;

  &__search-input {
    border: 1px solid #ddd;
    border-radius: 0.75em;
    font-size: 1.2em;
    padding: 0.8em 1.2em;
    margin: 20px 0;
    width: 50%;
  }
}
</style>
