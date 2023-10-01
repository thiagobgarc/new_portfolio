"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { projectsData } from '@/lib/data'

type ProjectProps = typeof projectsData[number]

export const Project = ({title, description, tags, imageUrl}: ProjectProps) => {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollY } = useScroll(
        {
            target: ref,
            offset: ["0 1", "1.33 1"],
        }
    )
    const scaleProgress = useTransform(scrollY, [0, 1], [0.7, 1])
    const opacityProgress = useTransform(scrollY, [0, 1], [0.6, 1])

    return (
        <motion.div  
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress
            }}

            className='group mb-3 sm:mb-8 last:mb-0'
        >
            <section
           
           className='bg-gray-100 max-w-[42rem] border-2 border-black/9 overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 group-even:pl-8 hover:bg-gray-200 transition rounded-lg'>
           <div className='pt-4 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem]'>
           <h3 className='text-2xl'>{title}</h3>

           <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>

           <ul className='flex flex-wrap gap-2 mt-auto'>
               {
                   tags.map((tag, index) => (
                   <li key={index} className='bg-black/[.7] px-3 py-1 text-[.7rem] uppercase tracking-wider text-white rounded-full'>{tag}</li>
               ))
           }
           </ul>
           </div>

            <Image src={imageUrl} alt={"My Projects I worked on"} quality={95} className='absolute top-8 -right-40 w-[28rem] h-full object-contain rounded-t-lg shadow-2xl even: -right-[inital] group-even:right-[initial] group-even:-left-40 
           
            group-hover:-translate-x-3 group-hover:translate-y-3 
            group-hover:-rotate-5 transition 

            group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 
            group-even:group-hover:-rotate-5

            group-hover:scale-105 '/>
            </section>
        </motion.div>
        
    )
}