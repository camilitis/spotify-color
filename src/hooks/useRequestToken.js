import { useEffect, useState } from 'react'

// const { data, error, loading } = useFetch(url) 
// export const userFetch = (url)  ={}

export const useRequestToken = () => {
  var [token, setToken ] = useState('')

  useEffect(() => {
    const hash = window.location.hash

    if(hash.includes('access_token')){
      const newtoken = hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1]

      window.location.hash = ''

      token = newtoken
      setToken(token)
    }
  }, [])

  return { token }

}