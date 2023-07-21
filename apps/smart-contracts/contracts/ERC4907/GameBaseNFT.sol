// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import './interfaces/IERC4906.sol';
import './interfaces/IERC4907.sol';
import '@openzeppelin/contracts/utils/Counters.sol';
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

interface IERC6551Registry {
    event AccountCreated(
        address account,
        address implementation,
        uint256 chainId,
        address tokenContract,
        uint256 tokenId,
        uint256 salt
    );

    function createAccount(
        address implementation,
        uint256 chainId,
        address tokenContract,
        uint256 tokenId,
        uint256 seed,
        bytes calldata initData
    ) external returns (address);

    function account(
        address implementation,
        uint256 chainId,
        address tokenContract,
        uint256 tokenId,
        uint256 salt
    ) external view returns (address);
}

contract GameBaseNFT is Ownable, ERC721, IERC4906, IERC4907 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    uint256 public constant PRICE_TOKEN = 0.001 ether;

    IERC6551Registry public ERC6551Registry;
    address public ERC6551AccountImplementation;

    constructor(
        address _ERC6551Registry,
        address _ERC6551AccountImplementation
    ) ERC721('The Managers', 'MAN') {
        ERC6551Registry = IERC6551Registry(_ERC6551Registry);
        ERC6551AccountImplementation = _ERC6551AccountImplementation;
    }

    function mint() external payable {
        uint256 tokenId = _tokenIds.current();
        _tokenIds.increment();
        require(msg.value >= PRICE_TOKEN, 'GameBaseNFT: insufficient funds');

        _mint(msg.sender, tokenId);

        require(
            createAccount(tokenId),
            'GameBaseNFT: failed to create account'
        );
    }

    function createAccount(uint256 tokenId) internal returns (bool) {
        ERC6551Registry.createAccount(
            ERC6551AccountImplementation,
            block.chainid,
            address(this),
            tokenId,
            0,
            abi.encodeWithSignature('initialize()', msg.sender)
        );
        return true;
    }

    function showTBA(uint256 _tokenId) external view returns (address) {
        return
            ERC6551Registry.account(
                ERC6551AccountImplementation,
                block.chainid,
                address(this),
                _tokenId,
                0
            );
    }

    // Getter
    function _startTokenId() internal view returns (uint256) {
        return 1;
    }

    //4907
    struct UserInfo {
        address user; // address of user role
        uint64 expires; // unix timestamp, user expires
    }
    mapping(uint256 => UserInfo) private _users;

    function setUser(
        uint256 tokenId,
        address user,
        uint64 expires
    ) public virtual override {
        require(
            _isApprovedOrOwner(msg.sender, tokenId),
            'ERC721: transfer caller is not owner nor approved'
        );
        require(userOf(tokenId) == address(0), 'User already assigned');
        require(expires > block.timestamp, 'expires should be in future');
        UserInfo storage info = _users[tokenId];
        info.user = user;
        info.expires = expires;
        emit UpdateUser(tokenId, user, expires);
    }

    function userOf(
        uint256 tokenId
    ) public view virtual override returns (address) {
        if (uint256(_users[tokenId].expires) >= block.timestamp) {
            return _users[tokenId].user;
        }
        return address(0);
    }

    /// @notice Get the user expires of an NFT
    /// @dev The zero value indicates that there is no user
    /// @param tokenId The NFT to get the user expires for
    /// @return The user expires for this NFT
    function userExpires(
        uint256 tokenId
    ) public view virtual override returns (uint256) {
        return _users[tokenId].expires;
    }

    function supportsInterface(
        bytes4 interfaceId
    ) public view virtual override(ERC721, IERC165) returns (bool) {
        return
            interfaceId == type(IERC4907).interfaceId ||
            super.supportsInterface(interfaceId);
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId,
        uint256 batchSize
    ) internal virtual override(ERC721) {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);

        if (
            from != to &&
            _users[tokenId].user != address(0) && //user present
            block.timestamp >= _users[tokenId].expires //user expired
        ) {
            delete _users[tokenId];
            emit UpdateUser(tokenId, address(0), 0);
        }
    }
}
