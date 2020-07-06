<template>
  <div
    class="layout"
    :class="`-${pathName}`"
  >
    <aside class="layout__aside">
      <Header />
      <Navigation />
    </aside>
    <main class="layout__main">
      <Nuxt />
    </main>
    <Canvas />
  </div>
</template>

<script>
import Navigation from '~/components/global/Navigation'
import Header from '~/components/global/Header'
import Canvas from '~/components/visual/Canvas'

export default {

  components: {
    Navigation,
    Canvas,
    Header
  },

  computed: {
    pathName () {
      return this.$route.name
    }
  }

}
</script>

<style lang="scss">
  .layout {
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    &__aside,
    &__main {
      position: relative;
      background-color: rgba(var(--bg-color-rgb), 0.8);
      padding: 4rem;
    }

    &__aside {
      width: 300px;
      margin-right: 8rem;
      min-width: 300px;
      z-index: 2;
    }

    &__main {
      flex-grow: 1;
      max-width: 1000px;
      z-index: 2;
    }

    &.-index .layout__main {
      display: none;
    }

    &::after {
      content: '';
      display: block;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: var(--bg-color);
      opacity: 0;
      transition: opacity 2000ms cubic-bezier(0.33, 1, 0.68, 1);
      z-index: 1;
    }

    &:not(.-index)::after {
      opacity: 0.6;
    }
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }
</style>
