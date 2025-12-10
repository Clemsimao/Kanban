import { defineConfig } from 'vite';

export default defineConfig({
  envDir: ".", // on remonte d'un dossier pour y trouver le fichier .env
  define: {
    'import.meta.env.VITE_API_BASE_URL': JSON.stringify('http://localhost:3000/api')
  }
});
