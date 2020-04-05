<template>
  <div>
    <portal-target name="modal"> </portal-target>
    <div class="container">
      <header>
        <logo />
        <h1>Active-Ambassadors</h1>
      </header>
      <main>
        <nuxt />
      </main>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="sass">
html
  font-family: 'Open Sans', sans-serif
  font-size: 16px
  word-spacing: 1px
  text-size-adjust: 100%
  box-sizing: border-box
  color: #000000
  line-height: 1.5

*,
*:before,
*:after
  box-sizing: border-box
  margin: 0

img
  max-width: 100%

h1, h2, h3, h4, h5
  margin: 0
  color: #000000
  font-weight: bold

.container
  margin: 0 auto 4rem auto
  width: 64rem
  display: flex
  flex-direction: column
  flex-wrap: nowrap
  justify-content: flex-start
  align-content: flex-start
  align-items: center
  font-size: 1.2rem
  color: #212121

header
  width: 100%
  padding: 2rem 1rem
  display: flex
  flex-direction: row
  flex-wrap: nowrap
  justify-content: center
  align-content: flex-start
  align-items: flex-start
  h1
    font-weight: bold
    text-transform: uppercase
    font-size: 1.5rem
    margin: 0 0 0 0.5rem
    letter-spacing: 2px

main
  width: 100%
  min-height: 50rem
</style>
