import { defineConfig, Plugin } from 'vite'
import path from 'path'
import fs from 'fs'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Placeholder SVG for missing Figma assets
const PLACEHOLDER_SVG = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23f3f4f6'/%3E%3Ctext x='400' y='310' font-family='sans-serif' font-size='18' fill='%239ca3af' text-anchor='middle'%3EImagen no disponible localmente%3C/text%3E%3C/svg%3E`

function buildAssetMap(importsDir: string): Record<string, string> {
  const map: Record<string, string> = {}
  function scan(dir: string) {
    if (!fs.existsSync(dir)) return
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) scan(full)
      else if (/\.(png|jpe?g|svg|webp|mp4|gif)$/i.test(entry.name)) map[entry.name] = full
    }
  }
  scan(importsDir)
  return map
}

function figmaAssetResolver(): Plugin {
  const importsDir = path.resolve(__dirname, 'src/imports')
  const assetMap = buildAssetMap(importsDir)

  return {
    name: 'figma-asset-resolver',
    enforce: 'pre',
    resolveId(id) {
      if (id === 'figma:foundry-client-api') return '\0figma-foundry-noop'
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        if (assetMap[filename]) return assetMap[filename]
        return '\0figma-placeholder:' + filename
      }
    },
    load(id) {
      if (id === '\0figma-foundry-noop') return 'export default {}'
      if (id.startsWith('\0figma-placeholder:')) {
        return `export default "${PLACEHOLDER_SVG}"`
      }
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    watch: {
      ignored: ['**/inmobiliaria/**', '**/*.mp4'],
    },
  },
})
