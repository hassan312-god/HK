'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter, usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { NAVIGATION, PERSONAL_INFO } from '@/lib/constants'
import { IconName } from '@/lib/types'
import Icon from '@/components/ui/Icon'
import Button from '@/components/ui/Button'

/**
 * Header avec navigation sticky et menu hamburger responsive
 * Palette Liquid Lava : effet blur, bordure Glount Lova, animations orange
 */
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  // Gestion du scroll pour l'effet sticky
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Navigation avec Next.js router
  const handleNavClick = (href: string) => {
    router.push(href)
    setIsMenuOpen(false)
  }

  // Classes du header selon le scroll
  const headerClasses = cn(
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
    'border-b border-transparent',
    isScrolled && [
      'bg-dark-void/80 backdrop-blur-md border-b border-glount-lova/20',
      'shadow-lg shadow-liquid-lava/10',
    ]
  )

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2 cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => router.push('/')}
          >
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-lava-gradient rounded-lg flex items-center justify-center">
              <Icon name="Code" size={20} color="white" />
            </div>
            <span className="text-xl lg:text-2xl font-bold text-marigold">
              {PERSONAL_INFO.initials}
            </span>
          </motion.div>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center space-x-1">
            {NAVIGATION.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    'relative px-4 py-2 rounded-lg text-dusty-grey hover:text-marigold',
                    'transition-all duration-300 group',
                    'flex items-center space-x-2',
                    pathname === item.href && [
                      'text-marigold',
                      'bg-slate-grey/50 border border-liquid-lava/30',
                    ]
                  )}
                >
                  <Icon name={item.icon as IconName} size={18} />
                  <span className="font-medium">{item.name}</span>
                  
                  {/* Indicateur de section active */}
                  {pathname === item.href && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-lava-gradient rounded-full"
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              </motion.div>
            ))}
          </nav>

          {/* CTA Desktop */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              href="/contact"
              variant="primary"
              size="md"
              onClick={() => handleNavClick('/contact')}
            >
              Me contacter
            </Button>
          </motion.div>

          {/* Menu Hamburger Mobile */}
          <motion.button
            className="lg:hidden p-2 rounded-lg text-marigold hover:bg-slate-grey/50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon name="X" size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon name="Menu" size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Menu Mobile */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="py-4 space-y-2 border-t border-dusty-grey/20">
                {NAVIGATION.map((item, index) => (
                  <motion.button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      'w-full text-left px-4 py-3 rounded-lg text-dusty-grey hover:text-marigold',
                      'hover:bg-slate-grey/50 transition-all duration-300',
                      'flex items-center space-x-3',
                      pathname === item.href && [
                        'text-marigold bg-slate-grey/50 border-l-4 border-liquid-lava',
                      ]
                    )}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Icon name={item.icon as IconName} size={20} />
                    <span className="font-medium">{item.name}</span>
                  </motion.button>
                ))}
                
                {/* CTA Mobile */}
                <motion.div
                  className="pt-4 border-t border-dusty-grey/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <Button
                    href="/contact"
                    variant="primary"
                    size="md"
                    className="w-full"
                    onClick={() => handleNavClick('/contact')}
                  >
                    Me contacter
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header 