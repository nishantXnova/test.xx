import React from 'react';
import { Heart, Code, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Nishanta Kumar Paudel
            </h3>
            <p className="text-gray-400">
              AI Chatbot Developer & API Integration Specialist
            </p>
          </div>

          {/* Center Message */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 text-gray-300 mb-2">
              <span>Made with</span>
              <Heart className="w-5 h-5 text-red-500 fill-current" />
              <span>and</span>
              <Code className="w-5 h-5 text-blue-400" />
            </div>
            <p className="text-gray-400 text-sm">
              Crafting intelligent solutions for a better digital world
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center lg:text-right">
            <div className="flex items-center justify-center lg:justify-end space-x-2 text-gray-300 mb-2">
              <MessageSquare className="w-5 h-5 text-green-500" />
              <span>Available on Fiverr</span>
            </div>
            <p className="text-gray-400 text-sm">
              Ready to transform your business with AI
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2024 Nishanta Kumar Paudel. All rights reserved. | Specialized in AI Chatbot Development
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;