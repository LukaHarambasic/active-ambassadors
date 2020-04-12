<template>
  <portal to="modal">
    <div v-if="organisation" class="overlay">
      <div v-if="organisation" class="modal">
        <div class="left">
          <img
            :src="organisation.logo"
            :title="organisation.title"
            :alt="organisation.title"
          />
          <ul class="tags">
            <li v-for="(tag, index) in organisation.tags" :key="index">
              {{ tag }}
            </li>
          </ul>
        </div>
        <div class="right">
          <h3>{{ organisation.title }}</h3>
          <p>{{ organisation.description }}</p>
          <a :href="organisation.website" target="_blank"
            ><span>Website</span>
            <i class="material-icons">open_in_new</i>
          </a>
          <button class="close" @click.prevent="onCloseModal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
              />
            </svg>
          </button>
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
  methods: {
    onCloseModal() {
      this.$store.commit('deselectOrganisation')
    }
  }
}
</script>

<style lang="sass" scoped>
.overlay
  background: rgba(255,255,255, 0.8)
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
.modal
  z-index: 1500
  border: $border
  background: $color-light
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
  .close
    border: none
    background: none
    position: absolute
    top: 1rem
    right: 1rem
    transition: $animation
    @media screen and (max-width: 28rem)
      top: 1.5rem
      right: 1.5rem
    &:hover
      cursor: pointer
      svg
        fill: $color-secondary
    svg
      fill: $color-primary
      width: 3rem
      height: 3rem
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
    @media screen and (max-width: 38rem)
      width: 100%
      flex: 1 0
      margin: 0
  h3
    font-size: 1.5rem
    margin: 0 0 .5rem 0
  p
    margin: 0 0 1rem 0
  a
    border-radius: $border-radius
    border: $border
    padding: .5rem 1rem
    font-weight: bold
    display: inline-block
    text-decoration: none
    color: $color-secondary
    background: transparent
    &:hover
      color: $color-light
      background: $color-secondary
    span, i
      vertical-align: middle
      font-size: 1.5rem
      line-height: 1.2
  .tags
    padding: 0
    margin: 1rem 0 0 0
    display: flex
    flex-direction: row
    flex-wrap: wrap
    justify-content: center
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
      font-size: 1rem
      background: $color-primary
      color: $color-light
</style>
