import { ApolloClient, InMemoryCache } from '@apollo/client'

const graphqlAPIEndpoint = process.env.REACT_APP_GRAPHQL_URI

export const client = new ApolloClient({
  uri: graphqlAPIEndpoint,
  cache: new InMemoryCache(),
})