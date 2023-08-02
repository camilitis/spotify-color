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

export default Home