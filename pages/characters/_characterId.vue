<template>
  <base-page :page-title="character.name">
    <base-character-image
      :skin-color="character.skin_color"
      :eye-color="character.eye_color"
      :height="character.height"
    ></base-character-image>
  </base-page>
</template>

<script>
  export default {
    async asyncData({ params, $http }) {
      const id = params.characterId
      const character = await $http.$get(`https://swapi.dev/api/people/${id}`)

      return { character }
    },
  }
</script>
