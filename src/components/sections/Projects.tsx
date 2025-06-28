'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { WEB_PROJECTS, IT_PROJECTS } from '@/lib/constants'
import Card from '@/components/ui/Card'
import Icon from '@/components/ui/Icon'
import Button from '@/components/ui/Button'

/**
 * Section Projets avec projets web et pentesting
 * Palette Liquid Lava : cards avec hover effects, badges techno, liens GitHub/Demo
 */
const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-dark-void">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-marigold mb-6">
            Mes Projets
          </h2>
          <p className="text-lg text-dusty-grey max-w-3xl mx-auto">
            Découvrez mes réalisations en développement web et mes projets de pentesting
          </p>
        </motion.div>

        {/* Projets Web */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-marigold mb-8 text-center">
            Projets Web
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WEB_PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:glow group">
                  {/* Image du projet */}
                  <div className="relative h-48 bg-slate-grey rounded-lg mb-4 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-void/80" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-4xl font-bold text-liquid-lava">
                        {project.title.split(' ')[0]}
                      </div>
                    </div>
                  </div>
                  
                  {/* Contenu */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-marigold group-hover:text-liquid-lava transition-colors">
                      {project.title}
                    </h4>
                    
                    <p className="text-dusty-grey text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-medium border border-liquid-lava text-liquid-lava rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Features */}
                    <div className="space-y-2">
                      <h5 className="text-sm font-semibold text-marigold">Fonctionnalités :</h5>
                      <ul className="text-xs text-dusty-grey space-y-1">
                        {project.features.slice(0, 3).map((feature) => (
                          <li key={feature} className="flex items-center space-x-2">
                            <Icon name="Check" size={12} color="liquid-lava" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Défis techniques */}
                    <div className="p-3 bg-slate-grey/50 rounded-lg">
                      <h5 className="text-sm font-semibold text-marigold mb-1">Défis techniques :</h5>
                      <p className="text-xs text-dusty-grey">{project.challenges}</p>
                    </div>
                    
                    {/* Liens */}
                    <div className="flex space-x-3 pt-4">
                      <Button
                        href={project.github}
                        variant="outline"
                        size="sm"
                        className="flex-1"
                      >
                        <Icon name="Github" size={16} />
                        <span className="ml-2">GitHub</span>
                      </Button>
                      <Button
                        href={project.demo}
                        variant="primary"
                        size="sm"
                        className="flex-1"
                      >
                        <Icon name="ArrowRight" size={16} />
                        <span className="ml-2">Demo</span>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projets IT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-marigold mb-8 text-center">
            Projets IT & Infrastructure
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {IT_PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-l-4 border-glount-lova hover:glow group">
                  {/* Header avec status */}
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-marigold group-hover:text-liquid-lava transition-colors">
                      {project.title}
                    </h4>
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      project.status === 'Completed' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-liquid-lava/20 text-liquid-lava border border-liquid-lava/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  {/* Description */}
                  <p className="text-dusty-grey text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium border border-glount-lova text-glount-lova rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Vulnérabilités */}
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-marigold mb-2">Vulnérabilités identifiées :</h5>
                    <div className="flex flex-wrap gap-2">
                      {project.vulnerabilities.map((vuln) => (
                        <span
                          key={vuln}
                          className="px-2 py-1 text-xs font-medium bg-red-500/20 text-red-400 border border-red-500/30 rounded"
                        >
                          {vuln}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Méthodologie */}
                  <div className="p-3 bg-slate-grey/50 rounded-lg mb-4">
                    <h5 className="text-sm font-semibold text-marigold mb-1">Méthodologie :</h5>
                    <p className="text-xs text-dusty-grey">{project.methodology}</p>
                  </div>
                  
                  {/* Liens */}
                  <div className="flex space-x-3">
                    <Button
                      href={project.writeup}
                      variant="outline"
                      size="sm"
                      className="flex-1"
                    >
                      <Icon name="FileText" size={16} />
                      <span className="ml-2">Write-up</span>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 