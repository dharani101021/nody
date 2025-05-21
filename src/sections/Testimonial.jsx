import React, { useState, useEffect, useRef } from 'react';
import '../css/Testimonial.css';
import { Calendar } from 'lucide-react';
import { Clock4 } from 'lucide-react';

const Testimonial = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const scrollContainerRef = useRef(null);
  
  const testimonials = [
    {
      id: 1,
      quote: "Et harum quidem rerum facilis expedita distinctio nam libero tempore soluta nobis optio cumque.",
      name: "Bobby Kelly",
      position: "Graphic Designer, USA",
      avatar: "/src/assets/client1.jpg"
    },
    {
      id: 2,
      quote: "Et harum quidem rerum facilis expedita distinctio nam libero tempore soluta nobis optio cumque.",
      name: "Joshua Vargas",
      position: "Web Developer, USA",
      avatar: "/src/assets/client2.jpg"
    },
    {
      id: 3,
      quote: "Et harum quidem rerum facilis expedita distinctio nam libero tempore soluta nobis optio cumque.",
      name: "Sammie Lewis",
      position: "UI/UX Designer, USA",
      avatar: "/src/assets/client3.jpg"
    },
    {
      id: 4,
      quote: "Et harum quidem rerum facilis expedita distinctio nam libero tempore soluta nobis optio cumque.",
      name: "Sarah Levine",
      position: "PHP Developer, USA",
      avatar: "/src/assets/client4.jpg"
    }
  ];

  // News items data with unique images for each item
  const newsItems = [
    {
      id: 1,
      title: "The Big Event Conference",
      description: "At vero eos et accusamus et iusto dignissimos.",
      date: "07 Jan 2020",
      timeAgo: "15 min ago",
      image: "/src/assets/newsimg2.jpg"
    },
    {
      id: 2,
      title: "Best Family House For You",
      description: "At vero eos et accusamus et iusto dignissimos.",
      date: "07 Jan 2020",
      timeAgo: "20 min ago",
      image: "/src/assets/newsimg3.jpg"
    },
    {
      id: 3,
      title: "Business Meeting Places",
      description: "At vero eos et accusamus et iusto dignissimos.",
      date: "07 Jan 2020",
      timeAgo: "30 min ago",
      image: "/src/assets/newsimg4.jpg"
    }
  ];

  // Add a duplicate of the first testimonial for the continuous scroll effect
  const allTestimonials = [
    ...testimonials,
    { ...testimonials[0], id: 5 }, 
    { ...testimonials[1], id: 6} // Adding first testimonial again with a new ID
  ];

  // Function to get the visible testimonials based on active slide
  const getVisibleTestimonials = () => {
    switch(activeSlide) {
      case 1:
        return [1, 2, 3]; // First dot shows testimonials 1, 2, 3
      case 2:
        return [2, 3, 4]; // Second dot shows testimonials 2, 3, 4
      case 3:
        return [3, 4, 5]; // Third dot shows testimonials 3, 4, 5(1)
      case 4:
        return [4, 5, 6]; // Fourth dot shows testimonials 5(1), 1, 2
      default:
        return [1, 2, 3];
    }
  };

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  // Update the scroll position whenever the active slide changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      const firstVisibleId = getVisibleTestimonials()[0];
      const scrollIndex = allTestimonials.findIndex(t => t.id === firstVisibleId);
      
      if (scrollIndex !== -1) {
        const cardWidth = scrollContainerRef.current.querySelector('.testimonial-item').offsetWidth;
        const gap = 30; // gap between cards
        const scrollPosition = scrollIndex * (cardWidth + gap);
        
        scrollContainerRef.current.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [activeSlide]);

  return (
    <>
      {/* Testimonial Section */}
      <div className="testimonial-section">
        <div className="testimonial-container">
          <div className="testimonial-header">
            <h2>What Our Customers Say</h2>
            <p>
              Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi commodi consequatur.
            </p>
          </div>

          <div className="testimonial-carousel-container">
            <div 
              className="testimonial-cards" 
              ref={scrollContainerRef}
            >
              {allTestimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="testimonial-item"
                  data-id={testimonial.id}
                >
                  {/* Text container with box shadow */}
                  <div className="testimonial-text-container">
                    <div className="quote-mark">❝</div>
                    <p className="quote-text">{testimonial.quote}</p>
                  </div>
                  
                  {/* Author container without box shadow */}
                  <div className="testimonial-author">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="author-avatar"
                    />
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-position">{testimonial.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pagination-dots">
            {[1, 2, 3, 4].map((dot) => (
              <button
                key={dot}
                onClick={() => handleDotClick(dot)}
                className={`dot ${activeSlide === dot ? 'active' : ''}`}
                aria-label={`Go to slide ${dot}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* News Section */}
      <div className="news-section">
        <div className="news-container">
          <div className="news-header">
            <h2>Latest News</h2>
            <p>
              Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi commodi consequatur.
            </p>
          </div>

          <div className="news-content">
            <div className="news-featured">
              <img 
                src="/src/assets/newsimg1.jpg" 
                alt="Featured office workspace" 
                className="featured-image"
              />
            </div>
            
            <div className="news-list">
              {newsItems.map((item) => (
                <div key={item.id} className="news-item">
                  <div className="news-item-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="news-item-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="news-item-meta">
                      <span className="news-date">
                        <Calendar size={15}/> {item.date}
                      </span>
                      <span className="news-time">
                        <Clock4 size={15} /> {item.timeAgo}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;