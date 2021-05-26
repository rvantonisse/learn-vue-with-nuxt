<template>
  <base-page page-title="Characters seen in “Star Wars: A New Hope”">
    <p>
      All {{ fetchedData.characters.length }} characters present in “Star Wars:
      A New Hope”!
    </p>
    <ul>
      <li v-for="character in fetchedData.characters" :key="character.url">
        <character-card :character-data="character"></character-card>
      </li>
    </ul>
  </base-page>
</template>

<script>
  export default {
    // Getting all character data from the film
    async asyncData({ $http }) {
      const characters = await $http
        .$get('https://swapi.dev/api/films/1/')
        .then((film) => {
          // Re-use the map code snippet from index page
          // to get all (available) film character data
          const promisedCharacters = film.characters.map((resourceUrl) =>
            $http
              .$get(resourceUrl)
              .then((result) => result)
              // API might break, catch it
              .catch(() => {
                return null
              })
          )

          // 😂
          return Promise.all(promisedCharacters)
        })

      return {
        fetchedData: {
          characters,
        },
      }
    },
  }
</script>
