import { useEffect, useState, useCallback } from 'react'
import downloadjs from 'downloadjs'
import html2canvas from 'html2canvas'
import '../styles/pantonecolor.scss'
import { datenumber } from '../hooks/useDate.js'

const PantoneColor = (averageColor) => {

  const [newColor, setNewColor] = useState('white')

  useEffect(() => {
    setNewColor(Object.values(averageColor))
  }, [averageColor])

  function handleCaptureClick(){
    html2canvas(document.getElementById('canvas')).then(function(canvas) {
      const dataURL = canvas.toDataURL('image/png')
      downloadjs(dataURL, 'mysongscolor.png', 'image/png')
    })
  }

  return (
    <>
      <section className='pantone-container' style={{backgroundColor: newColor}}>
        <div style={{backgroundColor: newColor}} className='pantone-canvas' id='canvas'>
          <div className="wrapper">
            <div className="swatch">
              <div className="color"></div>
              <div className="description">
                <h3>My spotify</h3>
                <h2>PANTONE<sup>&reg;</sup></h2>
                <h3 className="swatch-number">{datenumber}</h3>
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