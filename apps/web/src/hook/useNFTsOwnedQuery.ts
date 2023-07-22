import { gql } from 'graphql-request';
import { useQuery } from 'react-query';
import axios from 'axios';

export const useNFTsOwnedQuery = (address?: string) => {
  const query = useQuery<any>(
    ['address', address],
    async () => {
      const { data } = await axios.get(
        `https://eth-goerli.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY}/getNFTs?owner=${address}&withMetadata=true&pageSize=100`
      );
      return data;
    },
    {
      enabled: Boolean(address),
      refetchInterval: 3000,
    }
  );

  return query;
};
