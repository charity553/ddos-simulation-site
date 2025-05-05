// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="sticky top-0 bg-white shadow z-10 px-6 py-4 flex justify-end space-x-6">
        <Link to="/about" className="text-blue-600 font-semibold hover:underline">About</Link>
        <Link to="/features" className="text-blue-600 font-semibold hover:underline">Problem</Link>
        <Link to="/problem" className="text-blue-600 font-semibold hover:underline">Solution</Link>
        <Link to="/team" className="text-blue-600 font-semibold hover:underline">Team</Link>
      </nav>

      {/* Landing Content */}
      <header className="text-center p-10">
        <h1 className="text-5xl font-bold text-blue-700 mb-4">DDoS Simulation Toolkit</h1>
        <p className="text-xl max-w-3xl mx-auto text-gray-700">
          A Python-based educational toolkit to simulate and understand Distributed Denial-of-Service (DDoS) attacks safely and ethically. Ideal for students, trainers, and institutions.
        </p>
      </header>

      {/* About Preview */}
      <section className="p-8 bg-gray-50">
        <h2 className="text-3xl font-semibold mb-2">About</h2>
        <p className="text-lg text-gray-700">
          As cyber threats grow, this toolkit simulates DDoS attacks in a controlled environment, providing safe learning for users in Kenya and beyond. It addresses the lack of practical training tools in cybersecurity education.
        </p>
      </section>

      {/* Problem Preview */}
      <section className="p-8">
        <h2 className="text-3xl font-semibold mb-2">Problem</h2>
        <p className="text-lg text-gray-700">
          Kenya faces growing DDoS threats amid limited cybersecurity tools. This project fills that gap by offering hands-on, safe simulations for training and awareness.
        </p>
      </section>

      {/* Solution Preview */}
      <section className="p-8 bg-gray-50">
        <h2 className="text-3xl font-semibold mb-2">Solution</h2>
        <p className="text-lg text-gray-700">
          Our Python-based simulation environment mirrors real DDoS effects without the risks. Learners interact with traffic simulations, monitoring tools, and dashboards.
        </p>
      </section>

      {/* Team Preview */}
      <section className="p-8">
        <h2 className="text-3xl font-semibold mb-6 text-center">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: 'Serah Maina', role: 'Project Lead', image: '/assets/serah.jpg' },
            { name: 'Charity Mulei', role: 'Monitoring & Testing', image: '/assets/charity.jpg' },
            { name: 'Valentine Momanyi', role: 'Data Visualization', image: '/assets/valentine.jpg' },
          ].map((member, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                <p className="text-blue-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <footer className="p-6 text-center bg-blue-50">
        <h3 className="text-xl mb-2 font-semibold">Ready to explore more?</h3>
        <Link to="/features" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Get Started</Link>
      </footer>
    </div>
  );
};

export default Home;
