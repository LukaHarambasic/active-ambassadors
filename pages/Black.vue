<template>
  <div>
    <section>
      <h2>Print on a black shirt</h2>
      <p>
        Before the transfer, you should deactivate the steam function on your
        iron and warm it up on the highest level for about 4 minutes. Then iron
        over the logo for 2 minutes.
      </p>
    </section>
    <section>
      <youtube :url="url" />
    </section>
  </div>
</template>

<script>
import Youtube from '@/components/Youtube'

export default {
  components: {
    Youtube
  },
  data() {
    return {
      url: 'https://www.youtube-nocookie.com/embed/Xi_2X8sKifY'
    }
  }
}
</script>

<style lang="sass" scoped>
section
  width: 100%
</style>
