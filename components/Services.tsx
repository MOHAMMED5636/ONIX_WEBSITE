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
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 uppercase tracking-wide">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions across multiple industries tailored to meet your business requirements with precision and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-700">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
