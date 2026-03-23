# Mapa de Desarrollo - Turismo Lebu 🏖️

Bienvenido al repositorio de código fuente del sitio oficial de **Turismo Lebu**. 
Este documento está diseñado para orientar a desarrolladores, practicantes y colaboradores acerca de la arquitectura y la configuración visual elegida.

---

## 🛠️ Stack Tecnológico

El proyecto está diseñado para ser rápido, moderno y altamente interactivo, con las siguientes herramientas principales:
- **Framework Principal:** [Astro v4+](https://astro.build/) - Elegido por su velocidad increíble (arquitectura de islas) y su facilidad para sitios en su mayor parte estáticos.
- **Componentes Reactivos:** [Svelte v4/5](https://svelte.dev/) - Utilizado para componentes dinámicos como el `Header` navegable, interacciones en el cliente y para el funcionamiento de herramientas en vivo como `Buscador`.
- **Estilos (CSS):** [Tailwind CSS v3](https://tailwindcss.com/) - Con un sistema de diseño estrictamente tipificado en `tailwind.config.js` referenciando los estilos oficiales del logotipo y la marca.

---

## 🎨 Sistema de Diseño (Design System)

La marca de Turismo Lebu goza de un isologo rico en contrastes y una paleta colorida, extraída desde su logotipo oficial. 

**Tipografía Base:** `Outfit` (Headings) e `Inter` (Cuerpo de texto).

Estos colores se han habilitado globalmente en Tailwind bajo el prefijo `lebu`.
- **Magenta (`bg-lebu-magenta`, `text-lebu-magenta`):** `#d9277d` - Simboliza el cielo rojizo del atardecer.
- **Naranja (`bg-lebu-orange`):** `#f37329`
- **Amarillo (`bg-...-yellow`):** `#f9bb2d` - Refleja el sol brillante en la costa.
- **Verde (`...-green`):** `#3bb54a` - Referencia a las reservas de naturaleza, exploración y campos.
- **Teal / Celúreo (`...-teal`):** `#00a9a1` - Muestra la profundidad e intensidad de las aguas del pacífico.
- **Oscuro (`...-dark`):** `#414141` - Usado primariamente para los textos de alto riesgo o zonas profundas en Footer.

> **Regla para Desarrolladores:** Evitad los colores por defecto genéricos (`bg-red-500`, `text-blue-600`) a fín de mantener el estilo único del pueblo.

---

## ⚙️ Entorno de Trabajo Local

Como colaborador, sigue estas instrucciones si acabas de clonar este repositorio:

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Levantar el entorno en modo Desarrollador:**
   ```bash
   npm run dev
   ```
   *Esto iniciará un servidor en [http://localhost:4321/](http://localhost:4321/). Puedes ver los cambios al recargar los archivos con un excelente "Hot-Module Replacement".*

3. **Construir (para Producción):**
   ```bash
   npm run build
   ```
   Este comando generará archivos minificados para su alojamiento dentro del directorio `/dist`.

  
---

## 📂 Organización de Carpetas (Arquitectura)

- `/src/pages/`: Aquí va en exclusiva el enrutamiento de páginas para Astro (`index.astro`, `mapa.astro`, etc.).
- `/src/components/`: Componentes Svelte reutilizables diseñados para encapsular funciones (`Header.svelte`, `Footer.svelte`).
- `/src/layouts/`: Base principal de la aplicación con la etiqueta \`<html />\` y la inmersión global (\`BaseLayout.astro\`).
- `/public/`: Recursos que no necesitan procesarse, tales como el `logo.png` base de nuestro isotipo, así como configuraciones SEO estáticas.

**Elaborado con ✨ para Seba y el equipo de Turismo Lebu.**
