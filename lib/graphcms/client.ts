import { GraphQLClient } from 'graphql-request';

const endpoint: string = process.env.GRAPH_CMS_ENDPOINT as string;
const graphcms = new GraphQLClient(endpoint, {
  headers: {
    authorization: process.env.GRAPH_CMS_TOKEN as string,
  },
});

export default graphcms;
