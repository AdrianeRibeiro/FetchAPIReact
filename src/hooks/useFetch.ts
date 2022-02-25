import { useState, useEffect } from 'react'
import axios, { AxiosRequestConfig } from 'axios'

const api = axios.create({
  baseURL: 'https://api.github.com'
})

//T é genérico
export function useFetch<T = unknown>(url: string, options?: AxiosRequestConfig) {
  const [data, setData] = useState<T | null>(null)
  const [isFetching, SetIsFetching] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    api.get(url)
      .then(response => {
        setData(response.data)
      })
      .catch(err => {
        setError(err)
      })
      .finally(() => {
        SetIsFetching(false)
      })
  }, [])

  return { data, error, isFetching }
}

