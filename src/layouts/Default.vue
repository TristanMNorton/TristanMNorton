<template>
  <div class="layout">
    <aside class="layout__aside">
      <header class="header">
        <h1>{{ $static.context.fullName }}</h1>
        <h2 class="subtitle">{{ $static.context.professionalTitle }}</h2>
      </header>
      <navigation />
    </aside>
    <main class="layout__main">
      <slot/>
      <Canvas />
    </main>
  </div>
</template>

<static-query>
  query {
    context: contentfulPrimaryInformation(id: "3GO5Apt3z23D0ZaoUHWLD6") {
      professionalTitle,
      fullName
    }
  }
</static-query>

<script>
import Navigation from '~/components/Navigation'
import Canvas from '~/components/visual/Canvas'

export default {
  components: {
    Navigation,
    Canvas
  }
}
</script>

<style lang="scss">
  .layout {
    display: flex;
    flex-direction: row;

    &__aside {
      width: 300px;
      padding: 2rem;
      background-color: rgba(var(--bg-color-rgb), .8);
      z-index: 2;
    }

    &__main {
      flex-grow: 1;
    }
  }
</style>
