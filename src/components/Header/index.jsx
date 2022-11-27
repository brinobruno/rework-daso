import { useEffect, useState } from 'react'
import Scrollspy from 'react-scrollspy'

import { sectionsData } from './sections'
import BrandLogo from './../../assets/daso-logo.png'

export const Header = () => {
  const [scrollTop, setScrollTop] = useState(0)

  const onScroll = () => {
    const doc = document.documentElement
    const windowScrollTracker = doc.scrollTop
    const height = doc.scrollHeight - doc.clientHeight

    const currentScrollByUser = (windowScrollTracker / height) * 100

    setScrollTop(currentScrollByUser)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
    <header
      className='w-full bg-[#fbfbfb] shadow-md fixed top-0 left-0 z-10 ease-in-out'
    >
      { /** Progress bar divs **/}
      <div className='bg-[#fbfbfb] h-1 w-full sticky z-50'>
        <div
          className='bg-purple-500 text-[0.16rem] md:text-[0.2rem]'
          style={{ width: `${ scrollTop }%` }}
        >ㅤ { /** Invisible char so that it uses font-size for the bar **/}
        </div>
      </div>
      
      <div className='w-full h-28 flex justify-center'>
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
              items={
                ['inicio', 'sobre', 'cardapio', 'depoimentos', 'contato']
              }
              currentClassName='header-section-active'
              className='flex gap-8 mt-2'
              /* Adjusts offset on selecting section */
              offset={ -120 }
            >
            { sectionsData.map((item, i) => (
              <li key={ i }>
                <a
                  href={ item.href }
                  className='capitalize font-josefin text-base font-semibold
                  hover:text-purple-300'
                >
                  { item.name }
                </a>
              </li>
            ))}
            </ Scrollspy>
          </ul>
        </nav>
      </div>
    </header>
    </>
  )
}