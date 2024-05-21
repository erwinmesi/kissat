import { useMemo } from 'react'

import { BreedImage } from '@/types'
import { useAppContext } from '@/context/AppContext'
import { useFindAllImagesQuery } from '@/hooks/services/useImageApi'

import EndOfList from '@/components/common/EndOfList'
import BreedImageLink from './breed/BreedImageLink'

interface HomeBreedImagesProps {
  titlePrefix?: string;
}

function HomeBreedImages({ titlePrefix }: HomeBreedImagesProps) {
  const { selectedBreed } = useAppContext()

  const {
    data = { pages: [] },
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useFindAllImagesQuery({ breed_id: selectedBreed?.id }, { enabled: true })

  // Breed image without duplicates
  const uniqueImages = useMemo(() => {
    const uniqueImageList: BreedImage[] = []

    // Loop through all pages and images
    data.pages.forEach((images: BreedImage[]) => {
      images.forEach((image: BreedImage) => {
        // Check if image already exists in the list
        const alreadyExists = uniqueImageList.some(
          (img) => img.id === image.id
        )

        // If not, add it to the `uniqueImageList` list
        if (!alreadyExists) {
          uniqueImageList.push(image)
        }
      })
    })

    return uniqueImageList
  }, [data.pages])

  return (
    <section className="bg-primary-100 py-12 sm:py-16 md:py-20 lg:py-24 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {titlePrefix && (
          <p className="text-lg text-center text-primary-600 font-semibold mb-2">
            {titlePrefix}
          </p>
        )}
        <h2 className="text-2xl font-bold text-center mb-8 md:mb-12">
          {selectedBreed?.id ? (
            <>
              <span className="text-primary-500">{selectedBreed?.name}</span>{' '}
              Cats
            </>
          ) : (
            <>
              Some of our <span className="text-primary-500">favorite</span>{' '}
              cats
            </>
          )}
        </h2>
        {isLoading && <p className="text-loading">Fetching cat selfies...</p>}
        <div className="flex flex-wrap justify-center gap-8">
          {uniqueImages.map((image: any) => (
            <BreedImageLink key={image.id} image={image} />
          ))}
        </div>
        {!isLoading &&
          (hasNextPage ? (
            <div className="flex justify-center py-12">
              <button
                className="btn btn-primary px-6"
                onClick={() => fetchNextPage()}
                disabled={isFetchingNextPage}
              >
                {isFetchingNextPage ? 'Loading...' : 'Load More'}
              </button>
            </div>
          ) : (
            <EndOfList />
          ))}
      </div>
    </section>
  )
}

export default HomeBreedImages
