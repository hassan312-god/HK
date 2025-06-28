'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { ButtonProps } from '@/lib/types'
import { motion } from 'framer-motion'

/**
 * Composant Button réutilisable avec variantes et animations
 * Palette Liquid Lava : gradients, hover effects, animations
 */
const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  href,
  target,
  rel,
  disabled = false,
  loading = false,
  type = 'button',
}) => {
  // Classes de base communes
  const baseClasses = cn(
    'inline-flex items-center justify-center font-medium transition-all duration-300',
    'focus:outline-none focus:ring-2 focus:ring-liquid-lava focus:ring-offset-2 focus:ring-offset-dark-void',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
    'relative overflow-hidden group',
    className
  )

  // Variantes de style
  const variantClasses = {
    primary: cn(
      'bg-lava-gradient text-marigold shadow-lg',
      'hover:shadow-xl hover:shadow-liquid-lava/25',
      'active:scale-95 transform',
      'before:absolute before:inset-0 before:bg-gradient-to-r before:from-liquid-lava/0 before:via-liquid-lava/20 before:to-liquid-lava/0',
      'before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700'
    ),
    secondary: cn(
      'bg-slate-grey text-marigold border border-liquid-lava',
      'hover:bg-liquid-lava hover:text-dark-void',
      'active:scale-95 transform'
    ),
    outline: cn(
      'bg-transparent text-marigold border-2 border-liquid-lava',
      'hover:bg-liquid-lava hover:text-dark-void',
      'active:scale-95 transform'
    ),
    ghost: cn(
      'bg-transparent text-dusty-grey',
      'hover:text-marigold hover:bg-slate-grey/50',
      'active:scale-95 transform'
    ),
  }

  // Tailles
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-6 py-2.5 text-base rounded-lg',
    lg: 'px-8 py-3 text-lg rounded-xl',
  }

  // Classes finales
  const buttonClasses = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size]
  )

  // Contenu du bouton avec loading state
  const buttonContent = (
    <>
      {loading && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="w-5 h-5 border-2 border-marigold border-t-transparent rounded-full animate-spin" />
        </motion.div>
      )}
      <span className={cn(loading && 'opacity-0')}>
        {children}
      </span>
    </>
  )

  // Rendu conditionnel : lien ou bouton
  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={buttonClasses}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
      >
        {buttonContent}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || loading}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {buttonContent}
    </motion.button>
  )
}

export default Button 