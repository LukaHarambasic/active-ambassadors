<template>
  <footer>
    <div class="content">
      <div class="box">
        <h1>Active-Ambassadors</h1>
        <p>
          We are a group of sport enthusiasts that wants to make the world a
          better place. We believe that everyone can make a change. Therefore,
          we started this non-profit project in April 2020 to start our journey
          using the resources we have. 🤝
        </p>
      </div>
      <div class="box">
        <h4>Get in Touch</h4>
        <ul>
          <li>
            <a href="https://www.instagram.com/active_ambassadors/"
              >Instagram</a
            >
          </li>
          <li>
            <a href="https://www.linkedin.com/company/active-ambassadors"
              >LinkedIn</a
            >
          </li>
          <li><a href="mailto:hi@active-ambassadors.org">Mail</a></li>
        </ul>
      </div>
      <div class="box">
        <h4>Sitemap</h4>
        <ul>
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/get-involved">Get involved</nuxt-link></li>
          <li><nuxt-link to="/transparency">Transparency</nuxt-link></li>
          <li><nuxt-link to="/about">About</nuxt-link></li>
          <li><nuxt-link to="/imprint">Imprint</nuxt-link></li>
          <li><nuxt-link to="/privacypolicy">Privacy Policy</nuxt-link></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style lang="sass" scoped>
footer
  background: $color-dark
  color: $color-light
  width: 100%
  display: flex
  flex-direction: row
  flex-wrap: nowrap
  justify-content: center
  align-content: flex-start
  align-items: flex-start
  .content
    margin: 0 auto
    padding: 4rem 0
    width: 64rem
    display: flex
    flex-direction: row
    flex-wrap: nowrap
    justify-content: space-between
    align-content: stretch
    align-items: stretch
  .box
    width: calc((100% / 3) - 3rem)
    h1, h4
      color: $color-light
      font-size: 1.3rem
    a
      color: $color-light
      border-color: $color-light
      &:hover
        border-color: $color-primary
    ul
      margin: .5rem 0 0 0
      padding: 0
      list-style: none
      display: flex
      flex-direction: column
      flex-wrap: nowrap
      justify-content: flex-start
      align-content: flex-start
      align-items: flex-start
      li
        margin: 0 0 .5rem 0
        &:last-of-type
          margin: 0
</style>
