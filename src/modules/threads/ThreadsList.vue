<script setup lang="ts">
import ThreadListItem from "@/modules/threads/ThreadListItem.vue";
import { useThreadsList } from "@/modules/threads/threads-list";

const { filteredThreads } = useThreadsList();
</script>

<template>
  <ul class="wrapper" v-if="!!filteredThreads.length">
    <thread-list-item
      v-for="thread in filteredThreads"
      :key="thread.id"
      :thread="thread"
    />
  </ul>
  <div v-else>We couldn't find any threads</div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-flow: column;
  row-gap: 12px;
  height: 100%;
  width: 100%;
}
</style>
