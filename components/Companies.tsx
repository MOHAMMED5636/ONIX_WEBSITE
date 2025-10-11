export default function Companies() {
  const companies = [
    {
      name: 'ONIX ENGINEERING CONSULTANCY',
      description: 'Leading engineering solutions provider specializing in comprehensive structural and infrastructure development.',
      services: [
        'Structural Design',
        'Infrastructure Development', 
        'MEP Systems',
        'Construction Management',
        'Quality Assurance',
        'Project Planning'
      ],
      icon: '🏗️',
      color: 'from-blue-600 to-blue-800',
      customLogo: true
    },
    {
      name: 'ONIX PLUS',
      description: 'Professional contracting company delivering construction and project management excellence.',
      services: [
        'General Contracting',
        'Construction Management',
        'Project Coordination',
        'Site Supervision',
        'Cost Management',
        'Timeline Control'
      ],
      icon: '🏢',
      color: 'from-green-600 to-green-800'
    },
    {
      name: 'ONIX DESIGN STUDIO',
      description: 'Creative design solutions for interior and exterior spaces with innovative architectural concepts.',
      services: [
        'Interior Design',
        'Exterior Design',
        'Architectural Design',
        'Space Planning',
        '3D Visualization',
        'Design Consultation'
      ],
      icon: '🎨',
      color: 'from-pink-600 to-pink-800'
    }
  ]

  return (
    <section id="companies" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium text-white uppercase tracking-wider">Our Companies</span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6 uppercase tracking-wide">
            ONIX Group of Companies
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            A diverse portfolio of specialized companies delivering excellence across multiple industries 
            with innovative solutions and professional expertise.
          </p>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company, index) => (
            <div key={index} className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/10 hover:shadow-3xl transition-all duration-300 hover:scale-105 group">
              {/* Company Header */}
              <div className="text-center mb-6">
                {company.customLogo ? (
                  <div className="w-20 h-20 bg-black rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 border border-gray-700">
                    {/* Custom ONIX Engineering Consultancy Logo */}
                    <div className="relative w-16 h-16">
                      {/* Top-left cyan crescent */}
                      <div className="absolute w-8 h-8 border-3 border-cyan-400 rounded-full border-r-0 border-b-0 transform rotate-45 top-0 left-0"></div>
                      {/* Bottom-left orange crescent */}
                      <div className="absolute w-6 h-6 border-2 border-orange-400 rounded-full border-r-0 border-b-0 transform rotate-45 bottom-0 left-0"></div>
                      {/* Right gray crescent */}
                      <div className="absolute w-7 h-7 border-2 border-gray-300 rounded-full border-r-0 border-b-0 transform rotate-45 top-1 right-0"></div>
                    </div>
                  </div>
                ) : (
                  <div className={`w-16 h-16 bg-gradient-to-br ${company.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{company.icon}</span>
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white/90 transition-colors duration-300">
                  {company.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {company.description}
                </p>
              </div>

              {/* Services List */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-3">
                  Services
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {company.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-center text-sm text-gray-300 hover:text-white transition-colors duration-200">
                      <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></div>
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Company Badge */}
              <div className="mt-6 pt-4 border-t border-white/20">
                <div className="text-center">
                  <span className="inline-block bg-white/10 text-white text-xs font-medium px-3 py-1 rounded-full">
                    ONIX GROUP
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Work With Our Companies?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Contact us to discuss how our diverse portfolio of companies can meet your specific project requirements.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
