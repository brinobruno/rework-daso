import { useGetMenuContent } from './useGetMenuContent'

export const Menu = () => {
  const { data, loading, error } = useGetMenuContent()

  if (loading) return <span>Loading...</span>
  if (error) return <span>Server error!</span>

  return (
    <section
      id='cardapio'
      className='flex justify-center py-32 px-6 flex-col'
    >
      <div className='flex justify-center flex-col w-full max-w-xl mx-auto
      text-center pb-6 mb-12 border-b-2 border-purple-500'>
        <h3 className='font-poppins font-bold text-4xl pb-4'>
          Cardápio
        </h3>
        <p className='font-josefin font-regular text-lg text-gray-700'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime,
          assumenda numquam at in quidem. Lorem ipsum amet dolor sit at amet
          consectetur is sular ier.
        </p>
      </div>

      <div>
        <div className='flex justify-center flex-col w-full max-w-xl mx-auto'>
          { data.categories.map(((category, index) => (
            <ul
              key={ index }
              className='text-center pb-8'
            >
              <div className='pb-4'>
                <strong className='font-poppins text-gray-900 text-2xl'>
                  { category.name }
                </strong>
              </div>

              <div>
              { category.products.map(((product, index) => (
                <li className='list-none py-3 border-b-[1px] border-dashed
                border-b-purple-300'>
                  <div
                    key={ index }
                    className='flex justify-between items-center'
                  >
                    <div className='text-left'>
                      <strong className='font-poppins text-lg text-purple-500'>
                        { product.name }
                      </strong>
                      <br />
                      <span className='font-josefin text-gray-700'>
                        { product.description }
                      </span>
                    </div>

                    <div>
                      <span className='font-poppins text-lg font-bold
                      text-gray-800 border-b-2 border-purple-500'>
                        { `R$${ product.value }` }
                      </span>
                    </div>
                  </div>
                </li>
              ))) }
              </div>
            </ul>
          )))}
        </div>
      </div>
    </section>
  )
}