# Google Analytics Configurado ✅

Tu Google Analytics ID `G-PDDPP946EV` está correctamente instalado en el portfolio.

## ¿Qué se está trackeando?

### 📊 Páginas automáticas:
- Página principal (Portfolio)
- Landing de negocios (/negocios)
- Todos los proyectos
- Cada vez que alguien cambia de página

### 📈 Eventos personalizados:
- **Formulario de contacto**: Cuando alguien envía el formulario (WhatsApp o Calendly)
- **Botón flotante de WhatsApp**: Cuando hacen clic en el botón verde flotante
- **Calendly**: Cuando abren tu calendario para agendar

## ¿Cómo verificar que funciona?

### Opción 1: Google Analytics en tiempo real
1. Andá a https://analytics.google.com/
2. Seleccioná tu propiedad (G-PDDPP946EV)
3. Hacé clic en "Informes" → "Tiempo real"
4. Abrí tu portfolio en otra pestaña
5. Deberías ver +1 usuario activo en tiempo real

### Opción 2: Consola del navegador
1. Abrí tu portfolio
2. Presiona F12 (o clic derecho → Inspeccionar)
3. Andá a la pestaña "Console"
4. Buscá mensajes que digan "GA4" o "gtag"
5. Si no ves errores, está funcionando ✅

## Eventos que podés ver en Analytics

En Google Analytics podrás ver:
- **form_submit**: Cuántas personas completaron el formulario
- **whatsapp_click**: Clics en el botón de WhatsApp
- **calendly_click**: Cuántas personas abrieron tu Calendly
- **page_view**: Qué páginas son las más visitadas

## Archivos modificados

- ✅ `/src/app/utils/analytics.ts` - Configuración de GA
- ✅ `/src/app/App.tsx` - Inicialización de GA
- ✅ `/src/app/components/Layout.tsx` - Tracking de páginas
- ✅ `/src/app/components/LeadCaptureLP.tsx` - Eventos del formulario
- ✅ `/src/app/components/Portfolio.tsx` - Eventos de WhatsApp
- ✅ `/src/app/routes.tsx` - Estructura con Layout

## ¿Problemas?

Si no ves datos después de 24-48 horas:
1. Verificá que el ID `G-PDDPP946EV` sea correcto en Google Analytics
2. Asegurate de que la propiedad esté activa
3. Chequeá que no haya bloqueadores de ads/analytics en tu navegador

---

Todo está listo. Los datos empezarán a aparecer en Google Analytics en las próximas horas 📊
