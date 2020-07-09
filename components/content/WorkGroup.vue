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
    <section class="workGroup__samples">
      <WorkSample
        v-for="sample in workSamples"
        :key="sample.id"
        :work-sample="sample"
      />
    </section>
  </div>
</template>

<script>
import WorkSample from './WorkSample'

export default {

  components: {
    WorkSample
  },

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
      default: ''
    }
  },

  computed: {
    workSamples () {
      return this.$store.getters[this.portfolioGroup]
    }
  }

}
</script>
