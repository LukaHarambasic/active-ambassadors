<template>
  <div>
    <section class="primary">
      <div class="content">
        <h2>Posts</h2>
        <p>
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
          dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
          justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <!--<prismic-rich-text class="content" :field="page.content" />-->
      </div>
    </section>
    <section>
      <div class="content">
        <ul v-if="posts.length > 0" class="posts">
          <nuxt-link
            v-for="(post, index) in posts"
            :key="index"
            :to="post.slug"
            tag="li"
            class="post"
          >
            <div v-if="post.isPodcast" class="badge">Podcast</div>
            <h3 class="title" v-text="post.title" />
            <p class="description" v-text="post.description" />
            <nuxt-link class="read-more" :to="post.slug">Read more</nuxt-link>
          </nuxt-link>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic }) {
    const { results } = await $prismic.api.query(
      $prismic.predicates.at('document.type', 'post')
    )
    const posts = results
      .map((post) => {
        const data = post.data
        return {
          title: data.title[0].text,
          description: data.description[0].text,
          isPodcast: data.category === 'Podcast',
          date: post.first_publication_date,
          slug: `/posts/${post.uid}`,
          image: data.image
        }
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date))
    return { posts }
  }
}
</script>

<style lang="sass" scoped>
.posts
  display: grid
  grid-template-columns: repeat(2, 1fr)
  grid-gap: 4rem
  list-style: none
  padding: 0
  .post
    position: relative
    background: $color-primary-light
    border-radius: $border-radius
    padding: 2rem
    transition: $animation
    &:hover
      transform: scale(1.03)
      cursor: pointer
    .badge
      position: absolute
      top: -1rem
      right: -1rem
      padding: .5rem .75rem
      background: $color-primary
      color: $color-light
      border-radius: $border-radius
    .title
      margin: 0 0 .5rem 0
    .description
      flex-grow: 1
      align-self: stretch
</style>
