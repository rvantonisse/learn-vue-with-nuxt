<template>
  <main>
    <h1>{{ film.title }}</h1>
    <p>{{ film.opening_crawl }}</p>
  </main>
</template>

<script>
  export default {
    async asyncData({ $http }) {
      const film = await $http.$get('https://swapi.dev/api/films/1/')

      return { film }
    },
  }
</script>
