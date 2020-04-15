<template>
  <div>
    <h2>Print on a black shirt</h2>
    <p>
      Just wait a few seconds until you get redirected to a YouTube video which
      will explain you how to iron the transfer paper to your jersey. Click
      <a
        href="https://www.youtube.com/watch?v=Xi_2X8sKifY"
        title="Iron On Transfer Paper For Dark Fabrics Tutorial By Photo Paper Direct"
        >here</a
      >
      if the redirect is not working.
    </p>
  </div>
</template>

<script>
export default {
  created() {
    if (process.client) {
      // eslint-disable-next-line nuxt/no-globals-in-created
      window.location.replace('https://www.youtube.com/watch?v=Xi_2X8sKifY')
    }
  }
}
</script>

<style lang="sass" scoped></style>
