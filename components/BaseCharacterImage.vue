<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    stroke="#000000"
    stroke-width="0"
    :height="height"
    :width="width"
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
</template>

<script>
  export default {
    props: {
      height: {
        type: Number,
        default: 100,
      },
      width: {
        type: Number,
        default: 100,
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
