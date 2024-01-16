import { useState, useEffect, React } from 'react'
import './App.css'
import Remoter from './components/Remoter'
import useEth from './contexts/EthContext/useEth'
import BottomBar from './components/BottomBar'

function App() {
  const {
    state: { imgjson2, num5 },
  } = useEth()

  const [loading, setLoading] = useState(true)

  const mainApi = async () => {
    setLoading(true)

    try {
      const response = await fetch('', {
        method: 'POST',
        headers: {
          Accept: 'application/html',
          'Content-Type': 'application/html'
        }
      })

      const result = await response
      console.log('mainData', result)

      setLoading(false)
    } catch (error) {
      window.alert(error)
    }
  }

  useEffect(() => {
    mainApi()
  }, [])

  return (
    <React.Fragment>
      <Remoter props={imgjson2} trdata={num5} />
      <BottomBar></BottomBar>
    </React.Fragment>
  )
}

export default App
