<template>
  <section class="section-hero">
    <div class="content">
      <h3>
        We bring athletes and NGOs together. Make a change. Print your jersey
        now.
      </h3>
      <nuxt-link to="/get-involved" class="button">
        Get involved
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionHero'
}
</script>

<style lang="sass" scoped>
.section-hero
  background: $color-primary
  width: 100%
  height: auto
  min-height: 100vh
  color: $color-light
  display: flex
  flex-direction: column
  flex-wrap: nowrap
  justify-content: center
  align-content: center
  align-items: center
  @media screen and (max-width: 26rem)
    min-height: auto
.content
  align-items: flex-start
  @media screen and (max-width: 26rem)
    padding: 3rem 0
h3
  color: $color-light
  font-size: 5rem
  @media screen and (max-width: 50rem)
    font-size: 4rem
  @media screen and (max-width: 35rem)
    font-size: 3rem
  @media screen and (max-width: 26rem)
    font-size: 2.2rem
</style>
