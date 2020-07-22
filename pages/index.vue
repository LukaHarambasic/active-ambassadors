<template>
  <div>
    <index-modal />
    <index-hero :slogan="slogan" />
    <index-steps :title="jerseyTitle" :steps="jerseySteps" />
    <index-newsletter :title="newsletterTitle" />
    <index-counter :title="ambassadorsTitle" />
    <index-organisations :title="organisationsTitle" />
    <index-mail :title="contactTitle" :email="contactEmail" />
  </div>
</template>

<script>
import IndexModal from '@/components/Index/IndexModal'
import IndexHero from '@/components/Index/IndexHero'
import IndexSteps from '@/components/Index/IndexSteps'
import IndexCounter from '@/components/Index/IndexCounter'
import IndexNewsletter from '@/components/Index/IndexNewsletter'
import IndexOrganisations from '@/components/Index/IndexOrganisations'
import IndexMail from '@/components/Index/IndexMail'

export default {
  components: {
    IndexModal,
    IndexHero,
    IndexSteps,
    IndexCounter,
    IndexNewsletter,
    IndexOrganisations,
    IndexMail
  },
  async asyncData({ $prismic, error }) {
    try {
      const { data } = await $prismic.api.getSingle('home', { lang: 'en-us' })
      const jerseySteps = data.jersey_steps.map(
        (item) => item.jersey_step_text[0].text
      )
      return {
        slogan: data.slogan[0].text,
        ambassadorsTitle: data.ambassadors_title[0].text,
        newsletterTitle: data.newsletter_title[0].text,
        organisationsTitle: data.organisations_title[0].text,
        jerseyTitle: data.jersey_title[0].text,
        jerseySteps,
        contactTitle: data.contact_title[0].text,
        contactEmail: data.contact_email[0].text
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>

<style lang="sass" scoped></style>
