<template>
  <div class="layout">
    <header class="header">
      <h1>{{ $static.context.fullName }}</h1>
      <h2 class="subtitle">{{ $static.context.professionalTitle }}</h2>
    </header>
    <navigation/>
    <slot/>
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

export default {
  components: {
    Navigation
  }
}
</script>

<style>
</style>
