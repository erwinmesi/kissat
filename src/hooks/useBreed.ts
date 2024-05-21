export const useBreed = () => {
  /**
   * Simulate getting highlights from breeds
   */
  const getHighlights = (breeds: Breed[]) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

    // Get the first breed that starts with the iteration letter
    return alphabet.reduce(
      (accHighlights: Breed[], letter: string, index: number) => {
        // If the index is even, skip so that we do not get so much highlights
        if (index % 2 === 0) {
          return accHighlights
        }

        const breed = breeds.find((breed: Breed) =>
          breed.name.toLowerCase().startsWith(letter)
        )

        if (breed) {
          accHighlights.push(breed)
        }

        return accHighlights
      },
      []
    )
  }

  return {
    getHighlights,
  }
}
