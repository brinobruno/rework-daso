import { useRef } from 'react'
import emailjs from '@emailjs/browser'

export const Contact = () => {
  const form = useRef()

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
      }, (error) => {
          console.log(error.text)
      });
  };

  return (
    <section
      id='contato'
      className='flex justify-center py-32 bg-[#FFFFFF] flex-col'
    >
      <div className='w-full max-w-6xl mx-auto'>
        <div className='w-full flex items-center justify-center text-center'>
          <div>
            <h3 className='font-poppins font-bold text-4xl mb-4 text-center'>
              Entre em contato com a gente!
            </h3>
          </div>
        </div>

        <div>
          <form
            ref={ form }
            onSubmit={ sendEmail }
          >
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <button type="submit" value="Send" />
          </form>
        </div>
      </div>
    </section >
  )
}