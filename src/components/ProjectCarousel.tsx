
import React, { useRef } from 'react';
import { ProjectCard } from './ProjectCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
}

interface ProjectCarouselProps {
  projects: Project[];
}

export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
  const isMobile = useIsMobile();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const playSwipeSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(e => console.error("Error playing sound:", e));
    }
  };
  
  return (
    <div className="relative w-full">
      <audio ref={audioRef} src="/swipe-sound.mp3" preload="auto" />
      
      <Carousel
        className="w-full"
        onScrollStart={playSwipeSound}
      >
        <CarouselContent className="-ml-4">
          {projects.map((project, index) => (
            <CarouselItem 
              key={index} 
              className={`pl-4 ${isMobile ? 'basis-full' : 'basis-1/3'}`}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-12" />
        <CarouselNext className="hidden md:flex -right-12" />
      </Carousel>
      
      <div className="mt-4 flex justify-center gap-2">
        {projects.map((_, index) => (
          <span
            key={index}
            className="w-2 h-2 rounded-full bg-primary/40"
          />
        ))}
      </div>
    </div>
  );
};
