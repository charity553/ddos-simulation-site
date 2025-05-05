// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4 text-center">About the DDoS Simulation Toolkit</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Project Overview</h2>
        <p className="mt-4 text-lg">
          As cyber threats continue to grow, Distributed Denial-of-Service (DDoS) attacks remain a major risk to digital infrastructure.
          This project proposes a Python-based DDoS simulation toolkit designed for educational purposes. The toolkit will simulate 
          DDoS behaviors like traffic floods and CPU stress in a controlled environment, offering users a safe way to learn about these 
          attacks without causing real damage.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Key Challenges in the Kenyan Economy</h2>
        <ul className="list-disc ml-6 mt-4">
          <li>Limited access to affordable digital infrastructure and cybersecurity resources</li>
          <li>Lack of technical capacity to handle cyber threats among startups and small businesses</li>
          <li>Minimal inclusion of cyber resilience in entrepreneurship training programs</li>
          <li>Fear of online expansion due to vulnerabilities to cyberattacks</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
