<template>
  <div class="aboutPage">
    <h1 class="aboutPage__title">
      About Me
    </h1>
    <section
      class="aboutPage__introduction"
      v-html="introductionText"
    />
    <h2 class="aboutPage__subTitle">
      Skills
    </h2>
    <SkillGroup
      v-for="skillGroup in skillGroups"
      :key="skillGroup.id"
      :skill-group="skillGroup"
    />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import SkillGroup from '../components/content/SkillGroup'

export default {

  components: {
    SkillGroup
  },

  computed: {
    ...mapState(['primaryInformation']),
    ...mapGetters(['skillGroups']),

    introductionText () {
      return documentToHtmlString(this.primaryInformation.introduction)
    }
  }

}
</script>
