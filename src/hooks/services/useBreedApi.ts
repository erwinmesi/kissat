import { useQuery } from '@tanstack/react-query'
import useAxios from '@/hooks/useAxios'

const ENDPOINT = '/v1/breeds'

export default function useBreedApi() {
  const { api } = useAxios()

  /**
   * Fetch all breeds.
   */
  const findAll = async () => api.get(`${ENDPOINT}`)

  return {
    findAll,
  }
}

/**
 * React Query hook to trigger `findAll`
 */
export const useFindAllBreedsQuery = (options: any = {}) => {
  const { findAll } = useBreedApi()

  return useQuery<any>({
    queryKey: ['breeds'],
    queryFn: () => findAll().then(({ data }) => data),
    ...options,
  })
}
