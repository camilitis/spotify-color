import React from 'react'
import SignIn from '../components/SignIn'

const Home = () => {
  return (
    <>
      <h4>Get your Spotify color based on the album covers of your charts.</h4>
      <SignIn />
    </>
  )
}

//*TO DO LIST:
//-> create hook for spotify request

export default Home