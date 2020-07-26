<template>
  <div>
    <section>
      <h2 v-text="title" />
      <p v-html="$prismic.asHtml(content)" />
    </section>
    <section class="video">
      <youtube v-if="url" :url="url" />
    </section>
  </div>
</template>

<script>
import Youtube from '@/components/Youtube'

export default {
  components: {
    Youtube
  },
  async asyncData({ $prismic, error }) {
    try {
      const { data } = await $prismic.api.getSingle('black', {
        lang: 'en-us'
      })
      return {
        title: data.title[0].text,
        content: data.content,
        url: data.youtube.url
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Prismic single not found' })
    }
  }
}
</script>

<style lang="sass" scoped>
section
  width: 100%
</style>
