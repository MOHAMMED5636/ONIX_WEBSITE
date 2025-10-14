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

  const leaders = [
    {
      name: 'Rameez Kaddour',
      title: 'Chief Executive Officer',
      description: 'A visionary leader with over 25 years of experience in engineering and construction, Rameez has been instrumental in shaping Onix Group into a powerhouse of innovation and excellence.',
      image: '/images/rameez-kaddour.png'
    },
    {
      name: 'Ahmed Al Kaddour',
      title: 'Chief Operating Officer',
      description: 'With a strategic mindset and exceptional operational expertise, Ahmed has driven the company\'s growth across multiple sectors, ensuring excellence in every project undertaken.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Kaddour Al Kaddour',
      title: 'Founding Chairman',
      description: 'The visionary founder who laid the foundation of Onix Group, Kaddour\'s entrepreneurial spirit and unwavering commitment to quality have been the cornerstone of our success story.',
      image: '/images/kaddour.png'
    },
    {
      name: 'Nabil Al Kaddour',
      title: 'Chief Financial Officer',
      description: 'A financial strategist par excellence, Nabil has steered the company through dynamic market conditions with prudent fiscal management and forward-thinking investment strategies.',
      image: '/images/nabil.png'
    }
  ]

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Back Button */}
      <div className="fixed top-8 left-8 z-50">
        <Link href="/" className="inline-flex items-center text-white hover:text-blue-400 transition-colors duration-300">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm uppercase tracking-wide">Back</span>
        </Link>
      </div>

      {/* Onix Logo - Top Center */}
      <div className="pt-8 pb-12 text-center">
        <div className="flex items-center justify-center mb-4">
          <img 
            src="/images/ONIX_LOGO.png" 
            alt="ONIX Logo" 
            className="w-20 h-20 object-contain"
          />
        </div>
        <h1 className="text-3xl font-bold text-white">ONIX</h1>
        <p className="text-sm text-gray-300">GROUP OF COMPANIES</p>
      </div>

      {/* Main Headline */}
      <div className="text-center py-12 px-4">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-4 tracking-wide">
          THIS IS THE STORY OF
        </h2>
        <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-12">
          ONIX GROUP OF COMPANIES
        </h3>
      </div>

      {/* Our Leaders and Our Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 uppercase tracking-wide">
          Our Leaders and Our Story
        </h2>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {leaders.map((leader, index) => (
            <div key={index} className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                {/* Leader Photo */}
                <div className="mb-6">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white/30 shadow-xl">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-500"
                      style={{ objectPosition: index === 0 ? '50% 20%' : index === 2 ? '50% 20%' : index === 3 ? '50% 20%' : '50% 50%' }}
                    />
                  </div>
                </div>

                {/* Leader Info */}
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-white mb-2">{leader.name}</h3>
                  <p className="text-lg text-blue-300 mb-4 font-medium">{leader.title}</p>
                  <p className="text-gray-300 leading-relaxed mb-6">{leader.description}</p>
                  
                  {/* Explore Button */}
                  <button className="inline-flex items-center px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 rounded-lg group">
                    <span className="mr-2">Explore their story</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Company Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8 uppercase">
            Our Story
          </h2>
          <div className="prose prose-lg prose-invert max-w-4xl mx-auto">
            <p className="text-gray-200 text-lg leading-relaxed mb-6">
              Founded on the principles of excellence, innovation, and unwavering commitment to quality, 
              Onix Group of Companies has grown from humble beginnings to become a leading force in 
              engineering, construction, and consulting services across the region.
            </p>
            <p className="text-gray-200 text-lg leading-relaxed mb-6">
              Our journey began with a vision to redefine industry standards and deliver exceptional value 
              to our clients. Through decades of dedication, strategic growth, and continuous innovation, 
              we have built a legacy that stands as a testament to our core values and the exceptional 
              leadership that guides us.
            </p>
            <p className="text-gray-200 text-lg leading-relaxed">
              Today, Onix Group encompasses multiple specialized companies, each excelling in their respective 
              domains while working together to create integrated solutions that exceed expectations. Our story 
              is one of perseverance, innovation, and an unwavering commitment to building a better future.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Spacing */}
      <div className="h-24"></div>
    </div>
  )
}

