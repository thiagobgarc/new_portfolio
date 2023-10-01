import { useActiveTabContext } from "@/context/active_Tab_context"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import type { TabName } from "@/lib/types"

type useTabInViewProps = {
  sectionName: TabName
}

export const useTabInView = (tabName: useTabInViewProps, threshold: 0.75) => {
    const { ref, inView } = useInView({ threshold })
    const { setActiveTab, LastClickedTab } = useActiveTabContext()
  
    useEffect(() => {
      if (inView && Date.now() - LastClickedTab > 1000) setActiveTab(tabName)
    }, [ inView, setActiveTab, LastClickedTab, tabName ])

    return (
        ref
    )
}