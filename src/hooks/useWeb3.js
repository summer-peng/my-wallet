import { useEffect, useState } from 'react'
const useWeb3 = () => {
  const [token, setToken] = useState('')
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    window.addEventListener('load', () => {
      if (window.ethereum) {
        try {
          window.ethereum
            .enable()
            .then(function (address) {
              // User has allowed account access to DApp...
              setToken(address[0])
              setLoaded(true)
            })
            .catch((e) => {
              console.error(e)
              setLoaded(true)
            })
        } catch (e) {
          // User has denied account access to DApp...
          console.error(e)
          setLoaded(true)
        }
      }
    })
  }, [])
  return { token, loaded }
}

export default useWeb3
