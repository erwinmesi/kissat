import { BreedImage } from '@/types'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import useAxios from '@/hooks/useAxios'
import qs from 'query-string'

const ENDPOINT = '/v1/images'

type FindAllParams = {
  limit?: number;
  page?: number;
  breed_id?: string;
  has_breeds?: number;
};

export default function useImageApi() {
  const { api } = useAxios()

  /**
   * Fetch all breed images.
   */
  const findAll = async (query: FindAllParams = {}) => {
    // If limit is not provided, default to 10
    query.limit = query.limit ?? 10

    // Force to only return images that have breed information
    query.has_breeds = 1

    return api.get(`${ENDPOINT}/search?${qs.stringify(query)}`)
  }

  /**
   * Fetch one breed image.
   */
  const findOne = async (imageId: string) => api.get(`${ENDPOINT}/${imageId}`)

  return {
    findAll,
    findOne,
  }
}

/**
 * React Query hook to trigger `findAll`
 */
export const useFindAllImagesQuery = (
  query: FindAllParams = {},
  options: any = {}
) => {
  const { findAll } = useImageApi()

  return useInfiniteQuery<BreedImage[]>({
    queryKey: ['images', 'breed_id', query.breed_id],
    queryFn: ({ pageParam }) =>
      findAll({
        breed_id: query.breed_id,
        page: pageParam as number,
      }).then(({ data }) => data),
    keepPreviousData: true,
    /**
     * Since the API does not return whether there is a next page or not,
     * we need to manually check if at least 1 image from the newly returned images
     * is already in the previous pages or not.
     */
    getNextPageParam: (lastPage: BreedImage[], allPages: BreedImage[][]) => {
      // Get all pages except the last page
      const firstPages = allPages.slice(0, allPages.length - 1)

      // Check if at least 1 id from the last page is in the firstPages
      const isLastPage = firstPages.some((page) =>
        page.some((image) =>
          lastPage.some((lastImage) => lastImage.id === image.id)
        )
      )

      return lastPage.length === 10 && !isLastPage
        ? allPages.length + 1
        : undefined
    },
    ...options,
  })
}

/**
 * React Query hook to trigger `fineOne`
 */
export const useFindOneImageQuery = (imageId: string, options: any = {}) => {
  const { findOne } = useImageApi()

  return useQuery<BreedImage>({
    queryKey: ['images', imageId],
    queryFn: () => findOne(imageId).then(({ data }) => data),
    ...options,
  })
}
