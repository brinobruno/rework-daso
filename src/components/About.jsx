import Oreo from './../assets/oreo.jpg'

export const About = () => {
  return (
    <section
      id='sobre'
      className='flex justify-center py-32 px-6 bg-[#fdfcf4]'
    >
      <div className='max-w-6xl w-full flex items-center justify-between flex-col'>
        <div>
          <h3 className='font-poppins font-bold text-4xl mb-4 text-center'>
            Sobre...
          </h3>

          <div className='about-items flex justify-between items-start gap-6'>
            <div className='bg-[#FFFFFF] shadow-lg rounded-lg p-8'>
              <img
                src={ Oreo }
                alt=''
                title=''
                className=''
              />

              <h5 className='font-poppins font-bold text-3xl my-4 text-center'>
                Sobre...
              </h5>
              <p>
                <span>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
                  hic ad deleniti id corporis voluptatibus, ducimus error! Obcaecati
                  maiores beatae facilis reiciendis illo debitis inventore commodi.
                </span>
              </p>
            </div>

            <div className='bg-[#FFFFFF] shadow-lg rounded-lg p-8'>
              <img
                src={ Oreo }
                alt=''
                title=''
                className=''
              />

              <h5 className='font-poppins font-bold text-3xl my-4 text-center'>
                Sobre...
              </h5>
              <p>
                <span>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
                  hic ad deleniti id corporis voluptatibus, ducimus error! Obcaecati
                  maiores beatae facilis reiciendis illo debitis inventore commodi.
                </span>
              </p>
            </div>
            
            <div className='bg-[#FFFFFF] shadow-lg rounded-lg p-8'>
              <img
                src={ Oreo }
                alt=''
                title=''
                className=''
              />

              <h5 className='font-poppins font-bold text-3xl my-4 text-center'>
                Sobre...
              </h5>
              <p>
                <span>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
                  hic ad deleniti id corporis voluptatibus, ducimus error! Obcaecati
                  maiores beatae facilis reiciendis illo debitis inventore commodi.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}