<template>
  <div>
    <section class="section-transparency primary">
      <div class="content">
        <h2 v-text="title" />
        <p v-html="$prismic.asHtml(description)" />
      </div>
    </section>
    <transparency-expenses v-if="expenses" />
    <transparency-income v-if="income" />
    <section v-if="expensesPerKit" class="section-kit primary-light">
      <div class="content">
        <h2 v-text="diyTitle" />
        <p v-html="$prismic.asHtml(diyDescription)" />
        <transparency-expenses-per-unit />
        <div class="expenses-per-kit-sum" v-text="expensesPerKitSum" />
      </div>
    </section>
    <section class="section-tech">
      <div class="content">
        <h2 v-text="techTitle" />
        <p v-html="$prismic.asHtml(techDescription)" />
      </div>
    </section>
  </div>
</template>

<script>
import TransparencyExpenses from '@/components/Transparency/TransparencyExpenses'
import TransparencyIncome from '@/components/Transparency/TransparencyIncome'
import TransparencyExpensesPerUnit from '@/components/Transparency/TransparencyExpensesPerUnit'

export default {
  components: {
    TransparencyExpenses,
    TransparencyIncome,
    TransparencyExpensesPerUnit
  },
  async asyncData({ $prismic, error }) {
    try {
      const { data } = await $prismic.api.getSingle('transparency', {
        lang: 'en-us'
      })
      return {
        title: data.title[0].text,
        description: data.description,
        expensesTitle: data.expenses_title[0].text,
        incomeTitle: data.income_title[0].text,
        diyTitle: data.diy_title[0].text,
        diyDescription: data.diy_description,
        techTitle: data.tech_title[0].text,
        techDescription: data.tech_description
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Prismic single not found' })
    }
  },
  computed: {
    expenses() {
      return this.$store.state.expenses
    },
    income() {
      return this.$store.state.income
    },
    expensesPerKit() {
      return this.$store.state.expensesPerKit
    },
    expensesPerKitSum() {
      return `${this.$store.state.expensesPerKitSum} €`
    }
  }
}
</script>

<style lang="sass" scoped>
.last-updated
  p
    text-align: center
    font-size: 1rem
.expenses-per-kit-sum
  font-weight: bold
  font-size: 1.5rem
  text-align: center
  margin: 0.5rem 0 0 0
</style>
