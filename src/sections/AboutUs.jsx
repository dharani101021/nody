import React from 'react';
import '../css/AboutUs.css';
import productDevelopmentImg from '/assets/img-1.png';
import marketingProductImg from '/assets/img-2.png';

export default function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-us-header">
        <h1>About Us</h1>
        <p className="about-us-description">
          Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit
          laboriosam nisi commodi consequatur.
        </p>
      </div>

      <div className="about-us-features">
        <div className="features-text">
          <h2>
            Productive &<br />
            Customizable For<br />
            Developers
          </h2>
          <p>
            Quis autem vel eum iure reprehenderit qui in ea
            voluptate velit esse quam nihil atque corrupti
            molestiae.
          </p>

          <div className="feature-items">
            <div className="feature-item">
              <span className="feature-icon">⬚</span>
              <span>Marketing program activities</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">⬚</span>
              <span>Customization product</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">⬚</span>
              <span>At vero eos accusamus iusto</span>
            </div>
          </div>

          <a href="#" className="more-info-link">
            More Information →
          </a>
        </div>

        <div className="product-cards">
          <div className="product-card">
            <div className="product-image-container">
              <img 
                src={productDevelopmentImg} 
                alt="Product Development Dashboard" 
                className="product-image"
              />
            </div>
            <div className="product-info">
              <span className="product-category">DEVELOPMENT</span>
              <h3>Product Development</h3>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit
                aspernatur aut odit aut fugit sed quia
                consequuntur magni.
              </p>
              <a href="#" className="read-more-link">
                Read More →
              </a>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image-container">
              <img 
                src={marketingProductImg} 
                alt="Marketing Product Dashboard" 
                className="product-image"
              />
            </div>
            <div className="product-info">
              <span className="product-category">MARKETING</span>
              <h3>Marketing Product</h3>
              <p>
                Temporibus autem quibusdam a officiis debitis
                aut rerum necessitatibus saepe eveniet ut et
                voluptates repudiandae.
              </p>
              <a href="#" className="read-more-link">
                Read More →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}