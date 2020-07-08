<template>
  <div class="workGroup">
    <header class="workGroup__header">
      <h2 class="workGroup__title">
        {{ groupTitle }}
      </h2>
      <p class="workGroup__intro">
        {{ groupIntro }}
      </p>
    </header>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

  props: {
    groupTitle: {
      type: String,
      required: true
    },

    groupIntro: {
      type: String,
      required: true
    },

    portfolioGroup: {
      type: String,
      required: true
    }
  },

  computed: {
    ...mapGetters([this.portfolioGroup])
  }

}
</script>
