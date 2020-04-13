<template>
  <section class="section-look">
    <h2>How it looks like</h2>
    <div class="content">
      <img
        :srcset="
          require('~/assets/images/leonard_active_ambassadors.jpg').srcSet
        "
        title="ACTIVE-AMBASSADORS - How it looks like"
        alt="ACTIVE-AMBASSADORS - How it looks like"
      />
    </div>
  </section>
</template>

<style lang="sass" scoped>
.section-look
  margin: 6rem 0 0 0
  display: flex
  flex-direction: column
  flex-wrap: nowrap
  justify-content: center
  align-content: center
  align-items: center
  @media screen and (max-width: 45rem)
    margin: 3rem 0 0 0
  p
    margin: 0 0 1rem 0
  img
    border-radius: $border-radius
</style>
