import { sectionsData } from './sections'
import BrandLogo from './../../assets/daso-logo.png'

export const Header = () => {
  return (
    <header className='w-full h-28 flex justify-center bg-white shadow-md'>
      <nav className='w-full max-w-6xl flex justify-between items-center mx-6
      mb-4'>
        <ul>
          <img
            src={ BrandLogo }
            alt='Logotipo'
            title='Da.so'
            className='w-24 cursor-pointer'
          />
        </ul>
        <ul className='flex gap-8'> {
          sectionsData.map((item, i) => (
            <a
              href={ item.href }
              key={ i }
              className=''
            >
              { item.name }
            </a>
          ))
        } </ul>
      </nav>
    </header>
  )
}