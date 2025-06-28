'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { CardProps } from '@/lib/types'
import { motion } from 'framer-motion'

/**
 * Composant Card réutilisable avec effets de hover et glow
 * Palette Liquid Lava : glassmorphism, hover effects, animations
 */
const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = true,
  glow = false,
}) => {
  const cardClasses = cn(
    'relative bg-slate-grey/80 backdrop-blur-sm border border-dusty-grey/20',
    'rounded-xl p-6 transition-all duration-300',
    'group',
    hover && [
      'hover:border-liquid-lava/50 hover:bg-slate-grey/90',
      'hover:shadow-lg hover:shadow-liquid-lava/10',
      'hover:transform hover:scale-[1.02]',
    ],
    glow && [
      'shadow-lg shadow-liquid-lava/20',
      'before:absolute before:inset-0 before:rounded-xl',
      'before:bg-gradient-to-r before:from-liquid-lava/20 before:via-transparent before:to-liquid-lava/20',
      'before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500',
    ],
    className
  )

  return (
    <motion.div
      className={cardClasses}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={hover ? { scale: 1.02 } : {}}
    >
      {children}
    </motion.div>
  )
}

export default Card 