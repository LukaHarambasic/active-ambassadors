<template>
  <header :class="{ absolute: isAbsolute }">
    <div class="inner">
      <div class="logo">
        <icon-logo />
      </div>
      <nav>
        <ul>
          <li>
            <nuxt-link to="/">Home</nuxt-link>
            <nuxt-link to="/get-involved">Get Involved</nuxt-link>
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
  components: { IconLogo },
  props: {
    isAbsolute: {
      type: Boolean,
      default: false
    }
  }
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
  background: $color-primary
  &.absolute
    position: absolute
    z-index: 500
    top: 0
    left: 0
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
.logo
  width: 3rem
  height: 3rem
ul
  list-style: none
  padding: 0
  margin: 0
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
