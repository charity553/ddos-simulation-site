import React from 'react';

const teamMembers = [
  {
    name: 'Serah Maina',
    role: 'Project Lead',
    skills: 'Python, Flask, Monitoring, Dash',
    image: '/assets/serah.jpg', // Replace with your actual images
  },
  {
    name: 'Charity Mulei',
    role: 'Monitoring & Testing',
    skills: 'psutil, Testing, Documentation',
    image: '/assets/charity.jpg',
  },
  {
    name: 'Valentine Momanyi',
    role: 'Data Visualization',
    skills: 'Dash/Streamlit, UI/UX, Python',
    image: '/assets/valentine.jpg',
  },
];

const Team = () => {
  return (
    <div className="px-6 py-12 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Meet the Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800">{member.name}</h2>
              <p className="text-blue-600 font-medium">{member.role}</p>
              <p className="text-sm text-gray-600 mt-2">{member.skills}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
