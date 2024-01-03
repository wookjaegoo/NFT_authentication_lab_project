import React, { useEffect, useState, useRef } from 'react'
import './Profile.css'
import useEth from '../contexts/EthContext/useEth'
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti'

function Profile () {
  const axios = require('axios').default
  const [yournumber, numset] = useState('')
  const [onChainUrl1, updateonChainUrl1] = useState('')

  const [onChainUrl2, updateonChainUrl2] = useState('')
  const [imageUrl, updateImageUrl] = useState('')
  const [imageUrl2, updateImageUrl2] = useState('')
  // const [value, setValue] = useState("");
  const [isexist, setExist] = useState(false)
  const [swap, setswap] = useState(true)
  const [swap1, setswap1] = useState(true)

  const [gprivateDetail, setgdetail] = useState(false)

  const [jprivateDetail, setjdetail] = useState(false)

  const [ADetail, setAdetail] = useState(false)
  const [MDetail, setMdetail] = useState(false)

  const {
    state: { contract, accounts, web3 }
  } = useEth()

  const [au, auSwap] = useState(false)
  const [job, jobSwap] = useState(false)
  const [job2, jobSwap2] = useState(false)

  const [inputs, setInputs] = useState({
    number: '',
    name: '',
    number1: '',
    usage: '',
    location: '',
    date: '',
    member: '',
    severe: '',
    dgrade: '',
    guardian: '',
    relationship: '',
    duration: '',
    work: '',
    education: '',
    awards: '',
    institution: ''
  })
  const { number } = inputs

  const [name1, updateName1] = useState('')
  const [name2, updateName2] = useState('')
  const [number1, updatenumber] = useState('')
  const [usage1, updateusage1] = useState('')
  const [usage2, updateusage2] = useState('')
  const [location, updateloc] = useState('')
  const [date1, updatedate1] = useState('')
  const [date2, updatedate2] = useState('')
  const [member1, updatemember1] = useState('')
  const [member2, updatemember2] = useState('')
  const [severe, updatesvere] = useState('')
  const [dgrade, updatedgrade] = useState('')

  const [guardian, updateguardian] = useState('')
  const [relationship, updaterelationship] = useState('')
  const [duration, updateduration] = useState('')
  const [work, updatework] = useState('')

  const [education, updateeducation] = useState('')
  const [awards, updateawards] = useState('')
  const [institution1, updateinstitution1] = useState('')

  const [institution2, updateinstitution2] = useState('')
  const [submit1, updatesubmit1] = useState('')
  const [submit2, updatesubmit2] = useState('')

  async function howmany () {
    const num = await contract.methods.totalSupply().call()
    try {
      for (let i = 0; i < num; i++) {
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

  async function onChange3 (e) {
    const { value, name } = e.target
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    })
  }

  const intToString = (num) => {
    return String(num).padStart(2, '0')
  }

  const Timer = ({ ss }) => {
    const SS = ss ? parseInt(ss) : 0

    const count = useRef(SS)
    const interval = useRef(null)

    const [second, setSecond] = useState(intToString(SS))

    useEffect(() => {
      interval.current = setInterval(() => {
        count.current -= 1

        setSecond(intToString(count.current % 60))
      }, 1000)
    }, [])

    useEffect(() => {
      if (count.current <= 0) {
        clearInterval(interval.current)

        if (au && swap == true) {
          setswap(false)
          getqr2()
        } else if (au && swap == false) {
          setswap(true)
          getqr()
        }

        if (job && swap1 == true) {
          setswap1(false)
          getqr4()
        } else if (job && swap1 == false) {
          setswap1(true)
          getqr3()
        }
      }
    }, [second])

    // QR로직 수정하셈

    return <div>{second}</div>
  }
  const Gdetailset = () => {
    if (gprivateDetail == true) {
      setgdetail(false)
    } else {
      setgdetail(true)
    }
  }

  const Jdetailset = () => {
    if (jprivateDetail == true) {
      setjdetail(false)
    } else {
      setjdetail(true)
    }
  }

  const AuSwap = () => {
    if (au == true) {
      auSwap(false)
    } else {
      auSwap(true)
    }
  }

  const JobSwap = () => {
    if (job == true) {
      jobSwap(false)
    } else {
      getqr3()
      jobSwap(true)
    }
  }

  const Adetailset = () => {
    if (ADetail == true) {
      setAdetail(false)
    } else {
      setAdetail(true)
    }
  }

  const Mdetailset = () => {
    if (MDetail == true) {
      setMdetail(false)
    } else {
      setMdetail(true)
    }
  }

  const MAX_VISIBILITY = 3

  const CardGrade = () => (
    <div>
      {!au && isexist && (
        <div className="Authentication2" onClick={AuSwap}>
          <div className="dicbar" style={{ marginBottom: '-300px' }}>
            <img src="logomy.png"></img>
          </div>
          <h1
            style={{ color: 'white', marginTop: '330px', textAlign: 'center' }}
          >
            장애인 등급인증서
          </h1>

          <div className="prbottom2">
            <div style={{ textAlign: 'center', fontSize: '9px' }}>
              <h2>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;성명&nbsp;&nbsp;:{name1}
              </h2>
              <h2>장애등급&nbsp;&nbsp;:{dgrade}&nbsp;&nbsp;&nbsp;&nbsp;</h2>
              <h2>보호자명&nbsp;&nbsp;:{guardian}</h2>
              <h2>
                마지막 발급날짜&nbsp;&nbsp;:{date1}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </h2>
            </div>
          </div>
        </div>
      )}
      <CardGrade2></CardGrade2>
    </div>
  )

  const CardGrade2 = () => (
    <div>
      {au && (
        <div className="Authentication2">
          <h1 style={{ color: 'white', marginTop: '25%', fontSize: '40px' }}>
            등급 인증서
          </h1>

          {swap && (
            <div>
              <img
                src="https://qrtiger.com/qr/YINX.png"
                className="animatedimage"
              ></img>
            </div>
          )}

          {!swap && (
            <div>
              <img
                src="https://qrtiger.com/qr/4XQU.png"
                className="animatedimage"
              ></img>
            </div>
          )}

          <div>
            <div style={{ fontSize: 10, color: 'white' }}>
              <div>시간안에 인증해주세요</div>
              <Timer ss="15"></Timer>
              <div>[필수 제출 정보]</div>
              <span style={{ color: 'white', fontSize: '10px' }}>나이ᆞ</span>
              <span style={{ color: 'white', fontSize: '10px' }}>
                장애정도ᆞ
              </span>

              <span style={{ color: 'white', fontSize: '10px' }}>
                취득일자ᆞ
              </span>
              <span style={{ color: 'white', fontSize: '10px' }}>용도ᆞ</span>
              <span style={{ color: 'white', fontSize: '10px' }}>발급처 </span>
            </div>
          </div>

          <div style={{ textAlign: 'center', display: 'inline-block' }}>
            <button
              type="button"
              onClick={Gdetailset}
              style={{ height: '30px' }}
            >
              상세보기
            </button>
            <button
              type="button"
              onClick={() =>
                window.open(
                  ` https://goerli.etherscan.io/token/0xa08af44a2e0c88d1f9e12dad8ece694c4ff779ea?a=${number}`,
                  '_blank'
                )
              }
              style={{ height: '30px' }}
            >
              블록체인 기록
            </button>

            <button
              type="button"
              onClick={() => window.open(`${imageUrl}`, '_blank')}
              style={{ height: '30px' }}
            >
              등급 인증서 사진
            </button>
          </div>

          <div className="prbottom2"></div>
        </div>
      )}
    </div>
  )

  const CardJob = () => (
    <div>
      {!job && isexist && (
        <div className="Authentication2" onClick={JobSwap}>
          <div className="dicbar" style={{ marginBottom: '-300px' }}>
            <img src="logomy.png"></img>
          </div>
          <h1
            style={{ color: 'white', marginTop: '300px', textAlign: 'center' }}
          >
            본인 교육경력 인증서
          </h1>

          <div className="prbottom2">
            <div style={{ textAlign: 'center', fontSize: '9px' }}>
              <h2>&nbsp;성명&nbsp;&nbsp;:{name2}</h2>
              <h2>생년월일&nbsp;&nbsp;:{member2}</h2>
              <h2>
                성인여부&nbsp;&nbsp;:성인&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </h2>
            </div>
          </div>
        </div>
      )}

      <CardJob2></CardJob2>
    </div>
  )

  // 클릭시 qr뜨게하는 함수
  const CardJob2 = () => (
    <div>
      {job && (
        <div className="Authentication2">
          <h1 style={{ color: 'white', marginTop: '25%', fontSize: '30px' }}>
            교육 경력 인증서
          </h1>

          {swap1 && (
            <div>
              <img
                src="https://qrtiger.com/qr/E7NM.png"
                className="animatedimage"
              ></img>
            </div>
          )}

          {!swap1 && (
            <div>
              <img
                src="https://qrtiger.com/qr/4XQU.png"
                className="animatedimage"
              ></img>
            </div>
          )}

          <div>
            <div style={{ fontSize: 10, color: 'white' }}>
              <div>시간안에 인증해주세요</div>
              <Timer ss="15"></Timer>
              <div>[필수 제출 정보]</div>
              <span style={{ color: 'white', fontSize: '10px' }}>나이ᆞ</span>

              <span style={{ color: 'white', fontSize: '10px' }}>
                취득일자ᆞ
              </span>
              <span style={{ color: 'white', fontSize: '10px' }}>용도ᆞ</span>
              <span style={{ color: 'white', fontSize: '10px' }}>
                발급기관{' '}
              </span>
            </div>
          </div>

          <div style={{ textAlign: 'center', display: 'inline-block' }}>
            <button
              type="button"
              onClick={Jdetailset}
              style={{ height: '30px' }}
            >
              상세보기
            </button>

            <button
              type="button"
              onClick={() =>
                window.open(
                  ` https://goerli.etherscan.io/token/0xa08af44a2e0c88d1f9e12dad8ece694c4ff779ea?a=${number}`,
                  '_blank'
                )
              }
              style={{ height: '30px' }}
            >
              블록체인 기록
            </button>
          </div>
          <div className="prbottom2"></div>
        </div>
      )}
    </div>
  )

  const Carousel = ({ children }) => {
    const [active, setActive] = useState(1)
    const count = React.Children.count(children)
    // active 는 카드 개수같은데
    useEffect(() => {
      if (au) {
        setActive(1)
      } else if (job) {
        setActive(0)
      } else if (job2) {
        setActive(2)
      }
    }, [])
    return (
      <div className="carousel">
        {gprivateDetail && (
          <div className="Authentication3" onClick={Gdetailset}>
            <h1 style={{ marginLeft: '30px' }}>성명:{name1}</h1>
            <br></br>
            <h1 style={{ marginLeft: '30px' }}>생년월일:{member1}</h1>
            <br></br>
            <h1 style={{ marginLeft: '30px' }}>발급기관:{institution1}</h1>
            <br></br>
            <h1 style={{ marginLeft: '30px' }}>발행날짜:{date1}</h1>
            <br></br>
            <h1 style={{ marginLeft: '30px' }}>보호자:{guardian}</h1>
            <br></br>
            <h1 style={{ marginLeft: '30px' }}>
              보호자와의 관계:{relationship}
            </h1>
            <br></br>
            <h1 style={{ marginLeft: '30px' }}>등록번호:{number1}</h1>
            <br></br>
            <h1 style={{ marginLeft: '30px' }}>장애등급:{dgrade}</h1>
            <br></br>
            <h1 style={{ marginLeft: '30px' }}>중증여부:{severe}</h1>
            <br></br>
            <h1 style={{ marginLeft: '30px' }}>소재지:{location}</h1>
            <br></br>
            <h1 style={{ marginLeft: '30px' }}>제출처:{submit1}</h1>
            <br></br>
            <h1 style={{ marginLeft: '30px' }}>사용목적:{usage1}</h1>
            <br></br>
            <h1 style={{ textAlign: 'center' }}>클릭시 창이 닫힙니다</h1>
          </div>
        )}

        {/* {jprivateDetail&&  <div className='Authentication3' onClick={Jdetailset} >
<h1 style={{marginLeft:'30px'}}>성명:{name2}</h1>
<br></br>
<h1 style={{marginLeft:'30px'}}>생년월일:{member2}</h1>
<br></br>
<h1 style={{marginLeft:'30px'}}>교육기관:{institution2}</h1>
<br></br>
<h1 style={{marginLeft:'30px'}}>교육날짜:{date2}</h1>
<br></br>
<h1 style={{marginLeft:'30px'}}>교육시간:{duration}</h1>
<br></br>
<h1 style={{marginLeft:'30px'}}>담당업무:{work}</h1>
<br></br>
<h1 style={{marginLeft:'30px'}}>교육내역:{education}</h1>
<br></br>
<h1 style={{marginLeft:'30px'}}>수상내역:{awards}</h1>
<br></br>
<h1 style={{marginLeft:'30px'}}>제출처:{submit2}</h1>
<br></br>
<h1 style={{marginLeft:'30px'}}>사용목적:{usage2}</h1>
<br></br>
<h1  style={{textAlign:'center'}} >클릭시 창이 닫힙니다</h1>
</div>
} */}

        {ADetail && (
          <div className="Authentication3" onClick={Adetailset}>
            <h1 style={{ marginLeft: '10px' }}>성명:{name2}</h1>
            <br></br>
            <h1 style={{ marginLeft: '10px' }}>교육기관:{institution2}</h1>
            <br></br>
            <h1 style={{ marginLeft: '10px' }}>
              미술교육날짜:{date2}
              <button
                type="button"
                onClick={() => window.open(`${imageUrl2}`, '_blank')}
                style={{ height: '30px', width: '100px', textAlign: 'center' }}
              >
                증빙자료
              </button>
            </h1>
            <br></br>
            <h1 style={{ marginLeft: '10px' }}>미술교육날짜:20180913</h1>
            <br></br>
            <h1 style={{ marginLeft: '10px' }}>미술교육날짜:20210304</h1>
          </div>
        )}

        {MDetail && (
          <div className="Authentication3" onClick={Mdetailset}>
            <h1 style={{ marginLeft: '10px' }}>성명:{name2}</h1>
            <br></br>
            <h1 style={{ marginLeft: '10px' }}>교육기관:{institution2}</h1>
            <br></br>
            <h1 style={{ marginLeft: '10px' }}>음악교육날짜:{date2}</h1>
            <br></br>
            <h1 style={{ marginLeft: '10px' }}>음악교육날짜:20200519</h1>
            <br></br>
            <h1 style={{ marginLeft: '10px' }}>음악교육날짜:20180723</h1>
          </div>
        )}

        {jprivateDetail && (
          <div
            className="Authentication3"
            onClick={Jdetailset}
            style={{ display: 'inline-block', textAlign: 'center' }}
          >
            <button
              style={{ marginTop: '50%', width: '100px', height: '30px' }}
              onClick={Adetailset}
            >
              미술
            </button>
            <button
              style={{ marginTop: '50%', width: '100px', height: '30px' }}
              onClick={Mdetailset}
            >
              음악
            </button>
            <br></br>
            <br></br>
            <h1 style={{ textAlign: 'center' }}>클릭시 창이 닫힙니다</h1>
          </div>
        )}

        {React.Children.map(children, (child, i) => (
          <div
            className="card-container"
            id={i}
            style={{
              '--active': i === active ? 1 : 0,
              '--offset': (active - i) / 4,
              '--direction': Math.sign(active - i),
              '--abs-offset': Math.abs(active - i) / 4,
              'pointer-events': active === i ? 'auto' : 'none',
              opacity: Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
              display: Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block'
            }}
          >
            {child}
          </div>
        ))}

        {isexist && active > 0 && (
          <button
            className="nav left"
            onClick={() => {
              setActive((i) => i - 1)
              auSwap(false)
            }}
          >
            <TiChevronLeftOutline />
          </button>
        )}
        {isexist && active < count - 1 && (
          <button
            className="nav right"
            onClick={() => {
              setActive((i) => i + 1)
              jobSwap(false)
              auSwap(false)
            }}
          >
            <TiChevronRightOutline />
          </button>
        )}
      </div>
    )
  }

  async function getqr () {
    try {
      const Writer = await contract.methods.tokenURI(number).call()
      console.log(Writer)

      const response = await fetch(Writer)
      if (!response.ok) throw new Error(response.statusText)
      const json = await response.json()

      const gjson = json.links.loc[0].장애인인증서
      const jjson = json.links.loc[1].본인경력인증서

      const response1 = await fetch(gjson)
      if (!response1.ok) throw new Error(response1.statusText)
      const json1 = await response1.json()

      const response2 = await fetch(jjson)
      if (!response2.ok) throw new Error(response2.statusText)
      const json2 = await response2.json()

      const autsrc = json1.links.images[0].장애인인증서
      const autsrc1 = json2.links.images[0].본인경력인증서

      updatenumber(json1.number)
      updateName1(json1.name)
      updateusage1(json1.usage)
      updateloc(json1.location)
      updatedate1(json1.date)
      updatemember1(json1.member)
      updatesvere(json1.severe)
      updatedgrade(json1.dgrade)
      updateinstitution1(json1.institution)
      updateguardian(json1.guardian)
      updaterelationship(json1.relationship)
      updatesubmit1(json1.submit)

      updateName2(json2.name)
      updateusage2(json2.usage)
      updateduration(json2.duration)
      updatework(json2.work)
      updateeducation(json2.education)
      updateawards(json2.awards)
      updateinstitution2(json2.institution)
      updatesubmit2(json2.submit)
      updatedate2(json2.date)
      updatemember2(json2.member)

      updateonChainUrl1(gjson)
      updateonChainUrl2(jjson)

      updateImageUrl(autsrc)
      updateImageUrl2(autsrc1)
    } catch (error) {
      console.log(error)
    }
    // edit qr url code
    const options1 = {
      method: 'POST',
      url: 'https://qrtiger.com/api/campaign/edit/YINX',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 4c65ef80-84fb-11ed-88f6-3fe97310821f'
      },
      data: {
        qr: {
          size: 500,
          colorDark: 'rgb(5,64,128)',
          logo: '',
          eye_outer: 'eyeOuter2',
          eye_inner: 'eyeInner1',
          qrData: 'pattern0',
          backgroundColor: 'rgb(255,255,255)',
          transparentBkg: false,
          qrCategory: 'url',
          text: 'https://www.qrcode-tiger.com.com/'
        },
        qrUrl: `${onChainUrl1}`,
        qrType: 'qr2',
        qrCategory: 'url'
      }
    }

    axios
      .request(options1)
      .then(function (response) {
        console.log(response.data)
      })
      .catch(function (error) {
        console.error(error)
      })

    // 불러오기 데이터 QR로
    const options = {
      method: 'GET',
      url: 'https://qrtiger.com/data/YINX',
      params: { period: 'month', tz: 'Asia/Singapore' },
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 4c65ef80-84fb-11ed-88f6-3fe97310821f'
      }
    }

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data)
      })
      .catch(function (error) {
        console.error(error)
      })

    setExist(true)
  }

  async function getqr2 () {
    //   try {

    //     const Writer= await contract.methods.tokenURI(number).call();
    //     console.log(Writer)
    //     const response = await fetch(Writer);
    //       if(!response.ok)
    //       throw new Error(response.statusText);
    //       const json = await response.json();

    //       let gjson=json.links.loc[0].장애인인증서;
    //       let jjson=json.links.loc[1].본인경력인증서;

    //       const response1 = await fetch(gjson);
    //       if(!response1.ok)
    //       throw new Error(response1.statusText);
    //       const json1 = await response1.json();

    //       const response2 = await fetch(jjson);
    //       if(!response2.ok)
    //       throw new Error(response2.statusText);
    //       const json2 = await response2.json();

    //       let autsrc=json1.links.images[0].장애인인증서;
    //       let autsrc1=json2.links.images[0].본인경력인증서;

    //       updateonChainUrl1(json1);
    //       updateonChainUrl1(json2);

    //       updateImageUrl(autsrc);
    //       updateImageUrl2(autsrc1);

    // }

    // catch (error) {
    // }

    const options2 = {
      method: 'POST',
      url: 'https://qrtiger.com/api/campaign/edit/4XQU',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 4c65ef80-84fb-11ed-88f6-3fe97310821f'
      },
      data: {
        qr: {
          size: 500,
          colorDark: 'rgb(5,64,128)',
          logo: '',
          eye_outer: 'eyeOuter2',
          eye_inner: 'eyeInner1',
          qrData: 'pattern0',
          backgroundColor: 'rgb(255,255,255)',
          transparentBkg: false,
          qrCategory: 'url',
          text: 'https://www.qrcode-tiger.com.com/'
        },
        qrUrl: `${onChainUrl1}`,
        qrType: 'qr2',
        qrCategory: 'url'
      }
    }

    axios
      .request(options2)
      .then(function (response) {
        console.log(response.data)
      })
      .catch(function (error) {
        console.error(error)
      })

    const options3 = {
      method: 'GET',
      url: 'https://qrtiger.com/data/4XQU',
      params: { period: 'month', tz: 'Asia/Singapore' },
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 4c65ef80-84fb-11ed-88f6-3fe97310821f'
      }
    }

    axios
      .request(options3)
      .then(function (response) {
        console.log(response.data)
      })
      .catch(function (error) {
        console.error(error)
      })
  }

  async function getqr3 () {
    const options1 = {
      method: 'POST',
      url: 'https://qrtiger.com/api/campaign/edit/E7NM',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 4c65ef80-84fb-11ed-88f6-3fe97310821f'
      },
      data: {
        qr: {
          size: 500,
          colorDark: 'rgb(5,64,128)',
          logo: '',
          eye_outer: 'eyeOuter2',
          eye_inner: 'eyeInner1',
          qrData: 'pattern0',
          backgroundColor: 'rgb(255,255,255)',
          transparentBkg: false,
          qrCategory: 'url',
          text: 'https://www.qrcode-tiger.com.com/'
        },
        qrUrl: `${onChainUrl2}`,
        qrType: 'qr2',
        qrCategory: 'url'
      }
    }

    axios
      .request(options1)
      .then(function (response) {
        console.log(response.data)
      })
      .catch(function (error) {
        console.error(error)
      })

    const options = {
      method: 'GET',
      url: 'https://qrtiger.com/data/E7NM',
      params: { period: 'month', tz: 'Asia/Singapore' },
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 4c65ef80-84fb-11ed-88f6-3fe97310821f'
      }
    }

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data)
      })
      .catch(function (error) {
        console.error(error)
      })
  }

  async function getqr4 () {
    const options2 = {
      method: 'POST',
      url: 'https://qrtiger.com/api/campaign/edit/4XQU',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 4c65ef80-84fb-11ed-88f6-3fe97310821f'
      },
      data: {
        qr: {
          size: 500,
          colorDark: 'rgb(5,64,128)',
          logo: '',
          eye_outer: 'eyeOuter2',
          eye_inner: 'eyeInner1',
          qrData: 'pattern0',
          backgroundColor: 'rgb(255,255,255)',
          transparentBkg: false,
          qrCategory: 'url',
          text: 'https://www.qrcode-tiger.com.com/'
        },
        qrUrl: `${onChainUrl2}`,
        qrType: 'qr2',
        qrCategory: 'url'
      }
    }

    axios
      .request(options2)
      .then(function (response) {
        console.log(response.data)
      })
      .catch(function (error) {
        console.error(error)
      })

    const options3 = {
      method: 'GET',
      url: 'https://qrtiger.com/data/4XQU',
      params: { period: 'month', tz: 'Asia/Singapore' },
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 4c65ef80-84fb-11ed-88f6-3fe97310821f'
      }
    }

    axios
      .request(options3)
      .then(function (response) {
        console.log(response.data)
      })
      .catch(function (error) {
        console.error(error)
      })
  }

  function authentifier () {
    return (
      <div className="Profile">
        {!isexist && (
          <div className="Authentication">
            <div className="dicbar" style={{ marginBottom: '-300px' }}>
              <img src="logomy.png"></img>
            </div>
            <div className="contained">
              <h1 style={{ color: 'white' }}>마지막 토큰아이디:{yournumber}</h1>
              <h1>인증서확인</h1>
              <label>토큰번호입력</label>

              <div style={{ textAlign: 'center' }}>
                <input
                  name="number"
                  value={number}
                  onChange={onChange3}
                  style={{ width: '50px', textAlign: 'center' }}
                ></input>
                <br />
                <button onClick={getqr} style={{ width: '50px' }}>
                  확인
                </button>
                <br />
              </div>
            </div>
            <div className="prbottom"></div>
          </div>
        )}
      </div>
    )
  }

  // 23/0101 추가할거 공증마크가 위변조 되어지지 않았다는것 그리고 pdf 혹은  png에서 원하는 정보 파싱하는거
  // 후자부분은 표준화된 증명서가 있으면 가능할거같음 예시를들어서 내가 해야할 부분인거같다. 이거만 추가하면 완벽함

  return (
    <React.Fragment>
      {authentifier()}
      <Carousel>
        <CardJob></CardJob>

        <CardGrade></CardGrade>
      </Carousel>
    </React.Fragment>
  )
}

export default Profile
