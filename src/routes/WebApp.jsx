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
      getAlbumsInfo(token)
    }
  }, [])

//! USE HOOKS FOR REQUEST !
  const [username, setUsername] = useState(null)

  const getUserInfo = async (token) => {
    const result = await fetch(`https://api.spotify.com/v1/me`, {
      method: 'GET',
      headers: {'Authorization' : 'Bearer ' + token}
    })
    const userinfo = await result.json()

    setUsername(userinfo.display_name)
  }


  const [albumsInfo, setAlbumsInfo] = useState([])
  const [timeRange, setTimeRange] = useState('short_term')

  const getAlbumsInfo = async (token) => {
    const result = await fetch(`https://api.spotify.com/v1/me/top/tracks?time_range=${timeRange}&limit=8`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + token}
    })
    const data = await result.json()
    setAlbumsInfo(data.items)
  }
//! USE HOOKS FOR REQUEST !

  useEffect(() => {
    getAlbumsInfo(token)
  }, [timeRange])

  const albumsURL = albumsInfo.map(album => album.album.images[0].url)

  return (
    <>
      <div className='webApp-buttons'>
        <button type='button' onClick={() => setTimeRange('short_term')} className={timeRange === 'short_term' ? 'btn btn-outline-dark active' : 'btn btn-outline-dark'}>Last Month</button>
        <button type='button' onClick={() => setTimeRange('medium_term')} className={timeRange === 'medium_term' ? 'btn btn-outline-dark active' : 'btn btn-outline-dark'}>Last 6 Months</button>
        <button type='button' onClick={() => setTimeRange('long_term')} className={timeRange === 'long_term' ? 'btn btn-outline-dark active' : 'btn btn-outline-dark'}>Last Year</button>
      </div>

      <CoverColorInfo albumsURL={albumsURL} albumsInfo={albumsInfo} />
    </>
  )
}

export default WebApp