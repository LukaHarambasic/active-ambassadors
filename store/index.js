import Prismic from 'prismic-javascript'
import { shuffleArray, sortArrayAlphabetically } from '@/assets/js/array'
import api from '@/assets/js/api'

// Local Data
import { tags } from '@/content/tags.json'

export const state = () => ({
  organisations: [],
  tags: sortArrayAlphabetically(tags),
  steps: [],
  selectedOrganisation: null,
  expenses: [],
  expensesPerKit: [],
  expensesPerKitSum: 0,
  income: [],
  ambassadorsSum: 0,
  cookieContent: null,
  youtubeContent: null,
  title: ''
})

export const mutations = {
  selectOrganisation(state, index) {
    state.selectedOrganisation = state.organisations[index]
  },
  deselectOrganisation(state) {
    state.selectedOrganisation = null
  },
  setExpenses(state, payload) {
    state.expenses = payload
  },
  setIncome(state, payload) {
    state.income = payload
  },
  setExpensesPerKit(state, payload) {
    state.expensesPerKit = payload
  },
  setExpensesPerKitSum(state, payload) {
    state.expensesPerKitSum = payload
  },
  setAmbassadorsSum(state, payload) {
    state.ambassadorsSum = payload
  },
  setTitle(state, payload) {
    state.title = payload
  },
  setCookieContent(state, payload) {
    state.cookieContent = payload
  },
  setYoutubeContent(state, payload) {
    state.youtubeContent = payload
  },
  setOrganisations(state, payload) {
    state.organisations = payload
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    // fetch & set general
    const { data } = await this.$prismic.api.getSingle('general', {
      lang: 'en-us'
    })
    const cookie = {
      title: data.cookie_title[0].text,
      message: data.cookie_message,
      buttonPositive: data.cookie_button_positive[0].text,
      buttonNegative: data.cookie_button_negative[0].text
    }
    const youtube = {
      message: data.youtube_message,
      button: data.youtube_button[0].text
    }
    const title = data.website_title[0].text
    commit('setCookieContent', cookie)
    commit('setYoutubeContent', youtube)
    commit('setTitle', title)
    // fetch & set organisations
    const { results } = await this.$prismic.api.query(
      Prismic.Predicates.at('document.type', 'organisations')
    )
    const organisations = results.map(({ data }) => {
      const tags = data.tags.map((tag) => tag.tags)
      return {
        title: data.title[0].text,
        description: data.description,
        logo: data.logo.url,
        website: data.website.url,
        tags
      }
    })
    const normalOrganisations = organisations.filter(
      (organisation) => !organisation.tags.find((tag) => tag === 'Love')
    )
    const advertismentOrganisation = organisations.find((organisation) =>
      organisation.tags.find((tag) => tag === 'Love')
    )
    const organisationsOrdered = {
      ...shuffleArray(normalOrganisations),
      advertismentOrganisation
    }
    commit('setOrganisations', organisationsOrdered)
  },
  async fetchExpenses({ commit, state }) {
    if (!state.expenses) return null
    commit('setExpenses', await api.fetchExpenses())
  },
  async fetchIncome({ commit, state }) {
    if (!state.income) return null
    commit('setIncome', await api.fetchIncome())
  },
  async fetchExpensesPerKitAndSum({ commit, state }) {
    if (!state.expensesPerKit) return null
    const { expenses, sum } = await api.fetchExpensesPerKitAndSum()
    commit('setExpensesPerKit', expenses)
    commit('setExpensesPerKitSum', sum)
  },
  async fetchAmbassadorsSum({ commit, state }) {
    if (state.ambassadorsSum !== 0) return null
    commit('setAmbassadorsSum', await api.fetchAmbassadorsSum())
  }
}
