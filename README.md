# ISDL — Sitio promocional

Sitio institucional estático para promocionar la Tecnicatura Superior en Desarrollo de Software del Instituto Superior Dr. Daniel Lesteime.

## Probar localmente

Abrí `index.html` en el navegador. Para una prueba más parecida al hosting, podés usar la extensión Live Server de VS Code.

## Publicar en Vercel

1. Subí el contenido de esta carpeta a un repositorio de GitHub.
2. En Vercel, elegí **Add New → Project** y conectá ese repositorio.
3. Como es un sitio estático sin build, no hace falta comando de compilación ni directorio de salida especial. Dejá los campos de build vacíos si Vercel los solicita.
4. Hacé clic en **Deploy**.

También podés importar directamente la carpeta en Vercel CLI desde una terminal con `vercel`.

## Antes de publicar

- En `index.html`, reemplazá `mailto:CONTACTO_DEL_INSTITUTO` por el correo oficial o cambiá el botón por el enlace real de WhatsApp/red social del instituto.
- Confirmá el nombre oficial, sede, modalidad, duración y fechas de inscripción si querés agregarlos. No se inventaron datos de contacto ni de inscripción.
- La sección de proyectos usa ejemplos generales de experiencias de aprendizaje; no afirma que sean proyectos institucionales específicos.

## Archivos

- `index.html`: estructura y textos.
- `styles.css`: diseño responsive, paleta azul marino/dorado y animaciones suaves.
- `script.js`: menú móvil, año automático y entrada progresiva de secciones.
- `public/logo-isdl.jpeg`: logo compartido como referencia.
