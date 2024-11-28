import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Contact from './components/Contact';
import FloatingCupcakes from './components/animations/FloatingCupcakes';
import Chatbot from './components/Chatbot/Chatbot';

function App() {
  return (
    <div className="min-h-screen">
      <FloatingCupcakes />
      <Navbar />
      <Hero />
      <Products />
      <Contact />
      <Chatbot />
    </div>
  );
}

export default App;