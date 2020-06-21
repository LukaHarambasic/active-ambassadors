<template>
  <div>
    <index-modal />
    <index-hero />
    <index-steps />
    <index-newsletter />
    <index-organisations />
    <index-mail />
  </div>
</template>

<script>
import IndexModal from '@/components/Index/IndexModal'
import IndexHero from '@/components/Index/IndexHero'
import IndexSteps from '@/components/Index/IndexSteps'
import IndexNewsletter from '@/components/Index/IndexNewsletter'
import IndexOrganisations from '@/components/Index/IndexOrganisations'
import IndexMail from '@/components/Index/IndexMail'

export default {
  components: {
    IndexModal,
    IndexHero,
    IndexSteps,
    IndexNewsletter,
    IndexOrganisations,
    IndexMail
  }
}
</script>

<style lang="sass" scoped></style>
