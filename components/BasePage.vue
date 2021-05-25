<template>
  <main>
    <h1>{{ pageTitle }}</h1>

    <slot></slot>
  </main>
</template>

<script>
  export default {
    props: {
      pageTitle: {
        type: String,
        required: true,
      },
    },
  }
</script>
