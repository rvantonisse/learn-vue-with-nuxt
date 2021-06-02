# Accessibility

Concerning digital accessibility there are a few things that need to be taken into account.

## Nuxt generated Static site

Nuxt creates a static site, but does this with the addition of JavaScript enhancements that boosts loading performance (first render, time to interactive, web vitals stuff etc) also known as hydration. This means Vue still handles things like routing (which is okay) and we need to adress alerting page changes in some sort of way to visually limited users.



## Composability of components

Some components like `CharacterCard` are composed components, build with other created components. HTML elements like headings give structure to a page and using them inside components make these components less re-usable. For example, a Card has a heading and some content below. When always using an h2, you cant use this Card to structure content a level deeper or higher, Card content is fixed at level 2.



## Visual presentation of (API) data

The CharacterImage takes data from one character and should be a visualisation of this. This image can be marked as presentational, with either an empty alt attribute or `role="presentation"` set. But it would be nice if this presentation matches the data / text on screen. Therefore the data should be mapped to values that are supported by the web and make sense to use for the visualisation.



## Page head metadata

Things like title should and description might be set to give a better first idea of what the page is about. We can use the `head()` component method for this.
