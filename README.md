# Kanban Project

Un projet Kanban personnalisable et moderne, développé pour gérer des tâches avec style.

## 🛠 Technologies

*   **API** : Node.js (Express)
*   **Client** : Vite + Vanilla JS + Bulma CSS
*   **Base de données** : PostgreSQL 16
*   **Infrastructure** : Docker & Docker Compose

---

## ✨ Fonctionnalités Nouvelles

### 🎨 Personnalisation Avancée
*   **En-têtes Colorés** : Chaque liste peut avoir sa propre couleur d'en-tête (Défaut : Bleu `#3e8ed0`).
*   **Listes Transparentes** : Design épuré sans fond gris lourd, mettant en valeur le contenu.

### 🌗 Mode Sombre & Thèmes
*   Gestion automatique (préférence système) ou manuelle (Light/Dark).
*   **Mode Sombre Immersif** :
    *   Fond de page anthracite profond (`#181818`).
    *   Listes transparentes pour un effet aéré.
    *   Cartes gris clair (`#666666`) pour un contraste optimal.

---

## 📦 Installation & Lancement

1.  **Prérequis** : Docker et Docker Compose installés.

2.  **Lancer le projet** :
    ```bash
    docker-compose up --build
    ```
    *(La base de données s'initialise et se peuple automatiquement au premier lancement)*

3.  **Accéder à l'application** :
    *   Frontend : [http://localhost:4173](http://localhost:4173)
    *   API : [http://localhost:3000](http://localhost:3000)

---

## ⚙️ Commandes Utiles

| Action | Commande |
| :--- | :--- |
| **Démarrer** | `docker-compose up` |
| **Reconstruire** | `docker-compose up --build` |
| **Arrêter** | `docker-compose down` |
| **Reset Complet** (⚠️ Efface les données) | `docker-compose down -v` |

---

## 🛡️ Notes de Sécurité
*   Fichier `.env` inclus par commodité (à sécuriser en prod).
*   Base de données PostgreSQL isolée dans un réseau Docker.

---

## ✨ Auteur
*clemsimao* – Projet enrichi avec Antigravity UI.
