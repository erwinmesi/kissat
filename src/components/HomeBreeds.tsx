import { useFindAllBreedsQuery } from '@/hooks/services/useBreedApi'
import { useBreed } from '@/hooks/useBreed'

function HomeBreeds() {
  const { data: breeds = [], isLoading } = useFindAllBreedsQuery({
    enabled: true,
  })

  const { getHighlights } = useBreed()

  const highlightedBreeds = getHighlights(breeds)

  return (
    <section className="bg-primary-50 py-12 sm:py-16 md:py-20 lg:py-24 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center mb-8 md:mb-12 items-center gap-4">
          <h2 className="text-2xl font-bold text-center">
            Explore Cats by Breed
          </h2>
          <div className="px-4 py-2 border border-primary rounded-full bg-primary-100 hover:bg-primary-200 inline-block">
            <select className="bg-transparent cursor-pointer outline-none">
              <option value="">Select a breed</option>
              {breeds.map((breed: Breed) => (
                <option key={breed.id} value={breed.id}>
                  {breed.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        {isLoading && (
          <p className="text-center text-slate-500 text-sm">
            Fetching breeds...
          </p>
        )}
        <div className="breed-highlights flex flex-wrap gap-2 md:gap-4 justify-center">
          {!!highlightedBreeds.length &&
            highlightedBreeds.map((breed: Breed) => (
              <button
                key={breed.id}
                className="px-3 py-1.5 md:px-4 md:py-2 border border-primary rounded-full hover:bg-primary-200 text-sm md:text-base"
              >
                {breed.name} {breed.id}
              </button>
            ))}
        </div>
      </div>
    </section>
  )
}

export default HomeBreeds
