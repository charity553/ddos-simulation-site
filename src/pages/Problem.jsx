// src/pages/Features.jsx
import React from 'react';

const Problem = () => {
  return (
    <div className="p-8">
       <section className="mb-8">
        <h2 className="text-2xl font-semibold">Problem Statement</h2>
        <p className="mt-4 text-lg">
          With the growing reliance on digital services, Kenya and many other countries face increasing cyber threats, 
          especially Distributed Denial-of-Service (DDoS) attacks targeting banks, e-commerce platforms, and public services.
          Cybersecurity education in the region, however, is largely theoretical, with few practical tools to simulate real-world 
          attack scenarios in a safe, accessible way. This project addresses that gap.
        </p>
      </section>

      {/* Functional & Non-Functional Requirements Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Functional Requirements</h2>
        <ul className="list-disc ml-6 mt-4 text-lg">
          <li>User can run predefined attack scripts via a GUI or CLI</li>
          <li>Control parameters: request rate, duration, and endpoint</li>
          <li>Simulate spikes in CPU/RAM usage with real-time monitoring</li>
          <li>Generate logs with attack pattern indicators and visualize them in dashboards</li>
          <li>Generate reports after each simulation with attack summaries and insights</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Non-Functional Requirements</h2>
        <ul className="list-disc ml-6 mt-4 text-lg">
          <li>Security: No real attacks launched; safe, local sandbox</li>
          <li>Usability: Visual tools with easy-to-understand output for non-experts</li>
          <li>Portability: Runs on any laptop with Python installed, Docker optional</li>
          <li>Maintainability: Modular Python code, open-source libraries</li>
          <li>Ethical Compliance: Educational use only, with a usage disclaimer</li>
        </ul>
      </section>

      {/* Target Users & Beneficiaries Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Target Users and Beneficiaries</h2>
        <h3 className="text-xl font-semibold mt-4">Primary Users:</h3>
        <ul className="list-disc ml-6 mt-2 text-lg">
          <li>Cybersecurity students, trainers, and academic institutions</li>
          <li>IT professionals and security researchers</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">Secondary Users:</h3>
        <ul className="list-disc ml-6 mt-2 text-lg">
          <li>Government digital security agencies</li>
          <li>IT audit firms</li>
          <li>Training bootcamps and educational institutions</li>
        </ul>
      </section>

      {/* Tools & Technologies Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Tools & Technologies</h2>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-gray-100 p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semibold">Traffic Simulation</h3>
            <p className="text-lg">Python, Flask, requests, threading, custom scripts</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semibold">System Resource Monitoring</h3>
            <p className="text-lg">psutil (for CPU, memory, network usage simulation)</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semibold">Log Analysis</h3>
            <p className="text-lg">Custom log generator, Python logging module</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semibold">Visualization</h3>
            <p className="text-lg">Dash or Streamlit for dashboards</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semibold">Containerization</h3>
            <p className="text-lg">Docker</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semibold">Performance Alerts</h3>
            <p className="text-lg">Simple logic thresholds for CPU usage, request rates, etc.</p>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section>
        <h2 className="text-2xl font-semibold">Methodology</h2>
        <p className="mt-4 text-lg">
          The project follows a systematic methodology involving:
        </p>
        <ul className="list-disc ml-6 mt-4 text-lg">
          <li>Research & Planning: Understanding DDoS behavior and designing scripts</li>
          <li>Design & Environment Setup: Developing the simulation engine and traffic generator</li>
          <li>Simulation Scripting: Adding system monitoring with psutil</li>
          <li>Monitoring Integration: Building dashboards with Streamlit or Dash</li>
          <li>Dashboard & Reporting: Generating logs and implementing report logic</li>
          <li>Testing & Documentation: Final testing, polishing code, and UI</li>
        </ul>
      </section>
    </div>
  );
};

export default Problem;
