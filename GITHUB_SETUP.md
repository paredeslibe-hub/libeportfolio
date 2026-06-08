# GitHub Setup para Portfolio

Este repositorio local ya está preparado para subir tu proyecto a GitHub.

## Qué ya está listo

- Se inicializó Git en el directorio del proyecto.
- Se agregó `.gitignore` para evitar subir archivos temporales.
- Se hizo el primer commit con los archivos del sitio.
- Se configuró el remote `origin` a:
  - `https://github.com/paredeslibe-hub/libeportfolio.git`

## Pasos para subir el código a GitHub

1. Abre tu terminal en el proyecto:

```powershell
cd "c:\Users\Usuario\Documents\Portfolio 2026\portfolio-website"
```

2. Verifica el estado y los remotos:

```powershell
git status
git remote -v
```

3. Empuja el branch `master` a GitHub:

```powershell
git push -u origin master
```

> Si GitHub te pide usuario y contraseña, usa tu nombre de usuario de GitHub y un Personal Access Token como contraseña.

## Cómo generar un token

1. Ve a https://github.com/settings/tokens
2. Haz click en "Generate new token (classic)"
3. Dale un nombre como "Portfolio push"
4. Marca el scope `repo`
5. Genera el token y cópialo.

## Si usas GitHub CLI

Puedes autenticarte con:

```powershell
gh auth login
```

Luego ejecuta:

```powershell
git push -u origin master
```

## Nota

Si tu repositorio remoto en GitHub utiliza la rama `main` en lugar de `master`, ejecuta:

```powershell
git branch -M main
git push -u origin main
```
