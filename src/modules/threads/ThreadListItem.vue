<script setup lang="ts">
import type { Thread } from "@/types/thread";
import Author from "@/modules/base/Author.vue";
import { RouterLink } from "vue-router";

defineProps<{
  thread: Thread;
}>();
</script>

<template>
  <li class="tread-item">
    <router-link :to="`/${thread.id}`">
      <author
        :nickname="thread.author.nickname"
        :avatar="thread.author.avatar"
      />

      <h2>{{ thread.title }}</h2>
      <p>{{ thread.description }}</p>

      <div class="tread-item__footer">
        <p v-if="thread.comments.length > 1">
          {{ thread.comments.length }} replies
        </p>
        <p v-if="!thread.comments.length">No replies</p>
        <p v-else>{{ thread.comments.length }} reply</p>
      </div>
    </router-link>
  </li>
</template>

<style scoped lang="scss">
.tread-item {
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  flex-flow: column;
  padding: 20px;
  transition: 0.3s ease-in-out;
  width: 100%;

  &:hover {
    transition: 0.3s ease-in-out;
    border: 1px solid #000;
  }
}
</style>
