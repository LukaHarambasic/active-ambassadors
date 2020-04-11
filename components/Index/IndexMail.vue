<template>
  <section class="section-mail">
    <h2>Contact us</h2>
    <div class="content">
      <a href="mailto:hi@active-ambassadors.com">hi@active-ambassadors.com</a>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.section-mail
  margin: 6rem 0 0 0
  display: flex
  flex-direction: column
  flex-wrap: nowrap
  justify-content: center
  align-content: center
  align-items: center
  text-align: center
  @media screen and (max-width: 45rem)
    margin: 3rem 0 0 0
  a
    font-size: 3rem
    line-height: 3rem
    text-align: center
    border-bottom: 2px solid
    border-color: #E82C4E
    transition: all 150ms ease-in-out
    &:hover
      color: #E82C4E
      border-color: transparent
    @media screen and (max-width: 45rem)
      font-size: 1.5rem
    @media screen and (max-width: 28rem)
      font-size: 1.2rem
      line-height: 1.2rem
</style>
