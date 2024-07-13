import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';

const App = () => {
  return (
    <div className="relative bg-gray-800">
      <Header/>
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
