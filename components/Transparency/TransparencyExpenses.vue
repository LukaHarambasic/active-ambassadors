<template>
  <section>
    <h2>All Expenses</h2>
    <p>
      Here you can see all our expenses, if you are looking for more structured
      data check out our
      <a
        href="https://docs.google.com/spreadsheets/d/1IQuvNWEWRC5HMRhYhcOUJRylo6w5Js3lBl6lw_DgEiI/edit#gid=0"
        target="_blank"
        >Google Sheet</a
      >.
    </p>
    <ul>
      <li v-for="(item, index) in expenses" :key="index">
        <div class="top">
          <div class="top-left">
            <h4 v-if="item.title" class="title">
              {{ item.title }}
              <a
                v-if="item.link"
                :href="item.link"
                class="link"
                target="_blank"
              >
                <unicon
                  name="link"
                  width="1rem"
                  height="1rem"
                  class="icon"
                ></unicon
              ></a>
            </h4>
          </div>
          <div v-if="item.amount" class="amount">{{ item.amount }}</div>
        </div>
        <div v-if="item.date" class="date">{{ item.date }}</div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  computed: {
    expenses() {
      return this.$store.state.expenses
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
  align-items: center
  padding: 0
li
  border-bottom: 1px solid #cccccc
  margin: 0 0 1rem 0
  padding: 1rem
  width: 60%
  @media screen and (max-width: 66rem)
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
.title
  font-weight: bold
.expense
  @media screen and (max-width: 66rem)
    min-width: 30%
    text-align: right
.link
  border-radius: 50%
  width: 1.5rem
  height: 1.5rem
  text-align: center
  margin: 0 0 0 0.25rem
  @media screen and (max-width: 66rem)
    margin: 0 0 0 0.05rem
  &:hover
    border: none
    text-decoration: underline
  .icon
    fill: $color-secondary
.date
  font-size: 0.8rem
  margin: -0.25rem 0 0 0
</style>
