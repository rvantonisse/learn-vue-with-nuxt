# Decisions

All steps, decisions made to create this project are described here.

## Create an intitial nuxt app

To dive into Vue development instantly I have chosen to use NuxtJS. The Nuxt app creation wizard sets up a basic developing environment to provide a consistent and qualitative coding experience.

### Walkthrough Nuxt wizard

I have started the Nuxt installer with npm:

```bash
npm init nuxt-app learn-vue-with-nuxt
```

After a while the nuxt wizard starts asking questions, this is how they are answered for this project:

- Project name: learn-vue-with-nuxt
- Programming language: JavaScript
- Package manager: Npm
- UI framework: Tailwind CSS

  Fast way to enable basic styling.

- Nuxt.js modules: None

- Linting tools: ESLint, Prettier, Lint staged files, StyleLint, Commitlint

  Linting tools are a quick win to achieve code consistency and error prevention. Commitlint is something new to me and sounds like something usefull for bigger projects. Worth trying it out.

- Testing framework: Nightwatch

  Testing is a way to tell how your application should work. This helps to understand the code that is written to implement the described functionality and results. Having a cool name and being an end-to-end test framework made me pick Nightwatch.

- Rendering mode: Universal (SSR / SSG)

  Static Site generation to have a viewable website that does not break when API might change in future.

- Deployment target: Static (Static/Jamstack hosting)
- Development tools: None
- Continuous integration: None

  Probably not a good idea for the third party data from SWAPI, but might be something to setup for the non-data part; e.g. changes to components, pages. Something we can look at later.

- Version control system: Git

---

## Make linting Vue work

For a consistent coding experience start thinking about conventions now. Provide a solid setup so we can add or remove rules along the way to make us feel comfortable within the Vue environment.

Rules added to eslint:

```javascript
{
  'vue/component-tags-order': [
    'error',
    {
      order: ['template', 'style', 'script'],
    },
  ]
}
```

and added to prettier:

```javascript
{
  vueIndentScriptAndStyle: true
}
```

---

## Start basic website plan

### Discover the Star Wars API

Before anything is build, discovering the Star Wars API may be helpfull. We can also think of things we might do.

```javascript
const API_BASE_URL = 'https://swapi.dev/api/'
```

Star wars API provides a consistent approach:

- It returns JSON,

- Every resource has 3 endpoints:

  1. `resource/` => all objects
  2. `resource/:id/` => single object
  3. `resource/schema/` => json-schema of single object

- Every single resource object has references to other resources. This makes connecting objects together easier and output json-ld with schema on pages, for SEO purposes if we would like for example.

- Every resource can make use of a search query like `https://swapi.dev/api/people/?search=luke`.

- If we want to create a Duolingo like experience we can learn to speak (?) Wookiee with `https://swapi.dev/api/people/1/?format=wookiee`. We now get Luke's info in Wookiee...

### Pick a topic

To keep it simple, we are picking one SWAPI Resource object to build a website around. I choose the Star Wars movie classic "Star Wars IV: A New Hope". Pages we will create will be things like characters, scenery and similar things to tell the story of this movie.
