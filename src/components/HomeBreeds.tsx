import { useAppContext } from '@/context/AppContext'
import { useFindAllBreedsQuery } from '@/hooks/services/useBreedApi'
import { useBreed } from '@/hooks/useBreed'
import { Breed } from '@/types'

function HomeBreeds() {
  const { selectedBreed, setSelectedBreed } = useAppContext()
  const { getHighlights } = useBreed()

  const { data: breeds = [], isLoading } = useFindAllBreedsQuery({
    enabled: true,
  })

  const highlightedBreeds = getHighlights(breeds)

  /**
   * Handle event when a breed is selected from the select box.
   */
  const handleBreedSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBreed(
      breeds.find((breed: Breed) => breed.id === e.target.value) as Breed
    )
  }

  return (
    <section className="bg-primary-50 py-12 sm:py-16 md:py-20 lg:py-24 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center mb-8 md:mb-12 items-center gap-4">
          <h2 className="text-2xl font-bold text-center">
            Explore Cats by <span className="text-primary-500">Breed</span>
          </h2>
          <div className="btn btn-primary bg-primary-100 hover:bg-primary-200 inline-block">
            <select
              className="bg-transparent cursor-pointer outline-none"
              value={selectedBreed?.id}
              onChange={handleBreedSelect}
            >
              <option value="">Select a breed</option>
              {breeds.map((breed: Breed) => (
                <option key={breed.id} value={breed.id}>
                  {breed.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        {isLoading && <p className="text-loading">Fetching breeds...</p>}
        <div className="breed-highlights flex flex-wrap gap-2 md:gap-4 justify-center">
          {!!highlightedBreeds.length &&
            highlightedBreeds.map((breed: Breed) => (
              <button
                key={breed.id}
                onClick={() => setSelectedBreed(breed)}
                className="btn btn-sm md:btn-md btn-primary"
              >
                {breed.name}
              </button>
            ))}
        </div>
      </div>
    </section>
  )
}

export default HomeBreeds
