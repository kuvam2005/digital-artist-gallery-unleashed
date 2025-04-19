
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Search } from "lucide-react";
import { projectsData } from "@/data/projects";

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredProjects = projectsData.filter(project =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen max-w-6xl mx-auto px-6 py-12">
      <Link to="/" className="inline-flex items-center mb-8 text-primary hover:text-primary/80 transition-colors">
        <ArrowLeft className="mr-2" size={20} />
        <span>Back to Home</span>
      </Link>
      
      <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-8">My Projects</h1>
      
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
        <input
          type="text"
          placeholder="Search projects..."
          className="w-full pl-10 pr-4 py-3 rounded-lg bg-card border border-border focus:outline-none focus:border-primary transition-colors"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <Link 
            key={project.id}
            to={`/project/${project.id}`}
            className="project-card hover:translate-y-[-4px] transition-all"
          >
            <div className="aspect-video mb-4 rounded-lg overflow-hidden">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-muted line-clamp-2">{project.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
