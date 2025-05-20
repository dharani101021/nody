import React from 'react';
import 'file:///C:/Users/DHARANI%20DHARAN/OneDrive/Documents/GitHub/nody/src/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="hero-container">
        <div className="hero-content">
          <h1>Hello,</h1>
          <h2>We Help You To Boost Your Business</h2>
          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione sequinescunt.</p>
          <div className="hero-buttons">
            <a  className="btn-primary">Get Started →</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="src\assets\business.png" alt="Business partnership illustration" />
        </div>
      </div>
    </section>
  );
};

export default Hero;