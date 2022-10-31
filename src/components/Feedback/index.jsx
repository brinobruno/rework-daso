import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.min.css'


import { useGetFeedbackContent } from './useGetFeedbackContent'

export const Feedback = () => {
  const { data, loading, error } = useGetFeedbackContent()

  if (loading) return <span>Loading...</span>
  if (error) return <span>Server error!</span>

  return (
    <section
      id='depoimentos'
      className='flex justify-center py-32 bg-[#fdfcf4] flex-col'
    >
      <div className='w-full max-w-6xl mx-auto'>
        <div className='w-full flex items-center justify-center text-center'>
          <div>
            <h3 className='font-poppins font-bold text-4xl mb-4 text-center'>
              Depoimentos
            </h3>
          </div>
        </div>

        <Swiper
          className='mySwiper'
          modules={[ Pagination ]}
          pagination={{ clickable: true }}
          slidesPerView={ 1 }
          mousewheel={ true }
          breakpoints={{
            768: {
              slidesPerView: 2,
              setWrapperSize: true
            }
          }}
        >
          {data.feedbacks.map(((item, index) => (
            <SwiperSlide key={ index }>
              <blockquote className='w-full p-8 rounded-[0.25rem]'>
                <p className='mb-6 indent-7 font-josefin text-lg text-gray-900
                relative'>
                  <span className='font-bold text-purple-500 absolute
                  top-[0.45rem] -left-[1.875rem] font-serif text-[2.6rem]'>
                    “
                  </span>
                    { item.commentary }
                </p>

                <cite className='flex items-center font-normal'>
                  <img
                    src={ item.reviewerPicture.url }
                    alt=''
                    className='w-[2rem] h-[2rem] object-cover clip mr-2'
                    loading='lazy'
                  />
                  <span>
                    { item.reviewerName }
                  </span>
                </cite>
              </blockquote>

            </SwiperSlide>
          )))}
        </Swiper>
      </div>
    </section >
  )
}