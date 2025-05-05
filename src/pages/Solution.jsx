import React from 'react';
import { ShieldCheck, Cpu, Network, BookOpen } from 'lucide-react';

const Solution = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: 'url(/assets/five.jpg)' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 p-8 text-gray-800">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">Solution</h1>

        {/* Solution Overview */}
        <section className="mb-12 bg-white/90 rounded-xl p-6 shadow-lg">
          <div className="flex items-center mb-4">
            <ShieldCheck className="text-blue-600 w-7 h-7 mr-3" />
            <h2 className="text-2xl font-semibold text-blue-800">Proposed Solution</h2>
          </div>
          <p className="text-lg leading-relaxed">
            This project proposes a Python-based DDoS simulation toolkit designed for educational and research purposes.
            Instead of deploying real attacks, the system simulates DDoS behavior — such as traffic floods and resource
            stress — in a safe, controlled environment. This will help students, cybersecurity trainers, and small businesses
            better understand how DDoS attacks work and how to defend against them.
          </p>
        </section>

        {/* Key Components (Visual Cards) */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-800 mb-6 text-center">Core Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Network className="w-10 h-10 text-blue-600 mb-2" />,
                title: 'Traffic Simulation',
                desc: 'Simulates flooding attacks by sending numerous requests to test server resilience.',
              },
              {
                icon: <Cpu className="w-10 h-10 text-blue-600 mb-2" />,
                title: 'Resource Stress',
                desc: 'Triggers CPU/RAM spikes using mock payloads to observe system behavior.',
              },
              {
                icon: <BookOpen className="w-10 h-10 text-blue-600 mb-2" />,
                title: 'Educational Focus',
                desc: 'Provides dashboards, logs, and reports for teaching DDoS concepts ethically.',
              },
              {
                icon: <ShieldCheck className="w-10 h-10 text-blue-600 mb-2" />,
                title: 'Safe Sandbox',
                desc: 'Runs entirely offline with no risk to real-world systems or networks.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/90 rounded-lg p-5 shadow-md hover:scale-[1.02] transition-all text-center"
              >
                {item.icon}
                <h3 className="text-xl font-semibold text-blue-700 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Solution;
