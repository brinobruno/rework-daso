import { FaArrowUp } from 'react-icons/fa'

export const BackToTop = () => {
  return (
    <>
    <a
      href='#inicio'
      className='dc-back-to-top bg-[#a56ab9] fixed right-4 bottom-4 p-[6px]
      z-50'
    >
      <FaArrowUp
        color='#FAFAFA'
        size={ 20 }
        title='Voltar ao topo'
      />
    </a>
    </>
  )
}