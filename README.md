# Portfolio Développeur Web & Apprenti Pentester

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

### 🔄 En Cours de Développement

- [ ] **Section À Propos** : Timeline, photo avec border-gradient
- [ ] **Section Compétences** : Grille de cards avec progress bars
- [ ] **Section Projets** : Cards avec hover effects et liens
- [ ] **Section Services** : Services proposés avec icônes
- [ ] **Section Contact** : Formulaire avec validation
- [ ] **Footer** : Liens rapides et réseaux sociaux
- [ ] **Tests** : Tests unitaires avec Jest
- [ ] **Documentation** : Documentation des composants

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

### Netlify

1. **Build settings** :
   - Build command : `npm run build`
   - Publish directory : `.next`
   - Node version : 18

2. **Configuration** :
   ```toml
   # netlify.toml
   [build]
     command = "npm run build"
     publish = ".next"
   
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

### Autres Plateformes

- **Railway** : Déploiement automatique depuis GitHub
- **DigitalOcean App Platform** : Configuration simple
- **AWS Amplify** : Intégration CI/CD complète

## 🔧 Configuration

### Variables d'Environnement

Créez un fichier `.env.local` :

```env
# Configuration du site
NEXT_PUBLIC_SITE_URL=https://votreportfolio.com
NEXT_PUBLIC_SITE_NAME=Portfolio Développeur Web & Pentester

# Analytics (optionnel)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Contact (optionnel)
CONTACT_EMAIL=contact@votreportfolio.com
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
- **Largest Contentful Paint** : < 2.5s
- **Cumulative Layout Shift** : < 0.1

## 🔒 Sécurité

### Mesures Implémentées

- **Headers de sécurité** : CSP, HSTS, X-Frame-Options
- **Validation** : Côté client et serveur
- **CSRF Protection** : Tokens sur formulaires
- **Content Security Policy** : Restriction des ressources
- **HTTPS** : Redirection automatique en production

### Bonnes Pratiques

- Pas de données sensibles exposées
- Validation stricte des entrées utilisateur
- Commentaires de sécurité dans le code
- Mise à jour régulière des dépendances

## 🧪 Tests

### Tests Unitaires

```bash
# Installation de Jest
npm install -D jest @testing-library/react @testing-library/jest-dom

# Lancement des tests
npm test

# Tests en mode watch
npm run test:watch
```

### Tests E2E (optionnel)

```bash
# Installation de Playwright
npm install -D @playwright/test

# Lancement des tests E2E
npx playwright test
```

## 📝 Documentation

### Composants

Chaque composant est documenté avec :
- Description de la fonctionnalité
- Props TypeScript
- Exemples d'utilisation
- Notes de sécurité

### API

- **Utils** : Fonctions utilitaires réutilisables
- **Constants** : Configuration centralisée
- **Types** : Définitions TypeScript strictes

## 🤝 Contribution

1. Fork le projet
2. Créez une branche feature (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🙏 Remerciements

- **Next.js** : Framework React moderne
- **Tailwind CSS** : Framework CSS utilitaire
- **Framer Motion** : Animations fluides
- **Lucide React** : Icônes modernes
- **Vercel** : Plateforme de déploiement

## 📞 Contact

- **Email** : contact@votreportfolio.com
- **GitHub** : [@votre-username](https://github.com/votre-username)
- **LinkedIn** : [Votre Profile](https://linkedin.com/in/votre-profile)

---

**Note** : Ce portfolio est conçu pour impressionner les recruteurs tech et démontrer une expertise technique avancée en développement web et cybersécurité.
