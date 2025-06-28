/**
 * Constantes du portfolio - Configuration centralisée
 * Palette Liquid Lava : Dark Void, Liquid Lava, Slate Grey, Glount Lova, Dusty Grey, Marigold
 */

// Navigation principale
export const NAVIGATION = [
  { name: 'Accueil', href: '/', icon: 'Home' },
  { name: 'À Propos', href: '/about', icon: 'User' },
  { name: 'Compétences', href: '/skills', icon: 'Code' },
  { name: 'Projets', href: '/projects', icon: 'FolderOpen' },
  { name: 'Services', href: '/services', icon: 'Briefcase' },
  { name: 'Contact', href: '/contact', icon: 'Mail' },
] as const

// Informations personnelles
export const PERSONAL_INFO = {
  name: 'Hassan Bacri KEITA',
  initials: 'HK',
  title: 'Développeur Web & Apprenti IT',
  email: 'hassan302025@outlook.fr',
  location: 'Dakar, Médina',
  bio: 'Développeur web passionné avec plusieurs années d\'expérience, je me spécialise dans la création de plateformes dynamiques et intuitives, tout en me formant activement en IT (systèmes, réseaux, infrastructure, sécurité). Ma vision : allier développement web moderne et compétences techniques en administration informatique pour concevoir des solutions complètes, performantes et sécurisées.',
  avatar: '/images/avatar.jpg',
} as const

// Compétences techniques - Développement Web (Avancé)
export const WEB_SKILLS = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML5', level: 95, icon: 'Code' },
      { name: 'CSS3', level: 90, icon: 'Css3' },
      { name: 'JavaScript', level: 92, icon: 'Javascript' },
      { name: 'TypeScript', level: 88, icon: 'Typescript' },
    ]
  },
  {
    category: 'Backend & BDD',
    skills: [
      { name: 'Supabase', level: 85, icon: 'Database' },
      { name: 'Firebase', level: 80, icon: 'Database' },
      { name: 'API REST', level: 88, icon: 'Api' },
      { name: 'Gestion de données', level: 85, icon: 'Database' },
    ]
  },
  {
    category: 'Projets Dynamiques',
    skills: [
      { name: 'Dashboards Admin', level: 90, icon: 'BarChart3' },
      { name: 'Interfaces Interactives', level: 88, icon: 'Smartphone' },
      { name: 'Sites Multi-niveaux', level: 85, icon: 'Layers' },
      { name: 'Responsive Design', level: 92, icon: 'Smartphone' },
    ]
  },
  {
    category: 'UI/UX Design',
    skills: [
      { name: 'Interfaces Modernes', level: 88, icon: 'Palette' },
      { name: 'Responsive Design', level: 92, icon: 'Smartphone' },
      { name: 'Icônes Personnalisées', level: 85, icon: 'Image' },
      { name: 'Tailwind CSS', level: 90, icon: 'Tailwind' },
    ]
  }
] as const

// Compétences techniques - IT (En Formation)
export const IT_SKILLS = [
  {
    category: 'Systèmes',
    skills: [
      { name: 'Linux', level: 70, icon: 'Terminal' },
      { name: 'Administration Système', level: 65, icon: 'Settings' },
      { name: 'Gestion des Services', level: 60, icon: 'Server' },
    ]
  },
  {
    category: 'Réseaux',
    skills: [
      { name: 'Bases Réseaux', level: 75, icon: 'Network' },
      { name: 'Configuration Réseau', level: 70, icon: 'Wifi' },
      { name: 'Troubleshooting', level: 65, icon: 'Search' },
    ]
  },
  {
    category: 'Sécurité & Cloud',
    skills: [
      { name: 'Sécurité Informatique', level: 70, icon: 'Shield' },
      { name: 'Cloud Computing', level: 65, icon: 'Cloud' },
      { name: 'Infrastructure', level: 60, icon: 'Server' },
    ]
  },
  {
    category: 'Systèmes Vocaux & IA',
    skills: [
      { name: 'Assistants Vocaux', level: 75, icon: 'Mic' },
      { name: 'Surveillance PC', level: 80, icon: 'Monitor' },
      { name: 'Intelligence Artificielle', level: 60, icon: 'Brain' },
    ]
  }
] as const

// Services Web
export const WEB_SERVICES = [
  {
    id: 'web-1',
    title: 'Développement Frontend',
    description: 'Création d\'interfaces utilisateur modernes et performantes avec HTML5, CSS3, JavaScript et TypeScript.',
    icon: 'Code',
    features: ['HTML5/CSS3', 'JavaScript/TypeScript', 'Responsive Design', 'UI/UX Moderne', 'Performance'],
    pricing: 'À partir de 250 000 CFA',
    pricingNote: 'Projet complet, délai 2-4 semaines'
  },
  {
    id: 'web-2',
    title: 'Applications Dynamiques',
    description: 'Développement d\'applications web complètes avec dashboards admin et interfaces interactives.',
    icon: 'BarChart3',
    features: ['Dashboards Admin', 'Interfaces Interactives', 'Supabase/Firebase', 'API REST', 'Gestion de données'],
    pricing: 'À partir de 500 000 CFA',
    pricingNote: 'Projet complet, délai 4-8 semaines'
  },
  {
    id: 'web-3',
    title: 'Sites Multi-niveaux',
    description: 'Création de sites web complexes avec plusieurs niveaux d\'accès et fonctionnalités avancées.',
    icon: 'Layers',
    features: ['Architecture Multi-niveaux', 'Gestion des rôles', 'Sécurité', 'Performance', 'Maintenance'],
    pricing: 'À partir de 400 000 CFA',
    pricingNote: 'Projet complet, délai 3-6 semaines'
  }
] as const

// Services IT
export const IT_SERVICES = [
  {
    id: 'it-1',
    title: 'Administration Système',
    description: 'Gestion et maintenance de systèmes Linux, configuration des services et optimisation des performances.',
    icon: 'Server',
    category: 'Systèmes',
    methodology: [
      'Audit de l\'infrastructure existante',
      'Installation et configuration Linux',
      'Gestion des services système',
      'Optimisation des performances',
      'Documentation technique'
    ],
    deliverables: ['Rapport d\'audit', 'Configuration système', 'Plan de maintenance', 'Formation utilisateur'],
    pricing: 'À partir de 300 000 CFA',
    pricingNote: 'Audit complet, délai 1-2 semaines'
  },
  {
    id: 'it-2',
    title: 'Configuration Réseau',
    description: 'Mise en place et configuration de réseaux, troubleshooting et optimisation de la connectivité.',
    icon: 'Network',
    category: 'Infrastructure',
    methodology: [
      'Analyse des besoins réseau',
      'Conception de l\'architecture',
      'Configuration des équipements',
      'Tests de connectivité',
      'Formation et support'
    ],
    deliverables: ['Schéma réseau', 'Configuration équipements', 'Tests de performance', 'Documentation'],
    pricing: 'À partir de 350 000 CFA',
    pricingNote: 'Configuration complète, délai 2-3 semaines'
  },
  {
    id: 'it-3',
    title: 'Sécurité Informatique',
    description: 'Mise en place de mesures de sécurité, audit de vulnérabilités et formation à la cybersécurité.',
    icon: 'Shield',
    category: 'Sécurité',
    methodology: [
      'Audit de sécurité',
      'Configuration firewall',
      'Mise en place VPN',
      'Formation utilisateurs',
      'Monitoring continu'
    ],
    deliverables: ['Rapport de sécurité', 'Configuration sécurisée', 'Plan de formation', 'Monitoring'],
    pricing: 'À partir de 400 000 CFA',
    pricingNote: 'Audit complet, délai 2-4 semaines'
  }
] as const

// Projets Web
export const WEB_PROJECTS = [
  {
    id: 'project-1',
    title: 'Dashboard Admin Moderne',
    description: 'Dashboard d\'administration complet avec gestion des utilisateurs, statistiques en temps réel et interface responsive.',
    image: '/images/projects/dashboard.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Supabase', 'Tailwind CSS'],
    github: 'https://github.com/votre-username/dashboard-admin',
    demo: 'https://dashboard-demo.vercel.app',
    features: ['Gestion utilisateurs', 'Statistiques temps réel', 'Interface responsive', 'API REST'],
    challenges: 'Optimisation des performances et gestion de grandes quantités de données',
  },
  {
    id: 'project-2',
    title: 'Site E-commerce Multi-niveaux',
    description: 'Plateforme e-commerce avec différents niveaux d\'accès (client, vendeur, admin) et gestion complète des produits.',
    image: '/images/projects/ecommerce.jpg',
    technologies: ['HTML5', 'CSS3', 'TypeScript', 'Firebase', 'Responsive Design'],
    github: 'https://github.com/votre-username/ecommerce-multi',
    demo: 'https://ecommerce-demo.vercel.app',
    features: ['Multi-niveaux d\'accès', 'Gestion produits', 'Paiements sécurisés', 'Dashboard vendeur'],
    challenges: 'Architecture complexe multi-niveaux et gestion des permissions',
  },
  {
    id: 'project-3',
    title: 'Interface Interactive PWA',
    description: 'Application web progressive avec fonctionnalités interactives, mode offline et synchronisation cloud.',
    image: '/images/projects/pwa.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Service Workers', 'Firebase'],
    github: 'https://github.com/votre-username/pwa-interactive',
    demo: 'https://pwa-demo.vercel.app',
    features: ['Mode offline', 'Synchronisation cloud', 'Interface interactive', 'Installation native'],
    challenges: 'Gestion de la synchronisation offline/online et optimisation des performances',
  }
] as const

// Projets IT
export const IT_PROJECTS = [
  {
    id: 'it-1',
    title: 'Configuration Serveur Linux',
    description: 'Mise en place et configuration complète d\'un serveur Linux avec services web, base de données et sécurité.',
    image: '/images/projects/linux-server.jpg',
    technologies: ['Linux', 'Apache/Nginx', 'MySQL', 'SSL/TLS', 'Firewall'],
    writeup: '/writeups/linux-server-setup.pdf',
    features: ['Configuration sécurisée', 'Optimisation performances', 'Sauvegarde automatique'],
    methodology: 'Best practices Linux Server Administration',
    status: 'Completed',
    vulnerabilities: ['Configuration par défaut', 'Ports ouverts', 'Mots de passe faibles'],
  },
  {
    id: 'it-2',
    title: 'Infrastructure Réseau',
    description: 'Conception et mise en place d\'une infrastructure réseau complète avec VLAN, routage et sécurité.',
    image: '/images/projects/network.jpg',
    technologies: ['Cisco', 'VLAN', 'Routage', 'Sécurité', 'Monitoring'],
    writeup: '/writeups/network-infrastructure.pdf',
    features: ['Architecture réseau', 'Configuration VLAN', 'Sécurité périmétrique'],
    methodology: 'Network Infrastructure Design & Implementation',
    status: 'In Progress',
    vulnerabilities: ['VLAN hopping', 'ARP spoofing', 'Man-in-the-middle'],
  },
  {
    id: 'it-3',
    title: 'Système de Surveillance PC',
    description: 'Développement d\'un système de surveillance et de contrôle à distance des postes de travail.',
    image: '/images/projects/monitoring.jpg',
    technologies: ['Python', 'Linux', 'Réseaux', 'Base de données', 'Interface Web'],
    writeup: '/writeups/pc-monitoring.pdf',
    features: ['Surveillance temps réel', 'Contrôle à distance', 'Rapports automatisés'],
    methodology: 'System Monitoring & Remote Management',
    status: 'Completed',
    vulnerabilities: ['Accès non autorisé', 'Interception de données', 'Privilege escalation'],
  }
] as const

// Services proposés
export const SERVICES = [
  {
    title: 'Développement d\'Applications Web',
    description: 'Création d\'applications web modernes, performantes et sécurisées avec les dernières technologies.',
    icon: 'Code',
    features: ['React/Next.js', 'TypeScript', 'API REST', 'Bases de données', 'Déploiement cloud'],
  },
  {
    title: 'Administration Système',
    description: 'Gestion et maintenance de serveurs Linux, configuration des services et optimisation des performances.',
    icon: 'Server',
    features: ['Linux Administration', 'Services Web', 'Base de données', 'Sauvegarde', 'Monitoring'],
  },
  {
    title: 'Configuration Réseau',
    description: 'Mise en place et configuration d\'infrastructures réseau avec VLAN, routage et sécurité.',
    icon: 'Network',
    features: ['Architecture réseau', 'Configuration équipements', 'VLAN', 'Sécurité', 'Troubleshooting'],
  },
  {
    title: 'Sécurité Informatique',
    description: 'Mise en place de mesures de sécurité, audit de vulnérabilités et formation à la cybersécurité.',
    icon: 'Shield',
    features: ['Audit de sécurité', 'Configuration firewall', 'VPN', 'Formation', 'Monitoring'],
  }
] as const

// Réseaux sociaux
export const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com/hassanbacri', icon: 'Github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/hassanbacri', icon: 'Linkedin' },
  { name: 'Email', url: 'mailto:hassan302025@outlook.fr', icon: 'Mail' },
] as const

// Configuration SEO
export const SEO_CONFIG = {
  title: 'Hassan Bacri KEITA - Développeur Web & Apprenti IT',
  description: 'Portfolio de Hassan Bacri KEITA, développeur web spécialisé en IT, combinant expertise technique et compétences en administration système pour créer des solutions robustes.',
  keywords: ['Hassan Bacri KEITA', 'développeur web', 'IT', 'administration système', 'React', 'Next.js', 'TypeScript', 'Linux', 'réseaux'],
  author: 'Hassan Bacri KEITA',
  url: 'https://hassanbacri.com',
  image: '/images/og-image.jpg',
} as const

// Configuration des animations
export const ANIMATION_CONFIG = {
  duration: 0.6,
  ease: [0.25, 0.46, 0.45, 0.94],
  stagger: 0.1,
} as const 