import React from 'react'

const SignIn = () => {
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID_KEY
  const REDIRECT_URI = 'http://localhost:3000/webapp'
  var STATE = Date.now()
  var SCOPE = 'user-read-private user-read-email user-top-read user-follow-read'
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'

  return (
    <>
      <a href={`${AUTH_ENDPOINT}?time_range=long_term&response_type=token&client_id=${CLIENT_ID}&scope=${SCOPE}&redirect_uri=${REDIRECT_URI}&state=${STATE}`} className='btn btn-success m-4'>Log in with Spotify</a>
    </>
  )
}

//*Use hook to get token from localStorage

export default SignIn