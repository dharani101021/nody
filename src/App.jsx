import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import AboutUs from './sections/AboutUs';
import Services from './sections/Services';
import Project from './sections/Project';
import Features from './sections/Features';
import Clients from './sections/Testimonial';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      {/* Home Section */}
      <section id="home" className="section">
        <Hero/>
      </section>
      
      {/* About Us Section */}
      <section id="about" className="section">
        <AboutUs/>
      </section>
      
      {/* Services Section */}
      <section id="services" className="section">
        <Services/>
      </section>
      
      {/* Features Section */}
      <section id="features" className="section">
        <Features/>  
      </section>
      
      {/* Project Section */}
      <section id="project" className="section">
        <Project/>
      </section>
      
      {/* Clients Section */}
      <section id="clients" className="section">
        <Clients/>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="section">
        <Contact/>  
      </section>
      
      <Footer />
    </div>
  );
}

export default App;