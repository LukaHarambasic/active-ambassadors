<template>
  <div>
    <section>
      <h2>Transparency</h2>
      <p>
        Active-Ambassadors is a non-profit project that is encouraging athletes
        to brand their jerseys with sponsoring for NGOs. We send a DIY material
        kit to our ambassadors so they can iron the branding on their shirts
        themselves.
      </p>
    </section>
    <transparency-expenses v-if="expenses" />
    <section v-if="expensesPerKit">
      <h2>Costs per DIY kit</h2>
      <p>
        One DIY kit costs us about <strong>{{ expensesPerKitSum }} €</strong>.
        If you want to have a closer look, you can also take a look at the
        <a
          href="https://docs.google.com/spreadsheets/d/1IQuvNWEWRC5HMRhYhcOUJRylo6w5Js3lBl6lw_DgEiI/edit#gid=183902468"
          target="_blank"
          >Google Sheet</a
        >
        here.
      </p>
      <transparency-expenses-per-unit />
    </section>
    <section>
      <h2>Tech</h2>
      <p>
        We not only publish our expenses but also our development is completely
        transparent. Do not hesitate to open an issue or to create a Pull
        Request when you think it's necessary.
        <a
          target="_blank"
          href="https://github.com/LukaHarambasic/active-ambassadors"
          >GitHub</a
        >
      </p>
    </section>
    <section v-if="lastUpdated" class="last-updated">
      <p>Last Updated: {{ lastUpdated }}</p>
    </section>
  </div>
</template>

<script>
import TransparencyExpensesPerUnit from '@/components/Transparency/TransparencyExpensesPerUnit'
import TransparencyExpenses from '@/components/Transparency/TransparencyExpenses'

export default {
  components: {
    TransparencyExpenses,
    TransparencyExpensesPerUnit
  },
  computed: {
    lastUpdated() {
      return this.$store.state.general.lastUpdated
    },
    expenses() {
      return this.$store.state.expenses
    },
    expensesPerKit() {
      return this.$store.state.expensesPerKit
    },
    expensesPerKitSum() {
      return this.$store.state.expensesPerKitSum
    }
  }
}
</script>

<style lang="sass" scoped>
section
  margin: 0 0 4rem 0
  p
    margin: 0 0 2rem 0
.last-updated
  p
    text-align: center
    font-size: 1rem
</style>
