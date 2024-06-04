"use client"
import React from 'react'
import { SectionHeading } from './section_heading'
import { motion } from 'framer-motion'
import { useTabInView } from '@/lib/hooks'
import { sendEmail } from '@/actions/sendEmail'
import SubmitBtn from './submit-btn'
import toast from 'react-hot-toast'

export const Contact = () => {
  const ref = useTabInView('Contact')

  return (
    <motion.section ref={ref} id='contact' className='max-w-[53rem] scroll-mt-28 mt-28 sm:mt-0 w-[min(100%,38rem) mb-28 sm:mb-28'
      initial={{ opacity: 0 }} whileInView={{ opacity: 1}}
      transition={{ duration: 1 }}
    >
        <SectionHeading>Contact Me</SectionHeading>
        <p className='text-gray-700 text-center -mt-5'>Feel free to contact me at <a className='underline' href='mailto:thiagobuenogarcia1@gmail.com'>thiagobuenogarcia1@gmail.com</a> or through this form
        </p>
        <form className='mt-10 flex flex-col' 
        action={async formData => {
          const { data, error } = await sendEmail(formData)

          if (error) {
            console.log(error)
          } else {
            console.log(data)
          }

          toast.success("Email sent")
        }}>
            <input type='email' 
            name='senderEmail'
            className='px-4 h-14 rounded-lg border border-black/10' placeholder='Your Email'
            required
            maxLength={200}
            />
            <textarea className='px-4 h-52 my-3 rounded-lg border border-black/10' 
            name='message'
            placeholder='Your Message'
            required
            maxLength={500}
            />
            <SubmitBtn />
        </form>
    </motion.section>
  )
}
