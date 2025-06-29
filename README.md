# Portfolio Développeur Web & Apprenti IT

Portfolio moderne et professionnel suivant les standards de 2025, mettant en valeur les compétences en développement web et la formation en cours en pentesting.

## 🎯 Objectif

Ce portfolio raconte l'histoire d'un développeur technique qui évolue vers la sécurité, capable de construire ET de protéger. L'interface inspire confiance, professionnalisme et expertise technique avancée.

## 🛠 Stack Technique

- **Framework** : Next.js 14+ (App Router)
- **Language** : TypeScript strict
- **Styling** : Tailwind CSS + Configuration personnalisée
- **Composants** : React 18+ avec hooks modernes
- **Icons** : Lucide React
- **Animations** : Framer Motion
- **SEO** : Next.js metadata API
- **Performance** : Image optimization, lazy loading

### Palette de Couleurs "Liquid Lava"

- **Dark Void** : #16151A - Arrière-plan principal
- **Liquid Lava** : #F67011 - Accent principal, CTA
- **Slate Grey** : #262626 - Cartes, sections secondaires
- **Glount Lova** : #873800 - Hover states, bordures actives
- **Dusty Grey** : #878787 - Texte secondaire, icônes
- **Marigold** : #FFE4D0 - Texte sur fond sombre, highlights

## 📐 Structure du Projet

```
src/
├── app/
│   ├── layout.tsx          # Layout principal avec SEO
│   ├── page.tsx            # Page d'accueil
│   └── globals.css         # Styles globaux + variables CSS
├── components/
│   ├── ui/                 # Composants réutilisables
│   │   ├── Button.tsx      # Bouton avec variantes
│   │   ├── Card.tsx        # Carte avec effets hover
│   │   └── Icon.tsx        # Icônes Lucide React
│   ├── sections/           # Sections du portfolio
│   │   └── Hero.tsx        # Section Hero avec particles
│   └── layout/             # Composants de layout
│       └── Header.tsx      # Navigation sticky
└── lib/
    ├── utils.ts            # Fonctions utilitaires
    ├── constants.ts        # Constantes du portfolio
    └── types.ts            # Types TypeScript
```

## 🚀 Installation et Développement

### Prérequis

- Node.js 18+ 
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone <votre-repo>
cd portfolio

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

### Scripts Disponibles

```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # Vérification du code
npm run type-check   # Vérification TypeScript
```

## 🎨 Fonctionnalités

### ✅ Implémentées

- [x] **Header/Navigation** : Sticky avec effet blur, menu hamburger responsive
- [x] **Hero Section** : Particles animées, geometric shapes, CTA principaux
- [x] **Palette Liquid Lava** : Configuration Tailwind personnalisée
- [x] **Composants UI** : Button, Card, Icon réutilisables
- [x] **Animations** : Framer Motion avec transitions orange/noir
- [x] **SEO** : Métadonnées optimisées, Schema.org, Open Graph
- [x] **Sécurité** : Headers de sécurisation, CSP, validation
- [x] **Performance** : Lazy loading, optimisations Next.js
- [x] **Responsive** : Mobile-first, breakpoints adaptatifs
- [x] **Accessibilité** : Navigation clavier, focus states, contrastes
- [x] **Formulaire Contact** : Mailto avec pré-remplissage automatique

## 🌐 Déploiement

### Vercel (Recommandé)

1. **Connecter le repository** :
   - Allez sur [vercel.com](https://vercel.com)
   - Connectez votre compte GitHub
   - Importez le repository

2. **Configuration automatique** :
   - Vercel détecte automatiquement Next.js
   - Build command : `npm run build`
   - Output directory : `.next`

3. **Variables d'environnement** (optionnel) :
   ```env
   NEXT_PUBLIC_SITE_URL=https://votreportfolio.com
   ```

4. **Déploiement** :
   - Chaque push sur `main` déclenche un déploiement
   - Preview deployments pour les pull requests

## 🔧 Configuration

### Variables d'Environnement

Créez un fichier `.env.local` :

```env
# Configuration du site
NEXT_PUBLIC_SITE_URL=https://votreportfolio.com
NEXT_PUBLIC_SITE_NAME=Portfolio Développeur Web & Pentester
```

### Personnalisation

1. **Informations personnelles** : Modifiez `src/lib/constants.ts`
2. **Couleurs** : Ajustez la palette dans `tailwind.config.js`
3. **SEO** : Mettez à jour les métadonnées dans `src/app/layout.tsx`
4. **Images** : Remplacez les images dans `public/images/`

## 📊 Performance

### Optimisations Implémentées

- **Images** : Optimisation automatique avec `next/image`
- **Fonts** : Préchargement des polices Google Fonts
- **CSS** : Purge automatique avec Tailwind CSS
- **JavaScript** : Code splitting automatique
- **SEO** : Métadonnées optimisées, sitemap automatique

### Métriques Cibles

- **Lighthouse Score** : > 90 sur tous les critères
- **First Contentful Paint** : < 1.5s

## 👨‍💻 Auteur

**Hassan Bacri KEITA** - Développeur Web & Apprenti Pentester

- Email : hassan302025@outlook.fr
- GitHub : [@hassan312-god](https://github.com/hassan312-god)
- LinkedIn : [Hassan Bacri KEITA](https://linkedin.com/in/hassanbacri)

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.
