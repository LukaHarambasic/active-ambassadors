<template>
  <section class="section-mail">
    <h2 v-text="title" />
    <div class="content">
      <a :href="mailtoLink" v-text="email" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  },
  computed: {
    mailtoLink() {
      return `mailto:${this.email}`
    }
  }
}
</script>

<style lang="sass" scoped>
.section-mail
  margin: 6rem 0 0 0
  display: flex
  flex-direction: column
  flex-wrap: nowrap
  justify-content: center
  align-content: center
  align-items: center
  text-align: center
  @media screen and (max-width: 45rem)
    margin: 3rem 0 0 0
  a
    font-size: 1.5rem
    line-height: 1.5rem
    text-align: center
    border-bottom: 2px solid
    border-color: $color-secondary
    transition: $animation
    &:hover
      color: $color-secondary
      border-color: transparent
    @media screen and (max-width: 28rem)
      font-size: 1.2rem
      line-height: 1.2rem
</style>
