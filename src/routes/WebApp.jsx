import React from 'react'
import { useEffect, useState } from 'react'

const WebApp = () => {

  const _getGenres = async (token) => {
    const result = await fetch('https://api.spotify.com/v1/me/top/tracks', {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + token}
    })
    const data = await result.json()
    console.log(data.items[0].album.images[0].url)
  }


  var [token, setToken] = useState('')

  useEffect(() => {
    const hash = window.location.hash

    if(hash.includes('access_token')) {
      const newtoken = hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1]

      window.location.hash = ''

      token = newtoken
      setToken(token)
      _getGenres(token)
console.log(token)

    }
  }, [])

  return (
    <>
    {/* {token} */}
    </>
  )
}

export default WebApp