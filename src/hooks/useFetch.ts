import { useState, useEffect } from 'react'
import axios from 'axios'

//T é genérico
export function useFetch<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [isFetching, SetIsFetching] = useState(true)

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setData(response.data)
      })
      .finally(() => {
        SetIsFetching(false)
      })
  }, [])

  return { data, isFetching }
}