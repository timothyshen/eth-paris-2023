import { gql } from 'graphql-request';
import { useQuery } from 'react-query';
import { GameBaseNFT__factory } from 'web3-config';
import { useAddress } from 'wagmi-lfg';
import axios from 'axios';

export const useNFTsOwnedQuery = (address?: string) => {
  const gamebaseContractAddress = (
    useAddress(GameBaseNFT__factory) as string
  )?.toLowerCase();
  const query = useQuery<any>(
    ['address', address],
    async () => {
      const { data } = await axios.get(
        `https://eth-goerli.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY}/getNFTs?owner=${address}&withMetadata=true&pageSize=100`
      );
      const gamebaseNFTs = data.ownedNfts.filter(
        (nft: any) => nft.contract.address === gamebaseContractAddress
      );
      return gamebaseNFTs;
    },
    {
      enabled: Boolean(address),
      refetchInterval: 3000,
    }
  );

  return query;
};
