'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PERSONAL_INFO } from '@/lib/constants'
import Icon from '@/components/ui/Icon'

interface Message {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
  suggestions?: Suggestion[]
}

interface Suggestion {
  label: string
  value: string
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: `Salut ! Je suis HK, l'assistant virtuel de Hassan Bacri KEITA. Comment tu t'appelles ?`,
      isBot: true,
      timestamp: new Date(),
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [userName, setUserName] = useState<string | null>(null)
  const [step, setStep] = useState<'askName' | 'suggest' | 'normal'>('askName')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const botResponses = [
    "Je peux t'aider à en savoir plus sur mes compétences en développement web !",
    "Mes projets ? J'ai travaillé sur des dashboards admin, des sites e-commerce et des PWA.",
    "Pour me contacter, utilise le formulaire de contact ou envoie-moi un email directement.",
    "Je me spécialise en React, Next.js, TypeScript et je me forme actuellement en cybersécurité.",
    "Disponible pour des missions freelance en développement web et consultation IT !",
    "Tu veux voir mes projets ? Va dans la section 'Projets' pour découvrir mon travail.",
    "Mes compétences incluent le frontend, backend, et je me forme en administration système Linux.",
    "Pour une collaboration, n'hésite pas à me contacter via le formulaire ou LinkedIn !"
  ]

  const getBotResponse = (userText: string): string => {
    const text = userText.toLowerCase()
    if (/(salut|bonjour|coucou|hello)/.test(text)) {
      return "Bonjour ! Ravi de vous voir ici 😊 Je suis l'assistant de Hassan Bacri KEITA. Que puis-je faire pour vous ?"
    }
    if (/(cv|ça va|ca va|comment vas-tu|comment tu vas)/.test(text)) {
      return "Je vais très bien, merci ! Et vous ? N'hésitez pas à me demander des infos sur Hassan, ses compétences ou ses services."
    }
    if (/(service|propose|propositions|offre|aide|mission|freelance)/.test(text)) {
      return "Hassan propose des services en développement web (React, Next.js, TypeScript), création de sites, dashboards, et il se forme aussi en cybersécurité. Besoin d'un projet ou d'une consultation ?"
    }
    if (/(projet|portfolio|réalisation|travail|exemple)/.test(text)) {
      return "Vous pouvez découvrir les projets de Hassan dans la section 'Projets' du site. Il a réalisé des dashboards, des sites e-commerce, des PWA, etc."
    }
    if (/(contact|email|mail|joindre|message)/.test(text)) {
      return "Pour contacter Hassan, utilisez le formulaire de contact ou envoyez-lui un email à hassan302025@outlook.fr. Il vous répondra rapidement !"
    }
    if (/(merci|thanks|thx)/.test(text)) {
      return "Avec plaisir ! Si vous avez d'autres questions, je suis là pour vous aider."
    }
    // Réponse par défaut plus courtoise
    return "Je suis là pour vous renseigner sur Hassan Bacri KEITA, ses compétences, ses projets ou ses services. Posez-moi une question ou dites-moi ce que vous cherchez !"
  }

  const handleSendMessage = async (customText?: string) => {
    const textToSend = customText ?? inputValue
    if (!textToSend.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: textToSend,
      isBot: false,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    setTimeout(() => {
      // Étape 1 : Demande du prénom
      if (step === 'askName') {
        const name = textToSend.split(' ')[0].replace(/[^a-zA-ZÀ-ÿ\-']/g, '')
        setUserName(name)
        setStep('suggest')
        setMessages(prev => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            text: `Enchanté, ${name} ! Que veux-tu faire ? Voici quelques suggestions :`,
            isBot: true,
            timestamp: new Date(),
            suggestions: [
              { label: 'Découvrir mes services', value: 'services' },
              { label: 'Voir mes projets', value: 'projets' },
              { label: 'Me contacter', value: 'contact' },
            ]
          }
        ])
        setIsTyping(false)
        return
      }
      // Étape 2 : Suggestions
      if (step === 'suggest' && ['services', 'projets', 'contact'].includes(textToSend.toLowerCase())) {
        let botText = ''
        if (textToSend === 'services') {
          botText = `${userName}, Hassan propose des services en développement web (React, Next.js, TypeScript), création de sites, dashboards, et il se forme aussi en cybersécurité. Tu veux plus de détails ?`
        } else if (textToSend === 'projets') {
          botText = `${userName}, tu peux découvrir les projets de Hassan dans la section 'Projets' du site. Il a réalisé des dashboards, des sites e-commerce, des PWA, etc.`
        } else if (textToSend === 'contact') {
          botText = `${userName}, pour contacter Hassan, utilise le formulaire de contact ou envoie-lui un email à hassan302025@outlook.fr.`
        }
        setStep('normal')
        setMessages(prev => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            text: botText,
            isBot: true,
            timestamp: new Date(),
          }
        ])
        setIsTyping(false)
        return
      }
      // Étape normale : réponses classiques
      const botText = userName
        ? `${userName}, je suis là pour t'aider sur Hassan Bacri KEITA, ses compétences, ses projets ou ses services. Pose-moi une question ou choisis une suggestion !`
        : `Je suis là pour vous renseigner sur Hassan Bacri KEITA, ses compétences, ses projets ou ses services. Posez-moi une question !`
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          text: botText,
          isBot: true,
          timestamp: new Date(),
        }
      ])
      setIsTyping(false)
    }, 800 + Math.random() * 800)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  // Suggestions boutons
  const handleSuggestionClick = (value: string) => {
    handleSendMessage(value)
  }

  return (
    <>
      {/* Bouton flottant du bot */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-liquid-lava rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {/* Avatar du bot bien visible */}
        <img
          src="/avatar-bot.png"
          alt="Avatar Bot"
          className="w-14 h-14 rounded-full border-4 border-white shadow-lg object-cover bg-gray-200"
        />
        {/* Indicateur de disponibilité */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse" />
      </motion.button>

      {/* Fenêtre de chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 z-40 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
          >
            {/* Header du chat */}
            <div className="bg-gradient-to-r from-liquid-lava to-glount-lova p-4 text-white">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-liquid-lava to-glount-lova rounded-full flex items-center justify-center border-2 border-white shadow">
                  <img
                    src="/avatar-bot.png"
                    alt="Avatar Bot"
                    className="w-10 h-10 rounded-full object-cover bg-gray-200"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Assistant HK</h3>
                  <p className="text-xs opacity-90">En ligne</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="ml-auto p-1 hover:bg-white/20 rounded-full transition-colors"
                >
                  <Icon name="X" size={16} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="h-64 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-xs px-3 py-2 rounded-2xl ${
                      message.isBot
                        ? 'bg-gray-100 text-gray-800'
                        : 'bg-liquid-lava text-white'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    {/* Suggestions boutons */}
                    {message.suggestions && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {message.suggestions.map((s) => (
                          <button
                            key={s.value}
                            onClick={() => handleSuggestionClick(s.value)}
                            className="px-3 py-1 bg-liquid-lava text-white rounded-full text-xs font-semibold shadow hover:bg-glount-lova transition-colors border border-liquid-lava"
                            style={{ minWidth: 120 }}
                          >
                            {s.label}
                          </button>
                        ))}
                      </div>
                    )}
                    <p className="text-xs opacity-60 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}
              {/* Indicateur de frappe */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-100 text-gray-800 px-3 py-2 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2 items-center">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Tapez votre message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-liquid-lava text-sm"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim()}
                  className="w-10 h-10 bg-liquid-lava text-white rounded-full flex items-center justify-center hover:bg-glount-lova transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  title="Envoyer"
                >
                  <Icon name="Send" size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ChatBot 