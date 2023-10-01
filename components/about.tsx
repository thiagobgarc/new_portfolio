"use client"
import React from 'react'
import { SectionHeading}  from './section_heading'
import { motion } from 'framer-motion'
import { useTabInView } from '@/lib/hooks'

export const About = () => {
  const { ref } = useTabInView('About', 0.5)

  
  return (
    <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-0 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .18 }}
      id='about' ref={ref}
    >
        <SectionHeading>About Me</SectionHeading>
        <p className='mb-3'>
        My journey into <strong>software engineering</strong> began with a desire to learn how technology could be used to solve real-world problems.
        </p>

        <p className='mb-3'>
        <span className='font-bold'>After</span> having a plumbing career for several years, I decided to pursue a <span className='font-bold'>career</span> in <span className='font-bold'>software engineering</span>. I enrolled in <span className='italic'>General Assembly's</span> immersive bootcamp, where I gained hands-on experience with various programming languages and frameworks, including <span className='italic'>JavaScript, React.js, Node.js, and Python</span>.
        </p>
        
        <p>
            When I am not coding, I enjoy spending time with my family and friends. Occasionally, I also enjoy <span className='italic'>playing the ukelele,</span> <span className='italic'>traveling,</span> and <span className='italic'>eating different types of food</span>.
        </p>
    </motion.section>
  )
}
