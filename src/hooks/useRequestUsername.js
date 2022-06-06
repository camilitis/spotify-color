import { useState, useEffect } from 'react'

export const useRequestUsername = (token) => {
  const [username, setUsername] = useState(null)

  useEffect(() => {

    fetch('https://api.spotify.com/v1/me', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + token}
    }).then(res => res.json())
      .then((userinfo) => setUsername(userinfo.display_name))
  })

}
