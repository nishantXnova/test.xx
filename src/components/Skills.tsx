import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'Python', level: 90, color: 'bg-yellow-500' },
    { name: 'JavaScript', level: 85, color: 'bg-blue-500' },
    { name: 'AI Chatbot Development', level: 88, color: 'bg-purple-500' },
    { name: 'API Integration', level: 92, color: 'bg-green-500' },
    { name: 'HTML/CSS', level: 87, color: 'bg-red-500' },
    { name: 'Machine Learning', level: 80, color: 'bg-indigo-500' },
  ];

  const technologies = [
    'Python', 'JavaScript', 'HTML5', 'CSS3', 'React', 'Node.js',
    'OpenAI API', 'TensorFlow', 'Flask', 'FastAPI', 'MongoDB', 'PostgreSQL',
    'Git', 'Docker', 'AWS', 'Heroku', 'Netlify', 'Webhooks'
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive skill set built through hands-on experience and continuous learning in AI and web development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Skill Levels */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Expertise Levels</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-800">{skill.name}</span>
                    <span className="text-sm font-bold text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out transform group-hover:scale-x-105 origin-left`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Technologies & Tools</h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800 rounded-full text-sm font-medium border border-blue-200 hover:from-blue-200 hover:to-purple-200 hover:border-blue-300 transition-all duration-300 cursor-default hover:scale-105 transform"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-12">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Core Competencies</h4>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="font-medium text-gray-800">Natural Language Processing</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl border border-purple-200">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="font-medium text-gray-800">Conversational AI Design</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border border-green-200">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-medium text-gray-800">RESTful API Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;