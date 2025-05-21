import React from 'react';
import '../css/Project.css';

export default function Project() {
  const projects = [
    {
      id: 1,
      title: "Professional Designer",
      subtitle: "UI/UX Designer",
      imagePath: "/assets/projectimg1.jpg"
    },
    {
      id: 2,
      title: "Product Designer",
      subtitle: "Web Designer",
      imagePath: "/assets/projectimg2.jpg"
    },
    {
      id: 3,
      title: "Design Development",
      subtitle: "PHP Developer",
      imagePath: "/assets/projectimg3.jpg"
    },
    {
      id: 4,
      title: "Product Designer",
      subtitle: "React Developer",
      imagePath: "/assets/projectimg5.jpg"
    },
    {
      id: 5,
      title: "Design Development",
      subtitle: "UI/UX Designer",
      imagePath: "/assets/projectimg4.jpg"
    },
    {
      id: 6,
      title: "Graphic Development",
      subtitle: "Web Designer",
      imagePath: "/assets/projectimg6.jpg"
    }
  ];

  return (
    <div className="project-container">
      <div className="project-header">
        <h2>Our Latest Project</h2>
        <p>
          Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit
          laboriosam nisi commodi consequatur.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image-container">
              <img 
                src={project.imagePath} 
                alt={project.title} 
                className="project-image"
              />
              <div className="project-overlay">
                <div className="eye-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
