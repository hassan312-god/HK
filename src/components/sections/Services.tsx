'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { WEB_SERVICES, IT_SERVICES } from '@/lib/constants'
import Card from '@/components/ui/Card'
import Icon from '@/components/ui/Icon'
import Button from '@/components/ui/Button'

/**
 * Section Services avec services web et pentesting
 * Palette Liquid Lava : cards avec hover effects, pricing, CTA buttons
 */
const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-dark-void">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-marigold mb-6">
            Mes Services
          </h2>
          <p className="text-lg text-dusty-grey max-w-3xl mx-auto">
            Solutions complètes en développement web sécurisé et tests d'intrusion
          </p>
        </motion.div>

        {/* Services Web */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-marigold mb-8 text-center">
            Développement Web
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WEB_SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:glow group text-center">
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 bg-lava-gradient rounded-full flex items-center justify-center">
                    <Icon name={service.icon as any} size={32} color="white" />
                  </div>
                  
                  {/* Contenu */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-marigold group-hover:text-liquid-lava transition-colors">
                      {service.title}
                    </h4>
                    
                    <p className="text-dusty-grey text-sm leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2">
                      <ul className="text-xs text-dusty-grey space-y-1">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center justify-center space-x-2">
                            <Icon name="Check" size={12} color="liquid-lava" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Pricing */}
                    <div className="pt-4">
                      <div className="text-2xl font-bold text-liquid-lava mb-2">
                        {service.pricing}
                      </div>
                      <p className="text-xs text-dusty-grey">
                        {service.pricingNote}
                      </p>
                    </div>
                    
                    {/* CTA */}
                    <Button
                      href="/contact"
                      variant="primary"
                      size="sm"
                      className="w-full"
                    >
                      <Icon name="ArrowRight" size={16} />
                      <span className="ml-2">Demander un devis</span>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services IT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-marigold mb-8 text-center">
            IT & Infrastructure
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {IT_SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-l-4 border-glount-lova hover:glow group">
                  {/* Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-glount-lova to-liquid-lava rounded-full flex items-center justify-center">
                      <Icon name={service.icon as any} size={24} color="white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-marigold group-hover:text-liquid-lava transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-sm text-liquid-lava font-medium">
                        {service.category}
                      </p>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-dusty-grey text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* Méthodologie */}
                  <div className="mb-6">
                    <h5 className="text-sm font-semibold text-marigold mb-3">Méthodologie :</h5>
                    <div className="space-y-2">
                      {service.methodology.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-liquid-lava rounded-full flex items-center justify-center">
                            <span className="text-xs font-bold text-white">{stepIndex + 1}</span>
                          </div>
                          <span className="text-xs text-dusty-grey">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Livrables */}
                  <div className="mb-6">
                    <h5 className="text-sm font-semibold text-marigold mb-3">Livrables :</h5>
                    <div className="flex flex-wrap gap-2">
                      {service.deliverables.map((deliverable) => (
                        <span
                          key={deliverable}
                          className="px-2 py-1 text-xs font-medium border border-glount-lova text-glount-lova rounded"
                        >
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Pricing et CTA */}
                  <div className="flex items-center justify-between pt-4">
                    <div>
                      <div className="text-xl font-bold text-liquid-lava">
                        {service.pricing}
                      </div>
                      <p className="text-xs text-dusty-grey">
                        {service.pricingNote}
                      </p>
                    </div>
                    <Button
                      href="/contact"
                      variant="primary"
                      size="sm"
                    >
                      <Icon name="Shield" size={16} />
                      <span className="ml-2">Audit Sécurité</span>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <Card className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-marigold mb-4">
              Besoin d'une Solution Personnalisée ?
            </h3>
            <p className="text-dusty-grey mb-6">
              Chaque projet est unique. Contactez-moi pour discuter de vos besoins spécifiques 
              et obtenir une solution sur mesure qui combine développement web et sécurité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
              >
                <Icon name="Mail" size={20} />
                <span className="ml-2">Discuter de votre projet</span>
              </Button>
              <Button
                href="/projects"
                variant="outline"
                size="lg"
              >
                <Icon name="FolderOpen" size={20} />
                <span className="ml-2">Voir mes réalisations</span>
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Services 