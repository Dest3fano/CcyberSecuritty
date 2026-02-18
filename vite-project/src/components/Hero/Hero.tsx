import { memo } from 'react';
import type { FC } from 'react'

const Hero: FC = () => {
  // Define tags for skills display
  const skillTags = [
    'Developer',
    'Security Expert',
    'Problem Solver'
  ];

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-container">
        {/* Left side content column */}
        <div className="hero-content">
          <h1 className="hero-title" id="hero-heading">
            Modern systems. <span className="accent">Built secure</span> from day one.
          </h1>
          
          <p className="hero-description">
            Specializing in secure architecture, defensive coding practices, and modern development standards.
          </p>
          
          <div className="hero-buttons">
            <a href="#projects" className="hero-button primary">View Projects</a>
            <a href="#contact" className="hero-button">Contact Me</a>
          </div>
        </div>
        
        {/* Right side image column */}
        <div className="hero-image-container">
          <div className="hero-image-circle">
            <div 
              className="hero-image-placeholder"
              role="img"
              aria-label="Profile image placeholder"
            >
              <span>Your Image</span>
            </div>
            <div className="hero-image-glow" aria-hidden="true"></div>
          </div>
          
          <div className="hero-tag-container">
            {skillTags.map((tag, index) => (
              <span key={`tag-${index}`} className="hero-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Export memoized component to prevent unnecessary re-renders
export default memo(Hero);
