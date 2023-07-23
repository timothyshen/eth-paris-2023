import '@rainbow-me/rainbowkit/styles.css';

import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  Chain,
  goerli,
  gnosisChiado,
  celo,
  zkSyncTestnet,
  polygonMumbai,

} from "wagmi/chains";
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { config } from '../config/config';

const Linea: Chain = {
  id: 59140,
  name: 'Linea Testnet',
  network: 'linea',
  rpcUrls: {
    default: 'https://rpc.linea.build',
  },
  explorerURL: 'https://explorer.goerli.linea.build',
  explorerName: 'Linea Explorer',
  nativeCurrency: {
    name: 'ETH',
    symbol: 'ETH',
    decimals: 18,
  },
}


const chains = [
  goerli,
  gnosisChiado,
  celo,
  zkSyncTestnet,
  polygonMumbai,
]

const { provider } = configureChains(config.defaultChains, [
  alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_KEY }),
  publicProvider(),
]);

const { connectors } = getDefaultWallets({
  chains,
  appName: 'WIP',
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const Web3Provider = ({ children }) => {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={darkTheme({})}>
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default Web3Provider;
