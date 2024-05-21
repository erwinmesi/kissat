import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosResponse,
} from 'axios'
import { apiUrl } from '@/configs/app'

let api: any | AxiosInstance = null

export default () => {
  // This makes sure we only create the axios instance once
  if (!api) {
    api = axios.create({
      baseURL: apiUrl,
    })
  }

  api.interceptors.response.use(
    (response: AxiosResponse) => Promise.resolve(response),
    async (error: AxiosError) => Promise.reject(error)
  )

  return {
    api: api as AxiosInstance,
  }
}
