<template>
  <div class="canvas">
    <Grid />
    <Cliff />
  </div>
</template>

<script>
import Cliff from '~/components/visual/elements/Cliff'
import Grid from '~/components/visual/elements/Grid'

export default {
  components: {
    Cliff,
    Grid
  }
}
</script>

<style lang="scss">
  .canvas {
    position: relative;
    z-index: 1;
  }
</style>
