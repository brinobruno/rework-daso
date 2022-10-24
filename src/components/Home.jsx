import Chocottone from './../assets/chocottone.jpg'

export const Home = () => {
  return (
    <section
      id='inicio'
      className='flex justify-center bg-no-repeat bg-contain
      bg-left h-[calc(100vh_-_112px)] px-6'
    >
      <div className='max-w-6xl w-full flex items-center justify-between'>
        <div className='h-full flex flex-col items-start justify-center
        text-center max-w-[400px] gap-4'>
          <h1 className='font-poppins font-bold text-4xl text-left'>
            "Sabores que lembrem memórias"
          </h1>
          <p className='font-josefin font-regular text-lg text-[#384633]
          text-left'>
            <span className='font-bold text-purple-500'>
              DA.SO
            </span> - Confeitaria artesanal feito por uma menina com um sonho,
            venha conhecer!
          </p>

          <div className='pt-6'>
            <a
              href='#'
              target='_blank'
              className='font-josefin text-base font-bold text-white px-9 py-5
              bg-purple-300 hover:bg-purple-500 hover:transition-colors
              duration-100 ease-in-out rounded-md'
            >
              Quero encomendar!
            </a>
          </div>
        </div>
        
        <div>
          <img
            src={ Chocottone }
            alt='Doce'
            title='Doce'
            className='max-w-[450px]'
          />
        </div>
      </div>
    </section>
  )
}