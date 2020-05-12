<template>
  <div class="layout">
    <header class="header">
      <h1>{{ $static.context.fullName }}</h1>
      <h2 class="subtitle">{{ $static.context.professionalTitle }}</h2>
    </header>
    <navigation />
    <slot/>
    <Canvas />
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

<style>
</style>
