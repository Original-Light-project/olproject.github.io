import type { LucideIcon } from "lucide-react";

export type NavigationItem = {
  label: string;
  href: string;
};

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type SystemItem = {
  id: string;
  title: string;
  category: string;
  description: string;
  href: string;
  tags: string[];
};

export type NewsItem = {
  id: string;
  title: string;
  type: "announcement" | "update" | "event" | "maintenance" | "devlog";
  date: string;
  excerpt: string;
  href: string;
};