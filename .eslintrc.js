module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    /**
     * Order like template > style > script
     * A readable, logical order;
     * 1. how is it build,
     * 2. how does it look,
     * 3. what does it do.
     * @type {Array}
     */
    'vue/component-tags-order': [
      'error',
      {
        order: ['template', 'style', 'script'],
      },
    ],
  },
}
