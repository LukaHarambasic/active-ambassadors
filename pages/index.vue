<template>
  <div>
    <index-modal />
    <index-hero />
    <index-instruction />
    <index-newsletter />
    <index-organisations />
    <index-mail />
  </div>
</template>

<script>
import IndexModal from '@/components/Index/IndexModal'
import IndexHero from '@/components/Index/IndexHero'
import IndexInstruction from '@/components/Index/IndexInstruction'
import IndexNewsletter from '@/components/Index/IndexNewsletter'
import IndexOrganisations from '@/components/Index/IndexOrganisations'
import IndexMail from '@/components/Index/IndexMail'

export default {
  components: {
    IndexModal,
    IndexHero,
    IndexInstruction,
    IndexNewsletter,
    IndexOrganisations,
    IndexMail
  }
}
</script>

<style lang="sass" scoped></style>
