
import React, { useState, useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Bot, X, Volume2, VolumeX } from 'lucide-react';

// Array of greetings and tips
const messages = [
  "Hi there! Welcome to Kuvam's portfolio!",
  "Scroll down to see my amazing projects!",
  "Feel free to reach out through the contact form!",
  "Check out my Stick Hero project, it was challenging but fun!",
  "The Riyaaz app helps musicians practice effectively.",
  "My Antelope Lazer Cutting Model showcases precision design work.",
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
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const notificationRef = useRef<HTMLAudioElement | null>(null);
  const isMobile = useIsMobile();
  
  // Effect for cycling through messages
  useEffect(() => {
    if (!isOpen) return;
    
    let timeout: NodeJS.Timeout;
    
    const showNextMessage = () => {
      setIsTyping(true);
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
          
          // Set timeout for next message
          timeout = setTimeout(showNextMessage, 8000);
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
  }, [isOpen, isSoundOn]);
  
  // Toggle sound
  const toggleSound = () => {
    setIsSoundOn(!isSoundOn);
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
            <h3 className="font-medium text-foreground">Assistant</h3>
            <div className="flex gap-2">
              <button onClick={toggleSound} className="text-muted hover:text-primary transition-colors">
                {isSoundOn ? <Volume2 size={18} /> : <VolumeX size={18} />}
              </button>
              <button onClick={() => setIsOpen(false)} className="text-muted hover:text-primary transition-colors">
                <X size={18} />
              </button>
            </div>
          </div>
          <div className="bg-white/50 rounded-lg p-3 min-h-[80px] flex items-center">
            <p className="text-foreground">{currentMessage}{isTyping && "▋"}</p>
          </div>
        </div>
      )}
    </>
  );
};
