import React from 'react'
import { useEffect, useState } from 'react'
import '../styles/app.scss'

const LastFM = () => {
  const i = 0

  const [timeRange, setTimeRange] = useState('7day')
  const [albumsInfo, setAlbumsInfo] = useState([])

  useEffect(() => {
      const LASTFM_USER = 'camilitis1'
      const LASTFM_API_KEY = process.env.REACT_APP_LASTFM_CLIENT_API_KEY
      fetch(`http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${LASTFM_USER}&api_key=${LASTFM_API_KEY}&limit=10&period=${timeRange}&format=json`, {
        method: 'GET'}).then(res => res.json())
        .then((data) => setAlbumsInfo(data.toptracks.track))
        .then(console.log(albumsInfo))
  }, [timeRange])


  //TODO: dynamic buttons

  return (
    <>
      <form className='container m-b2'>
      <input type="text" placeholder="Enter Last.fm username" className="form-control" />
      <button type='button' className='btn btn-dark'>Submit</button>
      </form>

    <div className='aspect'>

    </div>

      <div className='timerange-buttons'>
        <button onClick={() => setTimeRange('7day')} className={timeRange == '7day' ? 'btn btn-outline-dark active' : 'btn btn-outline-dark'}>Last 7 Days</button>
        <button onClick={() => setTimeRange('1month')} className={timeRange == '1month' ? 'btn btn-outline-dark active' : 'btn btn-outline-dark'}>Last Month</button>
        <button onClick={() => setTimeRange('3month')} className={timeRange == '3month' ? 'btn btn-outline-dark active' : 'btn btn-outline-dark'}>Last 3 Months</button>
        <button onClick={() => setTimeRange('6month')} className={timeRange == '6month' ? 'btn btn-outline-dark active' : 'btn btn-outline-dark'}>Last 6 Months</button>
        <button onClick={() => setTimeRange('12month')} className={timeRange == '12month' ? 'btn btn-outline-dark active' : 'btn btn-outline-dark'}>Last year</button>
      </div>

      <div className='container'>
        {albumsInfo.map((album) => {
          return(
            <div key={album.name}>
              <h4>{album.name}</h4>
              <p>{album.artist.name}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default LastFM