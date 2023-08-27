<script setup lang="ts">
import type { Comment } from "@/modules/threads";
import CommentListItem from "@/modules/thread-details/CommentListItem.vue";

defineProps<{ comments: Comment[] }>();
</script>

<template>
  <div v-if="!comments.length">
    <h2>There are no comments yet</h2>
    <button>Comment thread</button>
  </div>

  <div class="comments-wrapper" v-else>
    <ul>
      <comment-list-item
        :key="comment.id"
        v-for="comment in comments"
        :comment="comment"
      />
    </ul>
  </div>
</template>

<style scoped lang="scss">
.comments-wrapper {
  border-top: 1px solid #cecece;
  padding: 1em 0;
}
</style>
