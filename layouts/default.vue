<template>
  <div>
    <portal-target name="modal"></portal-target>
    <the-header class="header" />
    <main>
      <nuxt />
    </main>
    <the-footer />
  </div>
</template>

<script>
import TheFooter from '@/components/TheFooter'
import TheHeader from '@/components/TheHeader'
export default {
  components: { TheHeader, TheFooter },
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
.header
  background: $color-primary
</style>
