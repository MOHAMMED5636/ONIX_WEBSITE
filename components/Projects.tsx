export default function Projects() {
  const projects = [
    {
      title: 'Modern Office Complex',
      category: 'Commercial',
      description: '50-story mixed-use development with sustainable design features.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      year: '2023'
    },
    {
      title: 'Highway Bridge Project',
      category: 'Infrastructure',
      description: 'Suspension bridge connecting two major cities with advanced engineering.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      year: '2022'
    },
    {
      title: 'Residential Tower',
      category: 'Residential',
      description: 'Luxury residential complex with smart building technologies.',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      year: '2023'
    },
    {
      title: 'Industrial Plant',
      category: 'Industrial',
      description: 'Manufacturing facility with advanced MEP systems integration.',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      year: '2022'
    }
  ]

  return (
    <>
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 uppercase tracking-wide">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of successful engineering projects that showcase our expertise and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-700">
              <div className="relative h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </div>
                <div className="absolute top-4 right-4 bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.year}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
            View All Projects
          </button>
        </div>
      </div>
    </section>

    </>
  )
}
