
# 🌍 Site officiel de Kalifa Sankara

Ce site web présente les activités, expertises, interventions médiatiques et projets du Dr. Sambo Kalifa Sankara, expert en intelligence artificielle et énergie durable.

Développé avec [Astro](https://astro.build/), hébergé sur [GitHub Pages](https://pages.github.com/).

---

## 🚀 Technologies utilisées

- [Astro](https://astro.build/)
- HTML / CSS / JS
- Markdown (contenu dynamique des actualités)
- Hébergement via GitHub Pages

---

## 📦 Installation & Lancement

1. **Cloner le dépôt** :

```bash
git clone https://github.com/mnour01/kalifa-sankara.git
cd kalifa-sankara
```

2. **Installer les dépendances** :

```bash
npm install
```

3. **Démarrer le serveur de dev** :

```bash
npm run dev
```

🧪 Accès local : `http://localhost:4321/kalifa-sankara/`

---

## 🧱 Structure du projet

```
.
├── src/
│   ├── pages/           → Pages `.astro` du site
│   ├── components/      → Composants réutilisables (cards, layout…)
│   ├── layouts/         → Layout global
│   ├── content/actus/   → Articles du fil d'actualité (au format .md)
│   └── images/          → Images utilisées
├── public/              → Ressources statiques (icônes, PDF…)
├── astro.config.mjs     → Config Astro avec base: "/kalifa-sankara/"
├── package.json
└── README.md
```

---

## ✍️ Ajouter une actualité (blog dynamique)

Ajouter un fichier `.md` dans `src/content/actus/`, par exemple :

```md
---
titre: "Titre de l’actualité"
date: "Avril 2025"
resume: "Résumé court à afficher en page d’accueil"
image: "images/mon_image.png"
---

Contenu long (optionnel, si on veut exploiter plus tard)
```

---

## 🔨 Build & déploiement

1. **Générer les fichiers statiques** :

```bash
npm run build
```

2. **Déployer sur GitHub Pages** :

```bash
npm run deploy
```

> 🧠 Tu peux créer un fichier `.env` ou `.astro/config.mjs` avec `base: "/kalifa-sankara"` si tu déploies sur une sous-url.

---

## 🛠️ Dépannage

- Si les liens ne fonctionnent pas sur GitHub Pages :
  - Vérifie que `base: "/kalifa-sankara"` est bien défini dans `astro.config.mjs`
  - Vérifie que les assets (images, vidéos) utilisent `withBase()` pour s’adapter à la base

- Si tu changes de poste :
  - Assure-toi d’avoir **Node.js** installé (`v18` ou +)
  - Clone le repo, fais `npm install`, et tu es prêt à repartir

---

## 📜 Licence

Projet privé à usage professionnel. Tous droits réservés © Kalifa Sankara.
