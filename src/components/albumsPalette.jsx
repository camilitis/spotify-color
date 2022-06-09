import Color, { Palette } from "color-thief-react"
import { useEffect, useState } from "react"
import PantoneColor from "./PantoneColor"
import '../styles/albumsPalette.scss'

const LoadingAverageColor = () => <h2 className='loading'>Getting your unique color...</h2>

const AlbumsPalette = ({ albumsInfo, albumsURL }) => {
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
    <>

      {averageColorLoading ? <LoadingAverageColor /> : <PantoneColor color={averageColor} />}

      <section className="albums-container">
        {albumsInfo.map((album) => (
          <Palette src={album.album.images[0].url} key={'palette' + i++} crossOrigin="anonymous" format="hex" colorCount={4}>
            { ({data, loading}) => {
              if(loading) return undefined
              return (
                <div className='card'>
                  <div className="card-info">
                    <p className='card-songname'>{album.name}</p>

                    <div className='card-artistname'>
                      {album.album.artists.map((artist) => (
                          <span key={artist.name + i++} className='card-artist-name'>{artist.name}
                          </span>
                        ))}
                    </div>
                  </div>


                  <img src={album.album.images[0].url} alt={album.album} className='img-thumbnail card-img'></img>
                  <div className="card-palette-container">
                    {data.map((color, index) => (
                      <span key={index} style={{ color: color }}>
                        <div className='card-color' style={{ backgroundColor: color }}></div>
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
    </>
  )
}

export default AlbumsPalette