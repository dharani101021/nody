import React, { useState } from 'react';
import '../css/services.css'; // Import the CSS file for styling

// Import SVG components
import { Headphones, Shield, Lock } from 'lucide-react';

export default function Services() {
  // State to track which card is being hovered
  const [hoveredCard, setHoveredCard] = useState(null);

  // Service card data
  const services = [
    {
      id: 1,
      title: "Awesome Support",
      description: "Omnicos directe al desirabilite de une nov lingua franca a refusa continuar payar custosi traductores.",
      icon: <Headphones size={48} />,
      bgColor: "#4763e0"
    },
    {
      id: 2,
      title: "Analytics Security",
      description: "Omnicos directe al desirabilite de une nov lingua franca a refusa continuar payar custosi traductores.",
      icon: <Shield size={48} />,
    },
    {
      id: 3,
      title: "Data Privacy",
      description: "Omnicos directe al desirabilite de une nov lingua franca a refusa continuar payar custosi traductores.",
      icon: <Lock size={48} />,
    },
  ];

  return (
    <div className="services-container">
      <div className="services-header">
        <h2>Our Services</h2>
        <p>Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi commodi consequatur.</p>
      </div>
      
      <div className="services-cards">
        {services.map((service) => (
          <div 
            key={service.id}
            className={`service-card ${hoveredCard === service.id ? 'hovered' : ''}`}

            onMouseEnter={() => setHoveredCard(service.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="service-icon">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="service-more">
              <span>More</span>
              <span className="arrow">→</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}