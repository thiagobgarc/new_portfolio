"use client"
import { motion } from 'framer-motion'
import React from 'react'

export const SectionDivider = () => {
  return (
    <motion.div className='bg-gray-400 my-24 h-16 w-1 rounded-full hidden sm:block'
      initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}
      transition={{ delay: .2 }}
    > 
    </motion.div>
  )
}
