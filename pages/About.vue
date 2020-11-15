<template>
  <div>
    <section class="section-get-involved primary">
      <div class="content">
        <h2>About Us</h2>
        <p>Get to know the team behind Active-Ambassadors.</p>
      </div>
    </section>
    <section class="section-team">
      <div class="content">
        <h2>The Team</h2>
        <ul class="team">
          <li v-for="(member, index) in team" :key="index">
            <img :src="member.picture" :alt="getAlt(member.name)" />
            <h4 class="title" v-text="member.name" />
            <span class="position" v-text="member.position" />
            <ul class="sport">
              <li
                v-for="(emoji, indexSport) in member.sports"
                :key="indexSport"
              >
                <span v-text="emoji" />
              </li>
            </ul>
            <ul class="contact">
              <li>
                <a :href="member.linkedin"><icon-linkedin /></a>
              </li>
              <li>
                <a :href="getMailto(member.email)"><icon-email /></a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import IconLinkedin from '@/components/Icons/IconLinkedin'
import IconEmail from '@/components/Icons/IconEmail'
export default {
  components: { IconEmail, IconLinkedin },
  data() {
    return {
      team: [
        {
          picture: '/active-ambassadors/active-ambassador-leo.jpg',
          name: 'Leonard',
          position: 'Organizations, Production & Shipping',
          linkedin: 'https://www.linkedin.com/in/leonardschwier/',
          email: 'leonard@active-ambassadors.org',
          sports: ['🏃', '🚴‍', '⚽']
        },
        {
          picture: '/active-ambassadors/active-ambassador-julia.jpg',
          name: 'Julia',
          position: 'Marketing',
          linkedin: 'https://www.linkedin.com/in/julia-ha%C3%9Ffeld/',
          email: 'julia@active-ambassadors.org',
          sports: ['🏃🏼‍', '🧘🏼']
        },
        {
          picture: '/active-ambassadors/active-ambassador-julia.jpg',
          name: 'Julia',
          position: 'Lorem Ipsum',
          linkedin:
            'https://www.linkedin.com/in/julia-margeth-theuer-she-her-30619210b/',
          email: 'julia.mt@active-ambassadors.org',
          sports: ['🏃🏼‍', '🧘🏼']
        },
        {
          picture: '/active-ambassadors/active-ambassador-leo.jpg',
          name: 'Luka',
          position: 'Website, Tools & Automation',
          linkedin: 'https://www.linkedin.com/in/harambasic',
          email: 'luka@active-ambassadors.org',
          sports: ['🤾', '🤾', '🤾']
        }
      ]
    }
  },
  methods: {
    getMailto: (mail) => `mailto:$mail`,
    getAlt: (mail) => `Active Ambassadors - $mail`
  }
}
</script>

<style lang="sass" scoped>
.team
  width: 100%
  list-style: none
  padding: 0
  margin: 0
  display: flex
  flex-direction: row
  flex-wrap: wrap
  justify-content: space-between
  align-content: stretch
  align-items: stretch
  li
    width: calc((100% / 3) - ((2 * 2rem) / 3)) // 100% / n - ((n-1) * spacing) / n
    border-radius: $border-radius
    background: $color-primary-light
    display: flex
    flex-direction: column
    flex-wrap: nowrap
    justify-content: flex-start
    align-content: center
    align-items: center
    padding: 2rem
    margin: 0 0 2rem 0
    @media screen and (max-width: 68rem)
      width: calc((100% / 2) - (2rem / 2))
    @media screen and (max-width: 45rem)
      width: 100%
img
  margin: 0 0 1rem 0
.title
  font-size: 1.5rem
.position
  margin: 0 0 .5rem 0
  text-align: center
.sport
  list-style: none
  padding: 0
  margin: 0 0 .5rem 0
  display: flex
  flex-direction: row
  flex-wrap: nowrap
  justify-content: flex-start
  align-content: flex-start
  align-items: flex-start
  li
    background: $color-light
    width: 2rem
    height: 2rem
    font-size: 1.2rem
    padding: 1rem
    border-radius: 100%
    text-align: center
    display: flex
    flex-direction: row
    flex-wrap: nowrap
    justify-content: center
    align-content: center
    align-items: center
    margin: 0 .5rem 0 0
.contact
  list-style: none
  padding: 0
  display: flex
  flex-direction: row
  flex-wrap: nowrap
  justify-content: flex-start
  align-content: stretch
  align-items: stretch
  li
    background: $color-light
    width: 2rem
    height: 2rem
    font-size: 1.2rem
    padding: .5rem
    border-radius: 100%
    text-align: center
    display: flex
    flex-direction: row
    flex-wrap: nowrap
    justify-content: center
    align-content: center
    align-items: center
    margin: 0 .5rem 0 0
    transition: $animation
    &:hover
      background: $color-secondary
      svg
        fill: $color-light
    a
      &:hover
        border: none
    svg
      width: 100%
      height: 100%
      transition: $animation
      fill: $color-secondary
</style>
