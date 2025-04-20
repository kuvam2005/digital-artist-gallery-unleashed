export const projectsData = [
  {
    id: "stick-hero",
    title: "Stick Hero",
    tagline: "A challenging bridge-building game with precision mechanics",
    description: "Stick Hero is a challenging mobile game where players must create bridges of the perfect length to help their character cross between platforms. The game tests your timing and precision as you attempt to build bridges that are just the right length—too short and your character falls, too long and you'll miss your target.",
    imageUrl: "/lovable-uploads/f9b64ffa-1ce5-4755-9532-2834da0842b7.png",
    detailImageUrl: "/lovable-uploads/f9b64ffa-1ce5-4755-9532-2834da0842b7.png",
    technologies: ["Unity", "C#", "Mobile Development", "Game Design"],
    links: {
      github: "https://github.com/kuvam2005/StickHero"
    },
    features: [
      {
        title: "Precision Controls",
        description: "Simple tap mechanics with perfect timing requirements"
      },
      {
        title: "Progressive Difficulty",
        description: "Increasing challenge as platforms get further apart"
      },
      {
        title: "Score System",
        description: "Compete against yourself and friends"
      }
    ]
  },
  {
    id: "riyaaz",
    title: "Riyaaz",
    tagline: "Music practice assistant for dedicated musicians",
    description: "Riyaaz is a comprehensive music practice application designed to help musicians structure their practice sessions effectively. The app provides tools for tracking progress, setting goals, and maintaining consistency in daily practice routines.",
    imageUrl: "/lovable-uploads/0515ab83-0fd2-469f-95e3-10ab392b1ea5.png",
    detailImageUrl: "/lovable-uploads/0515ab83-0fd2-469f-95e3-10ab392b1ea5.png",
    technologies: ["React Native", "Firebase", "Audio Processing", "UI/UX Design"],
    links: {
      github: "https://github.com/Areeb22297/Riyaaz-FAE-group-project"
    },
    features: [
      {
        title: "Practice Routines",
        description: "Create and customize practice schedules"
      },
      {
        title: "Progress Tracking",
        description: "Visual metrics showing improvement over time"
      },
      {
        title: "Integrated Tools",
        description: "Built-in metronome & tuner"
      }
    ]
  },
  {
    id: "antelope-laser",
    title: "Antelope Laser Cutting Model",
    tagline: "Precision design work featuring intricate antelope patterns",
    description: "The Antelope Laser Cutting Model project showcases my work in precision design for laser cutting technology. I created intricate patterns based on antelope silhouettes and natural forms, developing designs that balance aesthetic beauty with technical requirements.",
    imageUrl: "/lovable-uploads/abc9be5f-21a2-433f-af6c-f9561fa3a99e.png",
    detailImageUrl: "/lovable-uploads/abc9be5f-21a2-433f-af6c-f9561fa3a99e.png",
    technologies: ["Adobe Illustrator", "CAD", "Laser Cutting", "Material Design"],
    links: {
      github: ""
    },
    features: [
      {
        title: "Precision Detailing",
        description: "Intricate patterns showcase modern laser cutting"
      },
      {
        title: "Layered Design",
        description: "Multiple interconnected layers create depth"
      },
      {
        title: "Material Exploration",
        description: "Experiments with different materials"
      }
    ]
  }
];

export const featureInstructions = {
  voiceNavigation: {
    title: "Voice Navigation",
    description: "Navigate through the portfolio using voice commands",
    instructions: [
      "Click the microphone icon in the bottom right corner",
      "Say 'Go to Home' to return to the main page",
      "Say 'Go to Contact' to navigate to contact section",
      "Say 'Open project Stick Hero' to view project details",
      "Say 'Open Riyaaz' to view the Riyaaz project"
    ],
    implementation: {
      libraries: [
        "Web Speech API for voice recognition",
        "React Router for navigation",
        "Lucide React for UI icons"
      ],
      features: [
        "Real-time voice command processing",
        "Haptic feedback on mobile devices",
        "Visual feedback during voice recognition",
        "Support for natural language variations"
      ]
    }
  },
  virtualAssistant: {
    title: "Virtual Assistant",
    description: "AI-powered assistant to help you explore the portfolio",
    instructions: [
      "Click the bot icon in the bottom right corner",
      "Read the assistant's suggestions and click on them",
      "Type 'search React' to find projects using React",
      "Type 'find Unity' to discover Unity-based projects",
      "Assistant provides contextual navigation suggestions"
    ],
    implementation: {
      libraries: [
        "React hooks for state management",
        "Web Audio API for sound effects",
        "React Router for navigation",
        "Lucide React for UI icons"
      ],
      features: [
        "Project search by technology",
        "Interactive suggestions",
        "Ambient sound effects",
        "Haptic feedback support",
        "Real-time conversation updates"
      ]
    }
  }
};
