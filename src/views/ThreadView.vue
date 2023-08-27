<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router";
import { threads } from "@/database/threads";
import CommentsSection from "@/modules/thread-details/CommentsSection.vue";

const route = useRoute();

const thread = threads.find(({ id }) => id === route.params.threadId);
</script>

<template>
  <div v-if="!thread">Thread does not exist</div>

  <section class="wrapper" v-else>
    <div class="thread">
      <RouterLink to="/">Back to list</RouterLink>

      <div class="thread-content">
        <div class="thread-content__user">
          <div class="thread-content__user-avatar">
            <img :src="thread.author.avatar" alt="" />
          </div>
          <p class="thread-content__user-name">{{ thread.author.nickname }}</p>
        </div>
        <h1 class="thread-content__title">{{ thread.title }}</h1>
        <p class="thread-content__description">{{ thread.description }}</p>
      </div>

      <comments-section :comments="thread.comments" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.wrapper {
  background-color: #f1f1f1;
  height: 100vh;
  padding: 1.8em auto 0;
  width: 100%;
}

.thread {
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
}

.thread-content {
  display: flex;
  flex-flow: column;
  margin: 2.5em 0;

  &__user {
    align-items: center;
    display: flex;
    column-gap: 1em;
  }

  &__user-avatar {
    border-radius: 50%;
    height: 4em;
    overflow: hidden;
    width: 4em;

    img {
      height: 100%;
      object-fit: cover;
      width: 100%;
    }
  }

  &__user-name {
    font-size: 1.4em;
  }

  &__title {
    font-size: 2.5em;
  }

  &__description {
    font-size: 1.2em;
  }
}
</style>
