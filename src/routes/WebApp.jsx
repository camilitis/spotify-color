import React from 'react'
import { useEffect, useState } from 'react'

const WebApp = () => {

  const [albums, setAlbums] = useState([])

  const getUserInfo = async (token) => {
    const result = await fetch('https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=10', {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + token}
    })
    const data = await result.json()
    setAlbums(data.items)
  }


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

  return (
    <ul className='list-group'>
      {albums.map((song) => (
      <li
        key={song.id}
        className='list-group-item'>
        <h1>{song.name}</h1>
        <img
        src={song.album.images[0].url}
        className='img-thumbnail'></img>
        </li>
      ))}
  </ul>
  )
}

export default WebApp