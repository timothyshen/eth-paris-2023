import { GraphQLClient } from 'graphql-request';

export const NFTgraphqlClient = new GraphQLClient(
  'https://api.studio.thegraph.com/query/50118/eth-paris-2023/v0.0.1'
);
