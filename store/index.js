import { shuffleArray, sortArrayAlphabetically } from '@/assets/js/array.js'

// Data
import { organisations } from '@/content/organisations.json'
import { tags } from '@/content/tags.json'

export const state = () => ({
  organisations: shuffleArray(organisations),
  tags: sortArrayAlphabetically(tags),
  selectedOrganisation: null
})

export const mutations = {
  selectOrganisation(state, index) {
    state.selectedOrganisation = state.organisations[index]
  },
  deselectOrganisation(state) {
    state.selectedOrganisation = null
  }
}
