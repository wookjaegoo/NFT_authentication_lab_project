import React, { useReducer, useCallback, useEffect, useState } from 'react'
import Web3 from 'web3'
import EthContext from './EthContext'
import { reducer, actions, initialState } from './state'
import { infuraProvider } from 'wagmi/providers/infura'

import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'

import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { goerli } from 'wagmi/chains'

const { generateKeyPairSync } = await import('node:crypto')
const crypto = require('crypto-browserify')

var newjson = []

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

  // Web3Modal Ethereum Client

  const ethereumClient = new EthereumClient(wagmiConfig, chains)

  //  const provider3 = new WalletConnectProvdier({

  //   rpc: {
  //     5:'https://goerli.infura.io/v3/ff2d998f9cdf4be29197ce3ffb727d89'

  //   },
  //   infuraId: "ff2d998f9cdf4be29197ce3ffb727d89",

  //  qrcodeModalOptions: {
  //    desktopLinks: [
  //      'ledger',
  //      'tokenary',
  //      'wallet',
  //      'wallet 3',
  //      'secuX',
  //      'ambire',
  //      'wallet3',
  //      'apolloX',
  //      'zerion',
  //      'sequence',
  //      'punkWallet',
  //      'kryptoGO',
  //      'nft',
  //      'riceWallet',
  //      'vision',
  //      'keyring'
  //    ],
  //    mobileLinks: [
  //      "rainbow",
  //      "metamask",
  //      "argent",
  //      "trust",
  //      "imtoken",
  //      "pillar",

  //    ],}});

  const init = useCallback(async (artifact) => {
    if (artifact) {
      // const web3 = new Web3(Web3.givenProvider || "ws://127.0.0.1:7545");

      // await provider.disconnect();
      // await provider3.enable();

      //  const web3 = new Web3(provider);

      const web3 = new Web3(window.web3.currentProvider)
      await window.web3.currentProvider.enable()

      // const web3 = new Web3(Web3.givenProvider || "ws://goerli.infura.io/v3/ff2d998f9cdf4be29197ce3ffb727d89");
      const accounts = await web3.eth.getAccounts()
      const networkID = await web3.eth.net.getId()

      const { abi } = artifact
      let address, contract
      try {
        address = artifact.networks[networkID].address
        contract = new web3.eth.Contract(abi, address)

        //지금 가상화폐계좌 로그인 한 계정의 nft 존재여부를 ownerof 로 최신걸로 받을수있음 그다음에
        //로그인 한 계정이랑 일치하면 반환 이 토큰아이디 사용해서 최신등록한 nft 인증서만 보여주게 로직 짜보자
        //일단 nft토탈개수 max 변수로 반환

        let what = await contract.methods
          .tokenOfOwnerByIndex(accounts[0], 2)
          .call()
        console.log(what)

        let max = await contract.methods.totalSupply().call()
        for (let i = max - 1; i > 0; i--) {
          const Writer = await contract.methods.ownerOf(i).call()

          if (Writer == accounts[0]) {
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
          publicClient,
        },
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

  const genKey = () => {
    try {
      const { publicKey, privateKey } = generateKeyPairSync('rsa', {
        modulusLength: 4096,
        publicKeyEncoding: {
          type: 'spki',
          format: 'pem',
        },
        privateKeyEncoding: {
          type: 'pkcs8',
          format: 'pem',
          cipher: 'aes-256-cbc',
          passphrase: 'top secret',
        },
      })
      console.log(publicKey, privateKey)
      return { publicKey, privateKey }
    } catch (error) {
      console.log(error)
    }
  }
  genKey()

  const genPrivateKey = (k) => {
    const key = crypto.createPrivateKey({
      key: k,
      format: 'pem',
      passphrase: 'top secret',
    })
    // console.log(key)
    return key
  }
  genPrivateKey('1234')

  return (
    <React.Fragment>
      <EthContext.Provider
        value={{
          state,
          dispatch,
        }}
      >
        {children}
      </EthContext.Provider>
    </React.Fragment>
  )
}

export default EthProvider
