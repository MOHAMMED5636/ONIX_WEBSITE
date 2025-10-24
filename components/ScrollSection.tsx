'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface ScrollSectionProps {
  children: React.ReactNode
  direction?: 'left' | 'right'
}

export default function ScrollSection({ children, direction = 'left' }: ScrollSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'left' ? [150, -100] : [-100, 150]
  )

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 1],
    direction === 'right' ? [0, 0, 1, 1] : [1, 1, 1, 1]
  )

  return (
    <motion.div
      ref={ref}
      style={{ 
        x: direction === 'left' ? x : 0,
        opacity: direction === 'right' ? opacity : 1
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  )
}
