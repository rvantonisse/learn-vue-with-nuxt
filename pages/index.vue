<template>
  <main>
    <h1>{{ fetchedData.title }}</h1>
    <p>{{ fetchedData.introduction }}</p>

    <h2>Characters</h2>
    <ul>
      <li v-for="character in fetchedData.characters" :key="character.url">
        {{ character.name }}
      </li>
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
      const fetchedData = {}

      // Fetch(?) best Star Wars movie ever
      const film = await $http.$get('https://swapi.dev/api/films/1/')

      // Take first 3 of some resources and
      // promise to turn into objects fetched from SWAPI
      const relatedData = await [
        film.characters,
        film.planets,
        film.starships,
      ].map((list) => {
        const result = list.slice(0, 3).map((resourceUrl) =>
          $http
            .$get(resourceUrl)
            .then((result) => result)
            // API might break, catch it
            .catch(() => {
              return null
            })
        )

        return Promise.all(result)
      })

      // Promise to get the requested data from the pile of promises
      // and wait for it...
      const [characterData, planetData, starshipData] = await Promise.all(
        relatedData
      )

      // Set all requested data to one object
      fetchedData.title = film.title
      fetchedData.introduction = film.opening_crawl
      fetchedData.characters = characterData
      fetchedData.planets = planetData
      fetchedData.starships = starshipData

      return { fetchedData }
    },
  }
</script>
