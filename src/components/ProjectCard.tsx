
import React, { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export const ProjectCard = ({ title, description, imageUrl }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  
  // Play a subtle click sound when project is clicked
  const handleClick = () => {
    setIsClicked(true);
    // Create and play a click sound
    const clickSound = new Audio('/click.mp3');
    clickSound.volume = 0.2;
    clickSound.play().catch(e => console.error("Error playing sound:", e));
    
    // Reset after animation completes
    setTimeout(() => setIsClicked(false), 300);
  };
  
  return (
    <div 
      className={`project-card hover-scale ${isClicked ? 'scale-95' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
    >
      <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
        <img 
          src={imageUrl} 
          alt={title}
          className={`object-cover w-full h-full transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        {isHovered && (
          <div className="absolute inset-0 bg-primary/20 flex items-center justify-center animate-fade-in">
            <span className="text-white font-medium px-4 py-2 rounded-md bg-primary/50 backdrop-blur-sm">View Project</span>
          </div>
        )}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gradient">{title}</h3>
      <p className="text-muted">{description}</p>
    </div>
  );
};
