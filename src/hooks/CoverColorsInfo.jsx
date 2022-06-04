import Color, { Palette } from "color-thief-react"

const Loading = () => <div>Loading...</div>
export default function App() {
  const imgSrc = 'https://i.scdn.co/image/ab67616d0000b273c551e371093ef44eb1466b84'

  return (
    <div className="App">
      <Color src={imgSrc} crossOrigin="anonymous" format="hex">
        {({ data, loading }) => {
          if (loading) return <Loading />;
          return (
            <div>
              Predominant color: <span style={{color: data}}><strong>{data}</strong></span>
            </div>
          );
        }}
      </Color>

      {/* <Palette src={imgSrc} crossOrigin="anonymous" format="hex" colorCount={4}>
        {({ data, loading }) => {
          if (loading) return <Loading />;
          return (
            <div>
              Palette:
              <ul>
                {data.map((color, index) => (
                  <li key={index} style={{ color: color }}>
                    <strong>{color}</strong>
                  </li>
                ))}
              </ul>
            </div>
          );
        }}
      </Palette> */}

      <img src={imgSrc} alt="" />
    </div>
  )
}