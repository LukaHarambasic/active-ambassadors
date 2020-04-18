<template>
  <div>
    <h2>Order your jersey now</h2>
    <p>
      Just wait a few seconds until you get redirected to a Google. Click
      <a
        href="https://forms.gle/T5Pfk9XXF3tG685cA"
        title="Order your jersey now"
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
      window.location.replace('https://forms.gle/T5Pfk9XXF3tG685cA')
    }
  }
}
</script>

<style lang="sass" scoped></style>
