# Configuration de l'envoi d'email

## Étapes pour configurer l'envoi d'email vers Outlook

### 1. Créer un fichier `.env.local`

Créez un fichier `.env.local` à la racine du projet avec le contenu suivant :

```env
# Configuration email Outlook
EMAIL_USER=hassan302025@outlook.fr
EMAIL_PASS=votre_mot_de_passe_d_application

# URL du site
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 2. Configurer le mot de passe d'application Outlook

1. Connectez-vous à votre compte Microsoft Outlook
2. Allez dans **Paramètres** > **Sécurité**
3. Activez l'**authentification à deux facteurs** si ce n'est pas déjà fait
4. Créez un **mot de passe d'application** :
   - Allez dans **Sécurité** > **Options de sécurité avancées**
   - Cliquez sur **Créer une nouvelle application**
   - Sélectionnez **Autre (nom personnalisé)**
   - Donnez un nom comme "Portfolio Contact"
   - Copiez le mot de passe généré

### 3. Mettre à jour le fichier `.env.local`

Remplacez `votre_mot_de_passe_d_application` par le mot de passe généré à l'étape précédente.

### 4. Redémarrer le serveur de développement

```bash
npm run dev
```

## Test du formulaire

1. Allez sur la page Contact de votre portfolio
2. Remplissez le formulaire
3. Cliquez sur "Envoyer le message"
4. Vérifiez votre boîte Outlook pour voir le message reçu

## Sécurité

- Ne jamais commiter le fichier `.env.local` dans Git
- Le fichier `.env.local` est déjà dans `.gitignore`
- Utilisez toujours un mot de passe d'application, jamais votre mot de passe principal

## Dépannage

Si l'envoi ne fonctionne pas :

1. Vérifiez que les variables d'environnement sont correctes
2. Assurez-vous que l'authentification à deux facteurs est activée
3. Vérifiez que le mot de passe d'application est correct
4. Consultez les logs du serveur pour les erreurs détaillées 