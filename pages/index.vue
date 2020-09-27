<template>
  <div>
    <index-modal />
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
    <section class="section-timeline">
      <div class="content">
        <h2>Print your jersey.</h2>
        <ol>
          <li>
            <h3>Choose your organisation</h3>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </li>
          <li>
            <h3>The parcel will be shipped</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </li>
          <li>
            <h3>Send us your donation</h3>
            <p>
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate.
            </p>
          </li>
        </ol>
        <nuxt-link to="/get-involved" class="button secondary">
          Try it out.
        </nuxt-link>
      </div>
    </section>
    <section class="section-partners">
      <div class="content">
        <h2>Support our Partners.</h2>
        <ul class="partners">
          <li
            v-for="(partner, index) in partners"
            :key="index"
            @click.prevent="onOpenModal(index)"
          >
            <img
              :src="partner.logo"
              :title="partner.title"
              :alt="partner.title"
            />
            <h3>{{ partner.title }}</h3>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import IndexModal from '@/components/Index/IndexModal'

export default {
  components: {
    IndexModal
  },
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
  },
  computed: {
    partners() {
      return this.$store.state.organisations
    }
  },

  methods: {
    onOpenModal(index) {
      this.$store.commit('selectOrganisation', index)
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
    align-items: center
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
.section-timeline
  height: 75vh
  background: $color-grey-light
  .content
    padding: 6rem 0
    align-items: center
  h2
    margin: 0 0 4rem 0
  ol
    list-style: none
    counter-reset: step // TODO: Was is des?
    display: flex
    padding: 0
    margin: 0 0 2rem 0
    li
      display: flex
      flex-direction: column
      flex: 1
      text-align: center
      position: relative
      h3
        font-size: 2rem
      &:before
        width: 4rem
        height: 4rem
        line-height: 4rem
        font-size: 2rem
        font-family: $font-family-headline
        content: counter(step)"."
        counter-increment: step
        align-self: center
        background: $color-secondary
        color: $color-light
        border-radius: 100%
        margin: 0 0 .5rem 0
      &:after
        height: 2px
        width: calc(100% - 4rem)
        content: ''
        position: absolute
        top: 1.5rem
        left: calc(50% + 2em)
.section-partners
  height: 100vh
  .content
    padding: 6rem 0
    align-items: center
  .partners
    padding: 0
    margin: 1rem 0 0 0
    list-style: none
    display: flex
    flex-direction: row
    flex-wrap: wrap
    justify-content: center // TODO: space-between if count >= 3
    align-content: flex-start
    align-items: flex-start
    position: relative
    @media screen and (max-width: 45rem)
      flex-direction: column
      justify-content: flex-start
      align-content: center
      align-items: flex-start
    li
      border-radius: $border-radius
      background: $color-grey-light
      margin: 0 0 2rem 2rem // TODO: remove last 2rem if count >= 3
      display: flex
      flex-direction: column
      flex-wrap: nowrap
      justify-content: flex-start
      align-content: flex-start
      align-items: flex-start
      padding: 2rem
      height: 20rem
      width: 20rem
      transition: $animation
      &:hover
        transform: scale(1.05)
        cursor: pointer
        img
          filter: grayscale(0%)
      @media screen and (max-width: 66rem)
        width: calc(50% - 1rem)
      @media screen and (max-width: 45rem)
        width: calc(100% - 2rem)
        height: auto
        margin: 0 0 2rem 0
      img
        width: 100%
        max-height: 11rem
        margin: 0 0 0.5rem 0
        filter: grayscale(100%)
      h3
        font-size: 1.5rem
        text-align: center
        margin: 0 0 0.5rem 0
        width: 100%
</style>
