import "dotenv/config";

// CommonJS (import)
// const { Sequelize } = require('sequelize');

// ECMAScript modules (import)
import { Sequelize } from "sequelize";

// ECMAScript modules (export)
// Instance de connexion à la base de données Postgres
// Vérification que PG_URL est définie
console.log("🔍 Variables d'environnement disponibles :", Object.keys(process.env));
console.log("🔍 PG_URL value:", process.env.PG_URL);
console.log("🔍 DATABASE_URL value:", process.env.DATABASE_URL);
console.log("🔍 POSTGRES_URL value:", process.env.POSTGRES_URL);

// Railway utilise souvent DATABASE_URL au lieu de PG_URL
const pgUrl = process.env.PG_URL || process.env.DATABASE_URL || process.env.POSTGRES_URL;
if (!pgUrl) {
  console.error("❌ Aucune URL de base de données trouvée");
  console.error("Variables de DB disponibles:", Object.keys(process.env).filter(key => 
    key.includes('PG') || key.includes('POSTGRES') || key.includes('DATABASE')
  ));
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
