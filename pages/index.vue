<template>
  <div>
    <portal to="modal">
      <div v-if="organisationSelected" class="overlay">
        <div class="modal">
          <div class="left">
            <img
              :src="organisationSelected.logo"
              :title="organisationSelected.title"
              :alt="organisationSelected.title"
            />
            <ul class="tags">
              <li
                v-for="(tag, index) in organisationSelected.tags"
                :key="index"
              >
                {{ tag }}
              </li>
            </ul>
          </div>
          <div class="right">
            <h3>{{ organisationSelected.title }}</h3>
            <p>{{ organisationSelected.description }}</p>
            <a :href="organisationSelected.website" target="_blank"
              ><span>Website</span>
              <i class="material-icons">open_in_new</i>
            </a>
            <button class="close" @click.prevent="onCloseModal">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </portal>
    <section class="section-hero">
      <img src="/header_active_ambassadors.png" title="" alt="" />
      <blockquote>
        We bring athletes and NGOs together. Brand your jersey now.
      </blockquote>
    </section>
    <section class="section-newsletter">
      <h2>Stay updated</h2>
      <div class="content">
        <form
          id="mc-embedded-subscribe-form"
          action="https://active-ambassadors.us19.list-manage.com/subscribe/post?u=ff764f6cd454e326a56c63ca2&amp;id=93128bcb5f"
          method="post"
          name="mc-embedded-subscribe-form"
          class="validate"
          target="_blank"
          novalidate
        >
          <div class="inputs">
            <input
              id="mce-EMAIL"
              type="email"
              value=""
              name="EMAIL"
              placeholder="support@us.com"
              required
            />
            <input
              id="mc-embedded-subscribe"
              type="submit"
              value="Subscribe"
              name="subscribe"
            />
          </div>
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px;" aria-hidden="true">
            <input
              type="text"
              name="b_ff764f6cd454e326a56c63ca2_93128bcb5f"
              tabindex="-1"
              value=""
            />
          </div>
        </form>
      </div>
    </section>
    <section class="section-organisations">
      <h2>Organisations we support</h2>
      <!-- <ul class="tags">
        <li @click.prevent="onFilter('All')">
          All
        </li>
        <li
          v-for="(tag, index) in tags"
          :key="index"
          @click.prevent="onFilter(tag)"
        >
          {{ tag }}
        </li>
      </ul> -->
      <ul v-if="!isOrganisationsFilteredEmpty" class="organisations">
        <li
          v-for="(organisation, index) in organisationsFiltered"
          :key="index"
          @click.prevent="onOpenModal(index)"
        >
          <img
            :src="organisation.logo"
            :title="organisation.title"
            :alt="organisation.title"
          />
          <h3>{{ organisation.title }}</h3>
        </li>
      </ul>
      <p v-else>
        Sorry, there isn't a organisation which matches the tag
        {{ tagSelected }}. But if you know an organisation which should be
        included here send us an email.
      </p>
    </section>
    <section class="section-look">
      <h2>How it might look like</h2>
      <div class="content">
        <p>
          You might not look as good as Leonard, but at least you would do
          something valuable like he is doing :)
        </p>
        <img src="leonard_active_ambassadors.jpg" alt="" title="" />
      </div>
    </section>
    <section class="section-mail">
      <h2>Contact us</h2>
      <div class="content">
        <a href="mailto:hi@active-ambassadors.com">hi@active-ambassadors.com</a>
      </div>
    </section>
  </div>
</template>

<script>
import { tags } from '@/content/tags.json'
import { organisations } from '@/content/organisations.json'

export default {
  components: {},
  data() {
    return {
      organisations,
      tags: this.sortArrayAlphabetically(tags),
      organisationSelected: null,
      tagSelected: 'All'
    }
  },
  computed: {
    organisationsFiltered() {
      if (!this.tagSelected) return this.organisations
      if (this.tagSelected === 'All') return this.organisations
      return this.organisations.filter((organisation) =>
        organisation.tags.includes(this.tagSelected)
      )
    },
    isOrganisationsFilteredEmpty() {
      return this.organisationsFiltered.length === 0
    }
  },
  methods: {
    onOpenModal(index) {
      this.organisationSelected = organisations[index]
    },
    onCloseModal() {
      this.organisationSelected = null
    },
    onFilter(tag) {
      this.tagSelected = tag
    },
    sortArrayAlphabetically(array) {
      return array.sort()
    },
    shuffleArray(array) {
      // https://gist.github.com/guilhermepontes/17ae0cc71fa2b13ea8c20c94c5c35dc4
      return array
        .map((a) => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map((a) => a[1])
    }
  }
}
</script>

<style lang="sass" scoped>
h2
  font-size: 1.7rem
  text-align: center
  margin: 0 0 1rem 0

section
  > .content
    width: 45rem
    @media screen and (max-width: 66rem)
      width: 100%

.section-hero
  img
    position: relative
    border-radius: 0.5rem
  blockquote
    position: absolute
    top: 55%
    left: 50%
    transform: translate(-50%, -50%)
    text-align: center
    font-size: 3.5rem
    font-weight: bold
    color: #ffffff
    @media screen and (max-width: 66rem)
      top: 45%
      font-size: 2.5rem
    @media screen and (max-width: 45rem)
      top: 30%
      font-size: 2rem
    @media screen and (max-width: 35rem)
      top: 20%
      font-size: 1.5rem
      transform: translate(-50%, 0)
    @media screen and (max-width: 28rem)
      font-size: 1.2rem

.section-organisations
  margin: 6rem 0 0 0
  @media screen and (max-width: 45rem)
    margin: 3rem 0 0 0
  .tags
    padding: 0
    margin: 0
    display: flex
    flex-direction: row
    flex-wrap: wrap
    justify-content: center
    align-content: center
    align-items: center
    list-style: none
    width: 100%
    li
      display: inline-block
      padding: .25rem .75rem
      margin: 0 .75rem .75rem 0
      border-radius: .5rem
      border: 2px solid
      border-color: #3352C4
      color: #3352C4
      font-weight: bold
      transition: all 150ms ease-in-out
      &:hover
        background: #3352C4
        color: #ffffff
        cursor: pointer
  .organisations
    padding: 0
    margin: 1rem 0 0 0
    list-style: none
    display: flex
    flex-direction: row
    flex-wrap: wrap
    justify-content: space-between
    align-content: flex-start
    align-items: flex-start
    position: relative
    @media screen and (max-width: 45rem)
      flex-direction: column
      justify-content: flex-start
      align-content: center
      align-items: flex-start
    li
      border-radius: .5rem
      border: 2px solid
      border-color: #3352C4
      background: #ffffff
      display: inline-block
      margin: 0 0 2rem 0
      display: flex
      flex-direction: column
      flex-wrap: nowrap
      justify-content: flex-start
      align-content: flex-start
      align-items: flex-start
      padding: 2rem
      height: 20rem
      width: 20rem
      transition: all 150ms ease-in-out
      &:hover
        transform: scale(1.05)
        cursor: pointer
      @media screen and (max-width: 66rem)
        width: calc(50% - 1rem)
      @media screen and (max-width: 45rem)
        width: calc(100% - 2rem)
        height: auto
      img
        width: 100%
        max-height: 11rem
        margin: 0 0 0.5rem 0
      h3
        font-size: 1.5rem
        text-align: center
        margin: 0 0 0.5rem 0
        width: 100%

.section-newsletter
  margin: 6rem 0 0 0
  display: flex
  flex-direction: column
  flex-wrap: nowrap
  justify-content: center
  align-content: center
  align-items: center
  @media screen and (max-width: 45rem)
    margin: 3rem 0 0 0
  .inputs
    width: 45rem
    display: flex
    flex-direction: row
    flex-wrap: nowrap
    justify-content: center
    align-content: center
    align-items: center
    @media screen and (max-width: 66rem)
      width: 100%
    @media screen and (max-width: 28rem)
      flex-direction: column
      flex-wrap: nowrap
      justify-content: flex-start
      align-content: flex-start
      align-items: flex-start
    input[type="email"], input[type="submit"]
      display: inline-block
      padding: 10px 15px
      font-size: 20px
      border-radius: 0
      border: 2px solid
      transition: all 150ms ease-in-out
    input[type="email"]
      border-radius: .5rem 0 0 .5rem
      width: 60%
      border-color: #3352C4
      @media screen and (max-width: 28rem)
        width: 100%
        border-radius: .5rem
    input[type="submit"]
      border-radius: 0 .5rem .5rem 0
      width: 30%
      color: #ffffff
      background: #E82C4E
      border-color: #E82C4E
      margin: 0 0 0 .5rem
      &:hover
        color: #E82C4E
        background: #ffffff
        cursor: pointer
      @media screen and (max-width: 28rem)
        width: 100%
        margin: .5rem 0 0 0
        border-radius: .5rem

.section-look
  margin: 6rem 0 0 0
  display: flex
  flex-direction: column
  flex-wrap: nowrap
  justify-content: center
  align-content: center
  align-items: center
  @media screen and (max-width: 45rem)
    margin: 3rem 0 0 0
  p
    margin: 0 0 1rem 0
    text-align: center
  img
    border-radius: 0.5rem

.section-mail
  margin: 6rem 0 0 0
  display: flex
  flex-direction: column
  flex-wrap: nowrap
  justify-content: center
  align-content: center
  align-items: center
  text-align: center
  @media screen and (max-width: 45rem)
    margin: 3rem 0 0 0
  a
    font-size: 3rem
    line-height: 3rem
    text-align: center
    border-bottom: 2px solid
    border-color: #E82C4E
    transition: all 150ms ease-in-out
    &:hover
      color: #E82C4E
      border-color: transparent
    @media screen and (max-width: 45rem)
      font-size: 1.5rem
    @media screen and (max-width: 28rem)
      font-size: 1.2rem

.overlay
  background: rgba(255,255,255, 0.8)
  position: fixed
  left: 0
  top: 0
  width: 100vw
  height: 100%
  display: flex
  flex-direction: column
  flex-wrap: wrap
  justify-content: center
  align-content: center
  align-items: center
  z-index: 5000
  .modal
    position: relative
    border: 2px solid
    border-color: #3352C4
    background: #ffffff
    border-radius: 0.5rem
    padding: 4rem
    width: 45rem
    display: flex
    flex-direction: row
    flex-wrap: nowrap
    justify-content: space-between
    align-content: flex-start
    align-items: flex-start
    @media screen and (max-width: 45rem)
      width: calc(100% - 2rem)
    @media screen and (max-width: 38rem)
      flex-direction: column
      justify-content: flex-start
      align-content: flex-start
      align-items: flex-start
    @media screen and (max-width: 28rem)
      padding: 2rem
    .close
      border: none
      background: none
      position: absolute
      top: 1rem
      right: 1rem
      transition: all 150ms ease-in-out
      &:hover
        cursor: pointer
        svg
          fill: #E82C4E
      svg
        fill: #3352C4
        width: 3rem
        height: 3rem
    .left
      width: 33.333333333333333333%
      display: flex
      flex-direction: row
      flex-wrap: wrap
      justify-content: center
      align-content: flex-start
      align-items: flex-start
      list-style: none
      @media screen and (max-width: 38rem)
        width: 100%
        flex-direction: column
        justify-content: flex-start
        align-content: flex-start
        align-items: flex-start
    .right
      width: calc(66.666666666666666666% - 2rem)
      @media screen and (max-width: 38rem)
        width: 100%
    h3
      font-size: 1.5rem
      margin: 0 0 .5rem 0
    p
      margin: 0 0 1rem 0
    a
      border-radius: 0.5rem
      border: 2px solid
      border-color: #E82C4E
      padding: .5rem 1rem
      font-weight: bold
      display: inline-block
      text-decoration: none
      color: #E82C4E
      background: transparent
      transition: all 150ms ease-in-out
      &:hover
        color: #ffffff
        background: #E82C4E
      span, i
        vertical-align: middle
        font-size: 1.5rem
        line-height: 1.2
    .tags
      padding: 0
      margin: 1rem 0 0 0
      display: flex
      flex-direction: row
      flex-wrap: wrap
      justify-content: center
      align-content: flex-start
      align-items: flex-start
      list-style: none
      width: 100%
      @media screen and (max-width: 38rem)
        justify-content: flex-start
      li
        display: inline-block
        padding: .2rem .5rem
        margin: 0 .5rem .5rem 0
        border-radius: .5rem
        font-size: 1rem
        background: #3352C4
        color: #ffffff
</style>
