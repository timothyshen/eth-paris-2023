// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

interface IMOCK1155 {
    function mint(address to, uint256 tokenId, uint256 amount) external;

    function burn(address from, uint256 tokenId, uint256 amount) external;

    function transfer(
        address from,
        address to,
        uint256 tokenId,
        uint256 amount
    ) external returns (bool);

    function balanceOf(
        address account,
        uint256 id
    ) external view returns (uint256);
}
