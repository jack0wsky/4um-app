<script setup lang="ts">
import { ref } from "vue";
import type { Comment } from "@/types/thread";
import Author from "@/modules/base/Author.vue";
import ReplyIcon from "@/components/icons/ReplyIcon.vue";

const repliesVisible = ref(false);

defineProps<{ reply: Comment }>();
</script>

<template>
  <div class="reply">
    <reply-icon size="1em" />
    <div class="reply__container">
      <div class="reply__content">
        <author
          :nickname="reply.author.nickname"
          :avatar="reply.author.avatar"
        />

        <p>{{ reply.content }}</p>

        <button
          v-if="!!reply.replies.length"
          @click="repliesVisible = !repliesVisible"
        >
          <span v-if="repliesVisible">Hide</span>
          <span v-else>Show</span>
          replies
        </button>
      </div>

      <slot v-if="repliesVisible" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.reply {
  align-items: start;
  border-bottom: 1px solid #dadada;
  display: flex;
  margin-left: 0.75em;
  padding: 0.75em 0;
  width: 100%;

  &__container {
    margin-left: 1.25em;
    width: inherit;
  }

  &__content {
    border-bottom: 1px solid #dadada;
  }
}
</style>
