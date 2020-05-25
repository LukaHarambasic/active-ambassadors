<template>
  <section class="section-hero">
    <img
      :srcset="require('~/assets/images/header_active_ambassadors.png').srcSet"
      title="ACTIVE-AMBASSADORS"
      alt="ACTIVE-AMBASSADORS"
    />
    <blockquote>
      We bring athletes and NGOs together. Brand your jersey now.
    </blockquote>
  </section>
</template>
<template>
  <section>
    We will send you all what you need so you can brand your favorite jersey at home.<br />
    <p>Your favorite jersey + our do-it-yourself (DIY) kit</p>
    <br/><br/>
    <p>[1]<br/>
    Please fill in our form mentioning your address, contact details and the organisation you want to support
    <hr/>
    </p>
    <p>[2]<br/>
    We send you a parcel with a do-it yourself (DIY) kit so you can brand your own jersey at home. It is a super easy process, you just need an iron - everything else will be sent by us.
    <hr/>
    </p>
    <p>[3]<br/>
    Share you experience with us @active_ambassadors<hr/>
    </p>
  </section>
</template>

<style lang="sass" scoped>
.section-hero
  position: relative
img
  border-radius: $border-radius
blockquote
  position: absolute
  width: 70%
  top: 0
  left: 0
  font-size: 3.5rem
  font-weight: bold
  color: $color-light
  top: 50%
  left: 50%
  transform: translate(-50%,-50%)
  text-align: center
  @media screen and (max-width: 66rem)
    font-size: 2.5rem
  @media screen and (max-width: 45rem)
    width: 80%
    font-size: 2rem
  @media screen and (max-width: 35rem)
    font-size: 1.5rem
  @media screen and (max-width: 28rem)
    font-size: 1.2rem
</style>
