<template>
  <div class="layout" :class="`-${pathName}`">
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
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }
</style>
