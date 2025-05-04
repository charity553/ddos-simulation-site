// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">DDoS Simulation Toolkit</h1>
      
      {/* Project Description */}
      <p className="text-xl mb-6 max-w-3xl mx-auto">
        As digital services continue to expand, cybersecurity threats like Distributed Denial-of-Service (DDoS) attacks pose a
        growing risk. Our DDoS Simulation Toolkit provides a safe, ethical, and educational approach to understanding and defending
        against these attacks. By simulating real-world DDoS behaviors, this tool helps students, cybersecurity professionals, and
        businesses learn how to protect their systems from potential threats without the risk of causing actual harm.
      </p>

      {/* Call to Action */}
      <div className="space-x-4 mb-8">
        <Link to="/about" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 text-lg">
          Learn More About the Project
        </Link>
        <Link to="/features" className="bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-900 text-lg">
          Explore Features
        </Link>
      </div>

      {/* Key Highlights Section */}
      <section className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-center mb-4">Key Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-200 p-4 rounded-full">
              <i className="fas fa-shield-alt text-3xl text-blue-600"></i>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Safe & Ethical Simulations</h3>
              <p className="text-lg">
                The toolkit ensures no actual attacks are launched, providing a safe environment for learning about DDoS attacks.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-green-200 p-4 rounded-full">
              <i className="fas fa-chart-line text-3xl text-green-600"></i>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Real-Time Visualizations</h3>
              <p className="text-lg">
                Visualize the effects of simulated DDoS attacks with real-time dashboards to monitor system load and traffic patterns.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-yellow-200 p-4 rounded-full">
              <i className="fas fa-users text-3xl text-yellow-600"></i>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Designed for Education</h3>
              <p className="text-lg">
                This toolkit is ideal for cybersecurity students, trainers, and professionals looking for hands-on experience.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-red-200 p-4 rounded-full">
              <i className="fas fa-cogs text-3xl text-red-600"></i>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Customizable Tools</h3>
              <p className="text-lg">
                Customize attack parameters, monitor system performance, and generate reports for better understanding and analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action for Engagement */}
      <div className="space-x-4">
        <p className="text-lg mb-4">
          Ready to dive into the world of DDoS simulations and enhance your cybersecurity skills? Start exploring now!
        </p>
        <Link to="/features" className="bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-900 text-lg">
          Get Started with Features
        </Link>
      </div>
    </div>
  );
};

export default Home;
