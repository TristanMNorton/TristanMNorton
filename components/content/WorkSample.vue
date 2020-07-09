<template>
  <div class="workSample">
    <h3 class="workSample__title">
      {{ name }}
    </h3>
    <img
      :src="src"
      :alt="name"
      class="workSample__thumbnail"
    >
    <nuxt-link :to="url">
      View Website
    </nuxt-link>
  </div>
</template>

<script>
export default {

  props: {
    workSample: {
      type: Object,
      required: true
    }
  },

  computed: {
    name () {
      return this ? this.workSample.name : ''
    },

    url () {
      return this ? this.workSample.url : ''
    },

    src () {
      return this ? this.workSample.thumbnail.url : ''
    }
  }

}
</script>
