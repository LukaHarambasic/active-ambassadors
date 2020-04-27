import { shuffleArray, sortArrayAlphabetically } from '@/assets/js/array'
import api from '@/assets/js/api'

// Local Data
import { organisations } from '@/content/organisations.json'
import { tags } from '@/content/tags.json'

export const state = () => ({
  organisations: shuffleArray(organisations),
  tags: sortArrayAlphabetically(tags),
  selectedOrganisation: null,
  expenses: [],
  expensesPerKit: [],
  expensesPerKitSum: 0,
  general: {}
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
  setExpensesPerKit(state, payload) {
    state.expensesPerKit = payload
  },
  setExpensesPerKitSum(state, payload) {
    state.expensesPerKitSum = payload
  },
  setGeneral(state, payload) {
    state.general = payload
  }
}

export const actions = {
  async fetchExpenses({ commit, state }) {
    if (!state.expenses) return null
    commit('setExpenses', await api.fetchExpenses())
  },
  async fetchExpensesPerKitAndSum({ commit, state }) {
    if (!state.expensesPerKit) return null
    const { expenses, sum } = await api.fetchExpensesPerKitAndSum()
    commit('setExpensesPerKit', expenses)
    commit('setExpensesPerKitSum', sum)
  },
  async fetchGeneral({ commit, state }) {
    commit('setGeneral', await api.fetchGeneral())
  }
}
