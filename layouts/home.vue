<template>
  <div>
    <portal-target name="modal"></portal-target>
    <div class="blobs">
      <the-header />
      <section-hero />
    </div>
    <main>
      <nuxt />
    </main>
    <the-footer />
  </div>
</template>

<script>
import TheFooter from '@/components/TheFooter'
import TheHeader from '@/components/TheHeader'
import SectionHero from '@/components/SectionHero'
export default {
  name: 'Home',
  components: { TheHeader, TheFooter, SectionHero },
  async fetch() {
    await this.fetchAll()
  },
  computed: {
    title() {
      return this.$store.state.title
    }
  },
  methods: {
    async fetchAll() {
      await this.$store.dispatch('fetchAmbassadorsSum')
      await this.$store.dispatch('fetchExpenses')
      await this.$store.dispatch('fetchIncome')
      await this.$store.dispatch('fetchExpensesPerKitAndSum')
    }
  }
}
</script>

<style lang="sass">
.blobs
  background-image: url("/design/blobs_hero.svg")
  background-color: $color-primary
</style>
