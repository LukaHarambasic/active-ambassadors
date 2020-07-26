<template>
  <section class="section-steps">
    <h2 v-text="title" />
    <ul class="steps">
      <li v-for="(step, index) in steps" :key="index" class="step">
        <div class="number">
          <span>{{ index + 1 }}</span>
        </div>
        <div class="text" v-html="step" />
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    steps: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
.section-steps
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
.steps
  list-style: none
  padding: 0
  width: 45rem
  @media screen and (max-width: 66rem)
    width: 100%
  .step
    display: flex
    flex-direction: column
    flex-wrap: nowrap
    justify-content: flex-start
    align-content: center
    align-items: center
    margin: 0 0 2rem 0
    &:last-of-type
      margin: 0
  .number
    display: flex
    flex-direction: row
    flex-wrap: nowrap
    justify-content: center
    align-content: center
    align-items: center
    border-radius: 50%
    background: $color-primary
    width: 3rem
    height: 3rem
    color: $color-light
    margin: 0 0 .5rem 0
    font-weight: bold
</style>
