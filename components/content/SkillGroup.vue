<template>
  <div class="skillGroup">
    <h3 class="skillGroup__title">
      {{ title }}
    </h3>
    <ul class="skillGroup__groupList">
      <li
        v-for="skill in skills"
        :key="skill"
        class="skillGroup__listItem"
      >
        {{ skill }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    skillGroup: {
      type: Object,
      required: true
    }
  },

  computed: {
    title () {
      return this.skillGroup.title
    },

    skills () {
      return this.skillGroup.skill
    }
  }
}
</script>
