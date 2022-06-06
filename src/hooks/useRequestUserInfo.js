import { useState, useEffect } from 'react'

export const useRequestUserInfo = (token) => {
  const [albumsInfo, setAlbumsInfo] = useState([])
  // const [timeRange, setTimeRange] = useState('short_term')

  useEffect(() => {

    fetch(`https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=8`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + token}
    }).then(res => res.json())
      .then((data) => setAlbumsInfo(data.items))
      .then(console.log(albumsInfo))

  })

  return { albumsInfo }
}
