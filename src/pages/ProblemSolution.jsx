// src/pages/ProblemSolution.jsx
import React from 'react';

const ProblemSolution = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4 text-center">Problem & Solution</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Problem Statement</h2>
        <p className="mt-4 text-lg">
          With the growing reliance on digital services, Kenya and many other countries face increasing cyber threats, 
          especially Distributed Denial-of-Service (DDoS) attacks targeting banks, e-commerce platforms, and public services.
          Cybersecurity education in the region, however, is largely theoretical, with few practical tools to simulate real-world 
          attack scenarios in a safe, accessible way. This project addresses that gap.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Proposed Solution</h2>
        <p className="mt-4 text-lg">
          This project proposes a Python-based DDoS simulation toolkit designed for educational and research purposes. Instead of 
          deploying real attacks, the system simulates DDoS behavior, such as traffic floods and resource stress, in a controlled 
          environment. The toolkit will help students, cybersecurity trainers, and small businesses better understand the impact 
          of DDoS attacks and how to mitigate them.
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

export default ProblemSolution;
