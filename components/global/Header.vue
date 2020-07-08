<template>
  <header class="header">
    <h1 class="header__title">
      <nuxt-link to="/">
        {{ primaryInformation.fullName }}
      </nuxt-link>
    </h1>
    <h2 class="header__subtitle">
      {{ primaryInformation.professionalTitle }}
    </h2>
  </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['primaryInformation'])
  }
}
</script>

<style lang="scss">
  .header {
    &__title {
      font-size: 4.4rem;
    }

    &__subtitle {
      font-weight: 300;
      font-size: 2rem;
    }
  }
</style>
