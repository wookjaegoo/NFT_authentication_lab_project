import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Footer'
import NavBar from './NavBar'
import Main from './Main'
import Profile from './Profile'

function Remoter({ props = [], trdata = [] }) {
  return (

    <BrowserRouter>
      <NavBar />
      <Routes element={<NavBar />}>
        <Route path="/Footer" element={<Footer />} />
        <Route path="/" element={<Main />} />
        <Route
          path="/Profile"
          element={<Profile props={props} trdata={trdata} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default Remoter
