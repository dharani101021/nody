import React from 'react';  
import '../css/Contact.css';  // Importing CSS for styling
import { MessageCircle } from 'lucide-react';
// JSX Structure
const ContactPage = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi commodi consequatur.</p>
      </div>
      
      <div className="contact-content">
        <div className="contact-image-section">
          <div className="illustration-container">
            <img src="/assets/contactimg.png" alt="Customer support illustration" />
          </div>
          <h2>Are You Facing Any Problem..?</h2>
          <p>It va esser tam simplic quam Occidental in fact it va esser Occidental angles quam un skeptic cambridge es.</p>
          <button className="chat-button">
            <span className="chat-icon"><MessageCircle /></span>
            Start Live Chat
          </button>
          <p className="contact-alternative">Or you can contact at</p>
          <div className="contact-info">
            <div className="email-info">Email: Youremailid@gmail.com</div>
            <div className="phone-info">Phone: (001) 1234 567 890</div>
          </div>
        </div>
        
        <div className="contact-form-section">
          <h2>Get in Touch</h2>
          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Enter your name..." />
              </div>
              <div className="form-group">
                <label>Email address</label>
                <input type="email" placeholder="Enter your email..." />
              </div>
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input type="text" placeholder="Enter Subject..." />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Enter message..."></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;