import { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import Skills from '@/components/sections/Skills'

export const metadata: Metadata = {
  title: 'Compétences - Hassan Bacri KEITA',
  description: 'Découvrez mes compétences en développement web (HTML5, CSS3, JavaScript, TypeScript) et en IT (Linux, réseaux, administration système, sécurité informatique).',
  keywords: ['compétences', 'développement web', 'IT', 'Linux', 'réseaux', 'administration système', 'sécurité informatique'],
}

/**
 * Page Compétences - Section détaillée sur les compétences techniques
 */
export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-dark-void">
      {/* Section Hero spécifique à la page Skills */}
      <PageHero
        title="Mes Compétences"
        subtitle="Développement Web & IT"
        description="Expertise en développement web moderne et compétences en administration système, réseaux et sécurité informatique."
      />
      
      {/* Section À Propos - sera ajoutée */}
      {/* <About /> */}
      
      {/* Section Compétences détaillée */}
      <Skills />
      
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