
# Kanban Project

Un projet Kanban complet développé avec :  
• Node.js (Express) pour l’API  
• Vite + JavaScript/TypeScript pour le client  
• PostgreSQL pour la base de données  
• Docker & Docker Compose pour l’orchestration  

---

## 📦 Installation

1. Cloner le dépôt  
```bash
git clone https://github.com/ton-pseudo/kanban.git
cd kanban
```

2. Lancer le projet avec Docker  
Assure-toi d’avoir Docker et Docker Compose installés.  
```bash
docker-compose up –build
```
- API disponible sur : [http://localhost:3000](http://localhost:3000)  
- Frontend disponible sur : [http://localhost:4173](http://localhost:4173)  

---

## ⚙️ Configuration

Les variables d’environnement sont définies dans le fichier `api/.env` :  
```
PORT=3000
PG_URL=postgres://kanban:kanban@db:5432/kanban
ALLOWED_DOMAINS=*
```

---

## 🧪 Seeding de la base de données

Les scripts d’initialisation PostgreSQL se trouvent dans :  
`./api/data/`  
Ils sont automatiquement exécutés au démarrage du conteneur db.

---

## 🚀 Scripts utiles

Rebuild les conteneurs  
```bash
docker-compose up –build
```

Arrêter les services  
```bash
docker-compose down
```

Nettoyer tous les volumes (⚠️ efface les données)  
```bash
docker-compose down -v
```

---

## 🛡️ Sécurité

• Connexion à la base via `kanban:kanban`  
• Ne pas exposer `.env` en production  
• Prévoir HTTPS et un reverse proxy en production  

---

## ✨ Auteur

clemsimao – Projet personnel réalisé dans le cadre de ma formation en développement web
