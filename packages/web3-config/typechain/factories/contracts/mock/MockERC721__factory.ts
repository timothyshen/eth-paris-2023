/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  MockERC721,
  MockERC721Interface,
} from "../../../contracts/mock/MockERC721";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600a81526020017f4d6f636b455243373231000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f4d3732310000000000000000000000000000000000000000000000000000000081525081600090816200008f919062000324565b508060019081620000a1919062000324565b5050506200040b565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200012c57607f821691505b602082108103620001425762000141620000e4565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620001ac7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200016d565b620001b886836200016d565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600062000205620001ff620001f984620001d0565b620001da565b620001d0565b9050919050565b6000819050919050565b6200022183620001e4565b6200023962000230826200020c565b8484546200017a565b825550505050565b600090565b6200025062000241565b6200025d81848462000216565b505050565b5b8181101562000285576200027960008262000246565b60018101905062000263565b5050565b601f821115620002d4576200029e8162000148565b620002a9846200015d565b81016020851015620002b9578190505b620002d1620002c8856200015d565b83018262000262565b50505b505050565b600082821c905092915050565b6000620002f960001984600802620002d9565b1980831691505092915050565b6000620003148383620002e6565b9150826002028217905092915050565b6200032f82620000aa565b67ffffffffffffffff8111156200034b576200034a620000b5565b5b62000357825462000113565b6200036482828562000289565b600060209050601f8311600181146200039c576000841562000387578287015190505b62000393858262000306565b86555062000403565b601f198416620003ac8662000148565b60005b82811015620003d657848901518255600182019150602085019450602081019050620003af565b86831015620003f65784890151620003f2601f891682620002e6565b8355505b6001600288020188555050505b505050505050565b61268a806200041b6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb4651461025b578063b88d4fde14610277578063c87b56dd14610293578063e985e9c5146102c3576100ea565b80636352211e146101dd57806370a082311461020d57806395d89b411461023d576100ea565b8063095ea7b3116100c8578063095ea7b31461016d57806323b872dd1461018957806340c10f19146101a557806342842e0e146101c1576100ea565b806301ffc9a7146100ef57806306fdde031461011f578063081812fc1461013d575b600080fd5b610109600480360381019061010491906118ef565b6102f3565b6040516101169190611937565b60405180910390f35b6101276103d5565b60405161013491906119e2565b60405180910390f35b61015760048036038101906101529190611a3a565b610467565b6040516101649190611aa8565b60405180910390f35b61018760048036038101906101829190611aef565b6104ad565b005b6101a3600480360381019061019e9190611b2f565b6105c4565b005b6101bf60048036038101906101ba9190611aef565b610624565b005b6101db60048036038101906101d69190611b2f565b610632565b005b6101f760048036038101906101f29190611a3a565b610652565b6040516102049190611aa8565b60405180910390f35b61022760048036038101906102229190611b82565b6106d8565b6040516102349190611bbe565b60405180910390f35b61024561078f565b60405161025291906119e2565b60405180910390f35b61027560048036038101906102709190611c05565b610821565b005b610291600480360381019061028c9190611d7a565b610837565b005b6102ad60048036038101906102a89190611a3a565b610899565b6040516102ba91906119e2565b60405180910390f35b6102dd60048036038101906102d89190611dfd565b610901565b6040516102ea9190611937565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103be57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806103ce57506103cd82610995565b5b9050919050565b6060600080546103e490611e6c565b80601f016020809104026020016040519081016040528092919081815260200182805461041090611e6c565b801561045d5780601f106104325761010080835404028352916020019161045d565b820191906000526020600020905b81548152906001019060200180831161044057829003601f168201915b5050505050905090565b6000610472826109ff565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006104b882610652565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610528576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161051f90611f0f565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610547610a4a565b73ffffffffffffffffffffffffffffffffffffffff161480610576575061057581610570610a4a565b610901565b5b6105b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105ac90611fa1565b60405180910390fd5b6105bf8383610a52565b505050565b6105d56105cf610a4a565b82610b0b565b610614576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060b90612033565b60405180910390fd5b61061f838383610ba0565b505050565b61062e8282610e99565b5050565b61064d83838360405180602001604052806000815250610837565b505050565b60008061065e83610eb7565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036106cf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106c69061209f565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610748576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161073f90612131565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606001805461079e90611e6c565b80601f01602080910402602001604051908101604052809291908181526020018280546107ca90611e6c565b80156108175780601f106107ec57610100808354040283529160200191610817565b820191906000526020600020905b8154815290600101906020018083116107fa57829003601f168201915b5050505050905090565b61083361082c610a4a565b8383610ef4565b5050565b610848610842610a4a565b83610b0b565b610887576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161087e90612033565b60405180910390fd5b61089384848484611060565b50505050565b60606108a4826109ff565b60006108ae6110bc565b905060008151116108ce57604051806020016040528060008152506108f9565b806108d8846110d3565b6040516020016108e992919061218d565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610a08816111a1565b610a47576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a3e9061209f565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610ac583610652565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610b1783610652565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610b595750610b588185610901565b5b80610b9757508373ffffffffffffffffffffffffffffffffffffffff16610b7f84610467565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610bc082610652565b73ffffffffffffffffffffffffffffffffffffffff1614610c16576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c0d90612223565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610c85576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c7c906122b5565b60405180910390fd5b610c9283838360016111e2565b8273ffffffffffffffffffffffffffffffffffffffff16610cb282610652565b73ffffffffffffffffffffffffffffffffffffffff1614610d08576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cff90612223565b60405180910390fd5b6004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610e948383836001611308565b505050565b610eb382826040518060200160405280600081525061130e565b5050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610f62576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f5990612321565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516110539190611937565b60405180910390a3505050565b61106b848484610ba0565b61107784848484611369565b6110b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110ad906123b3565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b6060600060016110e2846114f0565b01905060008167ffffffffffffffff81111561110157611100611c4f565b5b6040519080825280601f01601f1916602001820160405280156111335781602001600182028036833780820191505090505b509050600082602001820190505b600115611196578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a858161118a576111896123d3565b5b04945060008503611141575b819350505050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166111c383610eb7565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600181111561130257600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16146112765780600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461126e9190612431565b925050819055505b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16146113015780600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546112f99190612465565b925050819055505b5b50505050565b50505050565b6113188383611643565b6113256000848484611369565b611364576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161135b906123b3565b60405180910390fd5b505050565b600061138a8473ffffffffffffffffffffffffffffffffffffffff16611860565b156114e3578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026113b3610a4a565b8786866040518563ffffffff1660e01b81526004016113d594939291906124ee565b6020604051808303816000875af192505050801561141157506040513d601f19601f8201168201806040525081019061140e919061254f565b60015b611493573d8060008114611441576040519150601f19603f3d011682016040523d82523d6000602084013e611446565b606091505b50600081510361148b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611482906123b3565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506114e8565b600190505b949350505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000831061154e577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381611544576115436123d3565b5b0492506040810190505b6d04ee2d6d415b85acef8100000000831061158b576d04ee2d6d415b85acef81000000008381611581576115806123d3565b5b0492506020810190505b662386f26fc1000083106115ba57662386f26fc1000083816115b0576115af6123d3565b5b0492506010810190505b6305f5e10083106115e3576305f5e10083816115d9576115d86123d3565b5b0492506008810190505b61271083106116085761271083816115fe576115fd6123d3565b5b0492506004810190505b6064831061162b5760648381611621576116206123d3565b5b0492506002810190505b600a831061163a576001810190505b80915050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036116b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116a9906125c8565b60405180910390fd5b6116bb816111a1565b156116fb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116f290612634565b60405180910390fd5b6117096000838360016111e2565b611712816111a1565b15611752576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161174990612634565b60405180910390fd5b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461185c600083836001611308565b5050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6118cc81611897565b81146118d757600080fd5b50565b6000813590506118e9816118c3565b92915050565b6000602082840312156119055761190461188d565b5b6000611913848285016118da565b91505092915050565b60008115159050919050565b6119318161191c565b82525050565b600060208201905061194c6000830184611928565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561198c578082015181840152602081019050611971565b60008484015250505050565b6000601f19601f8301169050919050565b60006119b482611952565b6119be818561195d565b93506119ce81856020860161196e565b6119d781611998565b840191505092915050565b600060208201905081810360008301526119fc81846119a9565b905092915050565b6000819050919050565b611a1781611a04565b8114611a2257600080fd5b50565b600081359050611a3481611a0e565b92915050565b600060208284031215611a5057611a4f61188d565b5b6000611a5e84828501611a25565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611a9282611a67565b9050919050565b611aa281611a87565b82525050565b6000602082019050611abd6000830184611a99565b92915050565b611acc81611a87565b8114611ad757600080fd5b50565b600081359050611ae981611ac3565b92915050565b60008060408385031215611b0657611b0561188d565b5b6000611b1485828601611ada565b9250506020611b2585828601611a25565b9150509250929050565b600080600060608486031215611b4857611b4761188d565b5b6000611b5686828701611ada565b9350506020611b6786828701611ada565b9250506040611b7886828701611a25565b9150509250925092565b600060208284031215611b9857611b9761188d565b5b6000611ba684828501611ada565b91505092915050565b611bb881611a04565b82525050565b6000602082019050611bd36000830184611baf565b92915050565b611be28161191c565b8114611bed57600080fd5b50565b600081359050611bff81611bd9565b92915050565b60008060408385031215611c1c57611c1b61188d565b5b6000611c2a85828601611ada565b9250506020611c3b85828601611bf0565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611c8782611998565b810181811067ffffffffffffffff82111715611ca657611ca5611c4f565b5b80604052505050565b6000611cb9611883565b9050611cc58282611c7e565b919050565b600067ffffffffffffffff821115611ce557611ce4611c4f565b5b611cee82611998565b9050602081019050919050565b82818337600083830152505050565b6000611d1d611d1884611cca565b611caf565b905082815260208101848484011115611d3957611d38611c4a565b5b611d44848285611cfb565b509392505050565b600082601f830112611d6157611d60611c45565b5b8135611d71848260208601611d0a565b91505092915050565b60008060008060808587031215611d9457611d9361188d565b5b6000611da287828801611ada565b9450506020611db387828801611ada565b9350506040611dc487828801611a25565b925050606085013567ffffffffffffffff811115611de557611de4611892565b5b611df187828801611d4c565b91505092959194509250565b60008060408385031215611e1457611e1361188d565b5b6000611e2285828601611ada565b9250506020611e3385828601611ada565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611e8457607f821691505b602082108103611e9757611e96611e3d565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000611ef960218361195d565b9150611f0482611e9d565b604082019050919050565b60006020820190508181036000830152611f2881611eec565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000602082015250565b6000611f8b603d8361195d565b9150611f9682611f2f565b604082019050919050565b60006020820190508181036000830152611fba81611f7e565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206f7220617070726f76656400000000000000000000000000000000000000602082015250565b600061201d602d8361195d565b915061202882611fc1565b604082019050919050565b6000602082019050818103600083015261204c81612010565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b600061208960188361195d565b915061209482612053565b602082019050919050565b600060208201905081810360008301526120b88161207c565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b600061211b60298361195d565b9150612126826120bf565b604082019050919050565b6000602082019050818103600083015261214a8161210e565b9050919050565b600081905092915050565b600061216782611952565b6121718185612151565b935061218181856020860161196e565b80840191505092915050565b6000612199828561215c565b91506121a5828461215c565b91508190509392505050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b600061220d60258361195d565b9150612218826121b1565b604082019050919050565b6000602082019050818103600083015261223c81612200565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b600061229f60248361195d565b91506122aa82612243565b604082019050919050565b600060208201905081810360008301526122ce81612292565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b600061230b60198361195d565b9150612316826122d5565b602082019050919050565b6000602082019050818103600083015261233a816122fe565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b600061239d60328361195d565b91506123a882612341565b604082019050919050565b600060208201905081810360008301526123cc81612390565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061243c82611a04565b915061244783611a04565b925082820390508181111561245f5761245e612402565b5b92915050565b600061247082611a04565b915061247b83611a04565b925082820190508082111561249357612492612402565b5b92915050565b600081519050919050565b600082825260208201905092915050565b60006124c082612499565b6124ca81856124a4565b93506124da81856020860161196e565b6124e381611998565b840191505092915050565b60006080820190506125036000830187611a99565b6125106020830186611a99565b61251d6040830185611baf565b818103606083015261252f81846124b5565b905095945050505050565b600081519050612549816118c3565b92915050565b6000602082840312156125655761256461188d565b5b60006125738482850161253a565b91505092915050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b60006125b260208361195d565b91506125bd8261257c565b602082019050919050565b600060208201905081810360008301526125e1816125a5565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b600061261e601c8361195d565b9150612629826125e8565b602082019050919050565b6000602082019050818103600083015261264d81612611565b905091905056fea26469706673582212205e9812d7736bc611bbd760f0c517615d240be290b2dddcfeb1bbe8adc16ea3c064736f6c63430008120033";

type MockERC721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockERC721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockERC721__factory extends ContractFactory {
  constructor(...args: MockERC721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockERC721> {
    return super.deploy(overrides || {}) as Promise<MockERC721>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MockERC721 {
    return super.attach(address) as MockERC721;
  }
  override connect(signer: Signer): MockERC721__factory {
    return super.connect(signer) as MockERC721__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockERC721Interface {
    return new utils.Interface(_abi) as MockERC721Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockERC721 {
    return new Contract(address, _abi, signerOrProvider) as MockERC721;
  }
}
