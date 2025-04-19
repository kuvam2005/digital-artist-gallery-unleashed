import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projectsData } from "@/data/projects";
import { useIsMobile } from "@/hooks/use-mobile";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState<any>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const foundProject = projectsData.find(p => p.id === projectId);
    if (foundProject) {
      setProject(foundProject);
      
      const entranceSound = new Audio('/swipe-sound.mp3');
      entranceSound.volume = 0.2;
      entranceSound.play().catch(e => console.error("Error playing sound:", e));
      
      window.scrollTo(0, 0);
    }
  }, [projectId]);
  
  const triggerHapticFeedback = () => {
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl font-bold text-gradient animate-pulse">Loading project...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen max-w-6xl mx-auto px-6 py-12">
      <Link 
        to="/" 
        className="inline-flex items-center mb-8 text-primary hover:text-primary/80 transition-colors"
        onClick={triggerHapticFeedback}
      >
        <ArrowLeft className="mr-2" size={20} />
        <span>Back to Portfolio</span>
      </Link>
      
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">{project.title}</h1>
        <p className="text-xl text-muted">{project.tagline}</p>
      </div>
      
      <div className="rounded-xl overflow-hidden mb-12 glass-effect p-2">
        <img 
          src={project.detailImageUrl} 
          alt={project.title} 
          className={`w-full rounded-lg ${project.id === 'riyaaz' ? 'object-contain' : 'object-cover'} aspect-video animate-float`} 
        />
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2 space-y-6 animate-enter">
          <h2 className="text-2xl font-bold mb-4 text-gradient">Overview</h2>
          <p className="text-lg text-muted leading-relaxed">
            {project.description}
          </p>
        </div>
        
        <div className="glass-effect p-6 rounded-xl h-fit">
          <h3 className="text-xl font-bold mb-4 text-gradient">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string, index: number) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                onClick={triggerHapticFeedback}
              >
                {tech}
              </span>
            ))}
          </div>
          
          {project.links && (
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-4 text-gradient">Links</h3>
              <div className="space-y-2">
                {project.links.github && (
                  <a 
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:text-primary/80 transition-colors"
                    onClick={triggerHapticFeedback}
                  >
                    <Github size={18} className="mr-2" />
                    <span>GitHub Repository</span>
                  </a>
                )}
                {project.links.live && (
                  <a 
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:text-primary/80 transition-colors"
                    onClick={triggerHapticFeedback}
                  >
                    <ExternalLink size={18} className="mr-2" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {project.features && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gradient">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.features.map((feature: any, index: number) => (
              <div 
                key={index} 
                className="glass-effect p-6 rounded-xl hover-scale"
                onClick={triggerHapticFeedback}
              >
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {project.screenshots && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gradient">Screenshots</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.screenshots.map((screenshot: any, index: number) => (
              <div key={index} className="rounded-xl overflow-hidden glass-effect p-2">
                <img 
                  src={screenshot.url} 
                  alt={screenshot.caption} 
                  className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  onClick={triggerHapticFeedback}
                />
                <p className="text-center mt-2 text-sm text-muted">{screenshot.caption}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
