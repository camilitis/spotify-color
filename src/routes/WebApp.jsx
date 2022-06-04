import React from 'react'
import { useEffect } from 'react'

const WebApp = () => {

const clientId = process.env.REACT_APP_CLIENT_ID_KEY
const clientSecret = process.env.REACT_APP_CLIENT_SECRET_KEY

  const _getGenres = async (token) => {

    const result = await fetch(`https://api.spotify.com/v1/me/top/type`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
    });

    const data = await result.json()
    console.log(data)
    // return data.categories.items
  }

  useEffect(() => {
    console.log(clientId)
    const _getToken = async () => {

      const result = await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          headers: {
              'Content-Type' : 'application/x-www-form-urlencoded', 
              'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
          },
          body: 'grant_type=client_credentials'
      });
  
      const data = await result.json()
      const token = data.access_token
      _getGenres(token)
    }

    _getToken()
  })

  return (
    <>
    {/* {token} */}
    </>
  )
}

export default WebApp