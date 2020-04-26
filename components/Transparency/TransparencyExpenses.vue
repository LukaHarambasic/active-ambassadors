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
            <h4 class="title">
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
          <div class="expense">{{ item.expense }}</div>
        </div>
        <div v-if="item.date" class="date">{{ item.date }}</div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      expenses: [
        {
          title: 'Circle Punch out for production',
          expense: '12.24 €',
          date: '12.04.2020',
          link: 'https://www.amazon.de/gp/product/B004ZC3AGK/'
        },
        {
          title: 'Domain',
          expense: '18.00 €',
          date: '06.04.2020',
          link: 'https://www.netcup.de/bestellen/produkt.php?produkt=20'
        },
        {
          title: '10x Transfer Paper Non-White',
          expense: '6.95 €',
          date: '06.04.2020',
          link: 'https://www.amazon.de/gp/product/B071SHL8SD/'
        },
        {
          title: 'Printer',
          expense: '64.89 €',
          date: '16.04.2020',
          link: 'https://www.amazon.de/gp/product/B074PMB9C9/'
        },
        {
          title: '10x Transfer Paper White',
          expense: '8.25 €',
          date: '18.04.2020',
          link: 'https://www.amazon.de/gp/product/B004BF6BZI/'
        },
        {
          title: '10x Transfer Paper Non-White',
          expense: '6.95 €',
          date: '18.04.2020',
          link: 'https://www.amazon.de/gp/product/B071SHL8SD/'
        },
        {
          title: '10x Envelope',
          expense: '5.99 €',
          date: '15.04.2020',
          link: 'https://www.amazon.de/gp/product/B0017RFHWG/'
        },
        {
          title: 'SUM',
          expense: '130.22 €'
        }
      ]
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
