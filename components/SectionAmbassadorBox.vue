<template>
  <section class="section-ambassador-box">
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
            Tell us where we should send the parcel to. And Leo will send it to
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
      <nuxt-link to="/get-involved" class="button secondary">
        Order here
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
.section-ambassador-box
  background: $color-grey-light
  .content
    padding: 6rem 0
    align-items: center
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
</style>
