<script lang="ts" setup>
defineProps<{ size?: string }>();
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    stroke-width="1.3"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color="#000000"
  >
    <path
      d="M2 10h14c8 0 8 11 0 11M2 10l7-7m-7 7l7 7"
      stroke="#000000"
      stroke-width="1.3"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
</template>
