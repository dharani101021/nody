import React, { useState } from 'react';
import '../css/Features.css';

export default function Features() {
  // State to track which feature is active
  const [activeFeature, setActiveFeature] = useState(1);
  
  // Feature list data - shorter descriptions for more compact view
  const featuresList = [
    {
      id: 1,
      title: "Works With Existing Apps",
      description: "At solmen necessi a uniform grammatica pronuncition sommun plu paroles ma quande.",
      image: "src/assets/image1.png"
    },
    {
      id: 2,
      title: "Easy Email Marketing",
      description: "At solmen necessi a uniform grammatica pronuncition sommun plu paroles ma quande.",
      image: "src/assets/image2.png"
    },
    {
      id: 3,
      title: "Get Private Customers Feedback",
      description: "At solmen necessi a uniform grammatica pronuncition sommun plu paroles ma quande.",
      image: "src/assets/image3.png"
    },
  ];
  
  // Find the active feature
  const activeFeatureData = featuresList.find(feature => feature.id === activeFeature);

  return (
    <div className="features-container">
      <div className="features-header">
        <h2>Our Features</h2>
        <p>Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi commodi consequatur.</p>
      </div>
      
      <div className="features-content">
        <div className="features-left">
          <div className="features-image">
            <img 
              src={activeFeatureData.image} 
              alt={activeFeatureData.title}
            />
          </div>
        </div>
        
        <div className="features-right">
          {featuresList.map((feature) => (
            <div
              key={feature.id}
              className={`feature-item ${activeFeature === feature.id ? 'active' : ''}`}
              onClick={() => setActiveFeature(feature.id)}
            >
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <a href="#" className="more-info">More Information→</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}