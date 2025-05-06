import React from 'react';
import {
  ShieldAlert,
  ListChecks,
  Users,
  Cpu,
  Terminal,
  LayoutDashboard,
} from 'lucide-react';

const Problem = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: 'url(/assets/four.jpg)' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 p-8 text-gray-800">
        {/* Problem Statement */}
        <section className="mb-12 bg-white/90 rounded-xl p-6 shadow-lg">
          <div className="flex items-center mb-4">
            <ShieldAlert className="text-blue-600 w-7 h-7 mr-3" />
            <h2 className="text-3xl font-bold text-blue-800">Problem Statement</h2>
          </div>
          <p className="text-lg leading-relaxed">
          “How can we prepare our servers or websites to survive a traffic attack?”<br />
            With the growing reliance on digital services, Kenya and other countries face increasing cyber threats —
            especially DDoS attacks. Cybersecurity education is largely theoretical, with few practical tools for
            real-world safe simulations. This project closes that gap.
          </p>
        </section>

        {/* Functional Requirements */}
        <section className="mb-12 bg-white/90 rounded-xl p-6 shadow-lg">
          <div className="flex items-center mb-4">
            <ListChecks className="text-blue-600 w-7 h-7 mr-3" />
            <h2 className="text-3xl font-bold text-blue-800">Functional Requirements</h2>
          </div>
          <ul className="list-disc ml-6 text-lg space-y-2">
            <li>Run predefined attack scripts via GUI or CLI</li>
            <li>Adjust request rate, duration, endpoint</li>
            <li>Simulate CPU/RAM stress with real-time monitoring</li>
            <li>Visual dashboards of logs and traffic patterns</li>
            <li>Report generation after each simulation</li>
          </ul>
        </section>

        {/* Non-Functional */}
        <section className="mb-12 bg-white/90 rounded-xl p-6 shadow-lg">
          <div className="flex items-center mb-4">
            <Terminal className="text-blue-600 w-7 h-7 mr-3" />
            <h2 className="text-3xl font-bold text-blue-800">Non-Functional Requirements</h2>
          </div>
          <ul className="list-disc ml-6 text-lg space-y-2">
            <li>Easy-to-use GUI with clear output</li>
            <li>Cross-platform with minimal setup</li>
            <li>Modular, maintainable Python code</li>
          </ul>
        </section>

        {/* Target Users */}
        <section className="mb-12 bg-white/90 rounded-xl p-6 shadow-lg">
          <div className="flex items-center mb-4">
            <Users className="text-blue-600 w-7 h-7 mr-3" />
            <h2 className="text-3xl font-bold text-blue-800">Target Users</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
            <div>
              <h3 className="text-xl font-semibold text-blue-700">Primary:</h3>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Small Businesses</li>
                <li>IT Professionals</li>
                <li>Security researchers</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-700">Secondary:</h3>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Government security agencies</li>
                <li>IT audit firms</li>
                <li>Bootcamps and training hubs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tools & Technologies */}
        <section className="mb-12">
          <div className="flex items-center mb-4">
            <Cpu className="text-blue-600 w-7 h-7 mr-3" />
            <h2 className="text-3xl font-bold text-blue-800">Tools & Technologies</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {[
              { title: "Traffic Simulation", desc: "Python, Flask, requests, threading" },
              { title: "Resource Monitoring", desc: "psutil for CPU, memory tracking" },
              { title: "Log Analysis", desc: "Python logging + custom parsers" },
              { title: "Dashboards", desc: "Streamlit or Dash for data views" },
              { title: "Containerization", desc: "Docker for sandbox environment" },
            ].map((tool, i) => (
              <div key={i} className="bg-white/90 p-4 rounded-lg shadow-md hover:scale-[1.02] transition-all">
                <h3 className="text-xl font-bold text-blue-800 mb-1">{tool.title}</h3>
                <p className="text-gray-700">{tool.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Methodology */}
        <section className="bg-white/90 rounded-xl p-6 shadow-lg">
          <div className="flex items-center mb-4">
            <LayoutDashboard className="text-blue-600 w-7 h-7 mr-3" />
            <h2 className="text-3xl font-bold text-blue-800">Methodology</h2>
          </div>
          <ul className="list-disc ml-6 mt-4 text-lg space-y-2">
            <li>Research & script design for DDoS patterns</li>
            <li>Simulation engine + traffic generator setup</li>
            <li>System monitoring with psutil</li>
            <li>Interactive dashboards with Streamlit/Dash</li>
            <li>Log generation and reporting logic</li>
            <li>Testing, refinement, and documentation</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Problem;
