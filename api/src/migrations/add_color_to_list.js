import { sequelize } from "../models/index.js";
import { DataTypes } from "sequelize";

console.log("🚧 Ajout de la colonne 'color' à la table 'list'...");
const queryInterface = sequelize.getQueryInterface();

try {
    await queryInterface.addColumn('list', 'color', {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: "#ffffff"
    });
    console.log("✅ Colonne ajoutée avec succès !");
} catch (error) {
    console.error("❌ Erreur lors de l'ajout de la colonne :", error);
}

await sequelize.close();
