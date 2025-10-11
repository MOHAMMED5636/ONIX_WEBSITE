'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    const playButton = document.getElementById('play-button')
    
    console.log('Video element:', video)
    
    if (video) {
      // Show/hide play button based on video state
      const updatePlayButton = () => {
        console.log('Video state - paused:', video.paused, 'readyState:', video.readyState)
        if (playButton) {
          if (video.paused) {
            playButton.classList.remove('hidden')
            console.log('Showing play button')
          } else {
            playButton.classList.add('hidden')
            console.log('Hiding play button')
          }
        }
      }
      
      // Ensure video plays
      const playVideo = async () => {
        try {
          console.log('Attempting to play video...')
          await video.play()
          console.log('Video started playing!')
          updatePlayButton()
        } catch (error) {
          console.log('Autoplay prevented:', error)
          updatePlayButton() // Show play button if autoplay fails
        }
      }
      
      // Wait for video to be ready
      if (video.readyState >= 2) {
        playVideo()
      } else {
        video.addEventListener('canplay', playVideo)
      }
      
      // Listen for video events
      video.addEventListener('play', () => {
        console.log('Video play event fired')
        updatePlayButton()
      })
      video.addEventListener('pause', () => {
        console.log('Video pause event fired')
        updatePlayButton()
      })
      video.addEventListener('error', (e) => {
        console.log('Video error:', e)
      })
      
      // Also try to play when user interacts with the page
      const handleUserInteraction = () => {
        console.log('User interaction detected')
        if (video.paused) {
          video.play().catch(console.log)
        }
      }
      
      document.addEventListener('click', handleUserInteraction)
      document.addEventListener('touchstart', handleUserInteraction)
      
      return () => {
        document.removeEventListener('click', handleUserInteraction)
        document.removeEventListener('touchstart', handleUserInteraction)
        video.removeEventListener('play', updatePlayButton)
        video.removeEventListener('pause', updatePlayButton)
        video.removeEventListener('canplay', playVideo)
        video.removeEventListener('error', (e) => console.log('Video error:', e))
      }
    } else {
      console.log('Video element not found!')
    }
  }, [])
  return (
    <section className="hero-fullscreen relative">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Working Video Background */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          style={{ zIndex: 1 }}
        >
          {/* Guaranteed working video sources */}
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
          <source src="https://filesamples.com/samples/video/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
        </video>
        
        {/* Fallback image background */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat animate-pulse"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
            zIndex: 0
          }}
        />
        
        {/* Animated gradient overlay for visual interest */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-blue-900/20 animate-pulse" style={{ zIndex: 0.5 }}></div>
        
        {/* Play Button Overlay (shown if autoplay fails) */}
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center" style={{ zIndex: 2 }}>
          <button 
            onClick={() => {
              if (videoRef.current) {
                videoRef.current.play()
              }
            }}
            className="hidden bg-white/30 backdrop-blur-sm rounded-full p-6 hover:bg-white/40 transition-all duration-300 shadow-2xl"
            id="play-button"
          >
            <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Logo - Top left */}
      <div className="absolute top-4 left-4 sm:top-8 sm:left-8 z-10">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-8 h-8 sm:w-12 sm:h-12 bg-black rounded-lg flex items-center justify-center shadow-lg">
            <div className="relative w-5 h-5 sm:w-8 sm:h-8">
              {/* Outer crescent */}
              <div className="absolute w-full h-full border-2 border-white rounded-full border-r-0 border-b-0 transform rotate-45"></div>
              {/* Middle crescent */}
              <div className="absolute w-4 h-4 sm:w-6 sm:h-6 border border-white rounded-full border-r-0 border-b-0 transform rotate-45 top-0.5 left-0.5 sm:top-1 sm:left-1"></div>
              {/* Inner crescent */}
              <div className="absolute w-2 h-2 sm:w-3 sm:h-3 border border-white rounded-full border-r-0 border-b-0 transform rotate-45 top-1.5 left-1.5 sm:top-2.5 sm:left-2.5"></div>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-2xl font-bold text-white">ONIX</span>
            <span className="text-xs sm:text-sm text-gray-300 -mt-1">GROUP OF COMPANIES</span>
          </div>
        </div>
      </div>

      {/* Navigation Menu - Top right */}
      <div className="absolute top-4 right-4 sm:top-8 sm:right-8 z-10">
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white hover:text-gray-300 transition-colors duration-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          <a href="#about" className="text-white hover:text-gray-300 font-medium transition-colors duration-200 text-xs lg:text-sm uppercase tracking-wide cursor-pointer">
            ABOUT
          </a>
          <a href="#companies" className="text-white hover:text-gray-300 font-medium transition-colors duration-200 text-xs lg:text-sm uppercase tracking-wide cursor-pointer">
            COMPANIES
          </a>
          <a href="#projects" className="text-white hover:text-gray-300 font-medium transition-colors duration-200 text-xs lg:text-sm uppercase tracking-wide cursor-pointer">
            NEWS
          </a>
          <a href="#contact" className="text-white hover:text-gray-300 font-medium transition-colors duration-200 text-xs lg:text-sm uppercase tracking-wide cursor-pointer">
            CONNECT
          </a>
          <a href="#footer" className="text-white hover:text-gray-300 font-medium transition-colors duration-200 text-xs lg:text-sm uppercase tracking-wide cursor-pointer">
            LEGACY
          </a>
        </nav>
      </div>

      {/* Content - Bottom left positioning like NOA */}
      <div className="absolute bottom-16 left-4 sm:bottom-20 sm:left-8 max-w-xs sm:max-w-2xl z-10">
        {/* Project name - small text */}
        <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4 font-light">
          ONIX GROUP OF COMPANIES HEADQUARTERS
        </p>
        
        {/* Main headline */}
        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-6xl font-light mb-4 sm:mb-6 leading-tight text-white">
          EXPECT MORE. Achieve BEYOND
        </h1>
      </div>

      {/* Floating Social Media Icons - Right Side - Hidden on mobile to avoid overlap */}
      <div className="hidden sm:flex absolute right-8 top-1/2 transform -translate-y-1/2 z-10 flex-col space-y-4">
        {/* Call Us Button */}
        <div className="bg-gray-800 bg-opacity-80 rounded-full px-4 py-2 text-white text-sm font-medium hover:bg-opacity-100 transition-all duration-200 cursor-pointer">
          Call Us
        </div>
        
        {/* Social Media Icons */}
        <div className="flex flex-col space-y-3">
          {/* Instagram */}
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer">
            <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </div>
          
          {/* YouTube */}
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer">
            <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </div>
          
          {/* LinkedIn */}
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer">
            <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Mobile Social Icons - Bottom Right */}
      <div className="flex sm:hidden absolute bottom-4 right-4 z-10 space-x-3">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </div>
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </div>
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
