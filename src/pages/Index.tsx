import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { SocialLinks } from "@/components/SocialLinks";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { VirtualAssistant } from "@/components/VirtualAssistant";
import { personalData } from "@/data/personal";
import { projectsData } from "@/data/projects";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowDown, Send, User, Code } from "lucide-react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import VoiceNavigation from "@/components/VoiceNavigation";

const Index = () => {
  const isMobile = useIsMobile();

  // Initialize background ambient sound
  useEffect(() => {
    const ambientAudio = new Audio('/ambient-background.mp3');
    ambientAudio.volume = 0.1;
    ambientAudio.loop = true;

    // User interaction is required to play audio
    const handleFirstInteraction = () => {
      ambientAudio.play().catch(e => console.error("Error playing ambient sound:", e));
      document.removeEventListener('click', handleFirstInteraction);
    };
    document.addEventListener('click', handleFirstInteraction);
    return () => {
      ambientAudio.pause();
      document.removeEventListener('click', handleFirstInteraction);
    };
  }, []);

  // Function to handle scroll to sections
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });

      // Play scroll sound
      const scrollSound = new Audio('/scroll-sound.mp3');
      scrollSound.volume = 0.2;
      scrollSound.play().catch(e => console.error("Error playing sound:", e));

      // Haptic feedback
      if (navigator.vibrate) {
        navigator.vibrate(40);
      }
    }
  };

  // Form submission with haptic feedback
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Play success sound
    const successSound = new Audio('/success-sound.mp3');
    successSound.volume = 0.3;
    successSound.play().catch(e => console.error("Error playing sound:", e));

    // Vibration for mobile (simulated haptic feedback)
    if (navigator.vibrate) {
      navigator.vibrate([100, 50, 100]);
    }

    // Show success message (in a real app, you'd handle form submission here)
    alert("Message sent successfully!");
  };

  return <div className="min-h-screen max-w-6xl mx-auto px-6 py-12 space-y-24">
      {/* Navigation Menu */}
      <header className="sticky top-0 z-50 glass-effect py-4 px-6 rounded-full mx-auto max-w-xl">
        <NavigationMenu className="mx-auto">
          <NavigationMenuList className="flex gap-1">
            <NavigationMenuItem>
              <Link to="/" className={navigationMenuTriggerStyle()}>
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/projects" className={navigationMenuTriggerStyle()}>
                Projects
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/about" className={navigationMenuTriggerStyle()}>
                About
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </header>

      {/* Hero Section with Profile Image */}
      <section id="hero" className="text-center space-y-6 min-h-[70vh] flex flex-col items-center justify-center">
        <div className="mb-8">
          <img src={personalData.profileImage} alt={personalData.name} className="w-48 h-48 rounded-full object-cover mx-auto shadow-xl animate-float" />
        </div>
        <div className="animate-float">
          <h1 className="text-6xl font-bold text-gradient">
            Hi! I'm {personalData.name}
          </h1>
        </div>
        <p className="text-2xl animate-pulse-subtle">
          {personalData.title}
        </p>
      </section>

      {/* Welcome Section */}
      <section id="welcome" className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-enter">
          <h2 className="text-4xl font-bold text-gradient">Welcome to my Portfolio</h2>
          <p className="text-muted text-lg">
            {personalData.introduction}
          </p>
          <Link to="/about" className="inline-block px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors">
            Learn More About Me
          </Link>
        </div>
        <div className="rounded-full overflow-hidden aspect-square bg-accent shadow-lg animate-float">
          {/* Add your profile image here */}
          <img alt="Kuvam" className="w-full h-full object-cover" src="/lovable-uploads/8a7f4996-e63f-4a3b-8e91-e9403c1a1ef4.jpg" />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="space-y-12">
        <h2 className="text-3xl font-bold text-gradient text-center">Projects</h2>
        <ProjectCarousel projects={projectsData} />
      </section>

      {/* Find Me Section */}
      <section id="find-me" className="space-y-8 text-center glass-effect py-12 rounded-xl">
        <h2 className="text-3xl font-bold text-gradient">Find Me</h2>
        <div className="flex justify-center">
          <SocialLinks />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="space-y-8">
        <h2 className="text-3xl font-bold text-gradient text-center">Contact</h2>
        <form className="max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>
          <div className="glass-effect p-1 rounded-lg">
            <input type="text" placeholder="Name" className="w-full p-3 rounded-lg bg-transparent text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" required />
          </div>
          
          <div className="glass-effect p-1 rounded-lg">
            <input type="email" placeholder="Email" className="w-full p-3 rounded-lg bg-transparent text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" required />
          </div>
          
          <div className="glass-effect p-1 rounded-lg">
            <textarea placeholder="Message" rows={4} className="w-full p-3 rounded-lg bg-transparent text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" required />
          </div>
          
          <button type="submit" className="w-full p-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
            <span>Send Message</span>
            <Send size={18} />
          </button>
        </form>
      </section>
      
      {/* Add Voice Navigation */}
      <VoiceNavigation />
      
      {/* Add Virtual Assistant */}
      <VirtualAssistant />
    </div>;
};

export default Index;
