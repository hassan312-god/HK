'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { IconName } from '@/lib/types'
import * as LucideIcons from 'lucide-react'

/**
 * Composant Icon qui utilise Lucide React
 * Palette Liquid Lava : couleur Marigold par défaut, Liquid Lava au hover
 */
interface IconProps {
  name: IconName
  size?: number
  className?: string
  color?: 'marigold' | 'liquid-lava' | 'dusty-grey' | 'white'
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  className,
  color = 'marigold',
}) => {
  // Mapping des noms d'icônes vers les composants Lucide
  const iconMap: Record<IconName, keyof typeof LucideIcons> = {
    // Navigation
    Home: 'Home',
    User: 'User',
    Code: 'Code',
    FolderOpen: 'FolderOpen',
    Briefcase: 'Briefcase',
    Mail: 'Mail',
    
    // Technologies Web
    React: 'Atom',
    Nextjs: 'ArrowRight',
    Typescript: 'FileCode',
    Javascript: 'FileCode',
    Tailwind: 'Palette',
    Sass: 'FileCode',
    Css3: 'FileCode',
    Smartphone: 'Smartphone',
    Nodejs: 'Server',
    Api: 'Zap',
    Database: 'Database',
    GitBranch: 'GitBranch',
    Package: 'Package',
    Settings: 'Settings',
    
    // Pentesting
    Search: 'Search',
    List: 'List',
    Network: 'Network',
    Shield: 'Shield',
    Lock: 'Lock',
    Scan: 'Scan',
    Bug: 'Bug',
    Terminal: 'Terminal',
    FileText: 'FileText',
    BookOpen: 'BookOpen',
    
    // Social
    Github: 'Github',
    Linkedin: 'Linkedin',
    Twitter: 'Twitter',
    Target: 'Target',
    
    // UI
    Users: 'Users',
    GraduationCap: 'GraduationCap',
    ChevronDown: 'ChevronDown',
    Menu: 'Menu',
    X: 'X',
    ArrowRight: 'ArrowRight',
    Phone: 'Phone',
    MapPin: 'MapPin',
    Send: 'Send',
    Check: 'Check',
    AlertCircle: 'AlertCircle',
    Heart: 'Heart',
    Clock: 'Clock',
  }

  // Couleurs selon la palette Liquid Lava
  const colorClasses = {
    marigold: 'text-marigold group-hover:text-liquid-lava transition-colors duration-300',
    'liquid-lava': 'text-liquid-lava',
    'dusty-grey': 'text-dusty-grey',
    white: 'text-white',
  }

  const IconComponent = LucideIcons[iconMap[name]] as React.ComponentType<{ size?: number; className?: string }>

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in Lucide React`)
    return null
  }

  return (
    <IconComponent
      size={size}
      className={cn(colorClasses[color], className)}
    />
  )
}

export default Icon 