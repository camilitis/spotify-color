import React from 'react'
import { useState, useEffect } from 'react'

const SignIn = () => {
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID_KEY
  const REDIRECT_URI = 'http://localhost:3000/webapp'
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
  const RESPONSE_TYPE = 'token'

  const [token, setToken] = useState('')

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem('token')

    if(!token && hash){
      token = hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1]

      window.location.hash = ''
      window.localStorage.setItem('token', token)
    }

    setToken(token)
  }, [])

  return (
    <>
      <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}  className='btn btn-success m-4'>Log in with Spotify</a>
    </>
  )
}

//*Use hook to get token from localStorage

export default SignIn