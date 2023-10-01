"use client"
import React from 'react'
import { useState } from 'react'
import type { TabName } from '@/lib/types'

type ActiveTabContextProviderProps = {
    children: React.ReactNode
}

type ActiveTabContextType = {
    activeTab: TabName
    setActiveTab: React.Dispatch<React.SetStateAction<TabName>>
    LastClickedTab: number
    setLastClickedTab: React.Dispatch<React.SetStateAction<number>>
}

export const ActiveTabContext = React.createContext<ActiveTabContextType | null>(null)

export const useActiveTabContext = () => {
    const context = React.useContext(ActiveTabContext)
    if (context === null) {
        throw new Error('useActiveTabContext must be used within an ActiveTabContextProvider')
    }
    return context
}

export const ActiveTabContextProvider = ({ children }: ActiveTabContextProviderProps) => {
    const [activeTab, setActiveTab] = useState<TabName>('Home')
    const [LastClickedTab, setLastClickedTab] = useState(0)

  return (
    <ActiveTabContext.Provider value={{ activeTab, setActiveTab, LastClickedTab, setLastClickedTab }}>{children}</ActiveTabContext.Provider>
  )
}
