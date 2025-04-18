
interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export const ProjectCard = ({ title, description, imageUrl }: ProjectCardProps) => {
  return (
    <div className="project-card">
      <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
        <img 
          src={imageUrl} 
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted">{description}</p>
    </div>
  );
};
