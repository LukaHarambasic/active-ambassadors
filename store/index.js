import { organisations } from '@/content/organisations.json'
import { tags } from '@/content/tags.json'

export const state = () => ({
  organisations,
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

// Helpers

const sortArrayAlphabetically = (array) => {
  return array.sort()
}

// const shuffleArray = (array) => {
//   // https://gist.github.com/guilhermepontes/17ae0cc71fa2b13ea8c20c94c5c35dc4
//   return array
//     .map((a) => [Math.random(), a])
//     .sort((a, b) => a[0] - b[0])
//     .map((a) => a[1])
// }
