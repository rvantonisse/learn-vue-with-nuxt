<template>
  <div>
    <header>
      <nuxt-link to="/">Star Wars: A&nbsp;New Hope</nuxt-link>
    </header>

    <div id="content">
      <Nuxt />
    </div>
  </div>
</template>

<style>
  #content {
    @apply p-4;
  }

  header {
    @apply p-4 text-6xl;
  }
</style>
