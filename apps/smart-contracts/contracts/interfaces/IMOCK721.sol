// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

interface IMOCK721 {
    function mint(address to, uint256 tokenId) external;

    function burn(address from, uint256 tokenId) external;

    function transfer(
        address from,
        address to,
        uint256 tokenId
    ) external returns (bool);

    function balanceOf(address account) external view returns (uint256);
}
