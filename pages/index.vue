<template>
  <div>
    <portal to="modal">
      <div v-if="organisationSelected" class="overlay">
        <div class="modal">
          <img
            :src="organisationSelected.logo"
            :title="organisationSelected.title"
            :alt="organisationSelected.title"
          />
          <div class="content">
            <h3>{{ organisationSelected.title }}</h3>
            <p>{{ organisationSelected.description }}</p>
            <a :href="organisationSelected.website"
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
    <section class="section-organisations">
      <h2>Organisations We Support</h2>
      <ul class="tags">
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
      </ul>
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
          <!-- <button @click.prevent="onOpenModal(index)">
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </button> -->
        </li>
      </ul>
      <p v-else>
        Sorry, there isn't a organisation which matches the tag
        {{ tagSelected }}. But if you know an organisation which should be
        included here send as an email.
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
.section-organisations
  margin: 6rem 0 0 0
.section-look
  margin: 6rem 0 0 0
  display: flex
  flex-direction: column
  flex-wrap: wrap
  justify-content: center
  align-content: center
  align-items: center
  .content
    width: 45rem
    p
      margin: 0 0 1rem 0
    img
      border-radius: 0.5rem
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
  li
    // box-shadow: 2px 2px 4px 0px rgba(0,0,0, .5)
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
    img
      width: 100%
      max-height: 11rem
      margin: 0 0 0.5rem 0
    h3
      font-size: 1.5rem
      text-align: center
      margin: 0 0 0.5rem 0
      width: 100%

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
    .close
      border: none
      background: none
      position: absolute
      top: 1rem
      right: 1rem
      &:hover
        cursor: pointer
        svg
          fill: #E82C4E
      svg
        fill: #3352C4
        width: 3rem
        height: 3rem
    img
      width: 33.333333333333333333%
    .content
      width: calc(66.666666666666666666% - 2rem)
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
      &:hover
        color: #ffffff
        background: #E82C4E
      span, i
        vertical-align: middle
        font-size: 1.5rem
        line-height: 1.2
</style>
