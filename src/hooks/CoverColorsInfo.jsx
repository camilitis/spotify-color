import Color, { Palette } from "color-thief-react"
import { useEffect, useState } from "react"
import '../styles/covercolorinfo.scss'

const Loading = () => <div>Loading...</div>

export default function App( {albumsInfo, albumsURL} ) {
  var i = 0

  var colors = []

  useEffect(() => {
    colors = []
  }, [albumsInfo])

  const [averageColor, setAverageColor] = useState(null)

  useEffect(() => {
    const colorshex = colors.filter(function(item, pos) {
      return colors.indexOf(item) == pos
    })

    console.log(colorshex)

    setTimeout(() => {
      const averageColor = require('@bencevans/color-array-average')
      setAverageColor(averageColor(colorshex))
    }, 1000)
  }, [colors])

  return (
    <div className="CoverColor">
      <section className="container">

        <h3 style={averageColor != null ? {backgroundColor: averageColor} : {}}>AVERAGE COLOR</h3>
        {albumsInfo.map((album) => (
          <Palette src={album.album.images[0].url} key={'palette' + i++} crossOrigin="anonymous" format="hex" colorCount={4}>
            {({ data, loading }) => {
              if (loading) return <Loading />
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