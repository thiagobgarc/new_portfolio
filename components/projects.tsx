"use client"
import React from 'react'
import { SectionHeading } from './section_heading'
import { projectsData } from '@/lib/data'
import { Project } from './project_data'
import { useTabInView } from '@/lib/hooks'

export const Projects = () => {
  const { ref } = useTabInView('Projects')

  return (
    <section ref={ref} id='projects' className='scroll-mt-28'>
        <SectionHeading>Projects</SectionHeading>
        
        <div>
            {
                projectsData.map((project, index) => (
                    <Project key={index} {...project}/>
                ))
            }
        </div>
    </section>
  )
}

