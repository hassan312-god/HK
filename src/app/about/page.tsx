import { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import About from '@/components/sections/About'

/**
 * Page À Propos - Section détaillée sur Hassan Bacri KEITA
 */
export const metadata: Metadata = {
  title: 'À Propos - Hassan Bacri KEITA',
  description: 'Découvrez le parcours de Hassan Bacri KEITA, développeur web et apprenti IT, spécialisé en administration système, réseaux et infrastructure.',
  keywords: ['à propos', 'parcours', 'développeur web', 'IT', 'administration système', 'réseaux', 'infrastructure'],
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-dark-void">
      {/* Section Hero spécifique à la page About */}
      <PageHero
        title="À Propos"
        subtitle="Mon Parcours"
        description="Découvrez mon parcours en développement web et ma formation en IT."
      />
      
      {/* Section À Propos détaillée */}
      <About />
      
      {/* Section Compétences - sera ajoutée */}
      {/* <Skills /> */}
      
      {/* Section Projets - sera ajoutée */}
      {/* <Projects /> */}
      
      {/* Section Services - sera ajoutée */}
      {/* <Services /> */}
      
      {/* Section Contact - sera ajoutée */}
      {/* <Contact /> */}
      
      {/* Footer - sera ajouté */}
      {/* <Footer /> */}
    </main>
  )
} 