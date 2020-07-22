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
      const document = (await $prismic.api.getSingle('home')).data
      const jerseySteps = document.jersey_steps.map(
        (item) => item.jersey_step_text[0].text
      )
      return {
        slogan: document.slogan[0].text,
        ambassadorsTitle: document.ambassadors_title[0].text,
        newsletterTitle: document.newsletter_title[0].text,
        organisationsTitle: document.organisations_title[0].text,
        jerseyTitle: document.jersey_title[0].text,
        jerseySteps,
        contactTitle: document.contact_title[0].text,
        contactEmail: document.contact_email[0].text
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>

<style lang="sass" scoped></style>
