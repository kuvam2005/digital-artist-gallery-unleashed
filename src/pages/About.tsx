
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Code, Music, Dumbbell, Github, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { personalData } from "@/data/personal";

const About = () => {
  return (
    <div className="min-h-screen max-w-6xl mx-auto px-6 py-12 bg-background">
      <Link to="/" className="inline-flex items-center mb-8 text-primary hover:text-primary/80 transition-colors">
        <ArrowLeft className="mr-2" size={20} />
        <span>Back to Home</span>
      </Link>
      
      <div className="space-y-16">
        {/* About Header */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-8">About Me</h1>
          <p className="text-xl leading-relaxed text-muted">{personalData.introduction}</p>
        </div>
        
        {/* Interests & Hobbies */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-effect p-8 rounded-xl animate-enter">
            <h2 className="text-2xl font-bold text-gradient mb-6">Interests</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Code className="text-primary" />
                <span>Programming</span>
              </div>
              <div className="flex items-center gap-3">
                <Music className="text-primary" />
                <span>Singing</span>
              </div>
              <div className="flex items-center gap-3">
                <Dumbbell className="text-primary" />
                <span>Gym and Fitness</span>
              </div>
            </div>
          </div>
          
          <div className="glass-effect p-8 rounded-xl animate-enter">
            <h2 className="text-2xl font-bold text-gradient mb-6">Hobbies</h2>
            <ul className="space-y-3">
              {personalData.hobbies.map((hobby, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-3"></span>
                  <span>{hobby}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="glass-effect p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-gradient mb-6">Connect With Me</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a 
              href={personalData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-primary transition-colors"
            >
              <Github size={24} />
              <span>GitHub</span>
            </a>
            <a 
              href={`https://instagram.com/${personalData.socialLinks.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-primary transition-colors"
            >
              <Instagram size={24} />
              <span>Instagram</span>
            </a>
            <a 
              href={personalData.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
              <span>LinkedIn</span>
            </a>
            <a 
              href={`mailto:${personalData.socialLinks.email}`}
              className="flex items-center gap-3 hover:text-primary transition-colors"
            >
              <Mail size={24} />
              <span>Email</span>
            </a>
            <a 
              href={`tel:${personalData.socialLinks.phone}`}
              className="flex items-center gap-3 hover:text-primary transition-colors"
            >
              <Phone size={24} />
              <span>Phone</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
