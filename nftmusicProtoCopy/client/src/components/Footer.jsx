import { useState, useCallback, useEffect } from 'react'
import { create } from 'ipfs-http-client'
import React from 'react'
import './Footer.css'
import useEth from '../contexts/EthContext/useEth'
import { Buffer } from 'buffer'
// const client2= create('/ip4/127.0.0.1/tcp/5001');

import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti'
import WalletConnectProvider from '@walletconnect/web3-provider'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Button } from '@web3modal/react'

import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { goerli } from 'wagmi/chains'

const projectId = '2L2d01In1I9OFbre81IirWt0szw'
const projectSecret = '7c43815b40bc5ae32c34ad9d6db87dad'
const auth =
  'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64')
var minturl = ''

const client2 = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: {
    authorization: auth,
  },
})

let ipfsurl = ''
let authenticaiton1 = ''
let authenticaiton2 = ''
var newjson = []
var songs = ''

function Footer() {
  const [fileUrl, updateFileUrl] = useState('')
  const {
    state: { contract, accounts, web3 },
  } = useEth()
  const [yournumber, numset] = useState('')
  const [inputs, setInputs] = useState({
    name1: '',
    name2: '',
    number: '',
    date1: '',
    institution1: '',
    date2: '',
    institution2: '',
    usage1: '',
    usage2: '',
    location: '',
    dgrade: '',
    guardian: '',
    education: '',
    awards: '',
    relationship: '',
    member1: '',
    member2: '',
    submit1: '',
    submit2: '',
    duration: '',
    severe: '',
    work: '',
  })
  const {
    name1,
    name2,
    number,
    date1,
    institution1,
    date2,
    institution2,
    usage1,
    usage2,
    location,
    dgrade,
    guardian,
    education,
    awards,
    relationship,
    member1,
    member2,
    submit1,
    submit2,
    duration,
    severe,
    work,
  } = inputs

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

  async function howmany() {
    try {
      for (let i = 0; i < 100; i++) {
        await contract.methods.tokenURI(i).call()
        numset(i)
      }
    } catch (error) {
      console.log('마지막아이디1')
      console.log(yournumber)
    }
  }
  useEffect(() => {
    howmany()
    console.log(yournumber)
  }, [])

  async function onChange2(e) {
    const { value, name } = e.target
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    })
  }

  async function onChangeprofile1(e) {
    const file = e.target.files[0]

    try {
      const added = await client2.add(file)
      console.log(added)
      // const url = `http://ipfs.io/ipfs/${added.path}`

      const url = `https://auth.infura-ipfs.io/ipfs/${added.path}`
      authenticaiton1 = url
      console.log(url)
      updateFileUrl(url)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }
  }

  async function onChangeprofile2(e) {
    const file = e.target.files[0]
    try {
      const added = await client2.add(file)
      console.log(added)
      // const url = `http://ipfs.io/ipfs/${added.path}`

      const url = `https://auth.infura-ipfs.io/ipfs/${added.path}`
      authenticaiton2 = url
      updateFileUrl(url)
      console.log(url)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }
  }

  async function authentify(e) {
    try {
      let json = `{"url":"${ipfsurl}"
  ,"name":"${name1}","number":"${number}","institution":"${institution1}"
  ,"date":"${date1}","dgrade":"${dgrade}","severe":"${severe}"
  ,"member":"${member1}","location":"${location}","submit1":"${submit1}","usage1":"${usage1}"
  "links":{
    "images":[
      {
        "장애인인증서":"${authenticaiton1}"
      }
      ,
      {
        "경력인증서":"${authenticaiton2}"
      }
    ]
  },"guardian":"${guardian}","relationship":"${relationship}","duration":"${duration}",
  "work":"${work}","education":"${education}","awards":"${awards}",
  "submit2":"${submit2}","usage2":"${usage2}"
  ,"attributes":[{"trait_type": "Unknown","value": "Unknown"}]
}`

      const added = await client2.add(json)
      const url = `https://authenticaiton.infura-ipfs.io/ipfs/${added.path}`

      //  initTransaction(accounts);

      const output = await contract.methods
        .safeMint(accounts[0], url)
        .send({ from: accounts[0] })

      console.log(contract)
    } catch (error) {
      console.log(error)
    }
  }

  async function authentify3(e) {
    try {
      let json1 = `{"name":"${name1}","number":"${number}","institution":"${institution1}" 
    ,"guardian":"${guardian}","relationship":"${relationship}"
    ,"date":"${date1}","dgrade":"${dgrade}","severe":"${severe}"
    ,"member":"${member1}","location":"${location}"
    ,"submit":"${submit1}","usage":"${usage1}",
    "links":{
      "images":[
        {
          "장애인인증서":"${authenticaiton1}"
        }
      
      ]
    }
    ,"attributes":[{"trait_type": "Unknown","value": "Unknown"}]
  }`

      const added1 = await client2.add(json1)
      const url1 = `https://auth.infura-ipfs.io/ipfs/${added1.path}`
      console.log(url1)

      let json2 = `{"name":"${name2}","member":"${member2}","institution":"${institution2}"
    ,"date":"${date2}","duration":"${duration}","work":"${work}"
    ,"education":"${education}","awards":"${awards}"
    ,"submit":"${submit2}","usage":"${usage2}",
    "links":{
      "images":[
        
        {
          "본인경력인증서":"${authenticaiton2}"
        }
      ]
    },"attributes":[{"trait_type": "Unknown","value": "Unknown"}]
  }`
      const added2 = await client2.add(json2)
      const url2 = `https://auth.infura-ipfs.io/ipfs/${added2.path}`
      console.log(url2)

      let json3 = `{"links":{
      "loc":[
        {
          "장애인인증서":"${url1}"
        },
        {
          "본인경력인증서":"${url2}"
        }
      ]
    },"attributes":[{"trait_type": "Unknown","value": "Unknown"}]
  }`
      const added3 = await client2.add(json3)
      const url3 = `https://auth.infura-ipfs.io/ipfs/${added3.path}`
      console.log(url3)

      const output = await contract.methods
        .safeMint(accounts[0], url3)
        .send({ from: accounts[0] })
      console.log(output)
    } catch (error) {
      console.log(error)
    }
  }

  // const initTransaction = useCallback(

  //   async accounts=>
  //   {
  //       if(accounts)

  //       {

  //   var writerAddr=accounts[0];
  //   const data=await contract.methods.safeMint(accounts[0],minturl).encodeABI();
  //   const txCount = await web3.eth.getTransactionCount(accounts[0]);
  //   const nonce =web3.utils.toHex(txCount);
  //   const gasprice = await web3.eth.getGasPrice();
  //   const gasPrice = Math.round(Number(gasprice) + Number(gasprice / 3));

  //   let txObject={
  //     chainId:5,
  //       from:writerAddr,
  //       nonce:nonce,
  //       to:contract._address,
  //       data :data,

  //       gasLimit:web3.utils.toHex(3000000),
  //       gasPrice:web3.utils.toHex(gasPrice),

  //   }
  //   var trhash=await web3.eth.accounts.signTransaction(txObject,'0x2d02a8a115be3edfee8df9df0269fdf1993b23d3f9a07e77f49c68e3a56d1628');
  //   const hash=web3.eth.sendSignedTransaction(trhash.rawTransaction);
  //   console.log(hash);
  // }
  // },[contract, web3])

  const CardGrade = () => (
    <div style={{ display: 'inline-block' }}>
      <div>
        <input
          name="name1"
          placeholder="등급인증서 성명"
          onChange={onChange2}
          value={name1}
          style={{ width: '130px' }}
        />
      </div>
      <div>
        <input
          name="member1"
          placeholder="생년월일"
          onChange={onChange2}
          value={member1}
          style={{ width: '130px' }}
        />
      </div>
      <div>
        <input
          name="institution1"
          placeholder="등급인증서발급기관"
          onChange={onChange2}
          value={institution1}
          style={{ width: '130px' }}
        />
      </div>

      <div>
        <input
          name="date1"
          placeholder="등급인증서발행날짜"
          onChange={onChange2}
          value={date1}
          style={{ width: '130px' }}
        />
      </div>
    </div>
  )

  const CardGrade2 = () => (
    <div style={{ display: 'inline-block' }}>
      <div>
        <input
          name="guardian"
          placeholder="보호자"
          onChange={onChange2}
          value={guardian}
          style={{ width: '130px' }}
        />
      </div>
      <div>
        <input
          name="relationship"
          placeholder="보호자 와의 관계"
          onChange={onChange2}
          value={relationship}
          style={{ width: '130px' }}
        />
      </div>
      <div>
        <input
          name="number"
          placeholder="인증서등록번호"
          onChange={onChange2}
          value={number}
          style={{ width: '130px' }}
        />
      </div>
      <div>
        <input
          name="dgrade"
          placeholder="장애등급"
          onChange={onChange2}
          value={dgrade}
          style={{ width: '130px' }}
        />
      </div>
      <div>
        <input
          name="severe"
          placeholder="중증여부"
          onChange={onChange2}
          value={severe}
          style={{ width: '130px' }}
        />
      </div>
      <div>
        <input
          name="location"
          placeholder="소재지"
          onChange={onChange2}
          value={location}
          style={{ width: '130px' }}
        />
      </div>

      <div>
        <input
          name="submit1"
          placeholder="제출처"
          onChange={onChange2}
          value={submit1}
          style={{ width: '130px' }}
        />
      </div>

      <div>
        <input
          name="usage1"
          placeholder="사용목적"
          onChange={onChange2}
          value={usage1}
          style={{ width: '130px' }}
        />
      </div>
    </div>
  )

  const CardGrade3 = () => (
    <div style={{ display: 'inline-block' }}>
      <div>
        <input
          name="name2"
          placeholder="경력인증서 성명"
          onChange={onChange2}
          value={name2}
          style={{ width: '130px' }}
        />
      </div>

      <div>
        <input
          name="member2"
          placeholder="생년월일"
          onChange={onChange2}
          value={member2}
          style={{ width: '130px' }}
        />
      </div>

      <div>
        <input
          name="institution2"
          placeholder="교육기관"
          onChange={onChange2}
          value={institution2}
          style={{ width: '130px' }}
        />
      </div>

      <div>
        <input
          name="date2"
          placeholder="교육일시"
          onChange={onChange2}
          value={date2}
          style={{ width: '130px' }}
        />
      </div>

      <div>
        <input
          name="duration"
          placeholder="교육시간"
          onChange={onChange2}
          value={duration}
          style={{ width: '130px' }}
        />
      </div>
    </div>
  )

  const CardGrade4 = () => (
    <div style={{ display: 'inline-block' }}>
      <div>
        <input
          name="duration"
          placeholder="교육시간"
          onChange={onChange2}
          value={duration}
          style={{ width: '130px' }}
        />
      </div>

      <div>
        <input
          name="work"
          placeholder="담당업무"
          onChange={onChange2}
          value={work}
          style={{ width: '130px' }}
        />
      </div>

      <div>
        <input
          name="education"
          placeholder="교육내역"
          onChange={onChange2}
          value={education}
          style={{ width: '130px' }}
        />
      </div>

      <div>
        <input
          name="awards"
          placeholder="수상내역"
          onChange={onChange2}
          value={awards}
          style={{ width: '130px' }}
        />
      </div>
      <div>
        <input
          name="submit2"
          placeholder="제출처"
          onChange={onChange2}
          value={submit2}
          style={{ width: '130px' }}
        />
      </div>

      <div>
        <input
          name="usage2"
          placeholder="사용목적"
          onChange={onChange2}
          value={usage2}
          style={{ width: '130px' }}
        />
      </div>
    </div>
  )

  const MAX_VISIBILITY = 3

  const Carousel = ({ children }) => {
    const [active, setActive] = useState(1)
    const count = React.Children.count(children)

    return (
      <div className="fcarousel">
        {React.Children.map(children, (child, i) => (
          <div
            className="card-container"
            id={i}
            style={{
              '--active': i === active ? 1 : 0,
              '--offset': (active - i) / 3,
              '--direction': Math.sign(active - i),
              '--abs-offset': Math.abs(active - i) / 3,
              'pointer-events': active === i ? 'auto' : 'none',
              opacity: Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
              display: Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
            }}
          >
            {child}
          </div>
        ))}

        {active > 0 && (
          <button
            className="nav left"
            onClick={() => {
              setActive((i) => i - 1)
            }}
          >
            <TiChevronLeftOutline />
          </button>
        )}
        {active < count - 1 && (
          <button
            className="nav right"
            onClick={() => {
              setActive((i) => i + 1)
            }}
          >
            <TiChevronRightOutline />
          </button>
        )}
      </div>
    )
  }

  return (
    <div className="Deploys">
      <div className="Procedure1">
        <div className="container1">
          <div className="ProDetail2">
            <WagmiConfig config={wagmiConfig}>
              <Web3Button />
            </WagmiConfig>
            <Web3Modal
              projectId="251542da3c8552393e55d6d3b636127e"
              ethereumClient={ethereumClient}
            />

            <h1 style={{ color: 'white' }}>마지막 토큰아이디:{yournumber}</h1>

            <h1 style={{ color: 'white' }}>본인 정보를 입력해주세요</h1>
            <Carousel>
              <CardGrade></CardGrade>
              <CardGrade2></CardGrade2>

              <CardGrade3></CardGrade3>

              <CardGrade4></CardGrade4>
            </Carousel>

            {/*        
      <div style={{display:'inline-block'}} >
        <div >
        <input name="name1" placeholder='등급인증서 성명' onChange={onChange2} value={name1} style={{width:'130px'}} />
      </div> 
      <div >
       <input name="member1"placeholder='생년월일' onChange={onChange2} value={member1} style={{width:'130px'}}/>
      </div>
      <div >
       <input name="institution1"placeholder='등급인증서발급기관' onChange={onChange2} value={institution1} style={{width:'130px'}} />
      </div>  

      <div >
       <input name="date1"placeholder='등급인증서발행날짜' onChange={onChange2} value={date1}style={{width:'130px'}} />
      </div>
      <div >
         <input name="guardian" placeholder='보호자' onChange={onChange2} value={guardian} style={{width:'130px'}}/>
      </div> 
      <div >
         <input name="relationship" placeholder='보호자 와의 관계' onChange={onChange2} value={relationship} style={{width:'130px'}}/>
      </div> 
      <div >
         <input name="number"placeholder='인증서등록번호' onChange={onChange2} value={number} style={{width:'130px'}} />
      </div> 
      <div >
         <input name="dgrade"placeholder='장애등급' onChange={onChange2} value={dgrade}style={{width:'130px'}}  />
      </div> 
      <div >
         <input name="severe"placeholder='중증여부' onChange={onChange2} value={severe}style={{width:'130px'}}  />
      </div> 
      <div >
      <input name="location"placeholder='소재지' onChange={onChange2} value={location}style={{width:'130px'}} />
      </div>

      <div >
      <input name="submit1"placeholder='제출처' onChange={onChange2} value={submit1}style={{width:'130px'}} />
      </div>

      <div >
       <input name="usage1"placeholder='사용목적' onChange={onChange2} value={usage1} style={{width:'130px'}}/>
      </div>



      </div>

      <div style={{display:'inline-block'}} >
      <div >
         <input name="name2" placeholder='경력인증서 성명' onChange={onChange2} value={name2} style={{width:'130px'}} />
      </div> 

      <div >
       <input name="member2"placeholder='생년월일' onChange={onChange2} value={member2} style={{width:'130px'}}/>
      </div>


      <div >
       <input name="institution2"placeholder='교육기관' onChange={onChange2} value={institution2} style={{width:'130px'}} />
      </div> 

      <div >
       <input name="date2"placeholder='교육일시' onChange={onChange2} value={date2}style={{width:'130px'}} />
      </div> 

      <div >
         <input name="duration"placeholder='교육시간' onChange={onChange2} value={duration}style={{width:'130px'}}  />
      </div> 

      <div >
         <input name="work"placeholder='담당업무' onChange={onChange2} value={work}style={{width:'130px'}}  />
      </div> 


      <div >
       <input name="education"placeholder='교육내역' onChange={onChange2} value={education} style={{width:'130px'}} />
      </div> 

      <div >
       <input name="awards"placeholder='수상내역' onChange={onChange2} value={awards}style={{width:'130px'}} />
      </div>
      <div >
      <input name="submit2"placeholder='제출처' onChange={onChange2} value={submit2}style={{width:'130px'}} />
      </div>

      <div >
       <input name="usage2"placeholder='사용목적' onChange={onChange2} value={usage2} style={{width:'130px'}}/>
      </div>

      <div >
       <input placeholder='공란'style={{width:'130px'}}/>
      </div>
      <div >
       <input placeholder='공란'style={{width:'130px'}}/>
      </div>


      </div>      
      <br>
      </br> */}
            <br></br>
            <h1 style={{ color: 'white' }}>인증서 업로드</h1>

            <div>
              <input
                type="file"
                id="profileupload1"
                onChange={onChangeprofile1}
                style={{ display: 'none' }}
              />
              <label for="profileupload1" className="custom-btn">
                {' '}
                등급 인증서 사진{' '}
              </label>

              <input
                type="file"
                id="profileupload2"
                onChange={onChangeprofile2}
                style={{ display: 'none' }}
              />
              <label for="profileupload2" className="custom-btn">
                {' '}
                경력 인증서 사진{' '}
              </label>
            </div>

            <div>
              <br />
              <label
                type="fileupload"
                onClick={authentify3}
                id="fileup"
                className="custom-btn2"
              >
                인증서업로드
              </label>
              <br />
            </div>
          </div>
        </div>

        <div className="ProDetail1">
          <img src="cmlogo.png" style={{ width: '290px' }}></img>
        </div>
      </div>
    </div>
  )
}

export default Footer
