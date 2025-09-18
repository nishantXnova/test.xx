import React from 'react';
import { Mail, MessageSquare, Clock, Globe, Star, Instagram } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <MessageSquare className="w-6 h-6 text-green-600" />,
      title: "Fiverr Profile",
      description: "Visit my Fiverr profile to see reviews and hire me directly",
      action: "View Profile",
      link: "https://www.fiverr.com/nishant_paudel2",
      highlight: true
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: "Direct Email",
      description: "Get in touch via email for custom projects",
      action: "Send Email",
      link: "mailto:paudelnishant15@gmail.com"
    },
    {
      icon: <Instagram className="w-6 h-6 text-pink-600" />,
      title: "Instagram DM",
      description: "Message me directly on Instagram for quick discussions",
      action: "Send DM",
      link: "https://www.instagram.com/nisha.nt548/"
    }
  ];

  const stats = [
    { number: "Fast", label: "Delivery" },
    { number: "Quality", label: "Guaranteed" },
    { number: "Rated", label: "Professional" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business with intelligent AI solutions? Let's discuss your project and bring your vision to life.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Methods */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h3>
            
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className={`group p-6 rounded-2xl border-2 transition-all duration-300 transform hover:-translate-y-1 ${
                  method.highlight
                    ? 'border-green-200 bg-gradient-to-br from-green-50 to-green-100 hover:border-green-300 hover:shadow-xl'
                    : 'border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 hover:border-gray-300 hover:shadow-lg'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl ${method.highlight ? 'bg-green-200' : 'bg-white'} shadow-md group-hover:shadow-lg transition-shadow duration-300`}>
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h4>
                    <p className="text-gray-700 mb-4">{method.description}</p>
                    <a
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-block px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                        method.highlight
                          ? 'bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg'
                          : 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg'
                      }`}
                    >
                      {method.action}
                    </a>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6" />
                <h4 className="text-lg font-bold">Quick Response Time</h4>
              </div>
              <p className="text-blue-100">
                I typically respond to all inquiries within 2-4 hours during business hours. 
                For urgent projects, I'm available for same-day consultations.
              </p>
            </div>
          </div>

          {/* Service Package */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">AI Chatbot Package</h3>
            
            <div className="text-center mb-8">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                Starting at $40
              </div>
              <p className="text-gray-600">Complete AI Chatbot Solution</p>
            </div>

            <div className="space-y-4 mb-8">
              <h4 className="font-bold text-gray-900 mb-4">What's Included:</h4>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Star className="w-3 h-3 text-white" />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900">Website Development</h5>
                  <p className="text-gray-700 text-sm">Complete responsive website for your chatbot</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Star className="w-3 h-3 text-white" />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900">Complete Source Code</h5>
                  <p className="text-gray-700 text-sm">AI and website code organized in folders</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Star className="w-3 h-3 text-white" />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900">Custom Professional System Prompt</h5>
                  <p className="text-gray-700 text-sm">Tailored AI behavior for your specific needs</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                  <Star className="w-3 h-3 text-white" />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900">Fast Delivery</h5>
                  <p className="text-gray-700 text-sm">Work completed under 1 day</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://www.fiverr.com/nishant_paudel2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>Order Now on Fiverr</span>
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>

            <div className="mt-8 p-4 bg-white rounded-xl border border-gray-200">
              <p className="text-gray-700 text-center text-sm">
                <strong>Highly Rated Professional:</strong> I maintain excellent ratings and positive feedback from clients in real-life projects. Check my Fiverr profile for genuine reviews and testimonials.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;