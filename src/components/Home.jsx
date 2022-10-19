export const Home = () => {
  return (
    <section
      id='inicio'
      className='custom-home-bg flex justify-center bg-no-repeat bg-contain
      bg-left h-[calc(100vh_-_112px)] px-6'
    >
      <div className='max-w-6xl w-full flex items-center justify-between'>
        <div className=''>
        </div>

        <div className='h-full flex flex-col items-center justify-center
        text-center'>
          <h1 className='font-poppins font-bold text-4xl'>
            Lorem ipsum dolor sit amet tis.
          </h1>
          <p className='font-josefin font-regular text-lg text-[#384633]'>
            Corrupti perspiciatis ad saepe quidem necessitatibus sint! Valitus!
          </p>

          <div className='pt-6'>
            <a
              href='#'
              target='_blank'
              className='font-josefin text-base font-bold text-white px-8 py-4
              bg-purple-300 hover:bg-purple-500 hover:transition-colors
              duration-100 ease-in-out rounded-md'
            >
              Quero encomendar!
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}