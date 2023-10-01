"use client"
import React from 'react'
import { SectionHeading } from './section_heading'
import 'react-vertical-timeline-component/style.min.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { experiencesData } from '@/lib/data'
import { useTabInView } from '@/lib/hooks'

export const Experience = () => {
    const ref = useTabInView("Experience")

  return (
    <section ref={ref} id='experience' className='max-w-[53rem] scroll-mt-28 mt-28 sm:mt-0'>
        <SectionHeading>My Experience</SectionHeading>
        <VerticalTimeline lineColor=''>
            {
                experiencesData.map((experience, index) => (
                    <React.Fragment key={index}>
                    <VerticalTimelineElement
                        contentStyle={{ background: '#f3f4f6', boxShadow: 'none', border: "1px solid rgba(0, 0, 0, 0.05)",
                        textAlign: "left", padding: "1.3rem 2rem"
                    }} 
                        contentArrowStyle={{ borderRight: '.4rem solid  #9ca3af'}}
                        date={experience.date}
                        icon={experience.icon}
                        iconStyle={{ background: "white", fontSize: "1.5rem"}}
                    >
                        <h3 className='font-semibold capitalize'>{experience.title}</h3>
                        <p className='font-normal !mt-0'>{experience.location}</p>
                        <p className='!font-normal !mt-1 text-gray-700'>{experience.description}</p>
                    </VerticalTimelineElement>
                    </React.Fragment>
                ))
            }
        </VerticalTimeline>
    </section>
  )
}
