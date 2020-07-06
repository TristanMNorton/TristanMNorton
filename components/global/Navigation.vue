<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__listItem">
        <nuxt-link
          to="/about"
          class="navigation__link"
        >
          About Me
        </nuxt-link>
      </li>
      <li class="navigation__listItem">
        <nuxt-link
          to="/work"
          class="navigation__link"
        >
          My Work
        </nuxt-link>
      </li>
      <li class="navigation__listItem">
        <nuxt-link
          to="/blog"
          class="navigation__link"
        >
          Blog
        </nuxt-link>
      </li>
      <li class="navigation__listItem">
        <nuxt-link
          to="/contact"
          class="navigation__link"
        >
          Let's Talk
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
  .navigation {
    position: relative;
    z-index: 2;

    &__list {
      padding-left: 0;
      list-style-type: none;
    }

    &__listItem {
      margin-bottom: 1rem;
    }

    &__listItem:last-child {
      margin-bottom: 0;
    }
  }
</style>
