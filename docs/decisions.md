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


```

---

## Make linting Vue work

For a consistent coding experience start thinking about conventions now. Provide a solid setup so we can add or remove rules along the way to make us feel comfortable within the Vue environment.

---
