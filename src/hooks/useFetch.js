import { useState, useEffect, useRef } from "react";

export const useFetch = (url, method = 'GET') => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const [options, setOptions] = useState(null)

    const postData = (postData) => {
      setOptions({
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)
      })
    }

    useEffect(() => {
      const controller = new AbortController()
      const signal = controller.signal



      const fetchData = async (options) => {
        setIsPending(true)

        try {
          const response = await fetch(url, {...options, signal })

          if (!response.ok) {
            throw new Error(response.statusText)
          }
          const data = await response.json()

          setIsPending(false)
          setData(data)
          setError(null)
        } catch (err) {
          if (err.name === 'AbortError') {
            console.log('the fetch was aborted')
          } else {
            setIsPending(false)
            setError('Could not fetch the data')
          }
        }
      }
      if (method === 'GET') {
        fetchData()
      }

      if (method === 'POST' && options) {
        fetchData(options)
      }

      return () => {
        controller.abort()
      }
      
    }, [url, method, options])

    return { data, isPending, error, postData }
}
