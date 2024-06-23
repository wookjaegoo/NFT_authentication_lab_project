import React, { useEffect, useState, useRef } from 'react';
import './Profile.css';
import useEth from '../contexts/EthContext/useEth';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';
import axios from 'axios';

function Profile() {
  const [state, setState] = useState({
    yournumber: '',
    onChainUrl1: '',
    onChainUrl2: '',
    imageUrl: '',
    imageUrl2: '',
    isexist: false,
    swap: true,
    swap1: true,
    gprivateDetail: false,
    jprivateDetail: false,
    ADetail: false,
    MDetail: false,
    au: false,
    job: false,
    inputs: {
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
      institution: '',
    },
  });

  const { state: ethState } = useEth();
  const { contract } = ethState;

  const updateState = (updates) => {
    setState((prevState) => ({ ...prevState, ...updates }));
  };

  const updateInputState = (updates) => {
    setState((prevState) => ({
      ...prevState,
      inputs: { ...prevState.inputs, ...updates },
    }));
  };

  const howmany = async () => {
    if (!contract) {
      return;
    }

    try {
      const num = await contract.methods.totalSupply().call();
      for (let i = 0; i < num; i++) {
        await contract.methods.tokenURI(i).call();
        updateState({ yournumber: i });
      }
    } catch (error) {
    }
  };

  useEffect(() => {
    howmany();
  }, [contract]);

  const onChange3 = (e) => {
    const { value, name } = e.target;
    updateInputState({ [name]: value });
  };

  const intToString = (num) => {
    return String(num).padStart(2, '0');
  };

  const Timer = ({ ss }) => {
    const SS = ss ? parseInt(ss) : 0;
    const count = useRef(SS);
    const interval = useRef(null);
    const [second, setSecond] = useState(intToString(SS));

    useEffect(() => {
      interval.current = setInterval(() => {
        count.current -= 1;
        setSecond(intToString(count.current % 60));
      }, 1000);
    }, []);

    useEffect(() => {
      if (count.current <= 0) {
        clearInterval(interval.current);
        if (state.au && state.swap) {
          updateState({ swap: false });
          getqr2();
        } else if (state.au && !state.swap) {
          updateState({ swap: true });
          getqr();
        }
        if (state.job && state.swap1) {
          updateState({ swap1: false });
          getqr4();
        } else if (state.job && !state.swap1) {
          updateState({ swap1: true });
          getqr3();
        }
      }
    }, [second]);

    return <div>{second}</div>;
  };

  const toggleDetail = (key) => {
    updateState({ [key]: !state[key] });
  };

  const MAX_VISIBILITY = 3;

  const CardGrade = () => (
    <div>
      {!state.au && state.isexist && (
        <div className="Authentication2" onClick={() => toggleDetail('au')}>
          <div className="dicbar" style={{ marginBottom: '-300px' }}>
            <img src="logomy.png" alt="logo" />
          </div>
          <h1 style={{ color: 'white', marginTop: '330px', textAlign: 'center' }}>
            장애인 등급인증서
          </h1>
          <div className="prbottom2">
            <div style={{ textAlign: 'center', fontSize: '9px' }}>
              <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;성명&nbsp;&nbsp;:{state.inputs.name}</h2>
              <h2>장애등급&nbsp;&nbsp;:{state.inputs.dgrade}&nbsp;&nbsp;&nbsp;&nbsp;</h2>
              <h2>보호자명&nbsp;&nbsp;:{state.inputs.guardian}</h2>
              <h2>마지막 발급날짜&nbsp;&nbsp;:{state.inputs.date}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
            </div>
          </div>
        </div>
      )}
      <CardGrade2 />
    </div>
  );

  const CardGrade2 = () => (
    <div>
      {state.au && (
        <div className="Authentication2">
          <h1 style={{ color: 'white', marginTop: '25%', fontSize: '40px' }}>등급 인증서</h1>
          {state.swap && (
            <div>
              <img src="https://qrtiger.com/qr/YINX.png" className="animatedimage" alt="qr" />
            </div>
          )}
          {!state.swap && (
            <div>
              <img src="https://qrtiger.com/qr/4XQU.png" className="animatedimage" alt="qr" />
            </div>
          )}
          <div>
            <div style={{ fontSize: 10, color: 'white' }}>
              <div>시간안에 인증해주세요</div>
              <Timer ss="15" />
              <div>[필수 제출 정보]</div>
              <span style={{ color: 'white', fontSize: '10px' }}>나이ᆞ</span>
              <span style={{ color: 'white', fontSize: '10px' }}>장애정도ᆞ</span>
              <span style={{ color: 'white', fontSize: '10px' }}>취득일자ᆞ</span>
              <span style={{ color: 'white', fontSize: '10px' }}>용도ᆞ</span>
              <span style={{ color: 'white', fontSize: '10px' }}>발급처 </span>
            </div>
          </div>
          <div style={{ textAlign: 'center', display: 'inline-block' }}>
            <button type="button" onClick={() => toggleDetail('gprivateDetail')} style={{ height: '30px' }}>
              상세보기
            </button>
            <button
              type="button"
              onClick={() =>
                window.open(
                  `https://goerli.etherscan.io/token/0xa08af44a2e0c88d1f9e12dad8ece694c4ff779ea?a=${state.inputs.number}`,
                  '_blank'
                )
              }
              style={{ height: '30px' }}
            >
              블록체인 기록
            </button>
            <button type="button" onClick={() => window.open(state.imageUrl, '_blank')} style={{ height: '30px' }}>
              등급 인증서 사진
            </button>
          </div>
          <div className="prbottom2"></div>
        </div>
      )}
    </div>
  );

  const CardJob = () => (
    <div>
      {!state.job && state.isexist && (
        <div className="Authentication2" onClick={() => toggleDetail('job')}>
          <div className="dicbar" style={{ marginBottom: '-300px' }}>
            <img src="logomy.png" alt="logo" />
          </div>
          <h1 style={{ color: 'white', marginTop: '300px', textAlign: 'center' }}>본인 교육경력 인증서</h1>
          <div className="prbottom2">
            <div style={{ textAlign: 'center', fontSize: '9px' }}>
              <h2>&nbsp;성명&nbsp;&nbsp;:{state.inputs.name}</h2>
              <h2>생년월일&nbsp;&nbsp;:{state.inputs.member}</h2>
              <h2>성인여부&nbsp;&nbsp;:성인&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
            </div>
          </div>
        </div>
      )}
      <CardJob2 />
    </div>
  );

  const CardJob2 = () => (
    <div>
      {state.job && (
        <div className="Authentication2">
          <h1 style={{ color: 'white', marginTop: '25%', fontSize: '30px' }}>교육 경력 인증서</h1>
          {state.swap1 && (
            <div>
              <img src="https://qrtiger.com/qr/E7NM.png" className="animatedimage" alt="qr" />
            </div>
          )}
          {!state.swap1 && (
            <div>
              <img src="https://qrtiger.com/qr/4XQU.png" className="animatedimage" alt="qr" />
            </div>
          )}
          <div>
            <div style={{ fontSize: 10, color: 'white' }}>
              <div>시간안에 인증해주세요</div>
              <Timer ss="15" />
              <div>[필수 제출 정보]</div>
              <span style={{ color: 'white', fontSize: '10px' }}>나이ᆞ</span>
              <span style={{ color: 'white', fontSize: '10px' }}>취득일자ᆞ</span>
              <span style={{ color: 'white', fontSize: '10px' }}>용도ᆞ</span>
              <span style={{ color: 'white', fontSize: '10px' }}>발급기관 </span>
            </div>
          </div>
          <div style={{ textAlign: 'center', display: 'inline-block' }}>
            <button type="button" onClick={() => toggleDetail('jprivateDetail')} style={{ height: '30px' }}>
              상세보기
            </button>
            <button
              type="button"
              onClick={() =>
                window.open(
                  `https://goerli.etherscan.io/token/0xa08af44a2e0c88d1f9e12dad8ece694c4ff779ea?a=${state.inputs.number}`,
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
  );

  const Carousel = ({ children }) => {
    const [active, setActive] = useState(1);
    const count = React.Children.count(children);

    useEffect(() => {
      if (state.au) {
        setActive(1);
      } else if (state.job) {
        setActive(0);
      } else {
        setActive(2);
      }
    }, [state.au, state.job]);

    return (
      <div className="carousel">
        {state.gprivateDetail && (
          <div className="Authentication3" onClick={() => toggleDetail('gprivateDetail')}>
            <h1 style={{ marginLeft: '30px' }}>성명:{state.inputs.name}</h1>
            <h1 style={{ marginLeft: '30px' }}>생년월일:{state.inputs.member}</h1>
            <h1 style={{ marginLeft: '30px' }}>발급기관:{state.inputs.institution}</h1>
            <h1 style={{ marginLeft: '30px' }}>발행날짜:{state.inputs.date}</h1>
            <h1 style={{ marginLeft: '30px' }}>보호자:{state.inputs.guardian}</h1>
            <h1 style={{ marginLeft: '30px' }}>보호자와의 관계:{state.inputs.relationship}</h1>
            <h1 style={{ marginLeft: '30px' }}>등록번호:{state.inputs.number1}</h1>
            <h1 style={{ marginLeft: '30px' }}>장애등급:{state.inputs.dgrade}</h1>
            <h1 style={{ marginLeft: '30px' }}>중증여부:{state.inputs.severe}</h1>
            <h1 style={{ marginLeft: '30px' }}>소재지:{state.inputs.location}</h1>
            <h1 style={{ marginLeft: '30px' }}>제출처:{state.inputs.submit}</h1>
            <h1 style={{ marginLeft: '30px' }}>사용목적:{state.inputs.usage}</h1>
            <h1 style={{ textAlign: 'center' }}>클릭시 창이 닫힙니다</h1>
          </div>
        )}
        {state.ADetail && (
          <div className="Authentication3" onClick={() => toggleDetail('ADetail')}>
            <h1 style={{ marginLeft: '10px' }}>성명:{state.inputs.name}</h1>
            <h1 style={{ marginLeft: '10px' }}>교육기관:{state.inputs.institution}</h1>
            <h1 style={{ marginLeft: '10px' }}>
              미술교육날짜:{state.inputs.date}
              <button
                type="button"
                onClick={() => window.open(state.imageUrl2, '_blank')}
                style={{ height: '30px', width: '100px', textAlign: 'center' }}
              >
                증빙자료
              </button>
            </h1>
          </div>
        )}
        {state.MDetail && (
          <div className="Authentication3" onClick={() => toggleDetail('MDetail')}>
            <h1 style={{ marginLeft: '10px' }}>성명:{state.inputs.name}</h1>
            <h1 style={{ marginLeft: '10px' }}>교육기관:{state.inputs.institution}</h1>
            <h1 style={{ marginLeft: '10px' }}>음악교육날짜:{state.inputs.date}</h1>
          </div>
        )}
        {state.jprivateDetail && (
          <div className="Authentication3" onClick={() => toggleDetail('jprivateDetail')} style={{ textAlign: 'center' }}>
            <button style={{ marginTop: '50%', width: '100px', height: '30px' }} onClick={() => toggleDetail('ADetail')}>
              미술
            </button>
            <button style={{ marginTop: '50%', width: '100px', height: '30px' }} onClick={() => toggleDetail('MDetail')}>
              음악
            </button>
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
              display: Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
            }}
          >
            {child}
          </div>
        ))}
        {state.isexist && active > 0 && (
          <button
            className="nav left"
            onClick={() => {
              setActive((i) => i - 1);
              updateState({ au: false });
            }}
          >
            <TiChevronLeftOutline />
          </button>
        )}
        {state.isexist && active < count - 1 && (
          <button
            className="nav right"
            onClick={() => {
              setActive((i) => i + 1);
              updateState({ job: false, au: false });
            }}
          >
            <TiChevronRightOutline />
          </button>
        )}
      </div>
    );
  };

  const getqr = async () => {
    try {
      const Writer = await contract.methods.tokenURI(state.inputs.number).call();
      const response = await fetch(Writer);
      if (!response.ok) throw new Error(response.statusText);
      const json = await response.json();

      const gjson = json.links.loc[0].장애인인증서;
      const jjson = json.links.loc[1].본인경력인증서;

      const response1 = await fetch(gjson);
      if (!response1.ok) throw new Error(response1.statusText);
      const json1 = await response1.json();

      const response2 = await fetch(jjson);
      if (!response2.ok) throw new Error(response2.statusText);
      const json2 = await response2.json();

      const autsrc = json1.links.images[0].장애인인증서;
      const autsrc1 = json2.links.images[0].본인경력인증서;

      updateState({
        yournumber: json1.number,
        imageUrl: autsrc,
        imageUrl2: autsrc1,
        onChainUrl1: gjson,
        onChainUrl2: jjson,
        isexist: true,
        inputs: {
          ...state.inputs,
          name: json1.name,
          usage: json1.usage,
          location: json1.location,
          date: json1.date,
          member: json1.member,
          severe: json1.severe,
          dgrade: json1.dgrade,
          institution: json1.institution,
          guardian: json1.guardian,
          relationship: json1.relationship,
          submit: json1.submit,
        },
      });

      updateInputState({
        name: json2.name,
        usage: json2.usage,
        duration: json2.duration,
        work: json2.work,
        education: json2.education,
        awards: json2.awards,
        institution: json2.institution,
        submit: json2.submit,
        date: json2.date,
        member: json2.member,
      });
    } catch (error) {
      console.log(error);
    }

    const options1 = {
      method: 'POST',
      url: 'https://qrtiger.com/api/campaign/edit/YINX',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 4c65ef80-84fb-11ed-88f6-3fe97310821f',
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
          text: 'https://www.qrcode-tiger.com.com/',
        },
        qrUrl: `${state.onChainUrl1}`,
        qrType: 'qr2',
        qrCategory: 'url',
      },
    };

    axios
      .request(options1)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    const options = {
      method: 'GET',
      url: 'https://qrtiger.com/data/YINX',
      params: { period: 'month', tz: 'Asia/Singapore' },
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 4c65ef80-84fb-11ed-88f6-3fe97310821f',
      },
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getqr2 = async () => {
    const options2 = {
      method: 'POST',
      url: 'https://qrtiger.com/api/campaign/edit/4XQU',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 4c65ef80-84fb-11ed-88f6-3fe97310821f',
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
          text: 'https://www.qrcode-tiger.com.com/',
        },
        qrUrl: `${state.onChainUrl1}`,
        qrType: 'qr2',
        qrCategory: 'url',
      },
    };

    axios
      .request(options2)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    const options3 = {
      method: 'GET',
      url: 'https://qrtiger.com/data/4XQU',
      params: { period: 'month', tz: 'Asia/Singapore' },
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 4c65ef80-84fb-11ed-88f6-3fe97310821f',
      },
    };

    axios
      .request(options3)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getqr3 = async () => {
    const options1 = {
      method: 'POST',
      url: 'https://qrtiger.com/api/campaign/edit/E7NM',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 4c65ef80-84fb-11ed-88f6-3fe97310821f',
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
          text: 'https://www.qrcode-tiger.com.com/',
        },
        qrUrl: `${state.onChainUrl2}`,
        qrType: 'qr2',
        qrCategory: 'url',
      },
    };

    axios
      .request(options1)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    const options = {
      method: 'GET',
      url: 'https://qrtiger.com/data/E7NM',
      params: { period: 'month', tz: 'Asia/Singapore' },
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 4c65ef80-84fb-11ed-88f6-3fe97310821f',
      },
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getqr4 = async () => {
    const options2 = {
      method: 'POST',
      url: 'https://qrtiger.com/api/campaign/edit/4XQU',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 4c65ef80-84fb-11ed-88f6-3fe97310821f',
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
          text: 'https://www.qrcode-tiger.com.com/',
        },
        qrUrl: `${state.onChainUrl2}`,
        qrType: 'qr2',
        qrCategory: 'url',
      },
    };

    axios
      .request(options2)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    const options3 = {
      method: 'GET',
      url: 'https://qrtiger.com/data/4XQU',
      params: { period: 'month', tz: 'Asia/Singapore' },
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 4c65ef80-84fb-11ed-88f6-3fe97310821f',
      },
    };

    axios
      .request(options3)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const authentifier = () => (
    <div className="Profile">
      {!state.isexist && (
        <div className="Authentication">
          <div className="dicbar" style={{ marginBottom: '-300px' }}>
            <img src="logomy.png" alt="logo" />
          </div>
          <div className="contained">
            <h1 style={{ color: 'white' }}>마지막 토큰아이디:{state.yournumber}</h1>
            <h1>인증서확인</h1>
            <label>토큰번호입력</label>
            <div style={{ textAlign: 'center' }}>
              <input
                name="number"
                value={state.inputs.number}
                onChange={onChange3}
                style={{ width: '50px', textAlign: 'center' }}
              />
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
  );

  return (
    <React.Fragment>
      {authentifier()}
      <Carousel>
        <CardJob />
        <CardGrade />
      </Carousel>
    </React.Fragment>
  );
}

export default Profile;
