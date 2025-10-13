'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [showAboutDropdown, setShowAboutDropdown] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Engineering Consulting background images
  const backgroundImages = [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", // Modern skyscrapers
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", // Engineering blueprints
    "https://images.unsplash.com/photo-1581094794329-c8112af01d4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", // Modern architecture
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", // Corporate buildings
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"  // Professional consulting
  ]

  // Auto-change images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [backgroundImages.length])

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.dropdown-container')) {
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
      {/* Header - Fixed at top like Al Shirawi */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto pl-2 sm:pl-4 lg:pl-6 pr-4 sm:pr-6 lg:pr-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Left side like Al Shirawi */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-gray-800 rounded-full"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white">ONIX</span>
                <span className="text-xs text-gray-300 -mt-1">GROUP OF COMPANIES</span>
              </div>
            </div>

            {/* Navigation - Right side like Al Shirawi */}
            <div className="dropdown-container">
              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button 
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                  className="text-white hover:text-gray-300 transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
              
              {/* Mobile Menu */}
              {showMobileMenu && (
                <div className="md:hidden absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <div className="px-4 py-2">
                    <button 
                      onClick={() => setShowAboutDropdown(!showAboutDropdown)}
                      className="flex items-center justify-between w-full text-left text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                    >
                      ABOUT
                      <svg className={`w-4 h-4 transition-transform duration-200 ${showAboutDropdown ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    {showAboutDropdown && (
                      <div className="ml-4 mt-2 space-y-1">
                        <a href="#about" className="block text-xs text-gray-600 hover:text-gray-800" onClick={() => setShowMobileMenu(false)}>Who We Are</a>
                        <a href="#leadership" className="block text-xs text-gray-600 hover:text-gray-800" onClick={() => setShowMobileMenu(false)}>Leadership</a>
                        <a href="#sustainability" className="block text-xs text-gray-600 hover:text-gray-800" onClick={() => setShowMobileMenu(false)}>Sustainability</a>
                      </div>
                    )}
                  </div>
                  <a href="#companies" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setShowMobileMenu(false)}>COMPANIES</a>
                  <a href="#projects" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setShowMobileMenu(false)}>NEWS</a>
                  <a href="#contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setShowMobileMenu(false)}>CONNECT</a>
                  <a href="#footer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setShowMobileMenu(false)}>LEGACY</a>
                </div>
              )}
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
                {/* About with Dropdown */}
                <div 
                  className="relative"
                  onMouseEnter={() => setShowAboutDropdown(true)}
                  onMouseLeave={() => setShowAboutDropdown(false)}
                >
                  <a 
                    href="#about" 
                    className="text-white hover:text-gray-300 font-medium transition-colors duration-200 text-sm uppercase tracking-wide cursor-pointer flex items-center"
                  >
                    ABOUT
                    <svg className="ml-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                  
                  {/* Dropdown Menu */}
                  {showAboutDropdown && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                      <a 
                        href="#about" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                        onClick={() => setShowAboutDropdown(false)}
                      >
                        Who We Are
                      </a>
                      <a 
                        href="#leadership" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                        onClick={() => setShowAboutDropdown(false)}
                      >
                        Leadership
                      </a>
                      <a 
                        href="#sustainability" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                        onClick={() => setShowAboutDropdown(false)}
                      >
                        Sustainability
                      </a>
                    </div>
                  )}
                </div>
                
                <a href="#companies" className="text-white hover:text-gray-300 font-medium transition-colors duration-200 text-sm uppercase tracking-wide cursor-pointer">
                  COMPANIES
                </a>
                <a href="#projects" className="text-white hover:text-gray-300 font-medium transition-colors duration-200 text-sm uppercase tracking-wide cursor-pointer">
                  NEWS
                </a>
                <a href="#contact" className="text-white hover:text-gray-300 font-medium transition-colors duration-200 text-sm uppercase tracking-wide cursor-pointer">
                  CONNECT
                </a>
                <a href="#footer" className="text-white hover:text-gray-300 font-medium transition-colors duration-200 text-sm uppercase tracking-wide cursor-pointer">
                  LEGACY
                </a>
                
                {/* Search Icon like Al Shirawi */}
                <div className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-fullscreen relative">
        {/* Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {/* Dynamic Background Images with smooth transitions */}
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url('${image}')`
              }}
            />
          ))}
          
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
              <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-medium text-sm uppercase tracking-wide hover:bg-white hover:text-gray-900 transition-all duration-300 rounded-none">
                EXPLORE
              </button>
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

        {/* Image Indicators/Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
            />
          ))}
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
