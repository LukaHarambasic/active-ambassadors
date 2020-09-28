<template>
  <div>
    <section class="section-get-involved primary">
      <div class="content">
        <h2>Get Involved</h2>
        <p>Lorem Ipsum</p>
      </div>
    </section>
    <section-ambassador-box :show-button="false" />
    <section>
      <div class="content">
        <h2>We need something from you :)</h2>
        <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
        <iframe
          class="airtable-embed airtable-dynamic-height"
          src="https://airtable.com/embed/shrQQPdiY3YyJk0u6?backgroundColor=blue"
          frameborder="0"
          onmousewheel=""
          width="100%"
          height="1467"
          style="background: transparent; border: 1px solid #ccc;"
        ></iframe>
      </div>
    </section>
  </div>
</template>

<script>
import SectionAmbassadorBox from '@/components/SectionAmbassadorBox'
export default {
  components: { SectionAmbassadorBox }
}
</script>

<style lang="sass" scoped></style>
