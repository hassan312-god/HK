/**
 * Types TypeScript pour le portfolio
 * Définitions strictes pour tous les composants et données
 */

// Types de base
export type IconName = 
  | 'Home' | 'User' | 'Code' | 'FolderOpen' | 'Briefcase' | 'Mail'
  | 'React' | 'Nextjs' | 'Typescript' | 'Javascript' | 'Tailwind' | 'Sass' | 'Css3' | 'Smartphone'
  | 'Nodejs' | 'Api' | 'Database' | 'GitBranch' | 'Package' | 'Settings'
  | 'Search' | 'List' | 'Network' | 'Shield' | 'Lock' | 'Scan' | 'Bug' | 'Terminal'
  | 'FileText' | 'BookOpen' | 'Github' | 'Linkedin' | 'Twitter' | 'Target'
  | 'Users' | 'GraduationCap' | 'ChevronDown' | 'Menu' | 'X' | 'ArrowRight'
  | 'Phone' | 'MapPin' | 'Send' | 'Check' | 'AlertCircle' | 'Heart' | 'Clock';

// Navigation
export interface NavigationItem {
  name: string;
  href: string;
  icon: IconName;
}

// Informations personnelles
export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  location: string;
  bio: string;
  avatar: string;
}

// Compétences
export interface Skill {
  name: string;
  level: number;
  icon: IconName;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

// Projets Web
export interface WebProject {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  features: string[];
  challenges: string;
}

// Projets Pentesting
export interface PentestingProject {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  writeup: string;
  vulnerabilities: string[];
  methodology: string;
  status: 'Completed' | 'In Progress' | 'Planned';
}

// Services
export interface Service {
  title: string;
  description: string;
  icon: IconName;
  features: string[];
}

// Réseaux sociaux
export interface SocialLink {
  name: string;
  url: string;
  icon: IconName;
}

// Configuration SEO
export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  url: string;
  image: string;
}

// Configuration des animations
export interface AnimationConfig {
  duration: number;
  ease: number[];
  stagger: number;
}

// Props pour les composants
export interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export interface SkillCardProps {
  skill: Skill;
  className?: string;
}

export interface ProjectCardProps {
  project: WebProject | PentestingProject;
  variant: 'web' | 'pentesting';
  className?: string;
}

export interface ServiceCardProps {
  service: Service;
  className?: string;
}

// Formulaires
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface FormFieldProps {
  label: string;
  name: string;
  type: 'text' | 'email' | 'textarea';
  placeholder?: string;
  required?: boolean;
  error?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

// Animations
export interface AnimationVariants {
  hidden: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
  };
  visible: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
    transition?: {
      duration: number;
      ease: number[];
      delay?: number;
    };
  };
}

// Thème
export interface Theme {
  isDark: boolean;
  toggle: () => void;
}

// Intersection Observer
export interface UseInViewOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

// Performance
export interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

// Sécurité
export interface SecurityHeaders {
  'X-Frame-Options': string;
  'X-Content-Type-Options': string;
  'X-XSS-Protection': string;
  'Referrer-Policy': string;
  'Content-Security-Policy': string;
  'Strict-Transport-Security': string;
}

// API Response
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Pagination
export interface PaginationParams {
  page: number;
  limit: number;
  total: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: PaginationParams;
}

// Filtres
export interface ProjectFilters {
  category: 'all' | 'web' | 'pentesting';
  technologies: string[];
  status: 'all' | 'completed' | 'in-progress';
}

// Recherche
export interface SearchParams {
  query: string;
  filters: ProjectFilters;
  sortBy: 'date' | 'name' | 'category';
  sortOrder: 'asc' | 'desc';
}

// Analytics
export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, any>;
  timestamp: number;
}

// Notifications
export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  duration?: number;
}

// Modal
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

// Tooltip
export interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}

// Loading States
export interface LoadingState {
  isLoading: boolean;
  error: string | null;
  retry?: () => void;
}

// Error Boundary
export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

// Context
export interface AppContextType {
  theme: Theme;
  loading: LoadingState;
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp'>) => void;
  removeNotification: (id: string) => void;
} 