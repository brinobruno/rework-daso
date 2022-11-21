import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export const Contact = () => {
  const form = useRef()
  const [showConfirmationMessage, setShowConfirmationMessage] = useState(false)

  const sendEmail = (e) => {
    // Raw test email
    e.preventDefault()

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
    const publicAPIKey = process.env.REACT_APP_EMAILJS_PUBLIC_API_KEY

    emailjs.sendForm(
      serviceID,
      templateID,
      // Ref
      form.current,
      publicAPIKey
    )
      .then((result) => {
        console.log(result.text)
        setShowConfirmationMessage(true)
      },
      (error) => {
        console.log(error.text)
      })
  }

  return (
    <section
      id='contato'
      className='flex justify-center py-32 bg-[#FFFFFF] flex-col'
    >
      <div className='w-full max-w-6xl mx-auto'>
        <div className='w-full flex items-center justify-center text-center'>
          <div>
            <h3 className='font-poppins font-bold text-4xl mb-4 text-center'>
              Entre em contato!
            </h3>
          </div>
        </div>

        <div className='flex bg-purple-100 justify-center items-center
        w-full max-w-[600px] mx-auto p-10 rounded-xl mt-4'>
          <form
            ref={ form }
            onSubmit={ sendEmail }
            className='flex justify-between flex-col w-full'
          >
            <div className='flex justify-between items-start gap-6'>
              <div className='flex flex-col w-[50%]'>
                <label
                  className='font-josefin text-lg text-gray-900'
                >
                  Name*
                </label>
                <input
                  type='text'
                  name='user_name'
                  placeholder='Nome'
                  required
                  className='mb-[1.2rem] py-2 px-4 rounded-md'
                />

                <label
                  className='font-josefin text-lg text-gray-900'
                >
                  Email*
                </label>
                <input
                  type='email'
                  name='user_email'
                  placeholder='Email'
                  required
                  className='mb-9 py-2 px-4 rounded-md'
                />  

                <label
                  className='font-josefin text-lg text-gray-900'
                >
                  WhatsApp
                </label>
                <input
                  type='tel'
                  name='user_email'
                  placeholder='Email'
                  className='mb-8 py-2 px-4 rounded-md'
                />

                <button
                  className='font-josefin mb-8 py-2 px-4 rounded-md
                  bg-purple-500 text-gray-50'
                  type='submit'
                  value='Send'
                >
                  Enviar
                </button>
              </div>

              <div className='flex flex-col h-full w-[50%]'>
                <label
                  className='font-josefin text-lg text-gray-900'
                >
                  Assunto*
                </label>
                <textarea
                  name='message'
                  placeholder='Mensagem...'
                  required
                  className='resize-none pt-2 pb-[100%] px-4 rounded-md'
                />
              </div>
            </div>
              {
                showConfirmationMessage
                ? <div className='flex justify-center text-center'>
                    <span>
                      Agradecemos sua mensagem!
                      Entraremos em contato brevemente!
                    </span>
                  </div>
                : ''
              }
          </form>
        </div>
      </div>
    </section>
  )
}