import { gql, useQuery } from '@apollo/client'
  
const GET_MENU_QUERY = gql`
  query GetMenuQuery {
    categories (orderBy: order_ASC, where: { isActive: true }) {
      name
      products {
        name
        description
        value
        isVegan
      }
    }
  }
`

export const useGetMenuContent = () => {
  const { data, loading, error } = useQuery(GET_MENU_QUERY)
  
  if (loading) console.log('Loading...')
  if (error) console.log('Error: ', error)
  
  return { data, loading, error }
}
