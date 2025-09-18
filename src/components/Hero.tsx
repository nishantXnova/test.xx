import React from 'react';
import { ChevronDown, MessageSquare, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-cyan-400/20 rounded-full blur-xl animate-pulse delay-500"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className="flex justify-center items-center mb-6 space-x-4">
            <div className="p-3 bg-blue-500/20 rounded-full backdrop-blur-sm border border-blue-400/30">
              <MessageSquare className="w-8 h-8 text-blue-300" />
            </div>
            <div className="p-3 bg-purple-500/20 rounded-full backdrop-blur-sm border border-purple-400/30">
              <Zap className="w-8 h-8 text-purple-300" />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-white">Nishanta Kumar</span>
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Paudel
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-blue-100 mb-4 font-light">
            AI Chatbot Developer & API Integration Specialist
          </p>
          
          <p className="text-lg text-blue-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transforming businesses with intelligent conversational AI solutions. 
            Experienced in creating sophisticated chatbots that understand, engage, and deliver results.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="https://www.fiverr.com/nishant_paudel2"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full font-semibold text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Hire Me on Fiverr</span>
              <Zap className="w-5 h-5 group-hover:animate-pulse" />
            </a>
            
            <a
              href="#projects"
              className="px-8 py-4 border-2 border-white/30 hover:border-white/60 rounded-full font-semibold text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center space-x-2"
            >
              <span>View My Work</span>
              <ChevronDown className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/70" />
      </div>
    </section>
  );
};

export default Hero;