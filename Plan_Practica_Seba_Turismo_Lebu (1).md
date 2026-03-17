# Plan de Práctica Profesional - Desarrollo Web "Turismo Lebu"

**Alumno en práctica:** Seba  
**Duración:** 10 días hábiles (2 semanas, de Lunes a Viernes)  
**Tecnologías:** Astro, SvelteKit, Tailwind CSS, Mapbox (Capa gratuita, estilo predeterminado), LocalStorage.  
**Condiciones del Proyecto:**  
- Uso de IA exclusivo para maquetación, generación de código y redacción de textos.
- Imágenes reales obtenidas de redes sociales previa solicitud de permisos explícitos a sus autores.
- Almacenamiento de datos del usuario (favoritos/itinerario) sin base de datos externa, utilizando exclusivamente LocalStorage.

---

## Semana 1: Configuración, Estructura y Buscador

### Día 1: Lunes
**¡Hola Seba! Bienvenido al equipo, hoy tienes que empezar con la base técnica y gráfica del proyecto.**
- **Paso 1:** Configura el proyecto instalando Astro y agregando las integraciones de Svelte y Tailwind CSS. Crea el repositorio en GitHub para llevar el control de versiones.
- **Paso 2:** Define la estructura de carpetas (`src/pages`, `src/components`, `src/layouts`).
- **Paso 3:** Busca fotografías de atractivos de Lebu en redes sociales (Facebook/Instagram). Envía mensajes formales a los autores pidiendo permiso para usarlas y registra los permisos obtenidos.

### Día 2: Martes
**¡Buen martes, Seba! Hoy nos toca ensuciarnos las manos armando la estructura principal del sitio.**
- **Paso 1:** Desarrolla el *Layout* principal en Astro, el cual contendrá el encabezado (Header) y el pie de página (Footer) común para todo el sitio.
- **Paso 2:** Pide a la IA que te genere el código base de un menú de navegación responsivo en Svelte y estilízalo con Tailwind CSS.
- **Paso 3:** Integra la navegación en tu *Layout* asegurando que los enlaces a Inicio, Mapa y Favoritos apunten a las rutas correctas.

### Día 3: Miércoles
**¡Qué tal Seba! Mitad de semana, ideal para darle vida a la portada de nuestra web turística.**
- **Paso 1:** Construye la sección *Hero* en `index.astro` usando la primera imagen de alta calidad que te hayan autorizado.
- **Paso 2:** Utiliza IA para redactar un texto de bienvenida atractivo, verídico y orientado al turismo en Lebu.
- **Paso 3:** Crea un componente en Svelte llamado `DestinoCard.svelte` que reciba parámetros (props) como el título del lugar, una descripción corta y la imagen.

### Día 4: Jueves
**¡Excelente jueves, Seba! Hoy tu misión es estructurar los datos turísticos y mostrarlos en pantalla.**
- **Paso 1:** Crea un archivo local de datos (JSON o un array en JavaScript/TypeScript) con los atractivos de Lebu (ej. Cavernas de Benavides, Parque del Carbón).
- **Paso 2:** Usa la IA para generar descripciones breves e interesantes para cada punto y añádelas al archivo de datos junto con sus coordenadas cartográficas.
- **Paso 3:** Renderiza la grilla de destinos en la página de inicio iterando sobre el archivo de datos y usando tu componente `DestinoCard.svelte`.

### Día 5: Viernes
**¡Viernes por fin, Seba! Para cerrar tu primera semana, implementarás el buscador interactivo.**
- **Paso 1:** Desarrolla un componente `Buscador.svelte` que incluya un campo de texto estilizado con Tailwind.
- **Paso 2:** Implementa la lógica en Svelte para filtrar el array de destinos en tiempo real a medida que el visitante escribe el nombre del lugar.
- **Paso 3:** Muestra un mensaje amigable invitando a buscar otro lugar si la búsqueda no arroja resultados. Haz un *commit* y sube tus avances a GitHub.

---

## Semana 2: Mapbox, Favoritos y Panel de Itinerario

### Día 6: Lunes
**¡Arrancamos una nueva semana, Seba! Hoy el desafío es integrar la geolocalización de nuestros atractivos.**
- **Paso 1:** Regístrate en Mapbox, obtén tu *API Key* pública gratuita y guárdala en un archivo `.env` en tu proyecto de Astro.
- **Paso 2:** Pídele a la IA que te genere un componente en Svelte que integre `mapbox-gl` usando las funciones de ciclo de vida de Svelte (`onMount`). Utiliza el estilo de mapa predeterminado de Mapbox.
- **Paso 3:** Renderiza el mapa en la página `mapa.astro`, centrado inicialmente en las coordenadas de la Plaza de Armas de Lebu.

### Día 7: Martes
**¡Hola de nuevo, Seba! En este martes, daremos vida al mapa conectándolo con nuestra base de datos.**
- **Paso 1:** Itera sobre tu archivo JSON de destinos para crear marcadores (*Markers*) en el mapa de Mapbox según las coordenadas de cada lugar.
- **Paso 2:** Agrega *popups* (globos de información) a cada marcador para que, al hacer clic, el usuario vea la foto en miniatura y el nombre del lugar.
- **Paso 3:** Asegúrate de que el mapa sea completamente responsivo y se pueda navegar fácilmente desde un teléfono móvil.

### Día 8: Miércoles
**¡Día miércoles, Seba! Ya en la recta final, hoy programarás el sistema de favoritos.**
- **Paso 1:** Modifica el componente `DestinoCard.svelte` y los *popups* del mapa para incluir un botón de "Agregar a mi ruta".
- **Paso 2:** Genera con IA la lógica en JavaScript para que este botón guarde o elimine el ID del destino directamente en el `LocalStorage` del navegador.
- **Paso 3:** Haz que el botón cambie de estilo (por ejemplo, cambiando de color) dependiendo de si el lugar ya se encuentra guardado en el `LocalStorage`.

### Día 9: Jueves
**¡Casi viernes, Seba! Hoy toca armar el panel del turista y su funcionalidad de impresión.**
- **Paso 1:** Crea la página `itinerario.astro` (o panel de favoritos). Diseña un componente que lea los IDs de `LocalStorage` al cargar la página y muestre solo las tarjetas de los lugares guardados.
- **Paso 2:** Añade un botón atractivo de "Imprimir Mi Itinerario" en este panel.
- **Paso 3:** Pídele a la IA que te genere clases CSS con Tailwind enfocadas en impresión (`print:hidden`, `print:block`). Aplícalas para que al imprimir desaparezca el menú y el *footer*, dejando un documento limpio con la ruta del usuario.

### Día 10: Viernes
**¡Último día de tu práctica, Seba! Qué gran trabajo has hecho. Hoy cerramos el proyecto preparándolo para producción.**
- **Paso 1:** Realiza un control de calidad (QA) exhaustivo. Comprueba que el buscador, el mapa de Mapbox y la persistencia del `LocalStorage` funcionen sin problemas.
- **Paso 2:** Ejecuta el comando de construcción (`npm run build`) para compilar el proyecto en archivos estáticos optimizados.
- **Paso 3:** Presenta el proyecto completo de "Turismo Lebu". Evaluaremos el resultado final y conversaremos sobre tu experiencia integrando Astro, SvelteKit y Tailwind.
