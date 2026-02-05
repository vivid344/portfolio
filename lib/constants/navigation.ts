import {
  Briefcase,
  Home as HomeIcon,
  LucideIcon,
  School,
  UserRound,
} from "lucide-react";

export type NavLink = {
  href: string;
  icon: LucideIcon;
  title: string;
};

export const NAV_LINKS: NavLink[] = [
  {
    href: "/",
    icon: HomeIcon,
    title: "Home",
  },
  {
    href: "/about",
    icon: UserRound,
    title: "About",
  },
  {
    href: "/career",
    icon: School,
    title: "Career",
  },
  {
    href: "/works",
    icon: Briefcase,
    title: "Works",
  },
];
