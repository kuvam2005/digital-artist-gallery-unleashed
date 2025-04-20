
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mic, MicOff, HelpCircle } from 'lucide-react';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { featureInstructions } from '@/data/projects';

const VoiceNavigation = () => {
  const [isListening, setIsListening] = useState(false);
  const navigate = useNavigate();

  const handleVoiceCommand = (command: string) => {
    const normalizedCommand = command.toLowerCase();
    
    if (normalizedCommand.includes('home')) {
      navigate('/');
    } else if (normalizedCommand.includes('contact')) {
      navigate('/contact');
    } else if (normalizedCommand.includes('project')) {
      const projectId = extractProjectId(normalizedCommand);
      if (projectId) {
        navigate(`/project/${projectId}`);
      }
    }
  };

  const extractProjectId = (command: string) => {
    if (command.includes('stick hero')) return 'stick-hero';
    if (command.includes('riyaaz')) return 'riyaaz';
    if (command.includes('antelope')) return 'antelope-laser';
    return null;
  };

  const toggleListening = () => {
    if (!isListening && 'webkitSpeechRecognition' in window) {
      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onresult = (event: any) => {
        const command = event.results[0][0].transcript;
        handleVoiceCommand(command);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
      setIsListening(true);
      
      // Haptic feedback
      if (navigator.vibrate) {
        navigator.vibrate(50);
      }
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={toggleListening}
            className="fixed bottom-24 right-4 z-50 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition-all group"
            aria-label={isListening ? "Stop voice navigation" : "Start voice navigation"}
          >
            {isListening ? <MicOff size={24} /> : <Mic size={24} />}
          </button>
        </TooltipTrigger>
        <TooltipContent side="left" className="max-w-xs">
          <div className="space-y-2">
            <h3 className="font-bold">{featureInstructions.voiceNavigation.title}</h3>
            <p className="text-sm">{featureInstructions.voiceNavigation.description}</p>
            <ul className="text-xs space-y-1 list-disc pl-4">
              {featureInstructions.voiceNavigation.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ul>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default VoiceNavigation;
