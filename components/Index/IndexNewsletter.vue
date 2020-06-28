<template>
  <section class="section-newsletter">
    <h2>Stay updated</h2>
    <div class="content">
      <form
        id="mc-embedded-subscribe-form"
        action="https://active-ambassadors.us19.list-manage.com/subscribe/post?u=ff764f6cd454e326a56c63ca2&amp;id=93128bcb5f"
        method="post"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_blank"
        novalidate
      >
        <div class="inputs">
          <input
            id="mce-EMAIL"
            type="email"
            value=""
            name="EMAIL"
            placeholder="support@us.com"
            required
          />
          <input
            id="mc-embedded-subscribe"
            type="submit"
            value="Subscribe"
            name="subscribe"
          />
        </div>
        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div style="position: absolute; left: -5000px;" aria-hidden="true">
          <input
            type="text"
            name="b_ff764f6cd454e326a56c63ca2_93128bcb5f"
            tabindex="-1"
            value=""
          />
        </div>
      </form>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.section-newsletter
  margin: 6rem 0 0 0
  display: flex
  flex-direction: column
  flex-wrap: nowrap
  justify-content: center
  align-content: center
  align-items: center
  @media screen and (max-width: 45rem)
    margin: 3rem 0 0 0
  .inputs
    width: 45rem
    display: flex
    flex-direction: row
    flex-wrap: nowrap
    justify-content: center
    align-content: center
    align-items: center
    @media screen and (max-width: 66rem)
      width: 100%
    @media screen and (max-width: 28rem)
      flex-direction: column
      flex-wrap: nowrap
      justify-content: flex-start
      align-content: flex-start
      align-items: flex-start
    input[type="email"], input[type="submit"]
      display: inline-block
      padding: 10px 15px
      font-size: 20px
      border-radius: 0
      border: $border
      transition: $animation
      -webkit-appearance: none
    input[type="email"]
      border-radius: $border-radius 0 0 $border-radius
      width: 60%
      border-color: $color-primary
      @media screen and (max-width: 28rem)
        width: 100%
        border-radius: $border-radius
    input[type="submit"]
      border-radius: 0 $border-radius $border-radius 0
      width: 30%
      color: $color-light
      background: $color-primary
      border-color: $color-primary
      margin: 0 0 0 .5rem
      &:hover
        color: $color-primary
        background: $color-light
        cursor: pointer
      @media screen and (max-width: 28rem)
        width: 100%
        margin: .5rem 0 0 0
        border-radius: $border-radius
</style>
