
import { Github, Instagram, Linkedin } from "lucide-react";

export const SocialLinks = () => {
  const socials = [
    {
      icon: Instagram,
      href: "https://instagram.com/mavuk_str12",
      label: "Instagram",
    },
    {
      icon: Github,
      href: "https://github.com/kuvam2005",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/kuvam-kuvam",
      label: "LinkedIn",
    },
  ];

  return (
    <div className="flex gap-6">
      {socials.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-foreground transition-colors"
          aria-label={label}
        >
          <Icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
};
