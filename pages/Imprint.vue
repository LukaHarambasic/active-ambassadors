<template>
  <div>
    <section class="section-imprint primary">
      <div class="content">
        <h2 v-text="title" />
      </div>
    </section>
    <section class="primary-light">
      <div class="content">
        <div v-html="$prismic.asHtml(content)" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic, error }) {
    try {
      const { data } = await $prismic.api.getSingle('imprint', {
        lang: 'en-us'
      })
      return {
        title: data.title[0].text,
        content: data.content
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Prismic single not found' })
    }
  }
}
</script>

<style lang="sass" scoped></style>
