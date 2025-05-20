import React, { useState, useEffect } from 'react';
import '../css/Clients.css';

const TestimonialSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  // Define all testimonials
  const testimonials = [
    {
      quote: "Et harum quidem rerum facilis expedita distinctio nam libero tempore soluta nobis optio cumque.",
      name: "Joshua Vargas",
      position: "Web Developer, USA",
      avatar: "/api/placeholder/50/50"
    },
    {
      quote: "Et harum quidem rerum facilis expedita distinctio nam libero tempore soluta nobis optio cumque.",
      name: "Sammie Lewis",
      position: "UI/UX Designer, USA",
      avatar: "/api/placeholder/50/50"
    },
    {
      quote: "Et harum quidem rerum facilis expedita distinctio nam libero tempore soluta nobis optio cumque.",
      name: "Sarah Levine",
      position: "PHP Developer, USA",
      avatar: "/api/placeholder/50/50"
    },
    {
      quote: "Et harum quidem rerum facilis expedita distinctio nam libero tempore soluta nobis optio cumque.",
      name: "Bobby Kelly",
      position: "Graphic Designer, USA",
      avatar: "/api/placeholder/50/50"
    }
  ];

  // Group testimonials into slides of 3
  const slides = [];
  for (let i = 0; i < testimonials.length; i += 3) {
    slides.push(testimonials.slice(i, Math.min(i + 3, testimonials.length)));
  }

  // If the last slide has fewer than 3 testimonials, add from the beginning
  const lastSlide = slides[slides.length - 1];
  if (lastSlide.length < 3) {
    for (let i = 0; i < 3 - lastSlide.length; i++) {
      lastSlide.push(testimonials[i]);
    }
  }

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prevSlide => (prevSlide + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  // Handle manual navigation
  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="testimonial-section">
      <div className="testimonial-container">
        {/* Header section */}
        <div className="testimonial-header">
          <h2>What Our Customers Say</h2>
          <p>
            Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit
            laboriosam nisi commodi consequatur.
          </p>
        </div>
        
        {/* Slider container */}
        <div className="testimonial-slider">
          <div 
            className="testimonial-track"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {slides.map((slide, slideIndex) => (
              <div key={slideIndex} className="testimonial-slide">
                <div className="testimonial-grid">
                  {slide.map((testimonial, testimonialIndex) => (
                    <div key={testimonialIndex} className="testimonial-item">
                      <div className="testimonial-content">
                        <div className="testimonial-quote">❞</div>
                        <p className="testimonial-text">
                          {testimonial.quote}
                        </p>
                        <div className="testimonial-author">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name}
                            className="testimonial-avatar"
                          />
                          <h4 className="testimonial-name">{testimonial.name}</h4>
                          <p className="testimonial-position">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation dots */}
        <div className="testimonial-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`testimonial-dot ${activeSlide === index ? 'active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;