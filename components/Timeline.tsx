'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Timeline() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Show loading screen for 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const timelineEvents = [
    {
      number: '02',
      title: 'Taking the first steps towards constructing a solid foundation',
      description: 'This was the year the UAE was founded, claiming an identity for itself, with a major thrust into construction as everything had to be built from the ground up - villas, hotels and buildings as well. The newly-formed Onix Group made its foray in the world of trading. However, soon, sensing the growing potential of construction, the Founders of the Onix Group moved the business to trading related to construction, building materials, and steel to name a few.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      year: '1995'
    },
    {
      number: '03',
      title: 'Contributing to a growing nation, through the power of engineering',
      description: 'Around the same time, there was another story in the making - the story of two young men with big dreams. The founders of Onix Group, who had a vision to revolutionize the engineering and construction industry, wanted to build something extraordinary together.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      year: '2000'
    },
    {
      number: '04',
      title: 'Shaping the destiny of the UAE, one project at a time',
      description: 'Around the mid-2000s - 2005 to be precise - construction and infrastructure development sprang up bountifully in the Middle East. With a finger firmly placed on the pulse of the nation, the Group made its foray into the Oil and Gas industry, anticipating the need for the supply of transportation and process equipment.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      year: '2005'
    },
    {
      number: '05',
      title: 'Expanding to greater horizons with the rise of technology',
      description: 'Expansion was one of the main keywords in the late 2000s in the UAE, both for the Group and the nation in its combined growth story, it stood to reason that a stronghold should be created in the technology industry. And so it was that Onix International Engineering was formed, serving as a solutions-provider for the repair, remanufacturing and manufacturing of industrial equipment.',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      year: '2010'
    },
    {
      number: '06',
      title: 'Expansion in the UAE of the 2010s',
      description: 'The group joined the nation in its growth story, stepping boldly into repair, remanufacturing and manufacturing.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      year: '2015'
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
          OUR STORY
        </h2>
        <p className="text-lg text-gray-300">
          Growing up with a Glorious Nation
        </p>
      </div>

      {/* Introductory Story Section - Above Timeline */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative min-h-screen flex items-center">
          <div className="relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left Side - Text Content */}
              <div className="space-y-6">
                {/* Main Title */}
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Growing up with a Glorious Nation
                </h3>
                
                {/* Description */}
                <div className="space-y-6">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    This story dates back to the 1990s, to that moment in time destined to forevermore be marked in the history of the world. 
                    Engineering and construction had first been discovered as the backbone of development in the UAE in 1995.
                  </p>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Around the same time, there was another story in the making - the story of two young men with big dreams. 
                    The founders of Onix Group, who had a vision to revolutionize the engineering and construction industry, 
                    wanted to build something extraordinary together.
                  </p>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    And so the Onix Group came into being, built on the aspirations of visionary leaders and an unwavering 
                    commitment to excellence in engineering and construction services.
                  </p>
                </div>
              </div>
              
              {/* Right Side - Blue and Red Logo */}
              <div className="relative">
                <div className="w-full h-96 lg:h-[500px] rounded-full overflow-hidden border-4 border-white/20 shadow-2xl bg-gradient-to-br from-blue-600 via-blue-800 to-red-600 flex items-center justify-center">
                  {/* Blue and Red Logo Design */}
                  <div className="relative">
                    {/* Blue Circle */}
                    <div className="w-32 h-32 lg:w-48 lg:h-48 bg-blue-500 rounded-full flex items-center justify-center shadow-2xl">
                      {/* Red Circle Inside */}
                      <div className="w-20 h-20 lg:w-32 lg:h-32 bg-red-500 rounded-full flex items-center justify-center">
                        {/* White ONIX Text */}
                        <div className="text-white font-bold text-2xl lg:text-4xl">
                          O
                        </div>
                      </div>
                    </div>
                    
                    {/* Blue Ring Around */}
                    <div className="absolute inset-0 w-32 h-32 lg:w-48 lg:h-48 border-4 border-blue-300 rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-60"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-red-500 rounded-full opacity-60"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-blue-400 rounded-full opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Header */}
      <div className="text-center py-8 px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Take a walk down history to see what transpired over the years
        </h3>
        <p className="text-lg text-gray-300">
          Into making the Group what it is today
        </p>
      </div>

      {/* Timeline Section - Al Shirawi Style */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-16">
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative min-h-screen flex items-center">
              {/* Large Number Background */}
              <div className="absolute top-0 right-0 text-9xl md:text-[12rem] font-bold text-white/10 z-0">
                {event.number}
              </div>
              
              <div className="relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  {/* Left Side - Text Content */}
                  <div className="space-y-6">
                    {/* Oval Text Box */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-full px-8 py-4 border border-white/20">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                        {event.title}
                      </h3>
                    </div>
                    
                    {/* Description */}
                    <div className="space-y-4">
                      <p className="text-lg text-gray-300 leading-relaxed">
                        {event.description}
                      </p>
                      
                      {/* Year Badge */}
                      <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        {event.year}
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Side - Image */}
                  <div className="relative">
                    <div className="w-full h-96 lg:h-[500px] rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-60"></div>
                    <div className="absolute top-1/2 -left-8 w-4 h-4 bg-red-500 rounded-full opacity-60"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">Explore Our Leaders</h3>
          <p className="text-gray-300 mb-6">Meet the visionaries who have shaped our journey</p>
          <Link 
            href="/leaders" 
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            <span className="mr-2">Meet Our Leaders</span>
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
