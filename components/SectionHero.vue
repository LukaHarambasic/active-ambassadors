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
  width: 100vw
  height: 100vh
  color: $color-light
.content
  align-items: flex-start
h3
  color: $color-light
  font-size: 5rem
  @media screen and (max-width: 50rem)
    font-size: 4rem
  @media screen and (max-width: 35rem)
    font-size: 3rem
  @media screen and (max-width: 24rem)
    font-size: 2rem
</style>
