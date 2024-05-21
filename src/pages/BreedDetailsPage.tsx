import { useParams } from 'react-router-dom'
import { useMemo } from 'react'

import { useFindOneImageQuery } from '@/hooks/services/useImageApi'
import { BreedImage } from '@/types'
import gifCat from '@/assets/img/cat.gif'
import BackButton from '@/components/common/BackButton'
import useRoute from '@/hooks/useRoute'

import '@/assets/styles/breed-details-page.scss'
import HomeBreedImages from '@/components/HomeBreedImages'

function BreedDetailsPage() {
  const params = useParams<{ breedId: string }>()
  const { routes } = useRoute()

  const {
    data = {} as BreedImage,
    isLoading,
    error,
  } = useFindOneImageQuery(params.breedId as string, { enabled: true })

  /**
   * Breed information.
   */
  const breed = useMemo(() => data.breeds?.[0], [data])

  // Loading screen while fetching breed details
  if (isLoading) {
    return (
      <div className="page-breed-loading-wrapper">
        <p className="text-loading !text-primary-500 mb-8">
          Fetching breed details...
        </p>
        <img src={gifCat} alt="Loading" className="w-48 h-48" />
      </div>
    )
  }

  // If there is an error fetching the breed details
  if (error) {
    return (
      <div className="page-breed-loading-wrapper">
        <p className="text-red-500 mb-8 text-lg">
          Failed to fetch breed details.
        </p>
        <span className="text-7xl">😿</span>
        <BackButton
          to={routes.home.path}
          text="Home Page"
          className="btn btn-primary mt-8"
        />
      </div>
    )
  }

  return (
    <main id="page-breed-details" className="min-h-screen">
      <div className="pt-12 sm:pt-16 md:pt-20 lg:pt-24 bg-primary-300 flex justify-center relative min-h-72">
        <BackButton
          to={routes.home.path}
          text="Home Page"
          className="absolute top-8 left-8"
        />
        <div className="shrink-0 rounded-3xl inline-block absolute -bottom-48 border-8 border-white">
          <img
            src={data.url}
            alt={breed?.name}
            className="w-96 h-96 object-cover object-center rounded-2xl border-8 border-primary-300"
          />
        </div>
      </div>
      <section className="bg-white pt-48 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-7xl mx-auto p-8 md:p-12 text-center space-y-6 md:space-y-8">
          <div>
            <p className="info-title">Name</p>
            <h1 className="text-2xl md:text-4xl font-black">{breed?.name}</h1>
          </div>
          <div>
            <p className="info-title">Origin</p>
            <p className="info-content">{breed?.origin}</p>
          </div>
          <div>
            <p className="info-title">Temperament</p>
            <p className="info-content">{breed?.temperament}</p>
          </div>
          <div>
            <p className="info-title">Bio</p>
            <p className="info-content max-w-3xl mx-auto">
              {breed?.description}
            </p>
          </div>
        </div>
      </section>
      <HomeBreedImages titlePrefix="You might also love" />
    </main>
  )
}

export default BreedDetailsPage
