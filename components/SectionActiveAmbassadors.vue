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
              You are an athlete or a sports enthusiast who wants to actively
              shape the impact of non-profit organizations.
            </p>
          </div>
        </li>
        <li>
          <div class="icon"><icon-involved /></div>
          <div class="text">
            <h3>Involved</h3>
            <p>
              You want to proactively shape the world and challenge the status
              quo.
            </p>
          </div>
        </li>
        <li>
          <div class="icon"><icon-communicative /></div>
          <div class="text">
            <h3>Communicative</h3>
            <p>
              You love to be a part of a community and share our vision of
              making the world a better place.
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
import IconCommunicative from '@/components/Icons/IconCommunicative'
import IconInvolved from '@/components/Icons/IconInvolved'

export default {
  name: 'SectionActiveAmbassadors',
  components: {
    IconInvolved,
    IconActive,
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
  @media screen and (max-width: 50rem)
    height: auto
  @media screen and (max-width: 38rem)
    background: $color-dark
.mosaic
  position: absolute
  height: 100vh
  width: 100%
  background: $color-dark
  z-index: -1000
  overflow: hidden
  @media screen and (max-width: 38rem)
    display: none
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
      @media screen and (max-width: 65rem)
        width: calc(100% / 3)
        height: 25%
      img
        object-position: center
        width: 100%
        @media screen and (max-width: 78rem)
          transform: scale(1.4)
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
    @media screen and (max-width: 28rem)
      flex-direction: column
      align-items: center
    &:last-of-type
      margin: 0 0 2rem 0
.icon
  flex: 0 0 auto
  width: 6rem
  height: 6rem
  background: $color-light
  border-radius: 50%
  padding: 1rem
  @media screen and (max-width: 88rem)
    width: 5rem
    height: 5rem
  @media screen and (max-width: 28rem)
    margin: 0 0 1rem 0
  svg
    fill: $color-secondary
.text
  flex: 1 1 auto
  margin: 0 0 0 2rem
  @media screen and (max-width: 28rem)
    margin: 0
  h3
    font-size: 1.8rem
    @media screen and (max-width: 28rem)
      text-align: center
  p
    font-size: 1.3rem
    @media screen and (max-width: 28rem)
      text-align: center
</style>
