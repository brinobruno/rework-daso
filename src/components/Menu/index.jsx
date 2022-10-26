import { useGetMenuContent } from './useGetMenuContent'

export const Menu = () => {
  const { data, loading, error } = useGetMenuContent()

  if (loading) return <span>Loading...</span>
  if (error) return <span>Server error!</span>

  return (
    <section
      id='menu'
      className='flex justify-center bg-no-repeat bg-contain bg-left py-32 px-6'
    >
      <div className='max-w-6xl w-full flex items-center justify-between'>
        Menu
      </div>
      <div>
      {
        data.categories.map(((category, index) => (
          <span>
            { category.name }
          </span>
        )))
      }
      </div>
    </section>
  )
}