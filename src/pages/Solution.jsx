// src/pages/ProblemSolution.jsx
import React from 'react';

const Solution = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4 text-center">Solution</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Proposed Solution</h2>
        <p className="mt-4 text-lg">
          This project proposes a Python-based DDoS simulation toolkit designed for educational and research purposes. Instead of 
          deploying real attacks, the system simulates DDoS behavior, such as traffic floods and resource stress, in a controlled 
          environment. The toolkit will help students, cybersecurity trainers, and small businesses better understand the impact 
          of DDoS attacks and how to mitigate them.
        </p>
      </section>
    </div>
  );
};

export default Solution;
