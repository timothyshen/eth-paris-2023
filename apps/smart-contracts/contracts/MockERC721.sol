// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import '@openzeppelin/contracts/utils/Counters.sol';
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract MockERC721 is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    uint256 public constant PRICE_TOKEN = 0.001 ether;
    string private baseURI;

    mapping(uint256 => string) private _tokenImageURIs;

    constructor(string memory _baseURI) ERC721('Mock721', 'M721') {
        baseURI = _baseURI;
    }

    function mint() external {
        uint256 tokenId = _tokenIds.current();
        _tokenIds.increment();

        _mint(msg.sender, tokenId);
    }

    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }

    function setBaseURI(string memory _baseURI) public {
        baseURI = _baseURI;
    }

    // Getter
    function _startTokenId() internal pure returns (uint256) {
        return 1;
    }
}
