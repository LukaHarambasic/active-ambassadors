<template>
  <section class="section-about">
    <ul>
      <li class="light">
        <div class="icon"><icon-who /></div>
        <h3>WHO</h3>
        <h4>We Are</h4>
        <p>
          We are a group of enthusiasts who want to make a change. We believe
          that everyone can make a change. Therefore, we started this non-profit
          project in April 2020 to start this journey with the resource we have.
        </p>
      </li>
      <li class="dark">
        <div class="icon"><icon-what /></div>
        <h3>WHAT</h3>
        <h4>We Do</h4>
        <p>
          Encourage others print jersey. We will provide everything that is
          needed We will help you to print the logos of the organisations you
          support on the jersey you love. You can print your favorite jersey
          easily at home. Everything you need is an iron your jersey, We will
          send you a parcel with everything you need.
        </p>
      </li>
      <li class="light">
        <div class="icon"><icon-why /></div>
        <h3>WHY</h3>
        <h4>We Do It</h4>
        <p>
          We would to increase awareness, especially for small orgs.
        </p>
      </li>
    </ul>
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
  height: 50vh
ul
  height: 100%
  display: flex
  flex-direction: row
  flex-wrap: nowrap
  justify-content: flex-start
  align-content: stretch
  align-items: stretch
  margin: 0
  padding: 0
  list-style: none
li
  width: calc(100% / 3)
  padding: 2rem 4rem
  text-align: center
  background: $color-grey-light
  display: flex
  flex-direction: column
  flex-wrap: nowrap
  justify-content: flex-start
  align-content: flex-start
  align-items: center
  &.light
    background: $color-grey-light
    h3, h4, p
      color: $color-secondary
    .icon
      background: $color-secondary
      svg
        fill: $color-light
  &.dark
    background: $color-secondary
    h3, h4, p
      color: $color-light
    .icon
      background: $color-light
      svg
        fill: $color-secondary
.icon
  width: 6rem
  height: 6rem
  border-radius: 50%
  margin: 0 0 1rem 0
  padding: 1rem
h3
  font-size: 4rem
  line-height: 4rem
h4
  font-size: 2rem
  font-weight: normal
</style>
