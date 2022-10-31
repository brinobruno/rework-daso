import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Mousewheel, Autoplay } from 'swiper'
import { useGetFeedbackContent } from './useGetFeedbackContent'

import userIcon from './../../assets/user.png'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.min.css'

export const Feedback = () => {
  const { data, loading, error } = useGetFeedbackContent()

  if (loading) return <span>Loading...</span>
  if (error) return <span>Server error!</span>

  SwiperCore.use([Mousewheel, Autoplay])

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
          mousewheel
          loop
          autoplay={{
            delay: 5000,
            disableOnInteraction: true
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              setWrapperSize: true
            }
          }}
        >
          {data.feedbacks.map(((item, index) => (
            <SwiperSlide key={ index }>
              <blockquote className='w-full p-8 rounded-[0.25rem] bg-white
              max-h-[240px] h-[240px] flex justify-between flex-col
              cursor-pointer'>
                <p className='mb-6 indent-7 font-josefin text-lg text-gray-900
                relative'>
                  <span className='font-bold text-purple-500 absolute
                  top-[0.45rem] -left-[1.875rem] font-serif text-[2.6rem]'>
                    “
                  </span>
                    { item.commentary }
                </p>

                <cite className='flex items-end'>
                  <img
                    src={
                      item?.reviewerPicture?.url
                      ? item.reviewerPicture.url
                      : userIcon
                    }
                    alt={ item?.reviewerName ? item.reviewerName : 'Anônimo' }
                    className='w-[2rem] h-[2rem] object-cover clip mr-2'
                    loading='lazy'
                  />
                  <span className='font-josefin text-lg text-gray-900
                  not-italic'>
                    { item?.reviewerName ? item.reviewerName : 'Anônimo' }
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