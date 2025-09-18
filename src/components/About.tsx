import React from 'react';
import { Bot, Code, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Bot className="w-8 h-8 text-blue-600" />,
      title: "AI Chatbot Expert",
      description: "Specialized in developing intelligent conversational AI systems that understand context and provide meaningful interactions."
    },
    {
      icon: <Code className="w-8 h-8 text-purple-600" />,
      title: "API Integration Master",
      description: "Seamlessly connecting systems and services to create comprehensive solutions that work flawlessly together."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-600" />,
      title: "Problem Solver",
      description: "Turning complex business challenges into elegant technical solutions with innovative approaches."
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Client-Focused",
      description: "Dedicated to delivering exceptional results that exceed expectations and drive business growth."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about creating intelligent solutions that bridge the gap between human needs and technological possibilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="AI Development Workspace"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-30"></div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Crafting Intelligent Conversations
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                As an experienced AI chatbot developer, I specialize in creating sophisticated conversational interfaces that understand context, maintain engaging dialogues, and provide real value to users.
              </p>
              <p>
                My expertise spans across multiple programming languages including <strong>Python</strong>, <strong>JavaScript</strong>, <strong>HTML</strong>, and <strong>CSS</strong>, allowing me to build complete solutions from backend logic to beautiful user interfaces.
              </p>
              <p>
                I have a proven track record of successful projects and am passionate about leveraging cutting-edge AI technologies to solve real-world problems for businesses and individuals.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl hover:from-white hover:to-gray-50 border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-6 p-3 bg-white rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300 w-fit">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;