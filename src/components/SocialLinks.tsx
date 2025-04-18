
import { Github, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { personalData } from "@/data/personal";

export const SocialLinks = () => {
  const socials = [
    {
      icon: Instagram,
      href: `https://instagram.com/${personalData.socialLinks.instagram}`,
      label: "Instagram",
    },
    {
      icon: Github,
      href: personalData.socialLinks.github,
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: personalData.socialLinks.linkedin,
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: `mailto:${personalData.socialLinks.email}`,
      label: "Email",
    },
    {
      icon: Phone,
      href: `tel:${personalData.socialLinks.phone}`,
      label: "Phone",
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
