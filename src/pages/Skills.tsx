
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Code, PaintBucket, UserCheck } from "lucide-react";
import { personalData } from "@/data/personal";
import { VirtualAssistant } from "@/components/VirtualAssistant";

const SkillCategory = ({ 
  title, 
  icon, 
  skills, 
  color 
}: { 
  title: string; 
  icon: React.ReactNode; 
  skills: string[]; 
  color: string 
}) => {
  return (
    <div className={`glass-effect p-8 rounded-xl animate-enter ${color}`}>
      <div className="flex items-center gap-3 mb-6">
        {icon}
        <h2 className="text-2xl font-bold text-gradient">{title}</h2>
      </div>
      
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className="px-4 py-2 bg-primary/10 rounded-full text-primary transition-transform hover:scale-105"
            onClick={() => {
              // Haptic feedback
              if (navigator.vibrate) {
                navigator.vibrate(50);
              }
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const [activeSkillSet, setActiveSkillSet] = useState<string>("technical");
  
  // Sound effect for switching skill categories
  const playSwitchSound = () => {
    const switchSound = new Audio('/click.mp3');
    switchSound.volume = 0.2;
    switchSound.play().catch(e => console.error("Error playing sound:", e));
    
    // Haptic feedback
    if (navigator.vibrate) {
      navigator.vibrate([30, 20, 30]);
    }
  };
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Play entry sound
    const entrySound = new Audio('/swipe-sound.mp3');
    entrySound.volume = 0.2;
    entrySound.play().catch(e => console.error("Error playing sound:", e));
  }, []);
  
  return (
    <div className="min-h-screen max-w-6xl mx-auto px-6 py-12">
      {/* Back button */}
      <Link to="/" className="inline-flex items-center mb-8 text-primary hover:text-primary/80 transition-colors">
        <ArrowLeft className="mr-2" size={20} />
        <span>Back to Home</span>
      </Link>
      
      {/* Skills Header */}
      <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-12">My Skills</h1>
      
      {/* Skill Category Tabs */}
      <div className="flex justify-center gap-4 mb-12">
        <button 
          className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all ${
            activeSkillSet === "technical" 
              ? "bg-primary text-primary-foreground shadow-lg" 
              : "bg-primary/10 text-primary hover:bg-primary/20"
          }`}
          onClick={() => {
            setActiveSkillSet("technical");
            playSwitchSound();
          }}
        >
          <Code size={18} />
          <span>Technical</span>
        </button>
        
        <button 
          className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all ${
            activeSkillSet === "design" 
              ? "bg-primary text-primary-foreground shadow-lg" 
              : "bg-primary/10 text-primary hover:bg-primary/20"
          }`}
          onClick={() => {
            setActiveSkillSet("design");
            playSwitchSound();
          }}
        >
          <PaintBucket size={18} />
          <span>Design</span>
        </button>
        
        <button 
          className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all ${
            activeSkillSet === "soft" 
              ? "bg-primary text-primary-foreground shadow-lg" 
              : "bg-primary/10 text-primary hover:bg-primary/20"
          }`}
          onClick={() => {
            setActiveSkillSet("soft");
            playSwitchSound();
          }}
        >
          <UserCheck size={18} />
          <span>Soft Skills</span>
        </button>
      </div>
      
      {/* Skills Display */}
      <div className="grid gap-8 mb-16">
        {activeSkillSet === "technical" && (
          <SkillCategory 
            title="Technical Skills" 
            icon={<Code size={24} className="text-primary" />}
            skills={personalData.skills.technical}
            color="bg-gradient-to-br from-white/10 to-pastel-blue/10" 
          />
        )}
        
        {activeSkillSet === "design" && (
          <SkillCategory 
            title="Design Skills" 
            icon={<PaintBucket size={24} className="text-primary" />}
            skills={personalData.skills.design}
            color="bg-gradient-to-br from-white/10 to-pastel-purple/10" 
          />
        )}
        
        {activeSkillSet === "soft" && (
          <SkillCategory 
            title="Soft Skills" 
            icon={<UserCheck size={24} className="text-primary" />}
            skills={personalData.skills.soft}
            color="bg-gradient-to-br from-white/10 to-pastel-green/10" 
          />
        )}
      </div>
      
      <VirtualAssistant />
    </div>
  );
};

export default Skills;
