'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { PERSONAL_INFO } from '@/lib/constants'
import Card from '@/components/ui/Card'
import Icon from '@/components/ui/Icon'

/**
 * Section À Propos détaillée avec timeline et informations personnelles
 * Palette Liquid Lava : timeline avec markers orange, photo avec border-gradient
 */
const About: React.FC = () => {
  const timeline = [
    {
      year: '2023 - Présent',
      title: 'Formation IT',
      description: 'Formation intensive en administration système, réseaux et infrastructure IT',
      icon: 'Server',
    },
    {
      year: '2021 - 2023',
      title: 'Développeur Web Senior',
      description: 'Développement d\'applications web complexes avec React/Next.js',
      icon: 'Code',
    },
    {
      year: '2019 - 2021',
      title: 'Développeur Full Stack',
      description: 'Création d\'applications complètes frontend/backend',
      icon: 'Database',
    },
    {
      year: '2018 - 2019',
      title: 'Début en Développement',
      description: 'Premiers projets web et apprentissage des technologies modernes',
      icon: 'BookOpen',
    },
  ]

  return (
    <section id="about" className="py-20 bg-dark-void">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-marigold mb-6">
            À Propos de Moi
          </h2>
          <p className="text-lg text-dusty-grey max-w-3xl mx-auto">
            Découvrez mon parcours, mes motivations et ma vision du développement web et de l'administration IT
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Photo et informations personnelles */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Photo avec border-gradient */}
            <div className="relative group">
              <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-liquid-lava to-glount-lova p-1">
                <div className="w-full h-full rounded-full bg-slate-grey flex items-center justify-center">
                  <div className="text-6xl font-bold text-liquid-lava">
                    {PERSONAL_INFO.initials}
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-liquid-lava/20 to-glount-lova/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Informations personnelles */}
            <Card className="text-center">
              <h3 className="text-2xl font-bold text-marigold mb-4">
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-liquid-lava font-medium mb-4">
                {PERSONAL_INFO.title}
              </p>
              <div className="space-y-3 text-dusty-grey">
                <div className="flex items-center justify-center space-x-2">
                  <Icon name="Mail" size={18} />
                  <span>{PERSONAL_INFO.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Icon name="MapPin" size={18} />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-marigold mb-8">Mon Parcours</h3>
            
            <div className="relative">
              {/* Ligne de timeline */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-glount-lova" />
              
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex items-start space-x-6 mb-8"
                >
                  {/* Marker */}
                  <div className="flex-shrink-0 w-12 h-12 bg-lava-gradient rounded-full flex items-center justify-center relative z-10">
                    <Icon name={item.icon as any} size={20} color="white" />
                  </div>
                  
                  {/* Contenu */}
                  <div className="flex-1">
                    <div className="text-liquid-lava font-semibold text-sm mb-1">
                      {item.year}
                    </div>
                    <h4 className="text-lg font-bold text-marigold mb-2">
                      {item.title}
                    </h4>
                    <p className="text-dusty-grey">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bio détaillée */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <Card className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-marigold mb-6 text-center">
              Ma Vision
            </h3>
            <div className="prose prose-invert max-w-none">
              <p className="text-dusty-grey leading-relaxed mb-6">
                {PERSONAL_INFO.bio}
              </p>
              <p className="text-dusty-grey leading-relaxed">
                Je crois fermement que la technologie doit être au service de l'utilisateur et de l'entreprise. 
                Mon approche combine une expertise technique solide en développement web avec une compréhension 
                approfondie des systèmes, réseaux et infrastructure IT pour créer des solutions complètes et performantes.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default About 