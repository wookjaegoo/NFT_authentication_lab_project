import React from 'react'
import useEth from '../contexts/EthContext/useEth'
import Footer from './Footer'
import Profile from './Profile'

function Main() {
  const {
    state: { newjson },
  } = useEth()

  return (
    <React.Fragment>
      <Profile />
    </React.Fragment>
  )
}

export default Main
