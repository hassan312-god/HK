import { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import Services from '@/components/sections/Services'

/**
 * Page Services - Section détaillée sur les services web et pentesting
 */
export const metadata: Metadata = {
  title: 'Services - Hassan Bacri KEITA',
  description: 'Services de développement web et IT : applications web, administration système, configuration réseau, sécurité informatique.',
  keywords: ['services', 'développement web', 'IT', 'administration système', 'configuration réseau', 'sécurité informatique'],
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-dark-void">
      {/* Section Hero spécifique à la page Services */}
      <PageHero
        title="Mes Services"
        subtitle="Développement Web & IT"
        description="Solutions complètes combinant développement web moderne et expertise IT pour vos projets."
        showCTA={true}
      />
      
      {/* Section À Propos - sera ajoutée */}
      {/* <About /> */}
      
      {/* Section Compétences - sera ajoutée */}
      {/* <Skills /> */}
      
      {/* Section Projets - sera ajoutée */}
      {/* <Projects /> */}
      
      {/* Section Services détaillée */}
      <Services />
      
      {/* Section Contact - sera ajoutée */}
      {/* <Contact /> */}
      
      {/* Footer - sera ajouté */}
      {/* <Footer /> */}
    </main>
  )
} 