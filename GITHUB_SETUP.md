# Cómo subir tu portfolio a GitHub 🚀

Tu código ya está listo para subirse a GitHub. Solo necesitás seguir estos pasos:

## Paso 1: Crear un repositorio en GitHub

1. Andá a https://github.com/new
2. Completá los datos:
   - **Repository name**: `portfolio-libe-paredes` (o el nombre que quieras)
   - **Description**: "Portfolio profesional de Product Design - React + TypeScript + Tailwind"
   - **Public o Private**: Elegí lo que prefieras
   - ⚠️ **IMPORTANTE**: NO marques "Add a README file" ni "Add .gitignore" (ya los tenés)
3. Hacé clic en "Create repository"

## Paso 2: Conectar tu proyecto con GitHub

Después de crear el repositorio, GitHub te va a mostrar varias opciones. Elegí la segunda opción que dice:

**"…or push an existing repository from the command line"**

Copiá y pegá estos comandos en tu terminal (reemplazá `TU_USUARIO` con tu nombre de usuario de GitHub):

```bash
git remote add origin https://github.com/TU_USUARIO/portfolio-libe-paredes.git
git push -u origin main
```

**Ejemplo:**
Si tu usuario es `libeparedes`, sería:
```bash
git remote add origin https://github.com/libeparedes/portfolio-libe-paredes.git
git push -u origin main
```

## Paso 3: Verificar que subió correctamente

1. Actualizá la página de tu repositorio en GitHub
2. Deberías ver todos los archivos de tu portfolio
3. En la descripción del commit vas a ver: "Initial commit: Portfolio profesional de Product Design"

## 📦 ¿Qué archivos se subieron?

✅ Todo el código fuente (`src/`)
✅ Componentes de React
✅ Estilos y assets (imágenes, videos)
✅ Configuración del proyecto
✅ Documentación (DESIGN_GUIDELINES.md, GOOGLE_ANALYTICS.md)

❌ NO se subieron (están en .gitignore):
- `node_modules/` (dependencias)
- `dist/` (archivos de build)
- `.env` (variables de entorno)
- `__figma__entrypoint__.ts` (archivo temporal de Figma Make)

## 🔐 Autenticación

La primera vez que hagas `git push`, GitHub te va a pedir autenticación:

**Opción 1: Personal Access Token (recomendado)**
1. Andá a https://github.com/settings/tokens
2. "Generate new token" → "Generate new token (classic)"
3. Dale un nombre (ej: "Portfolio")
4. Marcá el scope `repo`
5. Copiá el token generado
6. Cuando te pida password, pegá el token

**Opción 2: GitHub CLI**
```bash
# Instalar GitHub CLI si no lo tenés
# Luego autenticarte
gh auth login
```

## ✨ ¿Querés actualizar el código después?

Cada vez que hagas cambios:

```bash
git add .
git commit -m "Descripción de tus cambios"
git push
```

## 📝 Archivo .gitignore

Ya está configurado para ignorar:
- node_modules
- archivos de build
- logs
- variables de entorno sensibles
- archivos temporales de Figma Make

## 🎯 Próximos pasos (opcionales)

Una vez que tu código esté en GitHub, podés:

1. **Deployar gratis en Vercel/Netlify**
   - Conectás tu repositorio
   - Deploy automático en cada push

2. **Agregar un README.md**
   - Descripción del proyecto
   - Screenshots
   - Instrucciones de instalación

3. **Configurar GitHub Pages**
   - Para tener tu portfolio en una URL pública

---

¿Problemas? Avisame y te ayudo a resolverlos 💪
