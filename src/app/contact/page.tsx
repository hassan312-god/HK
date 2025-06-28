import PageHero from '@/components/sections/PageHero'
import Contact from '@/components/sections/Contact'

/**
 * Page Contact - Section détaillée avec formulaire et informations
 */
export default function ContactPage() {
  return (
    <>
      {/* Section Hero spécifique à la page Contact */}
      <PageHero
        title="Contactez-Moi"
        subtitle="Discutons de votre projet"
        description="Prêt à démarrer votre projet ? Que ce soit pour du développement web ou un audit de sécurité, je suis là pour vous accompagner. Contactez-moi pour discuter de vos besoins."
        showCTA={false}
      />
      
      {/* Section À Propos - sera ajoutée */}
      {/* <About /> */}
      
      {/* Section Compétences - sera ajoutée */}
      {/* <Skills /> */}
      
      {/* Section Projets - sera ajoutée */}
      {/* <Projects /> */}
      
      {/* Section Services - sera ajoutée */}
      {/* <Services /> */}
      
      {/* Section Contact détaillée */}
      <Contact />
      
      {/* Footer - sera ajouté */}
      {/* <Footer /> */}
    </>
  )
} 