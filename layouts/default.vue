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
      <footer>
        <ul>
          <li>
            <a
              href="https://www.instagram.com/active_ambassadors/"
              target="_blank"
              >Instagram</a
            >
          </li>
          <li><nuxt-link to="/imprint">Imprint</nuxt-link></li>
        </ul>
      </footer>
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

h2
  text-align: center

a
  color: #3352C4
  text-decoration: none
  transition: all 100ms ease-in-out
  border-bottom: 1px solid
  border-color: transparent
  &:hover
    border-color: #3352C4

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
  @media screen and (max-width: 66rem)
    width: calc(100% - 4rem)

header
  width: 100%
  padding: 2rem 1rem
  background: rgba(255,255,255, 0.99)
  display: flex
  flex-direction: row
  flex-wrap: nowrap
  justify-content: center
  align-content: flex-start
  align-items: flex-start
  @media screen and (max-width: 45rem)
    padding: 1rem
  @media screen and (max-width: 28rem)
    flex-direction: column
    justify-content: flex-start
    align-content: center
    align-items: center
  h1
    font-weight: bold
    text-transform: uppercase
    font-size: 1.5rem
    margin: 0 0 0 0.5rem
    letter-spacing: 2px
    @media screen and (max-width: 28rem)
      text-align: center

main
  width: 100%
  min-height: 50rem
  margin: 0rem 0 2rem 0

footer
  margin: 6rem 0 0 0
  width: 100%
  display: flex
  flex-direction: row
  flex-wrap: nowrap
  justify-content: center
  align-content: flex-start
  align-items: flex-start
  ul
    display: none
    list-style: none
    display: flex
    flex-direction: row
    flex-wrap: nowrap
    justify-content: center
    align-content: flex-start
    align-items: flex-start
    li
      margin: 0 1rem 0 0
</style>
