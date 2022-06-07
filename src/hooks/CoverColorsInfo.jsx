import Color, { Palette } from "color-thief-react"
import { useEffect, useState } from "react"
import PantoneColor from "../components/PantoneColor"
import '../styles/covercolorinfo.scss'

const LoadingAverageColor = () => <h2 className='loading'>Getting your unique color...</h2>

export default function App( {albumsInfo, albumsURL} ) {
  const getAverageColor = require('@bencevans/color-array-average')

  var colors = []

  useEffect(() => {
    colors = []
  }, [albumsInfo])

  const [averageColor, setAverageColor] = useState(null)

  const [averageColorLoading, setAverageColorLoading] = useState(true)

  useEffect(() => {

    setTimeout(() => {
      const filteredcolors = colors.filter(item => item !== undefined)
      setAverageColor(getAverageColor(filteredcolors))

      if(filteredcolors.length > 0){
        setAverageColorLoading(false)
      }

    }, 500)

  }, [colors])

  var i = 0

  return (
    <div className="CoverColor">

      {averageColorLoading ? <LoadingAverageColor /> : <PantoneColor color={averageColor} />}

      <section className="container">
        {albumsInfo.map((album) => (
          <Palette src={album.album.images[0].url} key={'palette' + i++} crossOrigin="anonymous" format="hex" colorCount={4}>
            { ({data, loading}) => {
              if(loading) return undefined
              return (
                <div className='card'>
                <p className='card-song-name'>{album.name}</p>

                <div className='card-artist'>
                  {album.album.artists.map((artist) => (
                      <span key={artist.name + i++} className='card-artist-name'>{artist.name}</span>
                    ))}
                </div>

                <img src={album.album.images[0].url} className='img-thumbnail'></img>
                  <div className="card-color-palette-complete">
                    {data.map((color, index) => (
                      <span key={index} style={{ color: color }} className='card-color-palette'>
                        <div className='card-color-color' style={{ backgroundColor: color }}></div>
                      </span>
                    ))}
                  </div>
                </div>
              )
            }}
          </Palette>
        ))}
      </section>

      {albumsURL.map((album) => (
        <Color src={album} key={'color' + i++} crossOrigin="anonymous" format="hex">
          {({ data }) => {
            colors.push(data)
          }}
        </Color>
      ))}
    </div>
  )
}