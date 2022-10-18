import Scrollspy from 'react-scrollspy'

import { sectionsData } from './sections'
import BrandLogo from './../../assets/daso-logo.png'

export const Header = () => {
  return (
    <header className='w-full h-28 flex justify-center bg-[#fbfbfb] shadow-md
    fixed top-0 left-0 z-10 ease-in-out'>
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

        <ul> 
          <Scrollspy
            items={ ['inicio', 'sobre', 'cardapio', 'depoimentos', 'contato'] }
            currentClassName='header-section-active'
            className='flex gap-8 mt-2'
          >
          { sectionsData.map((item, i) => (
            <li key={i}>
              <a
                href={ item.href }
                className='font-josefin text-base'
              >
                { item.name }
              </a>
            </li>
          ))}
          </ Scrollspy>
        </ul>
      </nav>
    </header>
  )
}