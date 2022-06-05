import { useEffect, useState } from 'react'
import '../styles/pantonecolor.scss'

const PantoneColor = (averageColor) => {

  const [newColor, setNewColor] = useState('white')

  useEffect(() => {
    setNewColor(Object.values(averageColor))
  }, [averageColor])

  return (
    <section style={{backgroundColor: newColor}} className='pantoneContainer'>
      <div className="wrapper">
        <div className="swatch">
          <div className="color"></div>
          <div className="description">
            <h3>My spotify</h3>
            <h2>PANTONE<sup>&reg;</sup></h2>
            <h3 className="swatch-number">15-4020</h3>
            <h3 className="color-name">Cerulean</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PantoneColor