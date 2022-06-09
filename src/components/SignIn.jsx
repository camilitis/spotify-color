import React from 'react'
// import { Route, Link } from "react-router-dom";

const SignIn = () => {
  const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID_KEY
  const REDIRECT_URI = 'https://spotify-color.vercel.app/webapp'
  var STATE = Date.now()
  var SCOPE = 'user-read-private user-read-email user-top-read user-follow-read'
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'

  return (
    <>
      <a href={`${AUTH_ENDPOINT}?time_range=long_term&response_type=token&client_id=${CLIENT_ID}&scope=${SCOPE}&redirect_uri=${REDIRECT_URI}&state=${STATE}`} className='btn btn-success m-4'>Log in with Spotify</a>

      {/* <Link to="/lastfm"><button className='btn btn-danger m-4'>Log in with LastFM</button></Link> */}
    </>
  )
}

export default SignIn