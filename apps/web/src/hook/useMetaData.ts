import { useQuery } from 'react-query';
import { GameBaseNFT__factory } from 'web3-config';
import { useAddress } from 'wagmi-lfg';
import axios from 'axios';

export const useNFTsMetaData = (tokenId: number) => {
  const gamebaseContractAddress = (
    useAddress(GameBaseNFT__factory) as string
  )?.toLowerCase();
  const query = useQuery<any>(
    ['tokenId', tokenId],
    async () => {
      const { data } = await axios.get(
        `https://polygonzkevm-testnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY}/getNFTMetadata?contractAddress=${gamebaseContractAddress}&tokenId=${tokenId}&pageSize=100`
      );
      const gamebaseNFTs = data.ownedNfts.filter(
        (nft: any) => nft.contract.address === gamebaseContractAddress
      );
      return gamebaseNFTs;
    },
    {
      enabled: Boolean(tokenId),
      refetchInterval: 3000,
    }
  );

  return query;
};
