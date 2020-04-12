export const sortArrayAlphabetically = (array) => {
  return array.sort()
}

export const shuffleArray = (array) => {
  // https://gist.github.com/guilhermepontes/17ae0cc71fa2b13ea8c20c94c5c35dc4
  return array
    .map((a) => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map((a) => a[1])
}
