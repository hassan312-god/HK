'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/lib/constants'
import Card from '@/components/ui/Card'
import Icon from '@/components/ui/Icon'
import Button from '@/components/ui/Button'

/**
 * Section Contact avec formulaire et informations
 * Palette Liquid Lava : form avec validation, social links, contact info
 */
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailto = `mailto:hassan302025@outlook.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Nom: ${name}\nEmail: ${email}\n\n${message}`
    )}`;
    window.location.href = mailto;
  }

  const contactInfo = [
    {
      icon: 'Mail',
      title: 'Email',
      value: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`,
      color: 'liquid-lava'
    },
    {
      icon: 'MapPin',
      title: 'Localisation',
      value: PERSONAL_INFO.location,
      href: '#',
      color: 'marigold'
    },
    {
      icon: 'Clock',
      title: 'Horaires de Disponibilité',
      value: 'Lun - Ven: 9h - 18h\nSam: 10h - 16h',
      href: '#',
      color: 'glount-lova'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-dark-void">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-marigold mb-6">
            Contactez-Moi
          </h2>
          <p className="text-lg text-dusty-grey max-w-3xl mx-auto">
            Prêt à démarrer votre projet ? Discutons de vos besoins et trouvons la solution parfaite.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-marigold mb-6">
                Parlons de votre projet
              </h3>
              <p className="text-dusty-grey leading-relaxed mb-8">
                Que vous ayez besoin d'une application web moderne, d'un audit de sécurité, 
                ou d'une solution complète, je suis là pour vous accompagner. 
                N'hésitez pas à me contacter pour discuter de vos besoins.
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <Card className="p-6 hover:glow group">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-${info.color} rounded-full flex items-center justify-center`}>
                        <Icon name={info.icon as any} size={24} color="white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-marigold">
                          {info.title}
                        </h4>
                        <a
                          href={info.href}
                          className="text-dusty-grey hover:text-liquid-lava transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <h4 className="text-lg font-semibold text-marigold mb-4">
                Suivez-moi
              </h4>
              <div className="flex space-x-4">
                {SOCIAL_LINKS.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="w-12 h-12 bg-slate-grey hover:bg-liquid-lava rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Icon name={social.icon as any} size={20} color="marigold" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-marigold mb-6">
                Envoyez-moi un message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-marigold mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-grey border border-dusty-grey/30 rounded-lg focus:border-liquid-lava focus:outline-none text-dusty-grey placeholder-dusty-grey/50"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-marigold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-grey border border-dusty-grey/30 rounded-lg focus:border-liquid-lava focus:outline-none text-dusty-grey placeholder-dusty-grey/50"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-marigold mb-2">
                    Sujet *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-grey border border-dusty-grey/30 rounded-lg focus:border-liquid-lava focus:outline-none text-dusty-grey"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="web-development">Développement Web</option>
                    <option value="pentesting">Test d'Intrusion</option>
                    <option value="consulting">Consultation</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-marigold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-grey border border-dusty-grey/30 rounded-lg focus:border-liquid-lava focus:outline-none text-dusty-grey placeholder-dusty-grey/50 resize-none"
                    placeholder="Décrivez votre projet ou votre demande..."
                  />
                </div>
                
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  <Icon name="Send" size={20} />
                  <span className="ml-2">Envoyer le message</span>
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 