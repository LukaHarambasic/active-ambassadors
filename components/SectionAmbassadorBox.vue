<template>
  <section
    class="section-ambassador-box"
    :class="{ primary: isBackgroundPrimary }"
  >
    <div class="content">
      <h2>Order your ambassador box</h2>
      <ol>
        <li>
          <h3>Tell us about you</h3>
          <p>
            Tell us which of our partner organisation you want to support.
          </p>
        </li>
        <li>
          <h3>Wait for the parcel</h3>
          <p>
            Tell us where we should send the parcel to and Leo will send it to
            you!
          </p>
        </li>
        <li>
          <h3>Support us</h3>
          <p>
            Voluntarily: send us 4€ so we can cover our costs. Share our
            mission.
          </p>
        </li>
      </ol>
      <nuxt-link v-if="showButton" to="/get-involved" class="button secondary">
        Order here
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionAmbassadorBox',
  props: {
    showButton: {
      type: Boolean,
      default: true
    },
    background: {
      type: String,
      default: ''
    }
  },
  computed: {
    isBackgroundPrimary() {
      return this.background === 'primary'
    }
  }
}
</script>

<style lang="sass" scoped>
.section-ambassador-box
  background-image: url("/design/blobs4.svg")
  background-color: $color-primary-light
  background-position: left top
  background-repeat: no-repeat
  background-size: cover
  &.primary
    background: $color-primary
    color: $color-light
    h2, h3
      color: $color-light
    li
      &:before
        background: $color-light
        color: $color-primary
ol
  list-style: none
  counter-reset: step // TODO: Was is des?
  display: flex
  justify-content: space-between
  align-content: flex-start
  align-items: flex-start
  padding: 0
  margin: 0 0 2rem 0
  @media screen and (max-width: 68rem)
    flex-direction: column
li
  display: flex
  flex-direction: column
  text-align: center
  position: relative
  width: calc((100% / 3) - (8rem / 3)) // 1/3 - 4rem between two boxes
  @media screen and (max-width: 68rem)
    width: 100%
    margin: 0 0 2rem 0
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
h3
  font-size: 2rem
</style>
