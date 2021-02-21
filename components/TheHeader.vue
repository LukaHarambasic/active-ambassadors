<template>
  <header>
    <div class="inner">
      <div class="logo">
        <nuxt-link to="/">
          <icon-logo />
        </nuxt-link>
      </div>
      <nav>
        <ul>
          <li>
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/get-involved">Get Involved</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/transparency">Transparency</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import IconLogo from '@/components/Icons/IconLogo'

export default {
  name: 'TheHeader',
  components: { IconLogo }
}
</script>

<style lang="sass" scoped>
header
  width: 100%
  padding: 2rem 1rem
  display: flex
  flex-direction: row
  flex-wrap: nowrap
  justify-content: center
  align-content: center
  align-items: center
  @media screen and (max-width: 26rem)
    padding: 2rem 1rem 0 1rem
.inner
  margin: 0 auto
  width: 64rem
  height: 100%
  display: flex
  flex-direction: row
  flex-wrap: nowrap
  justify-content: space-between
  align-content: center
  align-items: center
  @media screen and (max-width: 24rem)
    flex-direction: column
.logo
  width: 3rem
  height: 3rem
ul
  list-style: none
  padding: 0
  margin: 0
  display: flex
  flex-direction: row
  flex-wrap: nowrap
  justify-content: flex-start
  align-content: center
  align-items: center
  @media screen and (max-width: 24rem)
    margin: 2rem 0 0 0
    justify-content: center
    flex-wrap: wrap
  li
    padding: 0
    a
      margin: 0 0 0 1rem
      color: $color-light
      &:hover
        opacity: .8
      &.nuxt-link-exact-active
        text-decoration: underline
</style>
