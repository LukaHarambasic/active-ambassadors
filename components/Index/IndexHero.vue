<template>
  <section class="section-hero">
    <img
      :srcset="require('~/assets/images/header_active_ambassadors.png').srcSet"
      title="ACTIVE-AMBASSADORS"
      alt="ACTIVE-AMBASSADORS"
    />
    <blockquote v-text="slogan" />
  </section>
</template>

<script>
export default {
  props: {
    slogan: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
.section-hero
  position: relative
img
  border-radius: $border-radius
blockquote
  position: absolute
  width: 70%
  top: 0
  left: 0
  font-size: 3.5rem
  font-weight: bold
  color: $color-light
  top: 50%
  left: 50%
  transform: translate(-50%,-50%)
  text-align: center
  @media screen and (max-width: 66rem)
    font-size: 2.5rem
  @media screen and (max-width: 45rem)
    width: 80%
    font-size: 2rem
  @media screen and (max-width: 35rem)
    font-size: 1.5rem
  @media screen and (max-width: 28rem)
    font-size: 1.2rem
</style>
