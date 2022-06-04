import React from 'react'
import { useEffect, useState } from 'react'
import CoverColorInfo from '../hooks/CoverColorsInfo'

const WebApp = () => {
  var [token, setToken] = useState('')

  useEffect(() => {
    const hash = window.location.hash

    if(hash.includes('access_token')) {
      const newtoken = hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1]

      window.location.hash = ''

      token = newtoken
      setToken(token)
      getUserInfo(token)
    }
  }, [])

  const [albumsInfo, setAlbumsInfo] = useState([])

  const getUserInfo = async (token) => {
    const result = await fetch('https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=10', {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + token}
    })
    const data = await result.json()
    setAlbumsInfo(data.items)
  }

  const albumsURL = albumsInfo.map(album => album.album.images[0].url)

  return (
    <>
      <CoverColorInfo albumsURL={albumsURL} albumsInfo={albumsInfo} />
    </>
  )
}

export default WebApp