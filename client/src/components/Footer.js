import React, { useState, useEffect } from 'react';
import { create } from 'ipfs-http-client';
import './Footer.css';
import useEth from '../contexts/EthContext/useEth';
import { Buffer } from 'buffer';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { Web3Button, Web3Modal } from '@web3modal/react';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { goerli } from 'wagmi/chains';

const projectId = '2L2d01In1I9OFbre81IirWt0szw';
const projectSecret = '';
const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

const client2 = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: {
    authorization: auth,
  },
});

let authenticaiton1 = '';
let authenticaiton2 = '';

function Footer() {
  const [state, setState] = useState({
    fileUrl: '',
    yournumber: '',
    inputs: {
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
    },
  });

  const { state: ethState } = useEth();
  const { contract, accounts } = ethState;

  const updateState = (updates) => {
    setState((prevState) => ({ ...prevState, ...updates }));
  };

  const updateInputState = (updates) => {
    setState((prevState) => ({
      ...prevState,
      inputs: { ...prevState.inputs, ...updates },
    }));
  };

  const chains = [goerli];

  const { publicClient } = configureChains(chains, [
    w3mProvider({ projectId: '251542da3c8552393e55d6d3b636127e' }),
  ]);

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({
      projectId: '251542da3c8552393e55d6d3b636127e',
      version: '1',
      chains,
    }),
    publicClient,
  });

  const ethereumClient = new EthereumClient(wagmiConfig, chains);

  async function howmany() {
    try {
      for (let i = 0; i < 100; i++) {
        await contract.methods.tokenURI(i).call();
        updateState({ yournumber: i });
      }
    } catch (error) {
      console.log('마지막아이디1');
      console.log(state.yournumber);
    }
  }

  useEffect(() => {
    if (contract) {
      howmany();
    }
  }, [contract]);

  const onChange2 = (e) => {
    const { value, name } = e.target;
    updateInputState({ [name]: value });
  };

  const onFileChange = async (e, type) => {
    const file = e.target.files[0];
    try {
      const added = await client2.add(file);
      const url = `https://auth.infura-ipfs.io/ipfs/${added.path}`;
      if (type === 'auth1') {
        authenticaiton1 = url;
      } else {
        authenticaiton2 = url;
      }
      updateState({ fileUrl: url });
    } catch (error) {
      console.log('Error uploading file: ', error);
    }
  };

  const authentify3 = async () => {
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
    } = state.inputs;

    try {
      const json1 = `{"name":"${name1}","number":"${number}","institution":"${institution1}" 
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
      }`;

      const added1 = await client2.add(json1);
      const url1 = `https://auth.infura-ipfs.io/ipfs/${added1.path}`;

      const json2 = `{"name":"${name2}","member":"${member2}","institution":"${institution2}"
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
      }`;

      const added2 = await client2.add(json2);
      const url2 = `https://auth.infura-ipfs.io/ipfs/${added2.path}`;

      const json3 = `{"links":{
        "loc":[
          {
            "장애인인증서":"${url1}"
          },
          {
            "본인경력인증서":"${url2}"
          }
        ]
      },"attributes":[{"trait_type": "Unknown","value": "Unknown"}]
    }`;

      const added3 = await client2.add(json3);
      const url3 = `https://auth.infura-ipfs.io/ipfs/${added3.path}`;

      const output = await contract.methods.safeMint(accounts[0], url3).send({ from: accounts[0] });
      console.log(output);
    } catch (error) {
      console.log(error);
    }
  };

  const CardGrade = () => (
    <div style={{ display: 'inline-block' }}>
      <input name="name1" placeholder="등급인증서 성명" onChange={onChange2} value={state.inputs.name1} style={{ width: '130px' }} />
      <input name="member1" placeholder="생년월일" onChange={onChange2} value={state.inputs.member1} style={{ width: '130px' }} />
      <input name="institution1" placeholder="등급인증서발급기관" onChange={onChange2} value={state.inputs.institution1} style={{ width: '130px' }} />
      <input name="date1" placeholder="등급인증서발행날짜" onChange={onChange2} value={state.inputs.date1} style={{ width: '130px' }} />
    </div>
  );

  const CardGrade2 = () => (
    <div style={{ display: 'inline-block' }}>
      <input name="guardian" placeholder="보호자" onChange={onChange2} value={state.inputs.guardian} style={{ width: '130px' }} />
      <input name="relationship" placeholder="보호자 와의 관계" onChange={onChange2} value={state.inputs.relationship} style={{ width: '130px' }} />
      <input name="number" placeholder="인증서등록번호" onChange={onChange2} value={state.inputs.number} style={{ width: '130px' }} />
      <input name="dgrade" placeholder="장애등급" onChange={onChange2} value={state.inputs.dgrade} style={{ width: '130px' }} />
      <input name="severe" placeholder="중증여부" onChange={onChange2} value={state.inputs.severe} style={{ width: '130px' }} />
      <input name="location" placeholder="소재지" onChange={onChange2} value={state.inputs.location} style={{ width: '130px' }} />
      <input name="submit1" placeholder="제출처" onChange={onChange2} value={state.inputs.submit1} style={{ width: '130px' }} />
      <input name="usage1" placeholder="사용목적" onChange={onChange2} value={state.inputs.usage1} style={{ width: '130px' }} />
    </div>
  );

  const CardGrade3 = () => (
    <div style={{ display: 'inline-block' }}>
      <input name="name2" placeholder="경력인증서 성명" onChange={onChange2} value={state.inputs.name2} style={{ width: '130px' }} />
      <input name="member2" placeholder="생년월일" onChange={onChange2} value={state.inputs.member2} style={{ width: '130px' }} />
      <input name="institution2" placeholder="교육기관" onChange={onChange2} value={state.inputs.institution2} style={{ width: '130px' }} />
      <input name="date2" placeholder="교육일시" onChange={onChange2} value={state.inputs.date2} style={{ width: '130px' }} />
      <input name="duration" placeholder="교육시간" onChange={onChange2} value={state.inputs.duration} style={{ width: '130px' }} />
    </div>
  );

  const CardGrade4 = () => (
    <div style={{ display: 'inline-block' }}>
      <input name="work" placeholder="담당업무" onChange={onChange2} value={state.inputs.work} style={{ width: '130px' }} />
      <input name="education" placeholder="교육내역" onChange={onChange2} value={state.inputs.education} style={{ width: '130px' }} />
      <input name="awards" placeholder="수상내역" onChange={onChange2} value={state.inputs.awards} style={{ width: '130px' }} />
      <input name="submit2" placeholder="제출처" onChange={onChange2} value={state.inputs.submit2} style={{ width: '130px' }} />
      <input name="usage2" placeholder="사용목적" onChange={onChange2} value={state.inputs.usage2} style={{ width: '130px' }} />
    </div>
  );

  const MAX_VISIBILITY = 3;

  const Carousel = ({ children }) => {
    const [active, setActive] = useState(1);
    const count = React.Children.count(children || []);

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
              setActive((i) => i - 1);
            }}
          >
            <TiChevronLeftOutline />
          </button>
        )}
        {active < count - 1 && (
          <button
            className="nav right"
            onClick={() => {
              setActive((i) => i + 1);
            }}
          >
            <TiChevronRightOutline />
          </button>
        )}
      </div>
    );
  };

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

            <h1 style={{ color: 'white' }}>마지막 토큰아이디:{state.yournumber}</h1>

            <h1 style={{ color: 'white' }}>본인 정보를 입력해주세요</h1>
            <Carousel>
              <CardGrade />
              <CardGrade2 />
              <CardGrade3 />
              <CardGrade4 />
            </Carousel>

            <br />
            <h1 style={{ color: 'white' }}>인증서 업로드</h1>

            <div>
              <input
                type="file"
                id="profileupload1"
                onChange={(e) => onFileChange(e, 'auth1')}
                style={{ display: 'none' }}
              />
              <label htmlFor="profileupload1" className="custom-btn">
                등급 인증서 사진
              </label>

              <input
                type="file"
                id="profileupload2"
                onChange={(e) => onFileChange(e, 'auth2')}
                style={{ display: 'none' }}
              />
              <label htmlFor="profileupload2" className="custom-btn">
                경력 인증서 사진
              </label>
            </div>

            <div>
              <br />
              <label
                onClick={authentify3}
                className="custom-btn2"
              >
                인증서업로드
              </label>
              <br />
            </div>
          </div>
        </div>

        <div className="ProDetail1">
          <img src="cmlogo.png" style={{ width: '290px' }} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
