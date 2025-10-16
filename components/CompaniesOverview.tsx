'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CompaniesOverview() {
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
    <div className="min-h-screen relative">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/images/construction-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Onix Logo - Top Left - Clickable */}
      <div className="absolute top-8 left-8 z-50">
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity duration-300 cursor-pointer">
          <img 
            src="/images/ONIX_LOGO.png" 
            alt="ONIX Logo" 
            className="w-16 h-16 object-contain mr-4"
          />
          <div>
            <h1 className="text-2xl font-bold text-white">ONIX</h1>
            <p className="text-xs text-gray-300">GROUP OF COMPANIES</p>
          </div>
        </Link>
      </div>

      {/* Hero Section - Al Shirawi Style */}
      <div className="relative min-h-screen">

        {/* Content Overlay */}
        <div className="relative z-10 min-h-screen flex flex-col justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main Title - Enhanced with Animation */}
            <div className="text-center mb-12 sm:mb-16 px-4">
              <div className="relative">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 uppercase tracking-wide animate-fade-in-up leading-tight">
                  EXPLORE OUR COMPANIES
                </h1>
                {/* Decorative Line */}
                <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6 sm:mb-8 animate-pulse"></div>
              </div>
            </div>

            {/* Search Section - Enhanced Design */}
            <div className="max-w-5xl mx-auto mb-16 px-4 sm:px-0">
              <div className="bg-white/15 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Find Your Perfect Solution</h3>
                  <p className="text-sm sm:text-base text-gray-300">Filter our companies by industry, product, and service</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  {/* Select Industry */}
                  <div className="relative group">
                    <label className="block text-sm font-medium text-white mb-2">Industry</label>
                    <select className="w-full bg-white/25 border border-white/40 rounded-xl px-4 py-3 sm:py-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 hover:bg-white/30 text-sm sm:text-base">
                      <option value="" className="text-gray-900">Select Industry</option>
                      <option value="engineering" className="text-gray-900">Engineering</option>
                      <option value="construction" className="text-gray-900">Construction</option>
                      <option value="design" className="text-gray-900">Design</option>
                      <option value="consulting" className="text-gray-900">Consulting</option>
                    </select>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg className="w-5 h-5 text-white group-hover:text-blue-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Select Product */}
                  <div className="relative group">
                    <label className="block text-sm font-medium text-white mb-2">Product</label>
                    <select className="w-full bg-white/25 border border-white/40 rounded-xl px-4 py-3 sm:py-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 hover:bg-white/30 text-sm sm:text-base">
                      <option value="" className="text-gray-900">Select Product</option>
                      <option value="structural" className="text-gray-900">Structural Design</option>
                      <option value="mep" className="text-gray-900">MEP Systems</option>
                      <option value="interior" className="text-gray-900">Interior Design</option>
                      <option value="consulting" className="text-gray-900">Consulting Services</option>
                    </select>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg className="w-5 h-5 text-white group-hover:text-blue-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Select Service */}
                  <div className="relative group">
                    <label className="block text-sm font-medium text-white mb-2">Service</label>
                    <select className="w-full bg-white/25 border border-white/40 rounded-xl px-4 py-3 sm:py-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 hover:bg-white/30 text-sm sm:text-base">
                      <option value="" className="text-gray-900">Select Service</option>
                      <option value="design" className="text-gray-900">Design Services</option>
                      <option value="construction" className="text-gray-900">Construction</option>
                      <option value="management" className="text-gray-900">Project Management</option>
                      <option value="maintenance" className="text-gray-900">Maintenance</option>
                    </select>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg className="w-5 h-5 text-white group-hover:text-blue-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Enhanced Search Button */}
                <div className="text-center">
                  <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center mx-auto text-sm sm:text-base w-full sm:w-auto">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span className="hidden sm:inline">SEARCH COMPANIES</span>
                    <span className="sm:hidden">SEARCH</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Enhanced Download Brochure Button */}
            <div className="text-center mb-16 px-4">
              <button className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl group text-sm sm:text-base">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="hidden sm:inline">Download Brochure</span>
                <span className="sm:hidden">Download</span>
              </button>
            </div>

            {/* Floating Elements for Visual Appeal */}
            <div className="absolute top-1/4 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute top-1/3 right-16 w-6 h-6 bg-white/30 rounded-full opacity-40 animate-ping"></div>
          </div>
        </div>
      </div>

      {/* Content Section - White Background */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              OUR COMPANIES IN MULTIPLE SECTORS
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Since our inception, we have been at the forefront of excellence in a variety of sectors. 
              Today, our industrial outreach expands to multiple sectors, each pledged to contribute to the UAE's development.
            </p>

            {/* View Companies Button */}
            <Link 
              href="/companies/list"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <span className="mr-2">VIEW OUR COMPANIES</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Spacing */}
      <div className="h-12"></div>

      {/* Custom CSS for Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
