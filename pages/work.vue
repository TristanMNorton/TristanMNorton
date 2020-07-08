<template>
  <div class="workPage">
    <h1 class="workPage__title">
      My Work
    </h1>
    <WorkGroup
      :group-title="'Work at Imarc Agency'"
      :group-intro="'Sites built at Imarc Agency'"
      :portfolio-group="'brochureSites'"
    />
  </div>
</template>

<script>
import WorkGroup from '../components/content/WorkGroup'

export default {

  components: {
    WorkGroup
  }

}
</script>
