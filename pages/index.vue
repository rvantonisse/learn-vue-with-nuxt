<template>
  <base-page :page-title="fetchedData.title">
    <p>{{ fetchedData.introduction }}</p>

    <article class="mb-16">
      <h2>Characters</h2>
      <p>The characters seen in Star Wars: A New Hope.</p>
      <ul class="flex flex-row flex-wrap">
        <li
          v-for="character in fetchedData.characters"
          :key="character.url"
          class="flex-1 m-2 p-0 min-w-20rem list-none"
        >
          <character-card :character-data="character"></character-card>
        </li>
      </ul>
      <nuxt-link to="/characters">See all characters</nuxt-link>
    </article>

    <article>
      <h2>Planets</h2>
      <p>Planets visited:</p>
      <ul>
        <li v-for="planet in fetchedData.planets" :key="planet.url">
          {{ planet.name }}
        </li>
      </ul>
    </article>

    <article>
      <h2>Starships</h2>
      <p>Starships seen:</p>
      <ul>
        <li v-for="starship in fetchedData.starships" :key="starship.url">
          {{ starship.name }}
        </li>
      </ul>
    </article>
  </base-page>
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
