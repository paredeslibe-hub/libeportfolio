/// <reference types="vite/client" />

// Módulos virtuales de Figma Make, resueltos por figmaAssetResolver en vite.config.ts
declare module 'figma:asset/*' {
  const src: string;
  export default src;
}

declare module 'figma:foundry-client-api' {
  const api: Record<string, unknown>;
  export default api;
}
