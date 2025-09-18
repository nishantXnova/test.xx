import React from 'react';
import { ExternalLink, Github, MessageCircle, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Kivo XN",
      description: "An intelligent AI chatbot designed to provide engaging conversations and helpful assistance. Features advanced natural language processing and contextual understanding.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["AI/ML", "Natural Language Processing", "JavaScript", "API Integration"],
      liveUrl: "https://funny-kheer-371737.netlify.app/",
      features: [
        "Advanced conversational AI",
        "Context-aware responses",
        "Real-time interaction",
        "Responsive design"
      ]
    }
  ];

  const additionalProjects = [
    {
      title: "Custom API Integrations",
      description: "Various API integration projects connecting different services and platforms for seamless data flow.",
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      technologies: ["Python", "RESTful APIs", "Webhooks", "JSON"]
    },
    {
      title: "Chatbot Templates",
      description: "Reusable chatbot templates for different industries including e-commerce, support, and lead generation.",
      icon: <MessageCircle className="w-8 h-8 text-blue-500" />,
      technologies: ["AI/ML", "Python", "Flask", "Natural Language Processing"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing my expertise in AI chatbot development and system integration through real-world applications.
          </p>
        </div>

        {/* Main Featured Project */}
        <div className="mb-16">
          {projects.map((project, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-80 lg:h-auto">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <ExternalLink size={20} />
                      <span className="font-semibold">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {additionalProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;