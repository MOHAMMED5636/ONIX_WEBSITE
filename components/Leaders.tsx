'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Leaders() {
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
      image: '/images/rameez-kaddour.png',
      achievements: [
        'Led company growth from startup to industry leader',
        'Pioneered sustainable construction practices',
        'Established international partnerships'
      ]
    },
    {
      name: 'Ahmed Al Kaddour',
      title: 'Chief Operating Officer',
      description: 'With a strategic mindset and exceptional operational expertise, Ahmed has driven the company\'s growth across multiple sectors, ensuring excellence in every project undertaken.',
      image: '/images/ahmed al kaddour.png',
      achievements: [
        'Optimized operational efficiency by 40%',
        'Managed over 200 successful projects',
        'Developed innovative project management systems'
      ]
    },
    {
      name: 'Kaddour Al Kaddour',
      title: 'Founding Chairman',
      description: 'The visionary founder who laid the foundation of Onix Group, Kaddour\'s entrepreneurial spirit and unwavering commitment to quality have been the cornerstone of our success story.',
      image: '/images/kaddour.png',
      achievements: [
        'Founded Onix Group in 1995',
        'Established company values and culture',
        'Mentored next generation of leaders'
      ]
    },
    {
      name: 'Nabil Al Kaddour',
      title: 'Chief Financial Officer',
      description: 'A financial strategist par excellence, Nabil has steered the company through dynamic market conditions with prudent fiscal management and forward-thinking investment strategies.',
      image: '/images/nabil.png',
      achievements: [
        'Maintained financial stability through market cycles',
        'Secured major funding for expansion',
        'Implemented advanced financial systems'
      ]
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
      <div className="pt-6 pb-6 text-center">
        <div className="flex items-center justify-center mb-2">
          <img 
            src="/images/ONIX_LOGO.png" 
            alt="ONIX Logo" 
            className="w-16 h-16 object-contain"
          />
        </div>
        <h1 className="text-2xl font-bold text-white">ONIX</h1>
        <p className="text-xs text-gray-300">GROUP OF COMPANIES</p>
      </div>

      {/* Main Headline */}
      <div className="text-center py-6 px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-2 tracking-wide">
          OUR LEADERS
        </h2>
        <p className="text-lg text-gray-300">
          Meet the visionaries who guide our journey
        </p>
      </div>

      {/* Leaders Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {leaders.map((leader, index) => (
            <div key={index} className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                {/* Leader Photo */}
                <div className="mb-4">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/30 shadow-xl">
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
                  <h3 className="text-xl font-bold text-white mb-1">{leader.name}</h3>
                  <p className="text-sm text-blue-300 mb-3 font-medium">{leader.title}</p>
                  <p className="text-gray-300 leading-relaxed mb-4 text-sm">{leader.description}</p>
                  
                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Achievements:</h4>
                    <ul className="text-xs text-gray-300 space-y-1">
                      {leader.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Explore Button */}
                  <button className="inline-flex items-center px-4 py-2 border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 rounded-lg group text-sm">
                    <span className="mr-2">Learn More</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">Explore Our Story</h3>
          <p className="text-gray-300 mb-6">Discover the timeline of our journey and achievements</p>
          <Link 
            href="/timeline" 
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            <span className="mr-2">View Timeline</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Footer Spacing */}
      <div className="h-12"></div>
    </div>
  )
}
