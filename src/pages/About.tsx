
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { SocialLinks } from "@/components/SocialLinks";
import { personalData } from "@/data/personal";
import { VirtualAssistant } from "@/components/VirtualAssistant";

const About = () => {
  useEffect(() => {
    // Play background ambiance when entering the page
    const ambianceAudio = new Audio('/ambient-background.mp3');
    ambianceAudio.volume = 0.05;
    ambianceAudio.loop = true;
    
    // User interaction is required to play audio
    const handleFirstInteraction = () => {
      ambianceAudio.play().catch(e => console.error("Error playing ambient sound:", e));
      document.removeEventListener('click', handleFirstInteraction);
    };
    
    document.addEventListener('click', handleFirstInteraction);
    
    return () => {
      ambianceAudio.pause();
      document.removeEventListener('click', handleFirstInteraction);
    };
  }, []);

  return (
    <div className="min-h-screen max-w-6xl mx-auto px-6 py-12">
      {/* Back button */}
      <Link to="/" className="inline-flex items-center mb-8 text-primary hover:text-primary/80 transition-colors">
        <ArrowLeft className="mr-2" size={20} />
        <span>Back to Home</span>
      </Link>
      
      {/* About Header */}
      <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-8">About Me</h1>
      
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6 animate-enter">
          <p className="text-xl leading-relaxed text-muted">{personalData.introduction}</p>
          
          <div className="flex justify-center md:justify-start">
            <SocialLinks />
          </div>
        </div>
        
        <div className="rounded-full overflow-hidden aspect-square bg-accent shadow-lg animate-float">
          <img src={personalData.profileImage} alt={personalData.name} className="w-full h-full object-cover" />
        </div>
      </div>
      
      {/* Interests & Hobbies */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="glass-effect p-8 rounded-xl animate-enter">
          <h2 className="text-2xl font-bold text-gradient mb-6">Interests</h2>
          <ul className="space-y-3">
            {personalData.interests.map((interest, index) => (
              <li key={index} className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-primary mr-3"></span>
                <span className="text-lg">{interest}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="glass-effect p-8 rounded-xl animate-enter">
          <h2 className="text-2xl font-bold text-gradient mb-6">Hobbies</h2>
          <ul className="space-y-3">
            {personalData.hobbies.map((hobby, index) => (
              <li key={index} className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-primary mr-3"></span>
                <span className="text-lg">{hobby}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <VirtualAssistant />
    </div>
  );
};

export default About;
