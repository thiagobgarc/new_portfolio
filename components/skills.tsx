"use client"
import React from 'react'
import { SectionHeading } from './section_heading'
import { skillsData } from '@/lib/data'
import { useTabInView } from '@/lib/hooks'
import { motion } from 'framer-motion'

const fadeInAnimation = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.05 * index,
        }
    })
}

export const Skills = () => {
    const { ref } = useTabInView('Skills')
  return (
    <section ref={ref} id='skills' className=' max-w-[53rem] scroll-mt-28 text-center mt-28 sm:mt-0'>
        <SectionHeading>My Skills</SectionHeading>
            <ul className='flex flex-wrap gap-2 justify-center text-lg'>
                {
                    skillsData.map((skill, index) => (
                        <motion.li key={index}
                            className='bg-gray-200/50 border border-black/[0.1] rounded-xl px-5 py-3'
                            variants={fadeInAnimation}
                            initial='initial'
                            whileInView={'animate'}
                            viewport={{ once: true }}
                            custom={index}
                        >
                            {skill}
                        </motion.li>
                    ))
                }
            </ul>
    </section>
  )
}
