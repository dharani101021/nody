import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';

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
        <div className="section-content">
          <h2>About Us</h2>
          <p>Learn more about our mission, vision, and the team behind our success.</p>
          {/* Add more about content here */}
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="section">
        <div className="section-content">
          <h2>Our Services</h2>
          <p>Explore the wide range of services we offer to help you succeed.</p>
          {/* Add more services content here */}
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="section">
        <div className="section-content">
          <h2>Features</h2>
          <p>Discover the unique features that set our platform apart.</p>
          {/* Add more features content here */}
        </div>
      </section>
      
      {/* Project Section */}
      <section id="project" className="section">
        <div className="section-content">
          <h2>Our Projects</h2>
          <p>View our portfolio of successful projects and case studies.</p>
          {/* Add more project content here */}
        </div>
      </section>
      
      {/* Clients Section */}
      <section id="clients" className="section">
        <div className="section-content">
          <h2>Our Clients</h2>
          <p>See what our clients say about working with us.</p>
          {/* Add more clients content here */}
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="section-content">
          <h2>Contact Us</h2>
          <p>Reach out to us with any questions or inquiries.</p>
          {/* Add contact form or details here */}
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default App;