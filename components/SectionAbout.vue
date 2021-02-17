<template>
  <section class="section-about">
    <div class="content">
      <h2>Active Ambassadors?</h2>
      <ul>
        <li>
          <div class="icon"><icon-who /></div>
          <h3>WHO</h3>
          <h4>We Are</h4>
          <p>
            We are a group of sport enthusiasts that want to make the world a
            better place. We believe that everyone can make a change. Therefore,
            we started this non-profit project in April 2020 to start our
            journey using the resources we have.
          </p>
        </li>
        <li>
          <div class="icon"><icon-what /></div>
          <h3>WHAT</h3>
          <h4>We Do</h4>
          <p>
            We enable you to imprint your own jersey with the logo of the
            organization you love. No need to worry about special equipment - we
            will send you a parcel with everything you need - you just need an
            iron and your own jersey.
          </p>
        </li>
        <li>
          <div class="icon"><icon-why /></div>
          <h3>WHY</h3>
          <h4>We Do It</h4>
          <p>
            We believe that there are many organizations which do not receive
            the attention they deserve. Hence, we want to increase awareness for
            the great impact they have and support them on their journey.
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import IconWho from '@/components/Icons/IconWho'
import IconWhat from '@/components/Icons/IconWhat'
import IconWhy from '@/components/Icons/IconWhy'

export default {
  name: 'SectionAbout',
  components: {
    IconWho,
    IconWhat,
    IconWhy
  }
}
</script>

<style lang="sass" scoped>
.section-about
  background: $color-primary-light
ul
  display: flex
  flex-direction: row
  flex-wrap: nowrap
  justify-content: space-between
  align-content: stretch
  align-items: stretch
  margin: 0
  padding: 0
  list-style: none
  @media screen and (max-width: 68rem)
    flex-direction: column
li
  width: calc((100% / 3) - ((2 * 2rem) / 3)) // 100% / n - ((n-1) * spacing) / n
  border-radius: $border-radius
  background: $color-light
  padding: 2rem
  text-align: center
  display: flex
  flex-direction: column
  flex-wrap: nowrap
  justify-content: center
  align-content: center
  align-items: center
  color: $color-dark
  @media screen and (max-width: 68rem)
    width: 100%
  .icon
    background: $color-secondary
    svg
      fill: $color-light
.icon
  width: 6rem
  height: 6rem
  border-radius: 50%
  margin: 0 0 2rem 0
  padding: 1rem
  @media screen and (max-width: 88rem)
    width: 5rem
    height: 5rem
h3
  font-size: 3rem
  line-height: 3rem
  @media screen and (max-width: 88rem)
    font-size: 2rem
    line-height: 2rem
h4
  font-size: 1.5rem
  font-weight: normal
  margin: 0 0 .5rem 0
  @media screen and (max-width: 8rem)
    font-size: 1.3rem
</style>
