'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Hero() {
  const router = useRouter()
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.mobile-menu-container')) {
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
        {/* Glass Header Container */}
        <div className="absolute top-0 left-0 right-0 z-50">
          {/* Glassmorphism Header Background */}
          <div className="bg-white/5 backdrop-blur-md border-b border-white/10 shadow-lg">
            <div className="w-full px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16 sm:h-20">
                
                {/* ONIX Logo - Left edge */}
                <div className="flex items-center space-x-2 sm:space-x-3">
                  {/* ONIX GROUP Logo */}
                  <img 
                    src="/images/ONIX GROUP 0002.png" 
                    alt="ONIX Logo" 
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain"
                    key="onix-logo-colorful"
                  />
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-lg sm:text-xl md:text-2xl tracking-wide">
                      ONIX GROUP
                    </span>
                    <span className="text-white/80 text-xs sm:text-sm font-light tracking-wider">
                      ENGINEERING | CONSTRUCTION | TECHNOLOGY
                    </span>
                  </div>
                </div>

                {/* Navigation Links - Right side */}
                <div className="flex items-center space-x-4 sm:space-x-6">
                  {/* Tablet Navigation - Simplified */}
                  <nav className="hidden md:flex lg:hidden items-center space-x-3">
                    <button 
                      className="text-white/90 hover:text-white font-medium transition-all duration-300 text-xs uppercase tracking-wide cursor-pointer relative group bg-transparent border-none px-3 py-2 rounded-lg hover:bg-white/10"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      ABOUT
                    </button>
                    <Link 
                      href="/companies"
                      className="text-white/90 hover:text-white font-medium transition-all duration-300 text-xs uppercase tracking-wide cursor-pointer relative group px-3 py-2 rounded-lg hover:bg-white/10"
                    >
                      COMPANIES
                    </Link>
                    <button 
                      className="text-white/90 hover:text-white font-medium transition-all duration-300 text-xs uppercase tracking-wide cursor-pointer relative group bg-transparent border-none px-3 py-2 rounded-lg hover:bg-white/10"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      PORTFOLIO
                    </button>
                    <button 
                      className="text-white/90 hover:text-white font-medium transition-all duration-300 text-xs uppercase tracking-wide cursor-pointer relative group bg-transparent border-none px-3 py-2 rounded-lg hover:bg-white/10"
                      onClick={(e) => {
                        e.preventDefault();
                        router.push('/legacy');
                      }}
                    >
                      LEGACY
                    </button>
                  </nav>

                  {/* Desktop Navigation */}
                  <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
                    <button 
                      className="text-white/90 hover:text-white font-medium transition-all duration-300 text-sm uppercase tracking-wide cursor-pointer relative group bg-transparent border-none px-3 py-2 rounded-lg hover:bg-white/10"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <span className="relative">
                        ABOUT
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </button>
                    
                    <Link 
                      href="/companies"
                      className="text-white/90 hover:text-white font-medium transition-all duration-300 text-sm uppercase tracking-wide cursor-pointer relative group px-3 py-2 rounded-lg hover:bg-white/10"
                    >
                      <span className="relative">
                        COMPANIES
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                    <button 
                      className="text-white/90 hover:text-white font-medium transition-all duration-300 text-sm uppercase tracking-wide cursor-pointer relative group bg-transparent border-none px-3 py-2 rounded-lg hover:bg-white/10"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <span className="relative">
                        PORTFOLIO
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </button>
                    <button 
                      className="text-white/90 hover:text-white font-medium transition-all duration-300 text-sm uppercase tracking-wide cursor-pointer relative group bg-transparent border-none px-3 py-2 rounded-lg hover:bg-white/10"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <span className="relative">
                        NEWS
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </button>
                    <button 
                      className="text-white/90 hover:text-white font-medium transition-all duration-300 text-sm uppercase tracking-wide cursor-pointer relative group bg-transparent border-none px-3 py-2 rounded-lg hover:bg-white/10"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <span className="relative">
                        CONNECT
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </button>
                    <button 
                      className="text-white/90 hover:text-white font-medium transition-all duration-300 text-sm uppercase tracking-wide cursor-pointer relative group bg-transparent border-none px-3 py-2 rounded-lg hover:bg-white/10"
                      onClick={(e) => {
                        e.preventDefault();
                        router.push('/legacy');
                      }}
                    >
                      <span className="relative">
                        LEGACY
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </button>
                    
                    {/* Search Icon */}
                    <div className="w-6 h-6 text-white/90 hover:text-white cursor-pointer transition-colors duration-300 hover:scale-110 p-2 rounded-lg hover:bg-white/10">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </nav>

                  {/* Mobile Menu Button */}
                  <div className="lg:hidden relative z-50 mobile-menu-container">
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setShowMobileMenu(!showMobileMenu);
                      }}
                      className="text-white/90 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-white/10"
                      aria-label="Toggle mobile menu"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Menu - Slide in from right with glassmorphism */}
          {showMobileMenu && (
            <>
              {/* Backdrop */}
              <div 
                className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                onClick={() => setShowMobileMenu(false)}
              ></div>
              
              {/* Glassmorphism Slide-in Menu */}
              <div className="lg:hidden fixed top-0 right-0 h-full w-80 md:w-96 bg-white/10 backdrop-blur-md z-50 mobile-menu-container transform transition-all duration-300 ease-out border-l border-white/20 shadow-2xl">
                <div className="p-8 h-full flex flex-col">
                  {/* Glassmorphism Header with Logo */}
                  <div className="flex items-center justify-between mb-12">
                  <div className="flex items-center space-x-3">
                    <img
                      src="/images/ONIX GROUP 0002.png"
                      alt="ONIX GROUP Logo"
                      className="h-14 w-auto object-contain"
                    />
                    <div className="flex flex-col">
                      <span className="text-white font-bold text-lg tracking-wide">ONIX GROUP</span>
                      <span className="text-white/70 text-xs font-light tracking-wider">ENGINEERING | CONSTRUCTION</span>
                    </div>
                  </div>
                    <button 
                      onClick={() => setShowMobileMenu(false)}
                      className="w-8 h-8 flex items-center justify-center text-white/70 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/10"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Glassmorphism Menu Items */}
                  <nav className="flex-1 space-y-2">
                    <button 
                      onClick={() => {
                        setShowMobileMenu(false);
                        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full text-left py-4 px-4 text-white/90 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/10 border border-white/10 hover:border-white/20"
                    >
                      ABOUT
                    </button>
                    
                    <Link 
                      href="/companies"
                      onClick={() => setShowMobileMenu(false)}
                      className="w-full text-left py-4 px-4 text-white/90 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/10 border border-white/10 hover:border-white/20 block"
                    >
                      COMPANIES
                    </Link>
                    
                    <button 
                      onClick={() => {
                        setShowMobileMenu(false);
                        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full text-left py-4 px-4 text-white/90 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/10 border border-white/10 hover:border-white/20"
                    >
                      PORTFOLIO
                    </button>
                    
                    <button 
                      onClick={() => {
                        setShowMobileMenu(false);
                        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full text-left py-4 px-4 text-white/90 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/10 border border-white/10 hover:border-white/20"
                    >
                      NEWS
                    </button>
                    
                    <button 
                      onClick={() => {
                        setShowMobileMenu(false);
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full text-left py-4 px-4 text-white/90 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/10 border border-white/10 hover:border-white/20"
                    >
                      CONNECT
                    </button>
                    
                    <button 
                      onClick={() => {
                        setShowMobileMenu(false);
                        router.push('/legacy');
                      }}
                      className="w-full text-left py-4 px-4 text-white/90 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/10 border border-white/10 hover:border-white/20"
                    >
                      LEGACY
                    </button>
                  </nav>

                  {/* Glassmorphism Contact Information */}
                  <div className="mt-auto pt-8 border-t border-white/20">
                    <p className="text-white/70 text-sm mb-4">+971 42 83 8880</p>
                    <div className="flex space-x-4">
                      <a 
                        href="https://wa.me/97142838880" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-white/10"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                        </svg>
                      </a>
                      
                      <a 
                        href="https://www.linkedin.com/company/onix-engineering-consultancy/posts/?feedView=all" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-white/10"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                      
                      <a 
                        href="https://www.instagram.com/onixgroup.ae/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-white/10"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
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
            <source src="/videos/construction-video.mp4" type="video/mp4" />
          </video>
          
          {/* Subtle overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        {/* Hero Content - Bottom Left like STUDIA 54 */}
        <div className="absolute bottom-0 left-0 z-10 p-4 sm:p-6 md:p-8 lg:p-12">
          <div className="max-w-2xl md:max-w-3xl lg:max-w-4xl">
            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-4 sm:mb-6 leading-tight">
              EXPECT MORE. Achieve BEYOND
            </h1>
            
            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 font-light">
            </p>
            
            {/* Explore Button like Al Shirawi */}
            <Link href="/explore" className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 border-2 border-white text-white font-medium text-xs sm:text-sm uppercase tracking-wide hover:bg-white hover:text-gray-900 transition-all duration-300 rounded-none">
              EXPLORE
            </Link>
          </div>
        </div>


      </section>

      {/* WhatsApp Floating Button (Bulb/Glow) */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Soft pulsing halo */}
          <span className="pointer-events-none absolute inset-0 -m-1 rounded-full bg-green-500/25 blur-md animate-pulse"></span>
          {/* Strong outer glow */}
          <span className="pointer-events-none absolute inset-0 rounded-full blur-xl opacity-70" style={{ boxShadow: '0 0 28px 10px rgba(34,197,94,0.45)' }}></span>
          <a 
            href="https://wa.me/97142838880?text=Hello%20ONIX%20Group%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center w-14 h-14 rounded-full text-white bg-gradient-to-b from-green-500 to-green-600 hover:from-green-500 hover:to-green-700 ring-4 ring-green-300/40 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <svg className="w-8 h-8 drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </a>
        </div>
      </div>

    </>
  )
}

