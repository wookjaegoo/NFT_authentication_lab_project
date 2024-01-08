# NFT Authentication

# :books: 목차

- [:book: 프로젝트 소개](#book-프로젝트-소개)

  - [프로젝트 개요](#프로젝트-개요)
  - [프로젝트 요약](#프로젝트-요약)
  - [프로젝트 플로우차트](#프로젝트-플로우차트)
  <!-- - [DB 스키마](#db-스키마) -->

- [:wrench: 사용 기술 (Technique)](#wrench-사용-기술-technique)

  - [:hammer:기술 스택 (Technique Used)](#기술-스택-technique-used)

    - [**FrontEnd**](#frontend)
    - [**BackEnd**](#backend)
    - [**Smart Contract**](#smart-contract)
    - [**Deploy**](#deploy)
    <!-- - [Connect](#connect) -->

- [:computer: 제공 기능 (Service)](#computer-제공-기능-service)

- [SmartContract](#SmartContract)


- [시연영상](#시연영상)

- [후기](#프로젝트후기)


# :book: 프로젝트 소개

## 프로젝트 개요

장애인의 취업을 포함하여 창업 등 부가가치 행위를 위한 다양한 경력 증빙에 대한 어려움이 많다. 

특히 장애인 교육경력에 대한 자격 증명 등의 고신뢰성 서비스를 기대하기가 어렵다.

장애인 등급인증서를 등록 및 확인하여 현재 장애 등급 증명서 발급의 어려움 및 문제점을 해소

장애인 교육경력 인증서를 등록 및 확인하여 현재까지 진행한 학력, 수강 이력, 수상실적 등을 제공

저러한 정보를 무결성을 가지도록 블록체인에 기록하고 모바일로 편리하게 조회하는 어플리케이션 


## 프로젝트 요약

모바일 전자 예방접종 증명서와 유사한 개념으로 인증서나 교육경력 증명서를 블록체인 네트워크에 등록하여 

고신뢰성을 가지며 재발급의 필요 없이 간단한 qr코드를 통해 본인인증을 해서 지속적인 인증이 가능한 어플리케이션 제작



## 프로젝트 플로우차트

  ![](/Doc/img/flowchart2.png)

# :wrench: 사용 기술 (Technique)
  ![](/Doc/img/environment2.png)


### FrontEnd

|                         Icon                         | Stack | Description     |
| :--------------------------------------------------: | :---: | --------------- |
| <img src = "/Doc/stackIcon/react.png" height = 25px> | REACT | 프론트앤드 구성 |

### Smart Contract

|                          Icon                           |  Stack   | Description          |
| :-----------------------------------------------------: | :------: | -------------------- |
| <img src = "/Doc/stackIcon/Solidity.png" height = 25px> | SOLIDITY | 스마트 컨트랙트 작성 |
| <img src = "/Doc/stackIcon/Truffle.png" height = 25px>  | TRUFFLE  | 스마트 컨트랙트 배포 |
|  <img src = "/Doc/stackIcon/ethelogo.png" height = 25px>  | ETHEREUM  | 블록체인 네트워크    |
| <img src = "/Doc/stackIcon/ganache.png" height = 25px>  | GANACHE  | 로컬에서 테스트      |

### Deploy

|                               Icon                                |        Stack        | Description                        |
| :---------------------------------------------------------------: | :-----------------: | ---------------------------------- |
|      <img src = "./Doc/stackIcon/ec2.png" height = 30px>      |         EC2         | 배포 서버                          |
|    <img src = "./Doc/stackIcon/route53.png" height = 30px>    |      ROUTE 53       | DNS와 EC2서버 연결                 |
|      <img src = "./Doc/stackIcon/acm.png" height = 30px>      | CERTIFICATE MANAGER | SSL 인증서 생성                    |

## :construction:Architecture

  ![](/Doc/img/architecture.png)



# :computer: 제공 기능 (Service)

## 가상화폐지갑연결
<div>
<!-- web3 wallet connect -->
<img src="/Doc/img/image05.png" alt="가상화폐 지갑연결" width="200" height="400">

<img src="/Doc/img/image06.png" alt="가상화폐 지갑연결" width="200" height="400">

<img src="/Doc/img/image07.png" alt="가상화폐 지갑연결" width="200" height="400">

</div>

가상화폐 지갑과 연결한다 이때 사용한 블록체인 네트워크는 ethereum goeril testnet이다.

또한 사파리 혹은 크롬과 같은 웹 브라우저가 아닌 가상화폐 어플리케이션의 browser 탭에서 도메인에 접근해야한다.



## 정보등록절차
<div>
<!-- 홈화면 이미지 -->
<img src="/Doc/img/image02.png" alt="홈화면" width="200" height="400">

<!-- 정보 등록 이미지 -->
<img src="/Doc/img/image03.png" alt="음원업로드" width="200" height="400">

<!-- 정보 기입후 업로드 -->
<img src="/Doc/img/image04.png" alt="마이페이지" width="200" height="400">

</div>

사용자의 교육경력 및 개인정보를 입력할 수 있다. 

인증서 업로드 버튼을 클릭하면 사용자의 트랜잭션 서명 이벤트가 발생한다. 

## 정보조회절차
<div>
<!-- 동적qr정보조회 -->
<img src="/Doc/img/image17.png" alt="동적qr정보조회" width="200" height="400">

<img src="/Doc/img/image18.png" alt="동적qr정보조회" width="200" height="400">

<img src="/Doc/img/image19.png" alt="동적qr정보조회" width="200" height="400">

</div>

<div>

<img src="/Doc/img/image20.png" alt="동적qr정보조회" width="200" height="400">

</div>

블록체인에 기록된 정보를 불러온다. ipfs.infura에 기록된 정보를 불러온다.

동적qr을 조회하면 사용자가 블록체인에 기록했던 정보를 조회할 수 있다.


# SmartContract

```solidity
// 예시 솔리디티 코드
pragma solidity ^0.8.0;

 function safeMint(address to, string memory uri) public onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri); 
    }

사용자의 정보를 기록할때 사진과 같은 메타정보를 기록하는경우 ipfs를 사용하여 정보를 업로드한다.

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

사용자의 정보를 조회할때는 tokenId를 입력하여 ipfs에 기록된 정보를 조회한다.
```
## 시연영상
### 시연영상-계정지갑연결
https://github.com/wookjaegoo/NFT_authentication_lab_project/assets/87640934/ff798681-9062-44ce-9ba8-dfef6720f2c8
### 시연영상-등록과정
https://github.com/wookjaegoo/NFT_authentication_lab_project/assets/87640934/924a3ae5-7f07-4c83-ac2b-ff5a1ae20986
### 시연영상-조회과정1
https://github.com/wookjaegoo/NFT_authentication_lab_project/assets/87640934/e64e894f-00e1-42c9-977d-d1d8d76ce890
### 시연영상-조회과정2
https://github.com/wookjaegoo/NFT_authentication_lab_project/assets/87640934/df9d58a2-986d-4cbd-96cd-432ad3522b2e


# 프로젝트후기

### 기술적 성취
2.IPFS.infura api를 사용하여 사용자의 메타정보를 기록하였으며 IPFS infura를 사용하지 않고 로컬로 IPFS 네트워크를 구축하여 
api를 사용하려고 시도했다. 이 과정에서의 문제점은 내가 IPFS 네트워크에 등록한 CID는 announce되지않아서 로컬 네트워크를 구축해도
다른 사용자가 CID에 접근이 불가능했다는 것이였다. 이를 해결하기 위해 ipfs docs를 정독하고 포트포워딩을 통해 다시 로컬의 PEER을 연결하여 P2P네트워크를 구축하고
최종적으로 내가 등록한 CID가 announce가 됨을 확인하였다. 

### 문제해결
3.walletconnectModal을 사용하여 모바일 반응형 웹에서 블록체인 네트워크와 통신할 수 있음을 깨달았다. 그러나 모바일에서는 chrome 확장도구가없어서 pc에서 사용하는 ethereum.enable 과 같은메소드가 작동할수 없기 때문에
사용자 측면에서 일반적인 검색엔진이 아닌 메타마스크와같은 가상화폐 어플리케이션에 탑재된 브라우저를 사용하여 도메인에 접근해야 하는 단점이 있다.
접근성이 매우 떨어지는 것을 느꼈으며 차라리 백엔드 단을 구성하여 사용자의 지갑 정보를 구성하는 것이 접근성을 낮출 것이라고 판단하였다.
다음 프로젝트에서는 이더리움이 아닌 클레이튼 네트워크를 사용하고 사용자 지갑 정보를 갖춘 서버를 구성한 프로젝트를 진행할 것이다.

### 한계점
1.먼저 개인정보를 블록체인 네트워크에 기록하는 과정을 가지기 때문에 이는 단순 NFT보단 DID형태의 흐름이 적합하다는 것을 느꼈다.
IPFS 네트워크에 접근제어를 설정하는 것이 아니라면 DID방식으로 진행하는 것이 건설적이다.
또한 기획 초기에 인증서 자체를 등록하는 과정이 복잡하기 때문에 이를 해결하기 위해서 높은 신뢰성과 자동화를 가진 스마트 컨트랙트로 구현하는 방향으로
진행해야 했는데 단순 개인정보를 블록체인에 기록하는 절차로 진행이 되어서 아쉬움이 남는다.







