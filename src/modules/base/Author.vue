<script setup lang="ts">
defineProps<{ nickname: string; avatar?: string }>();
</script>

<template>
  <div class="author-wrapper">
    <div class="author-wrapper__image">
      <img :src="avatar" :alt="`${nickname}'s avatar`" />
    </div>
    <p>{{ nickname }}</p>
  </div>
</template>

<style scoped lang="scss">
.author-wrapper {
  align-items: center;
  display: flex;
  justify-content: flex-start;
  column-gap: 12px;

  &__image {
    background-color: #2c3e50;
    border-radius: 100%;
    height: 44px;
    overflow: hidden;
    width: 44px;

    img {
      height: 100%;
      object-fit: cover;
      width: 100%;
    }
  }
}
</style>
