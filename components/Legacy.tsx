'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Legacy() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Show loading screen for 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])


  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center z-50">
        {/* Loading Screen with Onix Logo */}
        <div className="text-center">
          {/* Onix Logo Animation */}
          <div className="mb-8 animate-pulse">
            <img 
              src="/images/ONIX_LOGO.png" 
              alt="ONIX Logo" 
              className="w-32 h-32 object-contain mx-auto"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">ONIX</h1>
          <p className="text-xl text-gray-300">GROUP OF COMPANIES</p>
          
          {/* Loading dots */}
          <div className="flex justify-center items-center space-x-2 mt-8">
            <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Home Button - Top Left */}
      <div className="fixed top-8 left-8 z-50">
        <Link href="/" className="inline-flex items-center text-white hover:text-blue-400 transition-colors duration-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </Link>
      </div>

      {/* ONIX Logo and Text - Top Center */}
      <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center">
          <img 
            src="/images/ONIX_LOGO.png" 
            alt="ONIX Logo" 
            className="w-12 h-12 object-contain mr-3"
          />
          <div>
            <h1 className="text-xl font-bold text-white">ONIX</h1>
            <p className="text-xs text-gray-300">GROUP OF COMPANIES</p>
          </div>
        </div>
      </div>

      {/* Main Content - Responsive Layout */}
      <div className="flex flex-col md:flex-row h-screen">
        {/* OUR LEADERS Section - First on mobile, left on desktop */}
        <Link href="/leaders" className="flex-1 relative group cursor-pointer h-1/2 md:h-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-slate-900/80 z-10 group-hover:from-blue-400/60 group-hover:to-blue-600/60 transition-all duration-300"></div>
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 group-hover:opacity-60 group-hover:brightness-150 group-hover:contrast-125 group-hover:scale-110 transition-all duration-500" 
               style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')" }}>
          </div>
          
          <div className="relative z-20 flex items-center justify-center h-full">
            <div className="text-center">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-6 md:mb-8 uppercase tracking-wider">
                OUR LEADERS
              </h2>
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-white rounded-full flex items-center justify-center group-hover:scale-110 group-active:scale-95 group-active:shadow-2xl group-active:shadow-white/50 transition-all duration-200">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </Link>

        {/* OUR STORY Section - Second on mobile, right on desktop */}
        <Link href="/timeline" className="flex-1 relative group cursor-pointer h-1/2 md:h-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 to-blue-900/80 z-10 group-hover:from-blue-400/60 group-hover:to-blue-600/60 transition-all duration-300"></div>
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 group-hover:opacity-60 group-hover:brightness-150 group-hover:contrast-125 group-hover:scale-110 transition-all duration-500" 
               style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')" }}>
          </div>
          
          <div className="relative z-20 flex items-center justify-center h-full">
            <div className="text-center">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-6 md:mb-8 uppercase tracking-wider">
                OUR STORY
              </h2>
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-white rounded-full flex items-center justify-center group-hover:scale-110 group-active:scale-95 group-active:shadow-2xl group-active:shadow-white/50 transition-all duration-200">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

