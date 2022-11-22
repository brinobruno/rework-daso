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
              href=''
              target='_blank'
              rel='noopener noreferrer'
            >
              Instagram
              <img
                src=''
                alt=''
              />
            </a>

            <a
              href=''
              target='_blank'
              rel='noopener noreferrer'
            >
              WhatsApp
              <img
                src=''
                alt=''
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}