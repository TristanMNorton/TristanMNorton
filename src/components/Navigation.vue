<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__listItem">
        <g-link to="/about/" class="navigation__link">About Me</g-link>
      </li>
      <li class="navigation__listItem">
        <g-link to="/about/" class="navigation__link">My Work</g-link>
      </li>
      <li class="navigation__listItem">
        <g-link to="/about/" class="navigation__link">Blog</g-link>
      </li>
      <li class="navigation__listItem">
        <g-link to="/about/" class="navigation__link">Let's Talk</g-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
  .navigation {

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