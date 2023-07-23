import { useQuery } from 'react-query';
import { GameBaseNFT__factory } from 'web3-config';
import { useAddress } from 'wagmi-lfg';
import axios from 'axios';

export const useNFTsOwnedQuery = (address?: string, type?: string) => {
  const gamebaseContractAddress = (
    useAddress(GameBaseNFT__factory) as string
  )?.toLowerCase();
  const query = useQuery<any>(
    ['address', address],
    async () => {
      const { data } = await axios.get(
        `https://polygonzkevm-testnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY}/getNFTs?owner=${address}&withMetadata=true&pageSize=100`
      );
      if (type === 'gamebase') {
        const gamebaseNFTs = data.ownedNfts.filter(
          (nft: any) => nft.contract.address === gamebaseContractAddress
        );
        return gamebaseNFTs;
      }
      console.log(data.ownedNfts);
      return data.ownedNfts;
    },
    {
      enabled: Boolean(address),
      refetchInterval: 3000,
    }
  );

  return query;
};
