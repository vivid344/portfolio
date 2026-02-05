import {
  Facebook,
  Github,
  Instagram,
  LucideIcon,
  Twitter,
} from "lucide-react";

export type SocialLink = {
  name: string;
  href: string;
  icon: LucideIcon;
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/vivid344",
    icon: Facebook,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/vivid_344",
    icon: Twitter,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/vivid344",
    icon: Instagram,
  },
  {
    name: "GitHub",
    href: "https://github.com/vivid344",
    icon: Github,
  },
];
