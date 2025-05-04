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
        <h2 className="text-2xl font-semibold">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          <div className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Serah Maina"
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="font-bold">Serah Maina</h3>
            <p>Project Lead | Python, Flask, Monitoring</p>
          </div>
          <div className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Charity Mulei"
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="font-bold">Charity Mulei</h3>
            <p>Monitoring & Testing | psutil, Testing</p>
          </div>
          <div className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Valentine Momanyi"
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="font-bold">Valentine Momanyi</h3>
            <p>Data Visualization | Dash, UI/UX</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
