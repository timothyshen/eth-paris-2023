// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

interface IMOCK20 {
    function mint(address to, uint256 amount) external;

    function burn(address from, uint256 amount) external;

    function transfer(address to, uint256 amount) external returns (bool);

    function balanceOf(address account) external view returns (uint256);
}
