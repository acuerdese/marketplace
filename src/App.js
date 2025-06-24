import React from 'react';
import { motion } from 'framer-motion';
import './App.css';

const advantages = [
  {
    title: 'Component-Based Architecture',
    description: 'React’s reusable components make code modular, easier to maintain, and scalable.',
  },
  {
    title: 'Virtual DOM',
    description: 'The Virtual DOM optimizes updates, ensuring fast rendering and better performance.',
  },
  {
    title: 'Declarative Syntax',
    description: 'React’s declarative approach simplifies UI development with predictable code.',
  },
  {
    title: 'Rich Ecosystem',
    description: 'A vast ecosystem of libraries like Framer Motion enhances React’s capabilities.',
  },
  {
    title: 'Strong Community',
    description: 'A large community provides extensive resources, tutorials, and support.',
  },
];

function App() {
  return (
    <div className="App">
      <header>
        <h1>Why Use React?</h1>
        <p>Discover the advantages of React with animated examples.</p>
      </header>
      <main>
        <div className="card-container">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: '0px 8px 16px rgba(0,0,0,0.2)' }}
            >
              <h2>{advantage.title}</h2>
              <p>{advantage.description}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
