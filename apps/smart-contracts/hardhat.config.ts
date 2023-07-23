import '@nomiclabs/hardhat-ethers';
import 'hardhat-deploy-ethers';
import 'hardhat-deploy';
import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';
import 'hardhat-gas-reporter';
import 'hardhat-abi-exporter';
import '@matterlabs/hardhat-zksync-deploy';
import '@matterlabs/hardhat-zksync-solc';

import * as dotenv from 'dotenv';
import { HardhatUserConfig, task } from 'hardhat/config';

dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ALCHEMY_KEY = process.env.ALCHEMY_KEY;

const config: HardhatUserConfig = {
  solidity: '0.8.18',
  // defaultNetwork: 'zkSyncTestnet',
  networks: {
    goerli: {
      chainId: 5,
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_KEY}`,
      accounts: [`${PRIVATE_KEY}`],
      deploy: ['deploy/testnet/goerli'],
    },
    alfajores: {
      url: 'https://alfajores-forno.celo-testnet.org',
      accounts: [`${PRIVATE_KEY}`],
      chainId: 44787,
      deploy: ['deploy/testnet/goerli'],
    },
    chiado: {
      url: 'https://rpc.chiadochain.net',
      gasPrice: 1000000000,
      accounts: [`${PRIVATE_KEY}`],
      chainId: 10200,
      deploy: ['deploy/testnet/goerli'],
    },
    zkEVM: {
      url: `https://rpc.public.zkevm-test.net`,
      accounts: [`${PRIVATE_KEY}`],
      chainId: 1442,
      deploy: ['deploy/testnet/goerli'],
    },
    zkSyncTestnet: {
      url: 'https://testnet.era.zksync.dev',
      ethNetwork: 'goerli', // or a Goerli RPC endpoint from Infura/Alchemy/Chainstack etc.
      zksync: false,
      chainId: 280,
      deploy: ['deploy/testnet/goerli'],
    },
    linea: {
      url: `https://linea-goerli.infura.io/v3/YOUR-INFURA-API-KEY`,
      accounts: [`${PRIVATE_KEY}`],
      chainId: 59140,
      deploy: ['deploy/testnet/goerli'],
    },
  },
  zksolc: {
    version: 'latest',
    settings: {},
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  paths: {
    deployments: '../../packages/web3-config/deployments',
  },
  gasReporter: {
    enabled: true,
    currency: 'USD',
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  typechain: {
    outDir: '../../packages/web3-config/typechain',
    target: 'ethers-v5',
    alwaysGenerateOverloads: true,
  },

  abiExporter: {
    path: './abi',
    clear: true,
    flat: true,
    spacing: 2,
    runOnCompile: true,
  },
};

export default config;
