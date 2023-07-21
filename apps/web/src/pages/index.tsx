import Counter from '../components/Counter';
import { useContractRead } from 'wagmi-lfg';
import { ConnectButton } from '@rainbow-me/rainbowkit';

import 'web3-config';
const Page = () => {

  return (
    <div style={{ display: 'grid', gap: 20 }}>
      <div>
        <ConnectButton />
      </div>
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
};

export default Page;
