<template>
  <section class="section-partners">
    <div class="content">
      <h2>Support our partners</h2>
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
      <p>More are coming...</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionPartners',
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
.section-partners
  background: $color-light
.partners
  padding: 0
  margin: 1rem 0 4rem 0
  list-style: none
  display: flex
  flex-direction: row
  flex-wrap: wrap
  justify-content: space-between
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
  background: $color-primary-light
  display: flex
  flex-direction: column
  flex-wrap: nowrap
  justify-content: center
  align-content: center
  align-items: center
  padding: 2rem
  height: 20rem
  width: calc((100% / 3) - 2rem)
  margin: 0 0 2rem 0
  transition: $animation
  &:hover
    transform: scale(1.03)
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
  max-width: 100%
  max-height: 11rem
  margin: 0 0 0.5rem 0
  transition: $animation
  filter: grayscale(100%)
h3
  font-size: 1.5rem
  text-align: center
  margin: 0 0 0.5rem 0
  width: 100%
</style>
