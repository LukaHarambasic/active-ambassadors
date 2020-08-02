<template>
  <section class="section-counter">
    <div class="box">
      <div class="number">
        <span>{{ counter }}</span>
      </div>
      <div class="slogan" v-text="title" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndexCounter',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  computed: {
    counter() {
      return this.$store.state.ambassadorsSum
    }
  }
}
</script>

<style lang="sass" scoped>
.section-counter
  margin: 6rem 0 0 0
  display: flex
  flex-direction: column
  flex-wrap: nowrap
  justify-content: center
  align-content: center
  align-items: center
  @media screen and (max-width: 45rem)
    margin: 3rem 0 0 0
  .box
    background: $color-secondary
    border-radius: $border-radius
    padding: 2rem
    color: $color-light
    text-align: center
    display: inline-flex
    flex-direction: column
    justify-content: center
    align-content: center
    align-items: center
  .slogan
    color: $color-light
  .number
    font-size: 2rem
    font-weight: bold
    color: $color-secondary
    background: $color-light
    display: flex
    flex-direction: row
    flex-wrap: nowrap
    justify-content: center
    align-content: center
    align-items: center
    border-radius: 50%
    width: 4rem
    height: 4rem
    margin: 0 0 .5rem 0
</style>
