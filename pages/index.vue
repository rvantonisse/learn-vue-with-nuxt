<template>
  <main>
    <h1>A New Hope</h1>
    <p>{{ content }}</p>
  </main>
</template>

<script>
  export default {
    data() {
      return {
        content: {},
      }
    },
    async fetch() {
      this.content = await fetch(
        'https://swapi.dev/api/films/1/'
      ).then((response) => response.json())
    },
  }
</script>
