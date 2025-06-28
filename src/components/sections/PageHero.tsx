'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { PERSONAL_INFO } from '@/lib/constants'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'

interface PageHeroProps {
  title: string
  subtitle: string
  description: string
  showCTA?: boolean
}

/**
 * Section Hero pour les pages autres que l'accueil
 * Palette Liquid Lava : design simplifié sans particules
 */
const PageHero: React.FC<PageHeroProps> = ({ 
  title, 
  subtitle, 
  description, 
  showCTA = false 
}) => {
  return (
    <section className="relative min-h-screen bg-dark-void flex items-center justify-center overflow-hidden">
      {/* Background avec gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-void via-slate-grey/20 to-dark-void" />
      
      {/* Formes géométriques décoratives */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-liquid-lava/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-glount-lova/10 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-24 h-24 bg-marigold/10 rounded-full blur-lg"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-liquid-lava/20 border border-liquid-lava/30 rounded-full text-liquid-lava text-sm font-medium mb-6"
          >
            <Icon name="User" size={16} />
            <span className="ml-2">{PERSONAL_INFO.name}</span>
          </motion.div>

          {/* Titre principal */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-marigold mb-6"
          >
            {title}
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-liquid-lava font-semibold mb-6"
          >
            {subtitle}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-dusty-grey max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            {description}
          </motion.p>

          {/* CTA Buttons (optionnel) */}
          {showCTA && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                href="/contact"
                variant="primary"
                size="lg"
              >
                <Icon name="Mail" size={20} />
                <span className="ml-2">Me Contacter</span>
              </Button>
              <Button
                href="/projects"
                variant="outline"
                size="lg"
              >
                <Icon name="FolderOpen" size={20} />
                <span className="ml-2">Voir mes Projets</span>
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-liquid-lava rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-liquid-lava rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default PageHero 