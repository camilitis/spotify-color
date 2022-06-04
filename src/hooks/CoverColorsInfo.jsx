import Color, { Palette } from "color-thief-react"

const Loading = () => <div>Loading...</div>

export default function App( {albumsInfo, albumsURL} ) {
  var i = 0

console.log(albumsInfo)

  return (
    <div className="CoverColor">
      <section className="container-sm">
        {albumsInfo.map((album) => (
          <Palette src={album.album.images[0].url} key={'palette' + i++} crossOrigin="anonymous" format="hex" colorCount={4}>
            {({ data, loading }) => {
              if (loading) return <Loading />
              return (
                <>
                <h2>{album.album.name}</h2>
                {album.album.artists.map((artist) => (
                  <h4 key={artist.name + i++}>{artist.name}</h4>
                ))}
                <img src={album.album.images[0].url}></img>
                  <h4>Palette:</h4>
                  <ul>
                    {data.map((color, index) => (
                      <span key={index} style={{ color: color }}>
                        <strong>{color}</strong>
                      </span>
                    ))}
                  </ul>
                </>
              );
            }}
          </Palette>
        ))}
      </section>


      {albumsURL.map((album) => (
        <Color src={album} key={'color' + i++} crossOrigin="anonymous" format="hex">
          {({ data, loading }) => {
            if (loading) return <Loading />
            return (
              <div>
                Predominant color {i++}: <span style={{color: data}}><strong>{data}</strong></span>
              </div>
            );
          }}
        </Color>
      ))}
    </div>
  )
}