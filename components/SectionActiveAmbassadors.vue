<template>
  <section class="section-active-ambassadors">
    <div class="content">
      <h2>Who is an Active Ambassador?</h2>
      <ul class="steps">
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

      <nuxt-link to="/get-involved" class="button secondary">
        Join us
      </nuxt-link>
      <div class="ambassadors">
        <ul>
          <li v-for="(ambassador, index) in ambassadors" :key="index">
            <img :src="ambassador" alt="" />
          </li>
        </ul>
        <p>and many more...</p>
      </div>
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
      ambassadors: [
        '/active-ambassadors/active-ambassador-julia.jpg',
        '/active-ambassadors/active-ambassador-2.jpg',
        '/active-ambassadors/active-ambassador-fritz.jpg',
        '/active-ambassadors/active-ambassador-mathias.jpg',
        '/active-ambassadors/active-ambassador-hannes.jpg',
        '/active-ambassadors/active-ambassador-leo.jpg'
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.section-active-ambassadors
.steps
  margin: 0 0 4rem 0
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
      margin: 0
  .icon
    flex: 0 0 auto
    width: 6rem
    height: 6rem
    background: $color-secondary
    border-radius: 50%
    padding: 1rem
    @media screen and (max-width: 88rem)
      width: 5rem
      height: 5rem
    @media screen and (max-width: 28rem)
      margin: 0 0 1rem 0
    svg
      fill: $color-light
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
.button
  margin: 0 0 4rem 0
.ambassadors
  width: 100%
  display: flex
  flex-direction: column
  flex-wrap: wrap
  justify-content: center
  align-content: center
  align-items: center
  ul
    display: flex
    flex-direction: row
    flex-wrap: wrap
    justify-content: center
    align-content: flex-start
    align-items: flex-start
    list-style: none
    margin: 0
    padding: 0
    li
      display: inline
      margin: 0 .5rem 0 0
      img
        border-radius: 2px
        width: 2rem
        height: 2rem
</style>
