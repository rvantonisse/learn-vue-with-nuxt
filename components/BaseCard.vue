<template>
  <article>
    <slot name="header"></slot>
    <slot></slot>
  </article>
</template>

<style scoped>
  article {
    @apply p-4 border-2 border-current border-solid rounded shadow-md;
  }
</style>

<script>
  export default {}
</script>
