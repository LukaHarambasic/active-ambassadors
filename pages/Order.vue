<template>
  <div>
    <h2 v-text="title" />
    <p v-html="$prismic.asHtml(content)" />
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic, error }) {
    try {
      const { data } = await $prismic.api.getSingle('order', {
        lang: 'en-us'
      })
      return {
        title: data.title[0].text,
        content: data.content,
        url: data.form.url
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Prismic single not found' })
    }
  },
  created() {
    if (process.client) {
      // eslint-disable-next-line nuxt/no-globals-in-created
      window.location.replace(this.url)
    }
  }
}
</script>

<style lang="sass" scoped></style>
