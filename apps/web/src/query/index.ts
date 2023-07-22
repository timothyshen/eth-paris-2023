export const TokensQuery = `query tokens($address: Identity!) {
    poap: TokenBalances(
      input: {filter: {owner: {_in: [$address]}, tokenAddress: {_eq: "0x22C1f6050E56d2876009903609a2cC3fEf83B415"}}, limit: 10, blockchain: ethereum}
    ) {
      data: TokenBalance {
        tokenNfts {
          tokenId
          metaData {
            name
          }
          contentValue {
            image {
              medium
              extraSmall
              large
              original
              small
            }
          }
        }
        tokenType
      }
    }
    TokenNfts(input: {filter: {}, blockchain: ethereum})
  }`;
