export default function Services() {
  const services = [
    {
      title: 'Engineering Solutions',
      description: 'Comprehensive engineering services across structural, civil, and MEP disciplines.',
      icon: '🏗️',
      features: ['Structural Design', 'Infrastructure Development', 'MEP Systems', 'Quality Assurance']
    },
    {
      title: 'Technology Services',
      description: 'Digital transformation and technology solutions for modern business challenges.',
      icon: '💻',
      features: ['Software Development', 'Digital Solutions', 'IT Consulting', 'System Integration']
    },
    {
      title: 'Construction Management',
      description: 'End-to-end construction project management ensuring timely delivery and quality standards.',
      icon: '🏢',
      features: ['Project Planning', 'Quality Control', 'Cost Management', 'Timeline Coordination']
    },
    {
      title: 'Consulting Services',
      description: 'Strategic business consulting across multiple industries and sectors.',
      icon: '📊',
      features: ['Business Strategy', 'Process Optimization', 'Market Analysis', 'Growth Planning']
    }
  ]

  return (
    <>
    <section id="services" className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-wide">Our Services</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions across multiple industries tailored to meet your business requirements with precision and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-900 rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-700">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{service.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">{service.description}</p>
              <ul className="space-y-1 sm:space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-xs sm:text-sm text-gray-400 flex items-center">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    </>
  )
}
