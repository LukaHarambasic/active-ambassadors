<template>
  <div>
    <LayoutsCookie />
    <portal-target name="modal"></portal-target>
    <div class="container">
      <header>
        <div class="logo-wrapper">
          <logo />
          <h1>Active-Ambassadors</h1>
        </div>
        <nav>
          <nuxt-link class="nav-link" to="/">Home</nuxt-link>
          <nuxt-link class="nav-link" to="/transparency"
            >Transparency</nuxt-link
          >
        </nav>
      </header>
      <main>
        <nuxt />
      </main>
      <footer>
        <ul>
          <li>
            <nuxt-link to="/imprint">Imprint</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/privacypolicy">Privacy Policy</nuxt-link>
          </li>
        </ul>
      </footer>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import LayoutsCookie from '~/components/Layouts/LayoutsCookie.vue'

export default {
  components: {
    Logo,
    LayoutsCookie
  },
  async fetch() {
    await this.fetchAll()
  },
  methods: {
    async fetchAll() {
      await this.$store.dispatch('fetchAmbassadorsSum')
      await this.$store.dispatch('fetchExpenses')
      await this.$store.dispatch('fetchIncome')
      await this.$store.dispatch('fetchExpensesPerKitAndSum')
    }
  }
}
</script>

<style lang="sass">
html
  font-family: $font-family
  font-size: 16px
  word-spacing: 1px
  text-size-adjust: 100%
  box-sizing: border-box
  color: $color-dark
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
  color: $color-dark
  font-weight: bold

h2
  font-size: 1.7rem
  text-align: center
  margin: 0 0 1rem 0

a
  color: $color-primary
  text-decoration: none
  transition: all 100ms ease-in-out
  border-bottom: 1px solid
  border-color: transparent
  &:hover
    border-color: $color-primary

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
  justify-content: space-between
  align-content: center
  align-items: center
  @media screen and (max-width: 45rem)
    padding: 1rem
  @media screen and (max-width: 28rem)
    flex-direction: column
    justify-content: center
    align-content: center
    align-items: center
  .logo-wrapper
    display: flex
    flex-direction: row
    flex-wrap: nowrap
    justify-content: flex-start
    align-content: stretch
    align-items: flex-start
    @media screen and (max-width: 28rem)
      flex-direction: column
      justify-content: flex-start
      align-content: stretch
      align-items: center
  h1
    font-weight: bold
    text-transform: uppercase
    font-size: 1.75rem
    margin: 0 0 0 1rem
    letter-spacing: 2px
    @media screen and (max-width: 28rem)
      text-align: center
  nav
    .nav-link
      margin: 0 0 0 1rem
      color: $color-dark

main
  width: 100%
  min-height: 50rem
  margin: 0 0 2rem 0

section
  > .content
    width: 45rem
    @media screen and (max-width: 66rem)
      width: 100%

footer
  margin: 4rem 0 0 0
  width: 100%
  display: flex
  flex-direction: row
  flex-wrap: nowrap
  justify-content: center
  align-content: flex-start
  align-items: flex-start
  ul
    margin: 0
    padding: 0
    display: none
    list-style: none
    display: flex
    flex-direction: row
    flex-wrap: nowrap
    justify-content: center
    align-content: flex-start
    align-items: flex-start
    li
      margin: 0 1.5rem 0 0
      &:last-of-type
        margin: 0
</style>
