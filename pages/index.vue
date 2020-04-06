<template>
  <div>
    <portal to="modal">
      <div v-if="organisationOpen" class="overlay">
        <div class="modal">
          <img
            :src="organisationOpen.logo"
            :title="organisationOpen.title"
            :alt="organisationOpen.title"
          />
          <div class="content">
            <h3>{{ organisationOpen.title }}</h3>
            <p>{{ organisationOpen.description }}</p>
            <a :href="organisationOpen.website"
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
      <h2>The Organisations We Support</h2>
      <ul class="tags">
        <li v-for="(tag, index) in tags" :key="index">{{ tag }}</li>
      </ul>
      <ul class="organisations">
        <li
          v-for="(organisation, index) in organisations"
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
      tags,
      organisationOpen: null
    }
  },
  methods: {
    onOpenModal(index) {
      this.organisationOpen = organisations[index]
    },
    onCloseModal() {
      this.organisationOpen = null
    }
  }
}
</script>

<style lang="sass" scoped>
h2
  font-size: 1.7rem
  text-align: center
.section-hero
  margin: 0 0 0 0
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
  margin: 2rem 0 0 0
.tags
  padding: 0
  margin: 1rem 0 0 0
  flex-direction: row
  flex-wrap: wrap
  justify-content: center
  align-content: center
  align-items: center
  list-style: none
  width: 100%
  li
    display: inline-block
    padding: .5rem 1.5rem
    margin: 0 1rem 1rem 0
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
    border-color: #E82C4E
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
    button
      border-radius: 0.5rem
      border: 2px solid
      border-color: #E82C4E
      padding: .5rem 1rem
      font-weight: bold
      display: inline-block
      text-decoration: none
      font-size: 1.2rem
      color: #ffffff
      background: #E82C4E
      &:hover
        color: #E82C4E
        background: transparent
        cursor: pointer

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
    border-color: #E82C4E
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
        display: flex
        flex-direction: row
        flex-wrap: nowrap
        justify-content: center
        align-content: center
        align-items: center
        border-radius: 0.5rem
        border: 2px solid
        border-color: #E82C4E
        padding: .5rem 1rem
        font-weight: bold
        display: inline-block
        text-decoration: none
        color: #E82C4E
        background: transparent
        line-height: 1.2
        &:hover
          color: #ffffff
          background: #E82C4E
</style>
