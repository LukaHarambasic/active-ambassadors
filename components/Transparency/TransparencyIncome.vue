<template>
  <section class="section-income">
    <div class="content">
      <h2>All Incomes</h2>
      <ul>
        <li v-for="(item, index) in income" :key="index">
          <div class="top">
            <div class="top-left">
              <h4 v-if="item.type" class="type">
                {{ item.type }}
              </h4>
            </div>
            <div v-if="item.amount" class="amount">{{ item.amount }}</div>
          </div>
          <div v-if="item.date" class="date">{{ item.date }}</div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    income() {
      return this.$store.state.income
    }
  }
}
</script>

<style lang="sass" scoped>
p
  margin: 0 0 2rem 0
ul
  list-style: none
  display: flex
  flex-direction: column
  flex-wrap: nowrap
  justify-content: flex-start
  align-content: stretch
  align-items: stretch
  padding: 0
  width: 100%
li
  border-bottom: 1px solid $color-grey
  margin: 0 0 1rem 0
  padding: 1rem
  width: 100%
.top
  display: flex
  flex-direction: row
  flex-wrap: nowrap
  justify-content: space-between
  align-content: stretch
  align-items: flex-start
  .top-left
    display: flex
    flex-direction: row
    flex-wrap: nowrap
    justify-content: flex-start
    align-content: stretch
    align-items: flex-start
.type
  font-weight: bold
.expense
  @media screen and (max-width: 66rem)
    min-width: 30%
    text-align: right
.date
  font-size: 0.8rem
  margin: -0.25rem 0 0 0
</style>
