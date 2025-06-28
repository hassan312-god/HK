import { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import Projects from '@/components/sections/Projects'

/**
 * Page Projets - Section détaillée sur les projets web et pentesting
 */
export const metadata: Metadata = {
  title: 'Projets - Hassan Bacri KEITA',
  description: 'Découvrez mes projets en développement web (dashboards, e-commerce, PWA) et en IT (administration système, infrastructure réseau, surveillance PC).',
  keywords: ['projets', 'développement web', 'IT', 'administration système', 'infrastructure réseau', 'surveillance PC'],
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-dark-void">
      {/* Section Hero spécifique à la page Projects */}
      <PageHero
        title="Mes Projets"
        subtitle="Développement Web & IT"
        description="Portfolio de projets combinant développement web moderne et solutions IT innovantes."
      />
      
      {/* Section À Propos - sera ajoutée */}
      {/* <About /> */}
      
      {/* Section Compétences - sera ajoutée */}
      {/* <Skills /> */}
      
      {/* Section Projets détaillée */}
      <Projects />
      
      {/* Section Services - sera ajoutée */}
      {/* <Services /> */}
      
      {/* Section Contact - sera ajoutée */}
      {/* <Contact /> */}
      
      {/* Footer - sera ajouté */}
      {/* <Footer /> */}
    </main>
  )
} 