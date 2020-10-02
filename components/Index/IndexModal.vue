<template>
  <portal to="modal">
    <div v-if="organisation" class="overlay">
      <div v-if="organisation" class="modal">
        <button class="close" @click.prevent="onCloseModal">
          <unicon
            name="multiply"
            width="2rem"
            height="2rem"
            class="close-icon"
          ></unicon>
        </button>
        <div class="left">
          <img
            :src="organisation.logo"
            :title="organisation.title"
            :alt="organisation.title"
          />
          <ul v-if="organisation.tags" class="tags">
            <li v-for="(tag, index) in organisation.tags" :key="index">
              {{ tag }}
            </li>
          </ul>
        </div>
        <div class="right">
          <h3>{{ organisation.title }}</h3>
          <p v-html="$prismic.asHtml(organisation.description)" />
          <a
            v-if="organisation.website"
            :href="organisation.website"
            target="_blank"
            class="website"
            ><span>Website</span>
            <unicon
              name="external-link-alt"
              class="external-link"
              height="1.5rem"
              width="1.5rem"
            ></unicon>
          </a>
          <a
            v-if="organisation.foundraisingCampaign"
            :href="organisation.foundraisingCampaign"
            target="_blank"
            class="foundraising-campaign"
            >Visit our fundraising campaign</a
          >
        </div>
      </div>
    </div>
  </portal>
</template>

<script>
export default {
  computed: {
    organisation() {
      return this.$store.state.selectedOrganisation
    }
  },
  created() {
    if (process.client) {
      // eslint-disable-next-line nuxt/no-globals-in-created
      window.addEventListener('keyup', (event) => {
        if (event.keyCode === 27) {
          this.onCloseModal()
        }
      })
    }
  },
  methods: {
    onCloseModal() {
      this.$store.commit('deselectOrganisation')
    }
  }
}
</script>

<style lang="sass" scoped>
.overlay
  background: rgba($color-secondary, 0.7)
  position: fixed
  left: 0
  top: 0
  right: 0
  bottom: 0
  width: 100vw
  height: 100vh
  display: flex
  flex-direction: column
  flex-wrap: nowrap
  justify-content: center
  align-content: center
  align-items: center
  z-index: 1000
  @media screen and (max-width: 38rem)
    padding: 1rem
.close
  background: none
  position: absolute
  top: 1.5rem
  right: 1.5rem
  transition: $animation
  border-radius: 50%
  width: 3rem
  height: 3rem
  border: $border-width solid $color-secondary
  background: $color-light
  &:hover
    cursor: pointer
    background: $color-secondary
    .close-icon
      fill: $color-light
  .close-icon
    fill: $color-secondary
.modal
  z-index: 1500
  background: $color-primary-light
  border-radius: $border-radius
  padding: 4rem
  width: 45rem
  height: auto
  display: flex
  flex-direction: row
  flex-wrap: nowrap
  justify-content: space-between
  align-content: flex-start
  align-items: flex-start
  transition: $animation
  @media screen and (max-width: 45rem)
    width: calc(100% - 2rem)
  @media screen and (max-width: 38rem)
    flex-direction: column
    justify-content: flex-start
    align-content: flex-start
    align-items: flex-start
    width: 100%
    overflow-y: auto
  @media screen and (max-width: 28rem)
    padding: 2rem
  .left
    flex: 1 0
    display: flex
    flex-direction: row
    flex-wrap: wrap
    justify-content: center
    align-content: flex-start
    align-items: flex-start
    list-style: none
    @media screen and (max-width: 38rem)
      width: 100%
      flex-direction: column
      flex-wrap: nowrap
      justify-content: flex-start
      align-content: flex-start
      align-items: flex-start
  .right
    flex: 2
    margin: 0 0 0 2rem
    flex-direction: column
    flex-wrap: wrap
    justify-content: flex-start
    align-content: flex-start
    align-items: stretch
    @media screen and (max-width: 38rem)
      width: 100%
      flex: 1 0
      margin: 0
  h3
    font-size: 1.5rem
    margin: 0 0 .5rem 0
  p
    margin: 0 0 1rem 0
  .website
    border-radius: $border-radius
    border: $border
    border-color: $color-secondary
    padding: .5rem .75rem
    font-weight: bold
    display: inline-block
    text-decoration: none
    color: $color-secondary
    background: transparent
    font-size: 1rem
    &:hover
      color: $color-light
      background: $color-secondary
      .external-link
        fill: $color-light
    .external-link
      fill: $color-secondary
      svg
        width: 100%
        height: 100%
    .external-link, span
      vertical-align: middle
      line-height: 1
  .tags
    padding: 0
    margin: 1rem 0 0 0
    display: flex
    flex-direction: row
    flex-wrap: wrap
    justify-content: flex-start
    align-content: flex-start
    align-items: flex-start
    list-style: none
    width: 100%
    @media screen and (max-width: 38rem)
      justify-content: flex-start
    li
      display: inline-block
      padding: .2rem .5rem
      margin: 0 .5rem .5rem 0
      border-radius: .5rem
      font-size: 0.9rem
      background: $color-secondary
      color: $color-light
</style>
