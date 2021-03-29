<template>
  <div v-if="post">
    <section class="section-header primary">
      <div class="content">
        <h2 v-text="post.title" />
        <p v-text="post.description" />
      </div>
    </section>
    <section class="section-content">
      <div class="content">
        <img class="hero" :src="post.image.url" :alt="post.image.alt" />
        <prismic-rich-text class="rich-text" :field="post.content" />
      </div>
    </section>
    <section v-if="isPodcast" class="section-podcast primary-light">
      <div class="content">
        <div class="cover">
          <img
            src="/active-ambassadors-podcast-cover.svg"
            alt="Podcast Cover: Active Ambassadors"
          />
        </div>
        <div class="information">
          <div class="description">
            <h3>Active Ambassadors Podcast</h3>
            <p>
              Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
              duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus.
            </p>
          </div>
          <div class="links">
            <a :href="post.spotify.url" class="spotify podcast-button">
              <img src="/design/spotify.svg" />
            </a>
            <a :href="post.itunes.url" class="itunes podcast-button">
              <img src="/design/itunes.svg" />
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic, params }) {
    const { data } = await $prismic.api.getByUID('post', params.slug)
    const post = {
      title: data.title[0].text,
      description: data.description[0].text,
      category: data.category,
      content: data.content,
      image: data.image,
      spotify: data.spotify,
      itunes: data.itunes
    }
    return { post }
  },
  computed: {
    isPodcast() {
      return this.post.category === 'Podcast'
    }
  }
}
</script>

<style lang="sass" scoped>
.hero
  border-radius: $border-radius
  background: $color-primary-light
  padding: 1rem
  margin: 0 0 4rem 0
.section-podcast
  .content
    display: flex
    flex-direction: row
    flex-wrap: nowrap
    justify-content: flex-start
    align-content: stretch
    align-items: flex-start
    @media screen and (max-width: 28rem)
      flex-direction: column
      justify-content: flex-start
      align-items: stretch
    .cover
      margin: 0 2rem 0 0
      @media screen and (max-width: 28rem)
        margin: 0 0 2rem 0
      img
        border-radius: $border-radius
        width: 24rem
        @media screen and (max-width: 28rem)
          width: 100%
    .description
      margin: 0 0 2rem 0
    .links
      list-style: none
      padding: 0
      @media screen and (max-width: 28rem)
        display: flex
        flex-direction: column
        flex-wrap: nowrap
        justify-content: flex-start
        align-content: flex-start
        align-items: center
      a
        border: none
        display: inline-block
        &:hover
          opacity: 0.8
          border: none
</style>
