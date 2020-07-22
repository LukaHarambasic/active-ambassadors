<template>
  <section class="section-organisations">
    <h2>Organisations we support</h2>
    <!-- <ul class="tags">
        <li @click.prevent="onFilter('All')">
          All
        </li>
        <li
          v-for="(tag, index) in tags"
          :key="index"
          @click.prevent="onFilter(tag)"
        >
          {{ tag }}
        </li>
      </ul> -->
    <ul v-if="!isOrganisationsFilteredEmpty" class="organisations">
      <li
        v-for="(organisation, index) in organisationsFiltered"
        :key="index"
        @click.prevent="onOpenModal(index)"
      >
        <img
          :src="organisation.logo"
          :title="organisation.title"
          :alt="organisation.title"
        />
        <h3>{{ organisation.title }}</h3>
      </li>
    </ul>
    <p v-else>
      Sorry, there isn't a organisation which matches the tag
      {{ tagSelected }}. But if you know an organisation which should be
      included here send us an email.
    </p>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      tagSelected: 'All'
    }
  },
  computed: {
    organisations() {
      return this.$store.state.organisations
    },
    tags() {
      return this.$store.state.tags
    },
    organisationsFiltered() {
      if (!this.tagSelected) return this.organisations
      if (this.tagSelected === 'All') return this.organisations
      return this.organisations.filter((organisation) =>
        organisation.tags.includes(this.tagSelected)
      )
    },
    isOrganisationsFilteredEmpty() {
      return this.organisationsFiltered.length === 0
    }
  },
  methods: {
    onOpenModal(index) {
      this.$store.commit('selectOrganisation', index)
    },
    onFilter(tag) {
      this.tagSelected = tag
    }
  }
}
</script>

<style lang="sass" scoped>
.section-organisations
  margin: 6rem 0 0 0
  @media screen and (max-width: 45rem)
    margin: 3rem 0 0 0
  .tags
    padding: 0
    margin: 0
    display: flex
    flex-direction: row
    flex-wrap: wrap
    justify-content: center
    align-content: center
    align-items: center
    list-style: none
    width: 100%
    li
      display: inline-block
      padding: .25rem .75rem
      margin: 0 .75rem .75rem 0
      border-radius: $border-radius
      border: $border
      border-color: $color-primary
      color: $color-primary
      font-weight: bold
      transition: $animation
      @media screen and (max-width: 45rem)
        margin: 0 0 .75rem 0
      &:hover
        background: $color-primary
        color: $color-light
        cursor: pointer
  .organisations
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
      border: $border
      border-color: $color-primary
      background: $color-light
      display: inline-block
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
      h3
        font-size: 1.5rem
        text-align: center
        margin: 0 0 0.5rem 0
        width: 100%
</style>
