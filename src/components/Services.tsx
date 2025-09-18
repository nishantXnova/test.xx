import React from 'react';
import { Bot, Code, Settings, Zap, MessageSquare, Globe } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Bot className="w-10 h-10 text-blue-600" />,
      title: "Custom AI Chatbot Development",
      description: "Build intelligent chatbots tailored to your business needs with advanced NLP capabilities and contextual understanding.",
      features: [
        "Natural Language Processing",
        "Multi-platform integration",
        "Custom training data",
        "24/7 automated responses"
      ],
      price: "Starting from $40"
    },
    {
      icon: <Code className="w-10 h-10 text-purple-600" />,
      title: "API Integration Services",
      description: "Seamlessly connect your systems with third-party services and create robust API solutions for data exchange.",
      features: [
        "RESTful API development",
        "Webhook implementation",
        "Database integration",
        "Real-time data sync"
      ],
      price: "Starting from $40"
    },
    {
      icon: <MessageSquare className="w-10 h-10 text-green-600" />,
      title: "Conversational AI Solutions",
      description: "Design and implement sophisticated conversation flows that engage users and drive business results.",
      features: [
        "Dialog flow design",
        "Intent recognition",
        "Response optimization",
        "User experience analysis"
      ],
      price: "Starting from $40"
    },
    {
      icon: <Settings className="w-10 h-10 text-orange-600" />,
      title: "Chatbot Maintenance & Updates",
      description: "Keep your chatbots running smoothly with regular updates, performance monitoring, and feature enhancements.",
      features: [
        "Performance monitoring",
        "Regular updates",
        "Bug fixes",
        "Feature additions"
      ],
      price: "Starting from $40"
    },
    {
      icon: <Zap className="w-10 h-10 text-yellow-600" />,
      title: "AI Model Training & Optimization",
      description: "Improve your chatbot's accuracy and performance with custom training and fine-tuning of AI models.",
      features: [
        "Custom model training",
        "Performance optimization",
        "Data preprocessing",
        "Model evaluation"
      ],
      price: "Starting from $40"
    },
    {
      icon: <Globe className="w-10 h-10 text-cyan-600" />,
      title: "Web Integration & Deployment",
      description: "Deploy your chatbots across multiple platforms including websites, mobile apps, and messaging platforms.",
      features: [
        "Multi-platform deployment",
        "Website integration",
        "Mobile app support",
        "Social media bots"
      ],
      price: "Starting from $40"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI chatbot solutions designed to transform your business operations and enhance customer engagement.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 text-sm">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {service.price}
                  </span>
                  <a
                    href="https://www.fiverr.com/nishant_paudel2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-sm font-semibold shadow-md hover:shadow-lg"
                  >
                    Order Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-3xl text-white">
            <h3 className="text-2xl font-bold mb-4">Need Something Custom?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Every business is unique. Let's discuss your specific requirements and create a tailored solution that fits your needs perfectly.
            </p>
            <a
              href="https://www.fiverr.com/nishant_paudel2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Contact on Fiverr</span>
              <MessageSquare className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;