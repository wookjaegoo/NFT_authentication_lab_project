// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "./token/ERC20/utils/SafeERC20.sol";
import "./token/ERC20/ERC20.sol";
import "./utils/math/SafeMath.sol";
import "./utils/Counters.sol";


contract Amaranthus is ERC20{
        using Counters for Counters.Counter;

    Counters.Counter private _playerCounter;



   using SafeMath for uint256;
   using SafeERC20 for IERC20;


    //송금 트랜잭션을 처음하는 모든 트랜잭션에 대한 구조체

    struct AddrInfo {
        uint256 timePeriod;                     // Uploaded time
        address BlockedAddress;                 //BlockedAddr 
    }    
    mapping (uint256 => AddrInfo) public _playerList;


    uint256 private MAX_TOKEN_COUNT = 20000000000;   // 총 코인 개수
    uint256 public initialTimestamp;
    bool public timestampSet;
    uint256 public timePeriod; 

    AddrInfo[] public _AddrList;//구조체 배열 선언
    uint public player=_AddrList.length;

    constructor() ERC20("Amaranthus", "AAS") {
        // Mint 100 tokens to msg.sender
        // Similar to how
        // 1 dollar = 100 cents
        // 1 token = 1 * (10 ** decimals)
        _mint(msg.sender, MAX_TOKEN_COUNT * 10**uint(decimals()));
        _AddrList.push(AddrInfo(0,msg.sender));
    }

     function setlockAddress() public
    {
        AddrInfo memory newAddrInfo = AddrInfo({
            timePeriod:timePeriod,
            BlockedAddress:msg.sender
        });

        uint256 playercount = _playerCounter.current();
        _playerCounter.increment();

        _playerList[playercount]=newAddrInfo;
      
    }

//여기서 반복문 구현해서 구조체 정보 리턴하려고 하지마셈 int i=0 선언하는순간 가스비임 그냥 인덱스 입력하면 계정 리턴하는 함수 따로하나 파셈
    function isAddrLocked(uint256 index) public view returns( uint256)
    {
        if( _playerList[index].BlockedAddress==msg.sender)
        {
            return
            _playerList[index].timePeriod;
        }
        else
        {
            return 0;
        }
  
    }


    function setAddrTimestamp(uint256 _timePeriodInSeconds) public {
        initialTimestamp = block.timestamp;
        timePeriod = initialTimestamp.add(_timePeriodInSeconds);

        address BlockedAddress=msg.sender;
        _AddrList.push(AddrInfo(timePeriod,BlockedAddress));
    }


    


    function transferTimeLockedTokensAfterTimePeriod( address to, uint256 amount,uint index) public  
    {      
        require(to != address(0), "ERC20: transfer to the zero address");
        require(to != msg.sender, "It's your NFT you cannot give you token ");
        // require(msg.sender == to, "Only the token recipient can perform the unlock");


        require(block.timestamp>=isAddrLocked(index),"Tokens are only available after correct time period has elapsed");
            transfer(to, amount);   
            setAddrTimestamp(240);        
    }

   

    
    //tokenid는 무조건 존재하는값일거임 왜냐하면 nft로 발행된거에서 tokenid 파라미터로 받을거니까
    //그리고 tokenid 인덱스로 넣으면 안되고 특정 계정이 인덱스 되서 timeperiod랑 tokenid값 가지는게 베스트 인거같다.
    // to 매개변수는 token 수령자. 
    // timstamp 지나야 transfer가 실행되잖아. 
    //tokenid는 파라미터로 받을필요가없다 그냥 특정계정에 대해서 트랜잭션 실행했으면 
    //그 timeperiod만 그계정에 한해서 막아버리면 끝남
    //특정계정 timelock은 됐고 require문 추가해야함 else문에 걸려도 강제 트랜잭션이 지금 되거든 매우중요함
    //지금 이 로직 그대로 amaranth 토큰 1개 전송되는거 확인함 위에거만 해결해라.
    //index storage에 박을 방법 찾아.
    //exists는 제값을 못함 바보함수니까 수정해야함

}