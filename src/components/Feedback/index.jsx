import { useGetFeedbackContent } from './useGetFeedbackContent'

export const Feedback = () => {
  const { data, loading, error } = useGetFeedbackContent()

  if (loading) return <span>Loading...</span>
  if (error) return <span>Server error!</span>

  return (
    <section
      id='depoimentos'
      className='flex justify-center py-32 px-6 bg-[#fdfcf4]'
    >
      <div className='max-w-6xl w-full flex items-center justify-center
      text-center'>
        <h3 className='font-poppins font-bold text-4xl pb-4 text-center'>
          Depoimentos
        </h3>
      </div>

      <div>
        {data.feedbacks.map((item => (
          <>
          <span>{ item.reviewerName }</span>
          <span>{ item.commentary }</span>
          <img src={ item.reviewerPicture.url } alt="" className='max-w-[100px]'/>
          </>
          
        )))}
      </div>
    </section>
  )
}