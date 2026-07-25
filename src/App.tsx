import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import BodyMap from './components/BodyMap';
import Specializations from './components/Specializations';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <BodyMap />
      <Specializations />
      <About />
      <Footer />
    </div>
  );
}

export default App;
