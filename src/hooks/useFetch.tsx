import { useEffect, useState } from 'react';

const useFetch = (url: string) => {

  const [data, setData] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const [error, setError] = useState(null)

  useEffect( () => {

    fetch(url)
      .then( response => response.json())
      .then( data => {
        setData(data)
        setLoaded(true)
      })
      .catch( error => {
        setError(error)
        setLoaded(true)
      })

  }, [url])

  return { data, isLoaded, error }

}

export default useFetch