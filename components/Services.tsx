'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function Services() {
  // Observe cards for scroll-in animation
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const cards = cardsRef.current
    if (!cards) return
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('in-view')
        })
      },
      { threshold: 0.18 }
    )
    cards.forEach(el => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  // Ripple helper
  const makeRipple = (evt: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    const target = evt.currentTarget
    const rect = target.getBoundingClientRect()
    const circle = document.createElement('span')
    const size = Math.max(rect.width, rect.height)
    circle.className = 'ripple-circle'
    circle.style.left = `${evt.clientX - rect.left}px`
    circle.style.top = `${evt.clientY - rect.top}px`
    circle.style.width = circle.style.height = `${size}px`
    target.appendChild(circle)
    setTimeout(() => circle.remove(), 650)
  }
  const services = [
    {
      title: 'Engineering Services',
      description: 'Comprehensive engineering across structural, civil, and MEP disciplines.',
      icon: '🏗️',
      features: ['Structural Design', 'Infrastructure Development', 'MEP Systems', 'Quality Assurance'],
      href: '/services/structural-engineering'
    },
    {
      title: 'Design Services',
      description: 'Creative architectural and interior design solutions tailored to your vision.',
      icon: '🎨',
      features: ['Interior Design', 'Exterior Design', 'Architectural Design', '3D Visualization'],
      href: '/services/structural-engineering'
    },
    {
      title: 'Steel Contracting',
      description: 'Specialized steel fabrication and contracting for construction and industry.',
      icon: '🛠️',
      features: ['Steel Fabrication', 'Metal Containers', 'Industrial Storage', 'Project Delivery'],
      href: '/services/project-management'
    },
    {
      title: 'Tax Consultation',
      description: 'Professional tax advisory and compliance services for individuals and businesses.',
      icon: '💼',
      features: ['Tax Consultancy', 'Financial Planning', 'Accounting Services', 'Compliance Management'],
      href: '/services/consultation'
    }
  ]

  return (
    <>
    <section id="services" className="py-12 sm:py-20 relative overflow-hidden min-h-screen flex flex-col justify-start">
      {/* Construction Background for Services - Full Fit */}
      <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat brightness-50 contrast-125" style={{ backgroundImage: 'url(/images/01.jpg)' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/90 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8 sm:pt-16 pb-16 sm:pb-20">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-wide">Our Services</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions across multiple industries tailored to meet your business requirements with precision and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Link key={index} href={service.href} className="block group"
              onClick={(e) => makeRipple(e)}>
              <div
                ref={(el) => { if (el) cardsRef.current[index] = el }}
                className="card-animate relative bg-gray-900 rounded-xl shadow-lg p-4 sm:p-6 transition-all duration-300 border border-gray-700 group-hover:border-blue-500 cursor-pointer overflow-hidden"
              >
                <div className="card-blob"></div>
                <div className="relative z-10">
                  <div className="card-icon text-3xl sm:text-4xl mb-3 sm:mb-4">{service.icon}</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-blue-400 transition-colors duration-300">{service.title}</h3>
                  <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 group-hover:text-gray-200 transition-colors duration-300">{service.description}</p>
                  <ul className="space-y-1 sm:space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs sm:text-sm text-gray-400 flex items-center group-hover:text-gray-300 transition-colors duration-300">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mr-2 sm:mr-3 flex-shrink-0 group-hover:bg-blue-400 transition-colors duration-300"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    </>
  )
}
