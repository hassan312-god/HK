'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { WEB_SKILLS, IT_SKILLS } from '@/lib/constants'
import Card from '@/components/ui/Card'
import Icon from '@/components/ui/Icon'

/**
 * Section Compétences avec grille de skills et progress bars
 * Palette Liquid Lava : progress bars en gradient, cards avec hover effects
 */
const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-dark-void">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-marigold mb-6">
            Mes Compétences
          </h2>
          <p className="text-lg text-dusty-grey max-w-3xl mx-auto">
            Expertise technique en développement web et formation en cybersécurité
          </p>
        </motion.div>

        {/* Compétences Web - Avancé */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-marigold mb-8 text-center">
            Développement Web (Avancé)
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WEB_SKILLS.map((category, categoryIndex) => (
              <Card key={category.category} className="border-t-4 border-liquid-lava">
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-marigold mb-2">
                    {category.category}
                  </h4>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Icon name={skill.icon as any} size={16} color="marigold" />
                          <span className="text-sm font-medium text-marigold">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs text-dusty-grey">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress bar */}
                      <div className="w-full bg-slate-grey rounded-full h-2">
                        <motion.div
                          className="h-2 bg-lava-gradient rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Compétences IT - En Formation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-marigold mb-8 text-center">
            IT & Infrastructure (En Formation)
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {IT_SKILLS.map((category, categoryIndex) => (
              <Card key={category.category} className="border-t-4 border-glount-lova">
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-marigold mb-2">
                    {category.category}
                  </h4>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Icon name={skill.icon as any} size={16} color="marigold" />
                          <span className="text-sm font-medium text-marigold">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs text-dusty-grey">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress bar avec gradient rouge */}
                      <div className="w-full bg-slate-grey rounded-full h-2">
                        <motion.div
                          className="h-2 rounded-full"
                          style={{
                            background: `linear-gradient(90deg, #F67011 0%, #873800 ${skill.level}%, transparent ${skill.level}%)`
                          }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Certifications et formations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-marigold mb-8 text-center">
              Certifications & Formations
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-liquid-lava">En Cours</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-liquid-lava rounded-full animate-pulse" />
                    <span className="text-dusty-grey">Certification CEH (Certified Ethical Hacker)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-liquid-lava rounded-full animate-pulse" />
                    <span className="text-dusty-grey">Formation OSCP (Offensive Security)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-liquid-lava rounded-full animate-pulse" />
                    <span className="text-dusty-grey">Certification CompTIA Security+</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-liquid-lava">Plateformes d'Entraînement</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Icon name="Terminal" size={16} color="liquid-lava" />
                    <span className="text-dusty-grey">HackTheBox - 50+ machines résolues</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Target" size={16} color="liquid-lava" />
                    <span className="text-dusty-grey">TryHackMe - 30+ modules complétés</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Shield" size={16} color="liquid-lava" />
                    <span className="text-dusty-grey">Portswigger Web Security Academy</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 