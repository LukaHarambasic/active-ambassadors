<template>
  <section class="section-active-ambassadors">
    <div class="mosaic">
      <ul>
        <li v-for="(ambassador, index) in mosaic" :key="index">
          <img :src="ambassador" />
        </li>
      </ul>
    </div>
    <div class="content">
      <h2>Who is an Active Ambassador?</h2>
      <ul>
        <li>
          <div class="icon"><icon-active /></div>
          <div class="text">
            <h3>Active</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
        </li>
        <li>
          <div class="icon"><icon-engaged /></div>
          <div class="text">
            <h3>Engaged</h3>
            <p>
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate.
            </p>
          </div>
        </li>
        <li>
          <div class="icon"><icon-communicative /></div>
          <div class="text">
            <h3>Communicative</h3>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </li>
      </ul>
      <nuxt-link to="/get-involved" class="button">
        Get involved.
      </nuxt-link>
    </div>
  </section>
</template>

<script>
import IconActive from '@/components/Icons/IconActive'
import IconEngaged from '@/components/Icons/IconEngaged'
import IconCommunicative from '@/components/Icons/IconCommunicative'

export default {
  name: 'SectionActiveAmbassadors',
  components: {
    IconActive,
    IconEngaged,
    IconCommunicative
  },
  data() {
    return {
      mosaicRaw: [
        '/active-ambassadors/active-ambassador-julia.jpg',
        '/active-ambassadors/active-ambassador-2.jpg',
        '/active-ambassadors/active-ambassador-fritz.jpg',
        '/active-ambassadors/active-ambassador-mathias.jpg',
        '/active-ambassadors/active-ambassador-hannes.jpg',
        '/active-ambassadors/active-ambassador-leo.jpg',
        '/active-ambassadors/active-ambassador-julia.jpg',
        '/active-ambassadors/active-ambassador-2.jpg',
        '/active-ambassadors/active-ambassador-fritz.jpg',
        '/active-ambassadors/active-ambassador-mathias.jpg',
        '/active-ambassadors/active-ambassador-hannes.jpg',
        '/active-ambassadors/active-ambassador-leo.jpg'
      ]
    }
  },
  computed: {
    mosaic() {
      const NUMBER_OF_IMAGES = 12
      const mosaic = []
      while (mosaic.length < NUMBER_OF_IMAGES) {
        mosaic.push(...this.mosaicRaw)
      }
      mosaic.length = NUMBER_OF_IMAGES
      return mosaic // TODO: add shuffle if length > 12 shuffleArray(mosaic)
    }
  }
}
</script>

<style lang="sass" scoped>
.section-active-ambassadors
  position: relative
  height: 100vh
.mosaic
  position: absolute
  height: 100vh
  width: 100vw
  background: $color-dark
  z-index: -1000
  overflow: hidden
  ul
    width: 100%
    height: 100%
    margin: 0
    padding: 0
    list-style: none
    display: flex
    flex-direction: row
    flex-wrap: wrap
    justify-content: flex-start
    align-content: flex-start
    align-items: flex-start
    li
      overflow: hidden
      margin: 0
      padding: 0
      opacity: 0.12
      width: 25%
      height: calc(100% / 3)
      img
        object-position: center
        width: 100%
h2, h3, p
  color: $color-light
ul
  margin: 0
  padding: 0
  list-style: none
  li
    display: flex
    flex-direction: row
    flex-wrap: nowrap
    justify-content: flex-start
    align-content: flex-start
    align-items: flex-start
    margin: 0 0 4rem 0
    &:last-of-type
      margin: 0 0 2rem 0
.icon
  flex: 0 0 auto
  width: 6rem
  height: 6rem
  background: $color-light
  border-radius: 50%
  padding: 1rem
  svg
    fill: $color-secondary
.text
  flex: 1 1 auto
  margin: 0 0 0 2rem
  h3
    font-size: 1.8rem
  p
    font-size: 1.3rem
</style>
