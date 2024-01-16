import React, { useReducer, useCallback, useEffect } from 'react'
import Web3 from 'web3'
import EthContext from './EthContext'
import { reducer, actions, initialState } from './state'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { configureChains, createConfig } from 'wagmi'
import { goerli } from 'wagmi/chains'

const newjson = []

export function EthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const chains = [goerli]

  const { publicClient } = configureChains(chains, [
    w3mProvider({ projectId: '251542da3c8552393e55d6d3b636127e' }),
  ])

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({
      projectId: '251542da3c8552393e55d6d3b636127e',
      version: '1', // or "2"
      chains,
    }),
    publicClient,
  })

  const ethereumClient = new EthereumClient(wagmiConfig, chains)

  const init = useCallback(async (artifact) => {
    if (artifact) {
      const web3 = new Web3(window.web3.currentProvider)
      await window.web3.currentProvider.enable()
      const accounts = await web3.eth.getAccounts()
      const networkID = await web3.eth.net.getId()

      const { abi } = artifact
      let address, contract
      try {
        address = artifact.networks[networkID].address
        contract = new web3.eth.Contract(abi, address)

        const what = await contract.methods
          .tokenOfOwnerByIndex(accounts[0], 2)
          .call()
        console.log(what)

        const max = await contract.methods.totalSupply().call()
        for (let i = max - 1; i > 0; i--) {
          const Writer = await contract.methods.ownerOf(i).call()

          if (Writer === accounts[0]) {
            console.log(Writer)
            break
          }
        }
      } catch (err) {
        console.error(err)
        console.log('에러위치')
      }
      dispatch({
        type: actions.init,
        data: {
          artifact,
          web3,
          accounts,
          networkID,
          contract,
          newjson,
          publicClient
        }
      })
    }
  }, [])

  useEffect(() => {
    const tryInit = async () => {
      try {
        const artifact = require('../../contracts/ArtGrowNFT.json')
        init(artifact)
      } catch (err) {
        console.error(err)
      }
    }

    tryInit()
  }, [init])

  useEffect(() => {
    const events = ['chainChanged', 'accountsChanged']
    const handleChange = () => {
      init(state.artifact)
    }
    events.forEach((e) => window.ethereum.on(e, handleChange))
    return () => {
      events.forEach((e) => window.ethereum.removeListener(e, handleChange))
    }
  }, [init, state.artifact])

  return (
    <React.Fragment>
      <EthContext.Provider
        value={{
          state,
          dispatch
        }}
      >
        {children}
      </EthContext.Provider>
    </React.Fragment>
  )
}

export default EthProvider
