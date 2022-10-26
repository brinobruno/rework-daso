import { ApolloClient, InMemoryCache } from '@apollo/client'

const graphqlAPIEndpoint = process.env.REACT_APP_GRAPHQL_URI
const graphqlAuthToken = process.env.REACT_APP_AUTH_TOKEN

export const client = new ApolloClient({
  uri: graphqlAPIEndpoint,
  headers: {
    'Authorization': `Bearer ${ graphqlAuthToken }`
  },
  cache: new InMemoryCache(),
})