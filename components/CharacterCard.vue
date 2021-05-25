<template>
  <base-card>
    <template #header>
      <h2>{{ character.name }}</h2>
    </template>
    <template #default>
      <base-character-image
        :skin-color="character.skin_color"
        :eye-color="character.eye_color"
        :height="character.heigth"
        :width="50 + parseInt(character.mass)"
      ></base-character-image>
      <dl>
        <dt>Skin</dt>
        <dd>{{ character.skin_color }}</dd>

        <dt>Eye color</dt>
        <dd>{{ character.eye_color }}</dd>

        <dt>Heigth</dt>
        <dd>{{ character.height }}</dd>
      </dl>
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
        character: this.characterData,
      }
    },
  }
</script>
