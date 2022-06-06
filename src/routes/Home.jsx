import React from 'react'
import SignIn from '../components/SignIn'

const Home = () => {
  return (
    <>
      <h4>Get a color based on your Spotify charts</h4>
      <SignIn />
    </>
  )
}

//*TO DO LIST:
//-> create hook for spotify request

export default Home