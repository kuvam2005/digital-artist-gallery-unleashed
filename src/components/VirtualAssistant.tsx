
import React, { useState, useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useNavigate } from 'react-router-dom';
import { Bot, X, Volume2, VolumeX, Info, Briefcase, Mail, Navigation, Clock } from 'lucide-react';

// Array of greetings and tips
const getMessages = (timeOfDay: string) => [
  `Hi there! ${timeOfDay === 'morning' ? 'Good morning!' : timeOfDay === 'afternoon' ? 'Good afternoon!' : 'Good evening!'} Welcome to Kuvam's portfolio!`,
  "Scroll down to see my amazing projects!",
  "Feel free to reach out through the contact form!",
  "Check out my Stick Hero project, it was challenging but fun!",
  "The Riyaaz app helps musicians practice effectively.",
  "My Antelope Lazer Cutting Model showcases precision design work.",
  "Click on any project card to see more details!",
  "Navigate to About to learn more about me.",
  "Visit the Skills page to see my technical abilities.",
];

// Navigation suggestions
const navigationSuggestions = [
  { text: "See my projects", action: "/", section: "projects" },
  { text: "Learn about me", action: "/about" },
  { text: "View my skills", action: "/skills" },
  { text: "Contact me", action: "/", section: "contact" },
];

// Ambient sound URLs
const ambientSounds = {
  typing: '/typing-sound.mp3',
  notification: '/notification.mp3',
};

export const VirtualAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isSoundOn, setIsSoundOn] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [timeOfDay, setTimeOfDay] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const notificationRef = useRef<HTMLAudioElement | null>(null);
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  // Determine time of day
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      setTimeOfDay('morning');
    } else if (hour >= 12 && hour < 18) {
      setTimeOfDay('afternoon');
    } else {
      setTimeOfDay('evening');
    }
  }, []);
  
  // Effect for cycling through messages
  useEffect(() => {
    if (!isOpen) return;
    
    let timeout: NodeJS.Timeout;
    
    const showNextMessage = () => {
      setIsTyping(true);
      const messages = getMessages(timeOfDay);
      const randomIndex = Math.floor(Math.random() * messages.length);
      let i = 0;
      const typingInterval = setInterval(() => {
        setCurrentMessage(messages[randomIndex].substring(0, i));
        i++;
        if (i > messages[randomIndex].length) {
          clearInterval(typingInterval);
          setIsTyping(false);
          
          // Play notification sound when message is complete
          if (isSoundOn && notificationRef.current) {
            notificationRef.current.play().catch(e => console.error("Error playing sound:", e));
          }
          
          // Show suggestions after a message completes
          setShowSuggestions(true);
          
          // Set timeout for next message
          timeout = setTimeout(() => {
            setShowSuggestions(false);
            showNextMessage();
          }, 12000);
        }
      }, 50);
      
      // Play typing sound
      if (isSoundOn && audioRef.current) {
        audioRef.current.play().catch(e => console.error("Error playing sound:", e));
      }
    };
    
    showNextMessage();
    
    return () => {
      clearTimeout(timeout);
    };
  }, [isOpen, isSoundOn, timeOfDay]);
  
  // Toggle sound
  const toggleSound = () => {
    setIsSoundOn(!isSoundOn);
    
    // Haptic feedback
    if (navigator.vibrate) {
      navigator.vibrate(30);
    }
  };
  
  // Handle navigation suggestion click
  const handleSuggestionClick = (action: string, section?: string) => {
    // Haptic feedback
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
    
    // Play click sound
    const clickSound = new Audio('/click.mp3');
    clickSound.volume = 0.2;
    clickSound.play().catch(e => console.error("Error playing sound:", e));
    
    // Navigate to the route
    navigate(action);
    
    // If there's a section, scroll to it after a short delay
    if (section) {
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    
    // Close the assistant after navigation
    setIsOpen(false);
  };
  
  // Assistant position based on screen size
  const assistantPosition = isMobile 
    ? "fixed bottom-20 right-4" 
    : "fixed bottom-8 right-8";
  
  return (
    <>
      {/* Audio elements for sounds */}
      <audio ref={audioRef} src={ambientSounds.typing} preload="auto" />
      <audio ref={notificationRef} src={ambientSounds.notification} preload="auto" />
      
      {/* Assistant toggle button */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className={`${assistantPosition} z-50 bg-primary text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform`}
        aria-label="Toggle virtual assistant"
      >
        <Bot size={24} />
      </button>
      
      {/* Assistant dialog */}
      {isOpen && (
        <div className={`${assistantPosition} -translate-y-16 z-40 w-64 sm:w-80 glass-effect rounded-xl p-4 animate-slide-in`}>
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <Bot size={18} className="text-primary" />
              <h3 className="font-medium text-foreground">Assistant</h3>
              <span className="text-xs px-2 py-0.5 bg-primary/20 text-primary rounded-full">
                {timeOfDay === 'morning' ? '🌅' : timeOfDay === 'afternoon' ? '☀️' : '🌙'}
              </span>
            </div>
            <div className="flex gap-2">
              <button onClick={toggleSound} className="text-muted hover:text-primary transition-colors p-1">
                {isSoundOn ? <Volume2 size={16} /> : <VolumeX size={16} />}
              </button>
              <button onClick={() => setIsOpen(false)} className="text-muted hover:text-primary transition-colors p-1">
                <X size={16} />
              </button>
            </div>
          </div>
          <div className="bg-white/50 rounded-lg p-3 min-h-[80px] flex items-center">
            <p className="text-foreground">{currentMessage}{isTyping && "▋"}</p>
          </div>
          
          {/* Navigation Suggestions */}
          {showSuggestions && (
            <div className="mt-3 space-y-2">
              <p className="text-xs text-muted">I can help you navigate:</p>
              <div className="grid grid-cols-2 gap-2">
                {navigationSuggestions.map((suggestion, index) => (
                  <button 
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion.action, suggestion.section)}
                    className="px-3 py-2 text-xs bg-primary/10 hover:bg-primary/20 text-primary rounded-lg flex items-center gap-1 transition-colors"
                  >
                    {index === 0 ? <Briefcase size={12} /> : 
                     index === 1 ? <Info size={12} /> : 
                     index === 2 ? <Navigation size={12} /> : 
                     <Mail size={12} />}
                    <span>{suggestion.text}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {/* Time indicator */}
          <div className="mt-3 text-xs text-muted flex items-center justify-end">
            <Clock size={12} className="mr-1" />
            <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          </div>
        </div>
      )}
    </>
  );
};
