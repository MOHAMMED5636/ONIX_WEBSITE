'use client'

import { useState, useEffect } from 'react'

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000) // 3 seconds loading time

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center">
      {/* ONIX GROUP LOADING Video */}
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        webkit-playsinline="true"
        x5-video-player-type="h5"
        x5-video-player-fullscreen="true"
        x5-video-orientation="portraint"
      >
        <source src="/images/ONIX GROUP LOADING.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <div className="flex items-center justify-center h-full">
          <img 
            src="/images/ONIX GROUP 0002.png" 
            alt="ONIX GROUP Loading" 
            className="w-32 h-32 object-contain animate-pulse"
          />
        </div>
      </video>
    </div>
  )
}
