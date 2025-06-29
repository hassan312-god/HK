# Portfolio Développeur Web & Apprenti Pentester

Portfolio moderne et professionnel suivant les standards de 2025, mettant en valeur les compétences en développement web et la formation en cours en pentesting.

## 🎯 Objectif

Ce portfolio raconte l'histoire d'un développeur technique qui évolue vers la sécurité, capable de construire ET de protéger. L'interface inspire confiance, professionnalisme et expertise technique avancée.

## 🛠 Stack Technique

- **Framework** : Next.js 15+ (App Router avec Turbopack)
- **Language** : TypeScript strict
- **Styling** : Tailwind CSS v4 + Configuration personnalisée
- **Composants** : React 19+ avec hooks modernes
- **Icons** : Lucide React
- **Animations** : Framer Motion
- **Email** : Nodemailer avec Outlook
- **SEO** : Next.js metadata API
- **Performance** : Image optimization, lazy loading, Turbopack

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
│   ├── globals.css         # Styles globaux + variables CSS
│   ├── about/              # Page À propos
│   ├── contact/            # Page Contact
│   ├── projects/           # Page Projets
│   ├── services/           # Page Services
│   ├── skills/             # Page Compétences
│   └── api/
│       └── contact/        # API route pour l'envoi d'emails
├── components/
│   ├── ui/                 # Composants réutilisables
│   │   ├── Button.tsx      # Bouton avec variantes
│   │   ├── Card.tsx        # Carte avec effets hover
│   │   ├── Icon.tsx        # Icônes Lucide React
│   │   └── ChatBot.tsx     # Chatbot interactif
│   ├── sections/           # Sections du portfolio
│   │   ├── Hero.tsx        # Section Hero avec particles
│   │   ├── HomeHero.tsx    # Hero de la page d'accueil
│   │   ├── PageHero.tsx    # Hero pour les pages internes
│   │   ├── About.tsx       # Section À propos
│   │   ├── Contact.tsx     # Section Contact avec formulaire
│   │   ├── Projects.tsx    # Section Projets
│   │   ├── Services.tsx    # Section Services
│   │   └── Skills.tsx      # Section Compétences
│   └── layout/             # Composants de layout
│       ├── Header.tsx      # Navigation sticky
│       └── ClientOnlyChatBot.tsx # Wrapper pour le chatbot
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

# Configuration email (optionnel)
cp .env.example .env.local
# Éditer .env.local avec vos informations

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

### Scripts Disponibles

```bash
npm run dev          # Serveur de développement avec Turbopack
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # Vérification du code
```

## 🎨 Fonctionnalités

### ✅ Implémentées

- [x] **Header/Navigation** : Sticky avec effet blur, menu hamburger responsive
- [x] **Hero Section** : Particles animées, geometric shapes, CTA principaux
- [x] **Pages Multiples** : Accueil, À propos, Contact, Projets, Services, Compétences
- [x] **Chatbot Interactif** : Assistant virtuel avec animations et réponses contextuelles
- [x] **Formulaire Contact** : API route avec Nodemailer, validation, notifications
- [x] **Palette Liquid Lava** : Configuration Tailwind personnalisée
- [x] **Composants UI** : Button, Card, Icon, ChatBot réutilisables
- [x] **Animations** : Framer Motion avec transitions orange/noir
- [x] **SEO** : Métadonnées optimisées, Schema.org, Open Graph
- [x] **Sécurité** : Headers de sécurisation, CSP, validation
- [x] **Performance** : Lazy loading, optimisations Next.js, Turbopack
- [x] **Responsive** : Mobile-first, breakpoints adaptatifs
- [x] **Accessibilité** : Navigation clavier, focus states, contrastes
- [x] **Email Setup** : Configuration complète pour Outlook

### 🔧 Configuration Email

Le portfolio inclut un système d'envoi d'emails via l'API route `/api/contact`. Voir `EMAIL_SETUP.md` pour la configuration complète.

**Variables d'environnement requises :**
```env
EMAIL_USER=hassan302025@outlook.fr
EMAIL_PASS=votre_mot_de_passe_d_application
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

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

3. **Variables d'environnement** :
   ```env
   EMAIL_USER=hassan302025@outlook.fr
   EMAIL_PASS=votre_mot_de_passe_d_application
   NEXT_PUBLIC_SITE_URL=https://votreportfolio.com
   ```

4. **Déploiement** :
   - Chaque push sur `main` déclenche un déploiement
   - Preview deployments pour les pull requests

### Autres Plateformes

- **Netlify** : Compatible avec les builds Next.js
- **Railway** : Déploiement simple avec variables d'environnement
- **DigitalOcean App Platform** : Support complet Next.js

## 🔧 Configuration

### Variables d'Environnement

Créez un fichier `.env.local` :

```env
# Configuration email Outlook
EMAIL_USER=hassan302025@outlook.fr
EMAIL_PASS=votre_mot_de_passe_d_application

# Configuration du site
NEXT_PUBLIC_SITE_URL=https://votreportfolio.com
NEXT_PUBLIC_SITE_NAME=Portfolio Développeur Web & Pentester
```

### Personnalisation

1. **Informations personnelles** : Modifiez `src/lib/constants.ts`
2. **Couleurs** : Ajustez la palette dans `tailwind.config.js`
3. **SEO** : Mettez à jour les métadonnées dans `src/app/layout.tsx`
4. **Images** : Remplacez les images dans `public/`
5. **Chatbot** : Personnalisez les réponses dans `src/components/ui/ChatBot.tsx`

## 📊 Performance

### Optimisations Implémentées

- **Turbopack** : Compilation ultra-rapide en développement
- **Images** : Optimisation automatique avec `next/image`
- **Fonts** : Préchargement des polices Google Fonts
- **CSS** : Purge automatique avec Tailwind CSS v4
- **JavaScript** : Code splitting automatique
- **SEO** : Métadonnées optimisées, sitemap automatique
- **Email** : API route optimisée avec validation

### Métriques Cibles

- **Lighthouse Score** : > 90 sur tous les critères
- **First Contentful Paint** : < 1.5s
- **Time to Interactive** : < 3s

## 🤖 Chatbot

Le portfolio inclut un chatbot interactif avec les fonctionnalités suivantes :

- **Réponses contextuelles** : Adaptées au contenu du portfolio
- **Animations fluides** : Transitions et micro-interactions
- **Interface moderne** : Design cohérent avec la palette Liquid Lava
- **Responsive** : Fonctionne sur tous les appareils
- **Accessible** : Navigation clavier et lecteurs d'écran

## 📧 Système de Contact

### Fonctionnalités

- **Formulaire complet** : Nom, email, sujet, message
- **Validation côté client et serveur**
- **Envoi via Outlook** : Configuration sécurisée
- **Notifications** : Feedback utilisateur en temps réel
- **Template HTML** : Email professionnel avec branding

### Sécurité

- **Validation des données** : Protection contre les injections
- **Rate limiting** : Protection contre le spam
- **Variables d'environnement** : Secrets sécurisés
- **CORS** : Configuration appropriée

## 👨‍💻 Auteur

**Hassan Bacri KEITA** - Développeur Web & Apprenti Pentester

- Email : hassan302025@outlook.fr
- GitHub : [@hassan312-god](https://github.com/hassan312-god)
- LinkedIn : [Hassan Bacri KEITA](https://linkedin.com/in/hassanbacri)

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🔗 Liens Utiles

- [Documentation Next.js](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Configuration Email](EMAIL_SETUP.md)
