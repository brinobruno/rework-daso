import { ApolloClient, InMemoryCache } from '@apollo/client'

const hygraphAPIEndpoint = process.env.REACT_APP_HYGRAPH_URI
const hygraphAuthToken = process.env.REACT_APP_HYGRAPH_AUTH_TOKEN

export const client = new ApolloClient({
  uri: hygraphAPIEndpoint,
  headers: {
    'Authorization': `Bearer ${ hygraphAuthToken }`
  },
  cache: new InMemoryCache(),
})