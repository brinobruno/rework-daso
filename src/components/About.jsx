import Oreo from './../assets/oreo.jpg'

export const About = () => {
  return (
    <section
      id='inicio'
      className='flex justify-center bg-no-repeat bg-contain bg-left py-32 px-6'
    >
      <div className='max-w-6xl w-full flex items-center justify-between'>
        <div>
          <img
            src={ Oreo }
            alt='Doce'
            title='Doce'
            className='max-w-[450px]'
          />
        </div>

        <div className='h-full flex flex-col items-start justify-center
        text-center max-w-[400px] gap-4'>
          <h3 className='font-poppins font-bold text-4xl text-left'>
            Sobre Sophia e/ou DA.SO
          </h3>
          <p className='font-josefin font-regular text-lg text-gray-700
          text-left'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            pariatur mollitia neque ex, ducimus ad error dolorum placeat fuga
            minus nam ipsa, accusamus nemo voluptatum enim nulla voluptates
            corporis rem?
          <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit,
            quis ut rem distinctio quia illo sit rerum dicta, laudantium aliquid
            cupiditate quam magnam sequi voluptate? Molestias dolorum architecto
            expedita possimus.
          </p>
        </div>
      </div>
    </section>
  )
}