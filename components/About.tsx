'use client'

import { useState, useEffect } from 'react'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    const element = document.getElementById('about')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const AnimatedNumber = ({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!isVisible) return

      let startTime: number | undefined
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        setCount(Math.floor(easeOutQuart * end))

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    }, [isVisible, end, duration])

    return <span>{count}{suffix}</span>
  }

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-white/5 to-transparent rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium text-white uppercase tracking-wider">About Us</span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6 uppercase tracking-wide">
            Onix Group of Companies
          </h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Main Content */}
            <div className="space-y-6 text-center">
              <p className="text-xl text-gray-200 leading-relaxed">
                With over a decade of experience across multiple industries, Onix Group of Companies 
                has established itself as a trusted partner for complex business challenges. Our diverse portfolio 
                of companies delivers innovative solutions that exceed expectations.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We operate across various sectors including engineering, technology, construction, infrastructure, 
                and project management, serving clients with commitment to quality and excellence.
              </p>
            </div>
            
            {/* Statistics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/20">
              <div className="text-center group">
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-white/80 transition-colors duration-300">
                  <AnimatedNumber end={500} suffix="+" duration={2500} />
                </div>
                <div className="text-gray-400 font-medium uppercase tracking-wide text-sm">Projects Completed</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-white/80 transition-colors duration-300">
                  <AnimatedNumber end={15} suffix="+" duration={2000} />
                </div>
                <div className="text-gray-400 font-medium uppercase tracking-wide text-sm">Years Experience</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-white/80 transition-colors duration-300">
                  <AnimatedNumber end={10} suffix="+" duration={1500} />
                </div>
                <div className="text-gray-400 font-medium uppercase tracking-wide text-sm">Companies</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-white/80 transition-colors duration-300">
                  <AnimatedNumber end={100} suffix="%" duration={2000} />
                </div>
                <div className="text-gray-400 font-medium uppercase tracking-wide text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
