// SPDX-License-Identifier:MIT
pragma solidity ^0.8.4;

import "./token/ERC721/ERC721.sol";
import "./token/ERC721/extensions/ERC721Enumerable.sol";
import "./token/ERC721/extensions/ERC721URIStorage.sol";
import "./token/ERC721/extensions/ERC721Burnable.sol";
import "./access/Ownable.sol";
import "./utils/Counters.sol";

contract ArtGrowNFT is ERC721, ERC721Enumerable, ERC721URIStorage, ERC721Burnable, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    struct tokenInfo{
        uint256 listenCount;
        uint256 tokenId; 
        address owner;

    }


    mapping(uint256=>tokenInfo) public _tokenInfoList;
    tokenInfo[] public _tokenInfo;//구조체 배열 선언
    


    constructor() ERC721("ArtGrow", "ARG") {}


    function safeMint(address to, string memory uri) public onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);

        tokenInfo memory newtokenInfo = tokenInfo({
            listenCount:0,
            tokenId:tokenId,
            owner:msg.sender
        });
     _tokenInfoList[tokenId]= newtokenInfo;   
    }

    // The following functions are overrides required by Solidity.

    function listen(uint256 _tokenId) public{
        _tokenInfoList[_tokenId].listenCount+=1;
    }

    function howmanyListen(uint256 _tokenId) public view returns(uint256){
        return _tokenInfoList[_tokenId].listenCount;
    }

    function owner(uint256 _tokenId)public view returns(address)
    {
        return _tokenInfoList[_tokenId].owner;
    }



    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}