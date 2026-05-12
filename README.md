# Portfolio — Christophe Barreto

Portfolio personnel développé avec React et déployé sur Cloudflare Pages.

## Stack

| Couche | Techno |
|---|---|
| UI | React 18, Tailwind CSS, SCSS |
| Build | Vite |
| Backend (formulaire) | Cloudflare Pages Functions |
| Email | Resend |
| Captcha | Cloudflare Turnstile |
| Déploiement | Cloudflare Pages |

## Structure

```
├── functions/
│   ├── api/
│   │   └── contact.js        # Pages Function POST /api/contact
│   └── emails/
│       └── contact-template.js  # Template HTML de l'email
├── public/                   # Assets statiques
└── src/
    ├── assets/               # Styles globaux, fonts
    ├── components/
    │   └── sections/         # Hero, Skills, Projects, Experiences, Contact
    ├── context/              # ThemeContext (dark/light)
    ├── data/                 # Données statiques (projets, skills, expériences)
    └── main.jsx
```

## Développement local

### Prérequis

- Node.js 22+
- Un compte [Resend](https://resend.com) avec une clé API

### Installation

```bash
npm install
```

### Variables d'environnement

Créer deux fichiers à la racine :

**`.env`** — variables Vite (frontend)
```
VITE_TURNSTILE_SITE_KEY=1x00000000000000000000AA
```

**`.dev.vars`** — secrets Worker (Wrangler)
```
TURNSTILE_SECRET_KEY=1x0000000000000000000000000000000AA
RESEND_API_KEY=re_xxxxxxxxxxxx
```

> Les clés `1x000...` sont les clés de test officielles Cloudflare Turnstile — le CAPTCHA passe automatiquement en local.

### Lancer le serveur

```bash
# Avec Pages Functions (formulaire fonctionnel)
npm run dev:cf

# Sans Pages Functions (UI seule)
npm run dev
```

Le serveur démarre sur `http://localhost:8788`.

## Déploiement

Le projet est déployé via Git integration sur Cloudflare Pages.

**Paramètres de build :**
- Build command : `npm run build`
- Build output directory : `dist`

**Variables d'environnement** à renseigner dans le dashboard Cloudflare Pages :

| Variable | Description |
|---|---|
| `VITE_TURNSTILE_SITE_KEY` | Clé publique Turnstile |
| `TURNSTILE_SECRET_KEY` | Clé secrète Turnstile |
| `RESEND_API_KEY` | Clé API Resend |
