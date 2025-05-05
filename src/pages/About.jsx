import React from 'react';
import { ShieldCheck, AlertTriangle, Globe, BarChart3 } from 'lucide-react';

const About = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: 'url(/assets/five.jpg)' }} 
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 p-8">
        <h1 className="text-5xl font-extrabold mb-10 text-center text-blue-800">About the DDoS Simulation Toolkit</h1>
        
        {/* Project Overview */}
        <section className="bg-white/90 rounded-2xl shadow-xl p-8 mb-12 transition-transform hover:scale-[1.01]">
          <div className="flex items-center mb-4">
            <ShieldCheck className="text-blue-500 w-8 h-8 mr-2" />
            <h2 className="text-3xl font-semibold text-gray-800">Project Overview</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            As cyber threats continue to grow, Distributed Denial-of-Service (DDoS) attacks remain a major risk to digital infrastructure.
            This project proposes a <span className="font-semibold text-blue-600">Python-based DDoS simulation toolkit</span> designed for educational purposes. It simulates 
            behaviors like traffic floods and CPU stress in a controlled environment — letting users learn safely and ethically.
          </p>
        </section>

        {/* Challenges Section */}
        <section className="bg-white/90 rounded-2xl shadow-xl p-8 transition-transform hover:scale-[1.01]">
          <div className="flex items-center mb-4">
            <AlertTriangle className="text-red-500 w-8 h-8 mr-2" />
            <h2 className="text-3xl font-semibold text-gray-800">Key Challenges in the Kenyan Economy</h2>
          </div>
          <ul className="mt-4 space-y-4 text-gray-700 text-lg">
            <li className="flex items-start">
              <Globe className="text-blue-500 w-6 h-6 mr-3 mt-1" />
              Limited access to affordable digital infrastructure and cybersecurity resources
            </li>
            <li className="flex items-start">
              <BarChart3 className="text-green-500 w-6 h-6 mr-3 mt-1" />
              Lack of technical capacity to handle cyber threats among startups and small businesses
            </li>
            <li className="flex items-start">
              <ShieldCheck className="text-purple-500 w-6 h-6 mr-3 mt-1" />
              Minimal inclusion of cyber resilience in entrepreneurship training programs
            </li>
            <li className="flex items-start">
              <AlertTriangle className="text-red-500 w-6 h-6 mr-3 mt-1" />
              Fear of online expansion due to vulnerabilities to cyberattacks
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
