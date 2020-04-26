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
    <transparency-expenses />
    <section>
      <h2>Expenses per unit</h2>
      <p>
        We have costs about <strong>3.00 €</strong> per unit. If you want to
        have a closer look, you can also take a look at the
        <a
          href="https://docs.google.com/spreadsheets/d/1IQuvNWEWRC5HMRhYhcOUJRylo6w5Js3lBl6lw_DgEiI/edit#gid=183902468"
          >Google Sheet</a
        >
        here.
      </p>
      <transparency-expenses-per-unit />
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
  async fetch() {
    // TODO: add api file to fetch csv and convert it to json
  }
}
</script>

<style lang="sass" scoped>
section
  margin: 0 0 4rem 0
</style>
