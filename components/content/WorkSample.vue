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
    <a :href="url">
      View Website
    </a>
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
      return this.workSample.name
    },

    url () {
      return this.workSample.url
    },

    src () {
      return this.workSample.thumbnail.url
    }
  }

}
</script>
