<template>
  <div>
    <section class="section-get-involved primary">
      <div class="content">
        <h2>Meet the team</h2>
        <p>
          Active Ambassadors is a group of sports enthusiasts that want to make
          the world a better place and we believe that everyone can make a
          change. We see athletes with sponsors on their jersey. Why not
          printing NGO logos on your jerseys to sport their work? Want to learn
          more? Get in touch!
        </p>
      </div>
    </section>
    <section class="section-team">
      <div class="content">
        <h2>The Team</h2>
        <ul class="team">
          <li v-for="(member, index) in team" :key="index">
            <img :src="member.picture" :alt="getAlt(member.name)" />
            <div class="title-row">
              <h4 class="title" v-text="member.name" />
              <ul class="contact">
                <li>
                  <a :href="member.linkedin"><icon-linkedin /></a>
                </li>
                <li>
                  <a :href="getMailto(member.email)"><icon-email /></a>
                </li>
              </ul>
            </div>
            <span class="position" v-text="member.position" />
            <ul class="sport">
              <li
                v-for="(emoji, indexSport) in member.sports"
                :key="indexSport"
              >
                <span v-text="emoji" />
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
          picture: '/team/active-ambassador-leo.png',
          name: 'Leonard',
          position: 'Organizations, Production & Shipping',
          linkedin: 'https://www.linkedin.com/in/leonardschwier/',
          email: 'leonard@active-ambassadors.org',
          sports: ['🏃', '🚴‍']
        },
        {
          picture: '/team/active-ambassador-julia.png',
          name: 'Julia',
          position: 'Marketing & Podcast',
          linkedin: 'https://www.linkedin.com/in/julia-ha%C3%9Ffeld/',
          email: 'julia@active-ambassadors.org',
          sports: ['🏃🏼‍', '🧘🏼']
        },
        {
          picture: '/team/active-ambassador-julia-mt.png',
          name: 'Julia',
          position: 'Digital Creation & Podcast',
          linkedin:
            'https://www.linkedin.com/in/julia-margeth-theuer-she-her-30619210b/',
          email: 'julia.mt@active-ambassadors.org',
          sports: ['🧗‍‍', '🚴', '💃']
        },
        {
          picture: '/team/active-ambassador-luka.jpg',
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
    getMailto: (mail) => `mailto:${mail}`,
    getAlt: (name) => `Active Ambassadors - $name`
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
  > li
    width: calc((100% / 4) - ((3 * 2rem) / 4)) // 100% / n - ((n-1) * spacing) / n
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
  min-height: 10rem
  border-radius: $border-radius
.title-row
  display: flex
  flex-direction: row
  flex-wrap: nowrap
  justify-content: flex-start
  align-content: flex-start
  align-items: center
.title
  font-size: 1.5rem
  line-height: 1
.contact
  list-style: none
  padding: 0
  display: flex
  flex-direction: row
  flex-wrap: nowrap
  justify-content: flex-start
  align-content: center
  align-items: center
  li
    font-size: 1.2rem
    margin: 0 0 0 .5rem
    text-align: center
    display: flex
    flex-direction: row
    flex-wrap: nowrap
    justify-content: center
    align-content: center
    align-items: center
    a
      border: none
      display: inline
      &:hover
        border: none
        transform: scale(1.2)
    svg
      background: $color-light
      height: 1rem
      transition: $animation
      fill: $color-secondary
      border-radius: 2px
.position
  margin: 0 0 .5rem 0
  text-align: center
.sport
  list-style: none
  padding: 0
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
</style>
