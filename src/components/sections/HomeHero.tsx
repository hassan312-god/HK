'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { PERSONAL_INFO } from '@/lib/constants'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'

/**
 * Section Hero pour la page d'accueil - Design spécial avec particles
 * Palette Liquid Lava : fond Dark Void, particles orange, titre Marigold avec glow
 */
const HomeHero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-void">
      {/* Background avec gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-void via-slate-grey/10 to-dark-void" />
      
      {/* Particles animées simplifiées */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-liquid-lava/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-glount-lova/10 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-24 h-24 bg-marigold/10 rounded-full blur-lg"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Formes géométriques */}
        <motion.div
          className="absolute top-32 left-20 w-16 h-16 border-2 border-liquid-lava/20 rounded-lg"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-32 right-20 w-12 h-12 bg-liquid-lava/10 rounded-full"
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.2, 1],
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge de statut */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-grey/50 backdrop-blur-sm rounded-full border border-liquid-lava/30 mb-8"
          >
            <div className="w-2 h-2 bg-liquid-lava rounded-full animate-pulse" />
            <span className="text-dusty-grey text-sm font-medium">
              Disponible pour missions freelance
            </span>
          </motion.div>

          {/* Titre principal */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-marigold mb-6"
            style={{
              textShadow: '0 0 30px rgba(246, 112, 17, 0.5), 0 0 60px rgba(246, 112, 17, 0.3)',
            }}
          >
            {PERSONAL_INFO.name}
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl sm:text-2xl lg:text-3xl text-liquid-lava font-semibold mb-8"
          >
            {PERSONAL_INFO.title}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-base sm:text-lg text-dusty-grey/80 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {PERSONAL_INFO.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              href="/projects"
              variant="primary"
              size="lg"
            >
              <Icon name="FolderOpen" size={20} />
              <span className="ml-2">Voir mes Projets</span>
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
            >
              <Icon name="Mail" size={20} />
              <span className="ml-2">Me Contacter</span>
            </Button>
          </motion.div>

          {/* Informations rapides */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-dusty-grey"
          >
            <div className="flex items-center space-x-2">
              <Icon name="MapPin" size={16} color="liquid-lava" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Mail" size={16} color="liquid-lava" />
              <span>{PERSONAL_INFO.email}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Code" size={16} color="liquid-lava" />
              <span>Développement Web & Pentesting</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
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

export default HomeHero 