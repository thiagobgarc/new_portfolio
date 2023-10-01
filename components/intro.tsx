"use client"
import React from 'react'
import profilePic from '../public/profic.jpeg'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { useTabInView } from '@/lib/hooks'

export const Intro = () => {
  const { ref } = useTabInView('Home', 0.5)

    const profilePicSrc = profilePic.src

  return (
    <section ref={ref} id='home' className='scroll-mt-[100rem] mb-28 max-w-[50rem] text-center sm:mb-0'>
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div initial={{ opacity:0, scale: 0 }} animate={{ opacity:1, scale: 1 }} transition={{ type: 'tween', duration: .2 }}>
                <img src={profilePicSrc} className='rounded-full h-24 w-24 border-[0.35rem] border-white object-cover shadow-xl' width='192' height='192' alt='Profile Picture'/>
                </motion.div>

                <motion.span className='text-4xl absolute bottom-0 right-0'
                    initial={{ opacity:0, scale: 0 }} animate={{ opacity:1, scale: 1 }} transition={{ type: 'spring', stiffness: 125, delay: .1, duration: .7 }}
                >
                    👋
                </motion.span>
            </div>
        </div>

        <motion.h1 className='mt-4 mb-10 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
            initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}
        >
        Hi, I'm
            <span className='font-bold'> Thiago Bueno Garcia</span> {" "}
            and I'm a {" "}
            <span className='font-bold'>General Assembly</span> {" "}
            graduate that is {" "}
            <span className='font-bold'>passionate</span> {" "}
            about building {" "}
            <span className='italic'>web</span> and {" "}
            <span className='italic'>mobile </span> {" "}
            applications.
        </motion.h1>

        <motion.div className='flex felx-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
            initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .1 }}
        >

            <Link href="#contact" className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'>
                Contact me! <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/>
            </Link>

            <a className='group border-black/30 border text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer'
                href='/Thiagos Resume.pdf' download={true}
            >
                Download Resume <HiDownload className='opacity-70 group-hover:translate-y-1 transition hover:text-gray-950'/> 
            </a>

            <a className='border-black/30 border p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer'
                href='https://www.linkedin.com/in/thiago-bueno-garcia-34604a25a/' target='_blank'
            >
                <BsLinkedin />
            </a>

            <a className='border-black/30 border p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer'
                href='https://github.com/thiagobgarc' target='_blank'
            >
                <BsGithub />
            </a>

        </motion.div>
    </section>
  )
}
