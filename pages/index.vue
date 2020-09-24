<template>
  <div>
    <header class="header">
      <div class="content">
        <h3>
          We bring athletes and NGOs together. Make a change. Print your jersey
          now.
        </h3>
        <nuxt-link to="/get-involved" class="button">
          Get involved.
        </nuxt-link>
      </div>
    </header>
    <section class="section-who">
      <ul>
        <li class="light">
          <div class="icon"></div>
          <h3>WHO</h3>
          <h4>We Are</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </li>
        <li class="dark">
          <div class="icon"></div>
          <h3>WHY</h3>
          <h4>We Do It</h4>
          <p>
            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate.
          </p>
        </li>
        <li class="light">
          <div class="icon"></div>
          <h3>WHAT</h3>
          <h4>We Do</h4>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </li>
      </ul>
    </section>
    <section class="section-active-ambassadors">
      <div class="mosaic">
        <ul>
          <li>
            <img
              src="../static/active-ambassadors/active-ambassador-julia.jpg"
            />
          </li>
          <li>
            <img
              src="../static/active-ambassadors/active-ambassadors-leo.jpg"
            />
          </li>
          <li>
            <img
              src="../static/active-ambassadors/active-ambassador-julia.jpg"
            />
          </li>
          <li>
            <img
              src="../static/active-ambassadors/active-ambassadors-leo.jpg"
            />
          </li>
          <li>
            <img
              src="../static/active-ambassadors/active-ambassadors-leo.jpg"
            />
          </li>
          <li>
            <img
              src="../static/active-ambassadors/active-ambassador-julia.jpg"
            />
          </li>
          <li>
            <img
              src="../static/active-ambassadors/active-ambassadors-leo.jpg"
            />
          </li>
          <li>
            <img
              src="../static/active-ambassadors/active-ambassador-julia.jpg"
            />
          </li>
          <li>
            <img
              src="../static/active-ambassadors/active-ambassador-julia.jpg"
            />
          </li>
          <li>
            <img
              src="../static/active-ambassadors/active-ambassadors-leo.jpg"
            />
          </li>
          <li>
            <img
              src="../static/active-ambassadors/active-ambassador-julia.jpg"
            />
          </li>
          <li>
            <img
              src="../static/active-ambassadors/active-ambassadors-leo.jpg"
            />
          </li>
          <li>
            <img
              src="../static/active-ambassadors/active-ambassadors-leo.jpg"
            />
          </li>
          <li>
            <img
              src="../static/active-ambassadors/active-ambassador-julia.jpg"
            />
          </li>
          <li>
            <img
              src="../static/active-ambassadors/active-ambassadors-leo.jpg"
            />
          </li>
          <li>
            <img
              src="../static/active-ambassadors/active-ambassador-julia.jpg"
            />
          </li>
        </ul>
      </div>
      <div class="content">
        <h2>Who is an Active Ambassador?</h2>
        <ul>
          <li>
            <div class="icon"></div>
            <div class="text">
              <h3>Active</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </li>
          <li>
            <div class="icon"></div>
            <div class="text">
              <h3>Engaged</h3>
              <p>
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate.
              </p>
            </div>
          </li>
          <li>
            <div class="icon"></div>
            <div class="text">
              <h3>Communicative</h3>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </li>
        </ul>
        <nuxt-link to="/get-involved" class="button">
          Get involved.
        </nuxt-link>
      </div>
    </section>
    <section class="section-print">
      <h2>Print your jersey.</h2>
      <p>Hier kommt ne Timeline hin</p>
    </section>
    <section class="section-partners">
      <h2>Support our Partners.</h2>
      <p>Hier kommen wieder irgendwie usnere partner hin</p>
    </section>
  </div>
</template>

<script>
export default {
  components: {},
  async asyncData({ $prismic, error }) {
    try {
      const { data } = await $prismic.api.getSingle('home', { lang: 'en-us' })
      const jerseySteps = data.jersey_steps.map(
        (item) => item.jersey_step_text[0].text
      )
      return {
        slogan: data.slogan[0].text,
        ambassadorsTitle: data.ambassadors_title[0].text,
        newsletterTitle: data.newsletter_title[0].text,
        organisationsTitle: data.organisations_title[0].text,
        jerseyTitle: data.jersey_title[0].text,
        jerseySteps,
        contactTitle: data.contact_title[0].text,
        contactEmail: data.contact_email[0].text
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Prismic single not found' })
    }
  }
}
</script>

<style lang="sass" scoped>
.content
  margin: 0 auto 0 auto
  width: 64rem
  display: flex
  flex-direction: column
  flex-wrap: nowrap
  justify-content: flex-start
  align-content: flex-start
  align-items: flex-start
.header
  background: $color-primary
  width: 100vw
  height: 100vh
  color: $color-light
  h3
    color: $color-light
    font-size: 5rem
.section-who
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
      flex: 1 1 auto
      padding: 2rem 4rem
      text-align: center
      background: $color-grey-light
      display: flex
      flex-direction: column
      flex-wrap: nowrap
      justify-content: center
      align-content: center
      align-items: center
      .icon
        width: 6rem
        height: 6rem
        border-radius: 50%
        margin: 0 0 1rem 0
      h3
        font-size: 4rem
        line-height: 4rem
      h4
        font-size: 2rem
        font-weight: normal
      &.light
        background: $color-grey-light
        h3, h4, p
          color: $color-secondary
        .icon
          background: $color-secondary
      &.dark
        background: $color-secondary
        h3, h4, p
          color: $color-light
        .icon
          background: $color-light
.section-active-ambassadors
  position: relative
  height: 100vh
  .mosaic
    position: absolute
    height: 100vh
    width: 100vw
    background: $color-dark
    z-index: -1000
    overflow: hidden
    ul
      width: 100%
      height: 100%
      margin: 0
      padding: 0
      list-style: none
      display: flex
      flex-direction: row
      flex-wrap: wrap
      justify-content: flex-start
      align-content: flex-start
      align-items: flex-start
      li
        overflow: hidden
        margin: 0
        padding: 0
        opacity: 0.12
        width: 25%
        height: 33.3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333%
        img
          object-position: center
          width: 100%
  .content
    padding: 6rem 0
  h2, h3, p
    color: $color-light
  h2
    margin: 0 0 4rem 0
  ul
    margin: 0
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
      &:last-of-type
        margin: 0 0 2rem 0
      .icon
        flex: 0 0 auto
        width: 6rem
        height: 6rem
        background: $color-primary
        border-radius: 50%
      .text
        flex: 1 1 auto
        margin: 0 0 0 2rem
        h3
          font-size: 1.8rem
        p
          font-size: 1.3rem
</style>
