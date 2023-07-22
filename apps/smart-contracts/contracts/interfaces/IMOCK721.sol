// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

interface IMOCK721 {
    function mint() external;

    function setBaseURI(string memory _baseURI) external;

    function _startTokenId() external pure returns (uint256);
}
