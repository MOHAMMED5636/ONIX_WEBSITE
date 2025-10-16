'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Hero() {
  const router = useRouter()
  const [showAboutDropdown, setShowAboutDropdown] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.dropdown-container') && !target.closest('.mobile-menu-container')) {
        setShowAboutDropdown(false)
        setShowMobileMenu(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="hero-fullscreen relative">
        {/* ONIX Logo - Top left */}
        <div className="absolute top-4 left-4 sm:top-8 sm:left-8 z-10">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <img 
              src="/images/ONIX_LOGO.png?v=2" 
              alt="ONIX Logo" 
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
              key="onix-logo-colorful"
            />
            <div className="flex flex-col">
              <span className="text-lg sm:text-2xl font-bold text-white">ONIX</span>
              <span className="text-xs sm:text-sm text-gray-300 -mt-1">GROUP OF COMPANIES</span>
            </div>
          </div>
        </div>

        {/* Navigation Links - Top right */}
        <div className="absolute top-4 right-4 sm:top-8 sm:right-8 z-50">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {/* About with Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowAboutDropdown(true)}
              onMouseLeave={() => setShowAboutDropdown(false)}
            >
              <button 
                className="text-white hover:text-blue-400 font-medium transition-all duration-300 text-sm uppercase tracking-wide cursor-pointer flex items-center relative group bg-transparent border-none"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="relative">
                  ABOUT
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </span>
                <svg className="ml-1 w-3 h-3 transition-transform duration-200 group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {showAboutDropdown && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <button 
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200 bg-transparent border-none"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowAboutDropdown(false);
                      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Who We Are
                  </button>
                  <button 
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200 bg-transparent border-none"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowAboutDropdown(false);
                      document.getElementById('leadership')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Leadership
                  </button>
                  <button 
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200 bg-transparent border-none"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowAboutDropdown(false);
                      document.getElementById('sustainability')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Sustainability
                  </button>
                </div>
              )}
            </div>
            
            <Link 
              href="/companies"
              className="text-white hover:text-blue-400 font-medium transition-all duration-300 text-sm uppercase tracking-wide cursor-pointer relative group"
            >
              <span className="relative">
                COMPANIES
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <button 
              className="text-white hover:text-blue-400 font-medium transition-all duration-300 text-sm uppercase tracking-wide cursor-pointer relative group bg-transparent border-none"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="relative">
                NEWS
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </button>
            <button 
              className="text-white hover:text-blue-400 font-medium transition-all duration-300 text-sm uppercase tracking-wide cursor-pointer relative group bg-transparent border-none"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="relative">
                CONNECT
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </button>
            <button 
              className="text-white hover:text-blue-400 font-medium transition-all duration-300 text-sm uppercase tracking-wide cursor-pointer relative group bg-transparent border-none"
              onClick={(e) => {
                e.preventDefault();
                router.push('/legacy');
              }}
            >
              <span className="relative">
                LEGACY
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </button>
            
            {/* Search Icon */}
            <div className="w-6 h-6 text-white hover:text-blue-400 cursor-pointer transition-colors duration-300 hover:scale-110">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden relative z-50 mobile-menu-container">
            <button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowMobileMenu(!showMobileMenu);
              }}
              className="text-white hover:text-gray-300 transition-colors duration-200 p-2 -m-2"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
          {/* Mobile Menu - Slide in from left like Al Shirawi */}
          {showMobileMenu && (
            <>
              {/* Backdrop */}
              <div 
                className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={() => setShowMobileMenu(false)}
              ></div>
              
              {/* Slide-in Menu */}
              <div className="md:hidden fixed top-0 left-0 h-full w-80 bg-gradient-to-br from-slate-900 to-blue-900 shadow-2xl z-50 mobile-menu-container transform transition-transform duration-300 ease-in-out">
                <div className="p-6">
                  {/* Close Button */}
                  <div className="flex justify-end mb-8">
                    <button 
                      onClick={() => setShowMobileMenu(false)}
                      className="text-white hover:text-gray-300 transition-colors duration-200"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Menu Items */}
                  <nav className="space-y-6">
                    <button 
                      onClick={() => {
                        setShowMobileMenu(false);
                        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="block w-full text-left text-xl font-semibold text-white hover:text-blue-400 transition-colors duration-200 bg-transparent border-none"
                    >
                      ABOUT
                    </button>
                    <Link 
                      href="/companies"
                      onClick={() => setShowMobileMenu(false)}
                      className="block w-full text-left text-xl font-semibold text-white hover:text-blue-400 transition-colors duration-200 bg-transparent border-none"
                    >
                      COMPANIES
                    </Link>
                    <button 
                      onClick={() => {
                        setShowMobileMenu(false);
                        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="block w-full text-left text-xl font-semibold text-white hover:text-blue-400 transition-colors duration-200 bg-transparent border-none"
                    >
                      NEWS
                    </button>
                    <button 
                      onClick={() => {
                        setShowMobileMenu(false);
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="block w-full text-left text-xl font-semibold text-white hover:text-blue-400 transition-colors duration-200 bg-transparent border-none"
                    >
                      CONNECT
                    </button>
                    <button 
                      onClick={() => {
                        setShowMobileMenu(false);
                        router.push('/legacy');
                      }}
                      className="block w-full text-left text-xl font-semibold text-white hover:text-blue-400 transition-colors duration-200 bg-transparent border-none"
                    >
                      LEGACY
                    </button>
                  </nav>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {/* Video Background */}
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
          
          {/* Subtle overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        {/* Hero Content - Aligned with header logo */}
        <div className="relative z-10 flex items-center justify-start min-h-screen">
          <div className="max-w-7xl mx-auto w-full">
            <div className="max-w-3xl pl-2 sm:pl-4 lg:pl-6">
              {/* Main Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight">
                EXPECT MORE. Achieve BEYOND
              </h1>
              
              {/* Subtitle */}
              <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 font-light">
                ONIX GROUP OF COMPANIES
              </p>
              
              {/* Explore Button like Al Shirawi */}
              <Link href="/explore" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-medium text-sm uppercase tracking-wide hover:bg-white hover:text-gray-900 transition-all duration-300 rounded-none">
                EXPLORE
              </Link>
            </div>
          </div>
        </div>

        {/* Construction Worker Figure - Right side like Al Shirawi */}
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 z-10">
          <div className="w-full h-full bg-gradient-to-t from-gray-800 to-transparent flex items-end justify-center">
            <div className="w-32 h-40 bg-gray-700 rounded-t-full flex items-center justify-center mb-4">
              <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-800 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Service Icons Row - Like Al Shirawi */}
      <section className="service-icons py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center space-x-6 sm:space-x-8 overflow-x-auto">
            {/* Engineering Service Icons */}
            <div className="flex-shrink-0 w-12 h-12 border-2 border-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div className="flex-shrink-0 w-12 h-12 border-2 border-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div className="flex-shrink-0 w-12 h-12 border-2 border-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
            </div>
            <div className="flex-shrink-0 w-12 h-12 border-2 border-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div className="flex-shrink-0 w-12 h-12 border-2 border-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div className="flex-shrink-0 w-12 h-12 border-2 border-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
            </div>
            <div className="flex-shrink-0 w-12 h-12 border-2 border-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div className="flex-shrink-0 w-12 h-12 border-2 border-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div className="flex-shrink-0 w-12 h-12 border-2 border-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
            </div>
            <div className="flex-shrink-0 w-12 h-12 border-2 border-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div className="flex-shrink-0 w-12 h-12 border-2 border-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Lower Section - White background like Al Shirawi */}
      <section className="white-section py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">OUR SERVICES</h2>
            
            {/* Search Bar like Al Shirawi */}
            <div className="max-w-md mx-auto relative">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search our services..." 
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
