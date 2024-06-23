import React, { useState, useEffect } from 'react'
import './App.css';
import Remoter from './components/Remoter';
import useEth from './contexts/EthContext/useEth';
import BottomBar from './components/BottomBar';

function App() {
  const {
    state: { imgjson2, num5 },
  } = useEth();



  return (
    <React.Fragment>
      <Remoter imgjson2={imgjson2} num5={num5} />
      <BottomBar />
    </React.Fragment>
  );
}

export default App;
