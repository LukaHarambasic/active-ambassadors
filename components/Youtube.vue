<template>
  <div class="embed-container">
    <iframe
      v-if="isLoaded"
      :src="url"
      frameborder="0"
      allow="accelerometer autoplay encrypted-media gyroscope picture-in-picture"
      allowfullscreen
    ></iframe>
    <div v-else class="load-video">
      <p>
        We have <a :href="url">this YouTube video</a> embedded to provide you
        some additional information. If you want to load it, it will collect
        data about you.
      </p>
      <button @click="onLoad">Load Video</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isLoaded: false
    }
  },
  methods: {
    onLoad() {
      this.isLoaded = true
    }
  }
}
</script>

<style lang="sass" scoped>
.embed-container
  margin: 2rem 0 0 0
  position: relative
  padding-bottom: 56.25%
  height: 0
  overflow: hidden
  max-width: 100%
  iframe,
  object,
  embed
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
.load-video
  padding: 2rem
  width: 60%
  margin: 0 0 0 20%
  border: $border
  border-radius: $border-radius
  @media screen and (max-width: 66rem)
    width: 100%
    margin: 0
  p
    margin: 0 0 1rem 0
  button
    font-size: 1.2rem
    text-align: center
    border: $border-width solid $color-secondary
    border-radius: $border-radius
    background: $color-secondary
    color: $color-light
    transition: $animation
    padding: .25rem .5rem
    &:hover
      color: $color-secondary
      background: $color-light
      cursor: pointer
</style>
