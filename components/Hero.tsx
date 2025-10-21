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
              src="/images/ONIX GROUP 0002.png" 
              alt="ONIX Logo" 
              className="w-32 h-32 sm:w-40 sm:h-40 object-contain"
              key="onix-logo-colorful"
            />
            <div className="flex flex-col">
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
                PORTFOLIO
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </button>
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
                      PORTFOLIO
                    </button>
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
              </p>
              
              {/* Explore Button like Al Shirawi */}
              <Link href="/explore" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-medium text-sm uppercase tracking-wide hover:bg-white hover:text-gray-900 transition-all duration-300 rounded-none">
                EXPLORE
              </Link>
            </div>
          </div>
        </div>


      </section>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/97142838880?text=Hello%20ONIX%20Group%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </a>
      </div>

    </>
  )
}
