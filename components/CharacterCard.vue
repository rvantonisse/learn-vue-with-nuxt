<template>
  <base-card>
    <template #header>
      <h2>{{ character.name }}</h2>
    </template>
    <template #default>
      <base-character-image
        :skin-color="character.skin_color"
        :eye-color="character.eye_color"
        :height="character.height"
      ></base-character-image>
      <dl>
        <dt>Skin</dt>
        <dd>{{ character.skin_color }}</dd>

        <dt>Eye color</dt>
        <dd>{{ character.eye_color }}</dd>

        <dt>Heigth</dt>
        <dd>{{ character.height }}</dd>
      </dl>
      <nuxt-link :to="`/characters/${character.id}/`"
        >Show page of {{ character.name }}</nuxt-link
      >
    </template>
  </base-card>
</template>

<script>
  export default {
    props: {
      characterData: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        character: Object.assign({}, this.characterData, {
          id: this.getResourceId(this.characterData),
        }),
      }
    },
    methods: {
      getResourceId: function getResourceId(resource) {
        const url = new URL(resource.url)
        const id = url.pathname.replace(/\/$/g, '').split('/').slice(-1)

        return id
      },
    },
  }
</script>
