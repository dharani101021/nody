import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <div className="footer-logo">
            <span onClick={() => scrollToSection('home')}>Nody</span>
          </div>
          <p className="footer-description">
            Nody is an online learning platform that provides quality education
            for students worldwide. Our mission is to make education accessible to everyone.
          </p>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="icon-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="icon-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="icon-linkedin"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="icon-instagram"></i>
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><span onClick={() => scrollToSection('home')}>Home</span></li>
            <li><span onClick={() => scrollToSection('about')}>About Us</span></li>
            <li><span onClick={() => scrollToSection('services')}>Services</span></li>
            <li><span onClick={() => scrollToSection('contact')}>Contact</span></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Our Features</h3>
          <ul className="footer-links">
            <li><span onClick={() => scrollToSection('features')}>Web Development</span></li>
            <li><span onClick={() => scrollToSection('features')}>UI/UX Design</span></li>
            <li><span onClick={() => scrollToSection('features')}>App Development</span></li>
            <li><span onClick={() => scrollToSection('features')}>Digital Marketing</span></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact Us</h3>
          <ul className="footer-contact">
            <li>
              <i className="icon-location"></i>
              <span>123 Learning Street, Education City</span>
            </li>
            <li>
              <i className="icon-phone"></i>
              <span>+1 (555) 123-4567</span>
            </li>
            <li>
              <i className="icon-email"></i>
              <span>info@nody.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Nody. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;