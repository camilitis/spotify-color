import { useEffect, useState, useCallback } from 'react'
import downloadjs from 'downloadjs'
import html2canvas from 'html2canvas'
import '../styles/pantonecolor.scss'

const PantoneColor = (averageColor) => {

  const [newColor, setNewColor] = useState('white')

  useEffect(() => {
    setNewColor(Object.values(averageColor))
  }, [averageColor])

  function handleCaptureClick(){
    let window_width = window.innerWidth

    if (window_width >= 1024){
        html2canvas(document.getElementById('canvas')).then(function(canvas) {
            const dataURL = canvas.toDataURL('image/png')
            downloadjs(dataURL, 'mySpotifyColor.png', 'image/png')
        })
    } else{
        html2canvas(document.getElementById('canvas')).then(function(canvas) {
          const dataURL = canvas.toDataURL('image/png')
          downloadjs(dataURL, 'mySpotifyColo2r.png', 'image/png')
        })
    }
  }

  //TODO change last month dynamically
  return (
    <>
      <section className='pantone-section' style={{backgroundColor: newColor}}>
        <div style={{backgroundColor: newColor}} className='pantoneContainer' id='canvas'>
          <div className="wrapper">
            <div className="swatch">
              <div className="color"></div>
              <div className="description">
                <h3>My spotify</h3>
                <h2>PANTONE<sup>&reg;</sup></h2>
                <h3 className="swatch-number">15-4020</h3>
                <h3 className="color-name">Last month</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <button onClick={handleCaptureClick} type="button" className="btn btn-outline-dark">Download</button>
    </>
  )
}

export default PantoneColor