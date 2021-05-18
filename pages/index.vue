<template>
  <main>
    <h1>{{ film.title }}</h1>
    <p>{{ film.opening_crawl }}</p>

    <h2>Characters</h2>
    <ul>
      <li>Leia</li>
      <li>R2-D2</li>
      <li>C-3PO</li>
    </ul>
    <a href="/characters">See all characters</a>

    <h2>Planets</h2>
    <ul>
      <li>Tatooine</li>
      <li>Alderaan</li>
      <li>Yavin IV</li>
    </ul>
    <a href="/planets">See all planets</a>

    <h2>Starships</h2>
    <ul>
      <li>Death Star</li>
      <li>T-Fighter</li>
      <li>X-wing</li>
    </ul>
    <a href="/starships">See all starships</a>
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
