import React from 'react'
import SignIn from '../components/SignIn'

const Home = () => {
  return (
    <>
      <p className='home-description'>Get a color based on your Spotify charts</p>
      <SignIn />
    </>
  )
}

//*TO DO LIST:
//-> create hook for spotify request

export default Home