<template>
  <div class="layout" :class="`-${pathName}`">
    <aside class="layout__aside">
      <header class="header">
        <h1>{{ primaryInformation.fullName }}</h1>
        <h2 class="subtitle">
          {{ primaryInformation.professionalTitle }}
        </h2>
      </header>
      <navigation />
    </aside>
    <main class="layout__main">
      <Nuxt />
      <Canvas />
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Navigation from '~/components/Navigation'
import Canvas from '~/components/visual/Canvas'

export default {
  components: {
    Navigation,
    Canvas
  },

  computed: {
    ...mapState(['primaryInformation']),

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

    &__aside {
      width: 300px;
      min-width: 300px;
      padding: 2rem;
      background-color: rgba(var(--bg-color-rgb), 0.8);
      z-index: 2;
    }

    &__main {
      flex-grow: 1;
      padding: 2rem;
      max-width: 1000px;
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
