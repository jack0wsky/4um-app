<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue";
import type { Comment } from "@/types/thread";
import Author from "@/modules/base/Author.vue";
import Reply from "@/modules/thread-details/Reply.vue";

const { comment } = defineProps<{ comment: Comment }>();

const usersInvolved = ref([]);
const allReplies = (replies: Comment[]) => {
  if (replies.length === 0) return;

  return replies.map((reply) => {
    allReplies(reply.replies);
    usersInvolved.value.push(reply.author);
    return;
  });
};

onMounted(() => {
  allReplies(comment.replies);
});

watch(comment, () => {
  allReplies(comment.replies);
});

const uniqueUsersInvolved = computed(() => {
  return Array.from(new Set(usersInvolved.value));
});
</script>

<template>
  <li class="comment">
    <div class="comment__details">
      <author
        :nickname="comment.author.nickname"
        :avatar="comment.author.avatar"
      />
      <p class="comment__reply">{{ comment.content }}</p>
    </div>

    <div class="comment__footer" v-if="!!comment.replies.length">
      <div class="replies">
        <div class="reply-user" v-for="user in uniqueUsersInvolved">
          <img :src="user.avatar" alt="" />
        </div>
      </div>

      <p class="replies-count">{{ comment.replies.length }} replies</p>
    </div>

    <ul class="comment__replies-list">
      <reply v-for="reply in comment.replies" :reply="reply" :key="reply.id">
        <reply
          v-for="comment in reply.replies"
          :reply="comment"
          :key="comment.id"
        >
          <reply
            v-for="nestedReply in comment.replies"
            :reply="nestedReply"
            :key="nestedReply.id"
          />
        </reply>
      </reply>
    </ul>
  </li>
</template>

<style scoped lang="scss">
.comment {
  background-color: #fff;
  border-radius: 0.75em;
  border-bottom: 1px solid #dadada;
  display: flex;
  flex-flow: column;
  padding: 0.75em;

  &__reply {
    margin-top: 0.75em;
  }

  &__footer {
    align-items: center;
    cursor: pointer;
    display: flex;
    margin: 1em 0 0;
    column-gap: 0.75em;
  }

  &__replies-list {
    display: flex;
    flex-flow: column;
    margin: 1em 0 0;
    row-gap: 1em;
  }
}

.replies {
  align-items: center;
  display: flex;
}

.replies-count {
  font-size: 0.875em;
}

.reply-user {
  border-radius: 50%;
  outline: 4px solid #fff;
  height: 2.5em;
  overflow: hidden;
  width: 2.5em;

  &:not(:first-child) {
    margin-left: -8px;
  }

  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
}
</style>
