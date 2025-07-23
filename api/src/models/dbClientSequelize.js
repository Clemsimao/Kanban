import "dotenv/config";

// CommonJS (import)
// const { Sequelize } = require('sequelize');

// ECMAScript modules (import)
import { Sequelize } from "sequelize";

// ECMAScript modules (export)
// Instance de connexion à la base de données Postgres
// Vérification que PG_URL est définie
const pgUrl = process.env.PG_URL;
if (!pgUrl) {
  console.error("❌ PG_URL n'est pas définie dans les variables d'environnement");
  console.error("Variables disponibles:", Object.keys(process.env).filter(key => key.includes('PG') || key.includes('POSTGRES')));
  process.exit(1);
}

export const sequelize = new Sequelize(pgUrl, {
  define: {
    createdAt: "created_at",
    updatedAt: "updated_at",
    // underscored: true
  },
  // logging: false // Pour désactiver l'affichage en console des requêtes SQL que Sequelize passe vers la BDD
});

// Test rapide
// sequelize.authenticate();

// CommonJS (export)
// module.exports = sequelize;
