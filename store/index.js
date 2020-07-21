import { shuffleArray, sortArrayAlphabetically } from '@/assets/js/array'
import api from '@/assets/js/api'

// Local Data
import { organisations } from '@/content/organisations.json'
import { tags } from '@/content/tags.json'
import { steps } from '@/content/steps.json'

export const state = () => ({
  organisations: shuffleArray(organisations),
  tags: sortArrayAlphabetically(tags),
  steps,
  selectedOrganisation: null,
  expenses: [],
  expensesPerKit: [],
  expensesPerKitSum: 0,
  income: [],
  ambassadorsSum: 0
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
  }
}

export const actions = {
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
