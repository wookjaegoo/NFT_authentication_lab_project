# klaytn music

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
    <!-- - [**Deploy**](#deploy) -->

    <!-- - [Deploy :rocket:](#deploy-rocket) -->
    <!-- - [Connect](#connect) -->

- [:computer: 제공 기능 (Service)](#computer-제공-기능-service)

# :book: 프로젝트 소개

## 프로젝트 개요

장애인의 취업을 포함하여 창업 등 부가가치 행위를 위한 다양한 경력 증빙에 대한 어려움이 많다. 

특히 장애인 교육경력에 대한 자격 증명 등의 고신뢰성 서비스를 기대하기가 어렵다.

장애인 등급인증서를 등록 및 확인하여 현재 장애 등급 증명서 발급의 어려움 및 문제점을 해소

장애인 교육경력 인증서를 등록 및 확인하여 현재까지 진행한 학력, 수강 이력, 수상실적 등을 제공



## 프로젝트 요약

모바일 전자 예방접종 증명서와 유사한 개념으로 인증서나 교육경력 증명서를 블록체인 네트워크에 등록하여 

고신뢰성을 가지며 재발급의 필요 없이 간단한 본인인증을 해서 지속적인 인증이 가능한 어플리케이션 제작



## 프로젝트 플로우차트

  ![](/Doc/img/flowchart2.png)

# :wrench: 사용 기술 (Technique)
  ![](/Doc/img/environment.png)


### FrontEnd

|                         Icon                         | Stack | Description     |
| :--------------------------------------------------: | :---: | --------------- |
| <img src = "/Doc/stackIcon/react.png" height = 25px> | REACT | 프론트앤드 구성 |

### Smart Contract

|                          Icon                           |  Stack   | Description          |
| :-----------------------------------------------------: | :------: | -------------------- |
| <img src = "/Doc/stackIcon/Solidity.png" height = 25px> | SOLIDITY | 스마트 컨트랙트 작성 |
| <img src = "/Doc/stackIcon/Truffle.png" height = 25px>  | TRUFFLE  | 스마트 컨트랙트 배포 |
|  <img src = "/Doc/stackIcon/klaytn.png" height = 25px>  | ETHEREUM  | 블록체인 네트워크    |
| <img src = "/Doc/stackIcon/ganache.png" height = 25px>  | GANACHE  | 로컬에서 테스트      |

### Deploy

|                               Icon                                |        Stack        | Description                        |
| :---------------------------------------------------------------: | :-----------------: | ---------------------------------- |
|      <img src = "./Doc/img/stackIcon/ec2.png" height = 30px>      |         EC2         | 배포 서버                          |
|    <img src = "./Doc/img/stackIcon/route53.png" height = 30px>    |      ROUTE 53       | DNS와 EC2서버 연결                 |
|      <img src = "./Doc/img/stackIcon/acm.png" height = 30px>      | CERTIFICATE MANAGER | SSL 인증서 생성                    |

## :construction:Architecture

  ![](/Doc/img/architecture.png)


## 1. FE .env 설정 -->

# :computer: 제공 기능 (Service)

<div>
<!-- 홈화면 이미지 -->
<img src="/Doc/img/image02.png" alt="홈화면" width="189" height="378">

<!-- 정보 등록 이미지 -->
<img src="/Doc/img/image03.png" alt="음원업로드" width="189" height="378">

<!-- 정보 기입후 업로드 -->
<img src="/Doc/img/image04.png" alt="마이페이지" width="189" height="378">
</div>

<div>
<!-- web3 wallet connect -->
<img src="/Doc/img/image05.png" alt="가상화폐 지갑연결" width="189" height="378">

<img src="/Doc/img/image06.png" alt="가상화폐 지갑연결" width="189" height="378">

<img src="/Doc/img/image07.png" alt="가상화폐 지갑연결" width="189" height="378">

</div>


<div>
<!-- 동적qr정보조회 -->
<img src="/Doc/img/image17.png" alt="동적qr정보조회" width="189" height="378">

<img src="/Doc/img/image18.png" alt="동적qr정보조회" width="189" height="378">

<img src="/Doc/img/image19.png" alt="동적qr정보조회" width="189" height="378">

</div>


### 음원 재생 SmartContract

```solidity
// 예시 솔리디티 코드
pragma solidity ^0.8.0;
