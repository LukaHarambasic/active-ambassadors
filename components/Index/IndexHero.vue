<template>
  <section class="section-hero">
    <img src="/header_active_ambassadors.png" title="" alt="" />
    <blockquote>
      We bring athletes and NGOs together. Brand your jersey now.
    </blockquote>
  </section>
</template>

<style lang="sass" scoped>
img
  position: relative
  border-radius: 0.5rem
blockquote
  position: absolute
  top: 55%
  left: 50%
  transform: translate(-50%, -50%)
  text-align: center
  font-size: 3.5rem
  font-weight: bold
  color: #ffffff
  @media screen and (max-width: 66rem)
    top: 45%
    font-size: 2.5rem
  @media screen and (max-width: 45rem)
    top: 30%
    font-size: 2rem
  @media screen and (max-width: 35rem)
    top: 20%
    font-size: 1.5rem
    transform: translate(-50%, 0)
  @media screen and (max-width: 28rem)
    font-size: 1.2rem
</style>
