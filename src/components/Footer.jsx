import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { SiLinktree } from 'react-icons/si'

import DasoLogoLight from './../assets/daso-logo-light.png'

export const Footer = () => {
  return (
    <footer
      className='flex justify-center py-16 px-6 bg-[#a56ab9] text-[#FAFAFA]
      flex-col'
    >
      <div className='w-full max-w-6xl mx-auto'>
        <div className='w-full flex items-center justify-between text-center'>
          <div className='flex flex-col items-start justify-center'>
            <img
              src={ DasoLogoLight }
              alt='Daso confeitaria'
              title='Daso confeitaria'
              className='max-w-[96px] h-full mb-9'
            />

            <span className='font-josefin text-xl text-[#FAFAFA]'>
              ©2022 Daso Confeitaria.
            </span>
            <span className='font-josefin text-xl text-[#FAFAFA]'>
              Todos os direitos reservados.
            </span>
          </div>

          <div className='flex gap-7 items-center justify-end'>
            <a
              href='https://www.instagram.com/daso.confeitaria/</div>'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaInstagram
                color="#FAFAFA"
                size={ 30 }
                title="Instagram"
              />
            </a>

            <a
              href='https://api.whatsapp.com/send?phone=5512996311208&text=Oie!%20Quero%20doces!%20Quais%20tem%20disponíveis?'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaWhatsapp
                color="#FAFAFA"
                size={ 30 }
                title="WhatsApp"
              />
            </a>

            <a
              href='https://linktr.ee/da.so'
              target='_blank'
              rel='noopener noreferrer'
            >
              <SiLinktree
                color="#FAFAFA"
                size={ 30 }
                title="Linktree"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}