
import React, { useState } from 'react';
import { toast } from 'sonner';
import { Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Play success sound
    const successSound = new Audio('/success-sound.mp3');
    successSound.volume = 0.3;
    successSound.play().catch(e => console.error("Error playing sound:", e));
    
    // Haptic feedback
    if (navigator.vibrate) {
      navigator.vibrate([100, 50, 100]);
    }
    
    toast.success("Message sent successfully!");
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gradient mb-8">Get in Touch</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6 glass-effect p-8 rounded-xl">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:ring-2 focus:ring-primary/50"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:ring-2 focus:ring-primary/50"
            required
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:ring-2 focus:ring-primary/50"
            required
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
        >
          <span>Send Message</span>
          <Send size={18} />
        </button>
      </form>
    </div>
  );
};

export default Contact;
