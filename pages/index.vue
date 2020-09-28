<template>
  <div>
    <index-modal />
    <section-hero />
    <section-about />
    <section-active-ambassadors />
    <section-ambassador-box />
    <section-partners />
  </div>
</template>

<script>
import IndexModal from '@/components/Index/IndexModal'
import SectionHero from '@/components/SectionHero'
import SectionAmbassadorBox from '@/components/SectionAmbassadorBox'
import SectionAbout from '@/components/SectionAbout'
import SectionActiveAmbassadors from '@/components/SectionActiveAmbassadors'
import SectionPartners from '@/components/SectionPartners'

export default {
  components: {
    IndexModal,
    SectionHero,
    SectionAmbassadorBox,
    SectionAbout,
    SectionActiveAmbassadors,
    SectionPartners
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
      error({ statusCode: 404, message: 'Prismic single not found' })
    }
  }
}
</script>

<style lang="sass" scoped></style>
