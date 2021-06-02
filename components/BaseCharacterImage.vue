<template>
  <div class="container">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      stroke="#000000"
      stroke-width="0"
      :height="height"
      :width="width"
      :style="{
        top: `calc(50% - (${height / 2}px))`,
        left: `calc(50% - (${height / 2}px))`,
      }"
    >
      <g>
        <circle :fill="skinColor" fill-opacity="0.5" cx="16" cy="16" r="16" />
        <circle :fill="eyeColor" cx="12" cy="8" r="2" />
        <circle :fill="eyeColor" cx="20" cy="8" r="2" />
        <path
          fill="none"
          :stroke="skinColor"
          stroke-width="1"
          d="M8,16 A1 1 0 0 0 24,16"
        />
      </g>
    </svg>
  </div>
</template>

<style scoped>
  .container {
    @apply -m-4 relative bg-center bg-no-repeat from-transparent to-gray-500 overflow-hidden;

    /* Did not find any tw radial gradients in docs */
    background-image: radial-gradient(var(--tw-gradient-stops));

    /* Trick to get responsive sizing */
    padding-top: calc(100% * (9 / 16));
  }

  svg {
    @apply absolute;

    /* Calculated centering svg in :style
    * top: `calc(50% - (${height / 2}px))`,
    * left: `calc(50% - (${height / 2}px))`,
    */
  }
</style>

<script>
  export default {
    props: {
      height: {
        type: String,
        default: null,
      },
      width: {
        type: String,
        default: null,
      },
      eyeColor: {
        type: String,
        default: 'currentColor',
      },
      skinColor: {
        type: String,
        default: 'transparent',
      },
    },
  }
</script>
