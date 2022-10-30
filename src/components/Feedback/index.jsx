import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
import SwiperCore, { EffectFlip, Navigation, Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/grid'
import 'swiper/css/autoplay'


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
        <div>
          <h3 className='font-poppins font-bold text-4xl pb-4 text-center'>
            Depoimentos
          </h3>

          <div className=''>
            <Swiper
              pagination={{ clickable: true }}
              spaceBetween={0}
              slidesPerView={1}
              mousewheel={true}
              className='mySwiper'
              modules={[Pagination]}
            >
              {data.feedbacks.map(((item, index) => (
                <SwiperSlide className='w-full'>
                  <div className='max-w-[300px]'>
                    <span>{item.reviewerName}</span>
                    <span>{item.commentary}</span>
                    <img
                      src={item.reviewerPicture.url}
                      alt=''
                      className='max-w-[100px]'
                    />
                  </div>
                </SwiperSlide>
              )))}
            </Swiper>


      </div>
    </div>
      </div >

    </section >
  )
}