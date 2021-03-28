<template>
  <div>
    <div class="container">
      <h1 class="page-title" v-text="title" />
      <prismic-rich-text class="content" :field="content" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic, params, error }) {
    const { data } = await $prismic.api.getByUID('post', params.uid)
    return {
      title: data.title[0].text,
      category: data.category,
      content: data.content,
      image: data.image,
      spotify: data.spotify,
      itunes: data.itunes
    }
  }
}
</script>
