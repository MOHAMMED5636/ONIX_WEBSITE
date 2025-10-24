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
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      {/* Background with architectural image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Loading Content */}
      <div className="relative z-10 text-center">
        {/* Logo Animation */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mx-auto shadow-2xl animate-pulse">
            <img 
              src="/images/ONIX GROUP 0002.png" 
              alt="ONIX Logo" 
              className="w-20 h-20 object-contain animate-spin"
            />
          </div>
        </div>

        {/* Company Name */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 animate-fade-in">
          </h1>
          <p className="text-lg text-gray-300 animate-fade-in" style={{animationDelay: '0.5s'}}>
          </p>
        </div>

        {/* Loading Bar */}
        <div className="w-64 h-1 bg-gray-700 rounded-full mx-auto mb-4 overflow-hidden">
          <div className="h-full bg-white rounded-full animate-loading-bar"></div>
        </div>

        {/* Loading Text */}
        <p className="text-gray-300 text-sm animate-pulse">
          EXPECT MORE. Achieve BEYOND
        </p>

        {/* Floating Elements */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-10">
          <div className="absolute top-0 left-0 w-32 h-32 border border-white rounded-full animate-ping"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 border border-white rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-white rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes loading-bar {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
          opacity: 0;
        }
        
        .animate-loading-bar {
          animation: loading-bar 3s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
