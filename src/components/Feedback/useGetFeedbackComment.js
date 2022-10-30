import { gql, useQuery } from '@apollo/client'
  
const GET_FEEDBACKS_QUERY = gql`
  query GetFeedbacksQuery {
    feedbacks(orderBy: publishedAt_DESC) {
      reviewerName
      commentary
      reviewerPicture {
        url
      }
    }
  }
`

export const useGetFeedbackContent = () => {
  const { data, loading, error } = useQuery(GET_FEEDBACKS_QUERY)
  
  if (loading) console.log('Loading...')
  if (error) console.log('Error: ', error)
  
  return { data, loading, error }
}
