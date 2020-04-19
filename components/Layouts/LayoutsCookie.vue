<template>
  <div v-if="isOpen" class="cookie">
    <div class="message">
      <h3>Cookies</h3>
      <p>
        We use cookies to provide our services and for analytics and marketing.
        To find out more about our use of cookies, please see our
        <nuxt-link to="/privacypolicy">Privacy Policy</nuxt-link>. Click accept
        to help us collect some data to improve our service for you :)
      </p>
    </div>
    <div class="buttons">
      <button class="button accept" @click="accept">
        Accept
      </button>
      <button class="button deny" @click="deny">Deny</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutsCookie',
  data() {
    return {
      isOpen: false
    }
  },
  mounted() {
    if (process.browser) {
      const isGDPR = localStorage.getItem('GDPR', true)
      if (isGDPR === 'true') {
        this.activateGoogleAnalytics()
      } else {
        this.isOpen = true
      }
    }
  },
  methods: {
    accept() {
      if (process.browser) {
        localStorage.setItem('GDPR', true)
        this.isOpen = false
        this.activateGoogleAnalytics()
      }
    },
    deny() {
      if (process.browser) {
        localStorage.setItem('GDPR', false)
        this.isOpen = false
      }
    },
    activateGoogleAnalytics() {
      if (process.browser) {
        const document = window.document
        const scriptSrc = document.createElement('script')
        scriptSrc.type = 'text/javascript'
        scriptSrc.src =
          'https://www.googletagmanager.com/gtag/js?id=UA-162950945-1'
        scriptSrc.async = true
        document.body.appendChild(scriptSrc)
        const scriptCode = document.createElement('script')
        const coding =
          'window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag("js", new Date()); gtag("config", "UA-162950945-1", { "anonymize_ip": true });'
        scriptCode.text = coding
        document.body.appendChild(scriptCode)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.cookie
  z-index: 2000
  position: fixed
  bottom: 0
  left: 50%
  right: 2rem
  bottom: 2rem
  background: $color-light
  padding: 2rem
  border: $border-width solid $color-secondary
  border-radius: $border-radius
  box-shadow: 0 4px 5px rgba(0,0,0,.5)
  @media screen and (max-width: 66rem)
    left: 2rem
    right: 2rem
  @media screen and (max-width: 28rem)
    left: 1rem
    right: 1rem
    padding: 2rem
  h3
    font-size: 1.5rem
    @media screen and (max-width: 28rem)
      font-size: 1.3rem
  p
    font-size: 1.3rem
    margin: 0 0 1rem 0
    @media screen and (max-width: 28rem)
      font-size: 1rem
  .button
    border-radius: $border-radius
    padding: .5rem 1rem
    font-weight: bold
    display: inline-block
    text-decoration: none
    background: transparent
    font-size: 1rem
    border: $border-width solid $color-secondary
    &:hover
      cursor: pointer
    &.deny
      color: $color-secondary
      &:hover
        color: $color-light
        background: $color-secondary
    &.accept
      color: $color-light
      background: $color-secondary
      &:hover
        color: $color-secondary
        background: transparent
</style>
