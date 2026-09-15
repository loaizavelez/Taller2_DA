# Clipped - Plataforma de Captura y Compartición de Clips de Videojuegos

**Clipped** es una aplicación web inspirada en plataformas como Medal, diseñada para capturar jugadas automáticamente, explorar clips de la comunidad, seguir creadores destacados y compartir momentos de videojuegos.

https://loaizavelez.github.io/Taller2_DA/

---

## Pantallas y Rutas Navegables

El proyecto cuenta con 6 pantallas principales conectadas mediante **React Router**:

* **`/` (Landing Page):** Pantalla de bienvenida principal con banner principal (Hero), métricas de la comunidad, sección de características destacadas y clips populares.


* **`/features` | `/caracteristicas` (Características):** Desglose detallado sobre la tecnología detrás de Clipped, incluyendo detección de eventos, overlay personalizable, audio multipista y capturas de pantalla.


* **`/descargar` (Descarga):** Guía paso a paso en 3 niveles para instalar la aplicación de escritorio y enlace directo de descarga.


* **`/juegos` (Explorador de Juegos):** Carrusel del Top 5 de juegos de la semana, barra de búsqueda por título, filtros por categoría y rejilla de clips en tendencia.


* **`/juegos/:juegoId` (Detalle del Juego):** Vista enfocada en un juego en particular (ej. Overwatch 2 o Helldivers 2) con creadores destacados, reproductor interactivo y rejilla de clips específicos.


* **`/usuario/:username` (Perfil de Usuario):** Perfil de creador con avatar, biografía, contador interactivo de seguidores, botón de mensaje directo (DM) y rejilla 3x3 de sus clips subidos.



---

## Paleta de Colores Oficial

| Elemento | Código Hexadecimal | Previsualización |
| --- | --- | --- |
| **Fondo Principal** | `#141d26` / `#141922` | Dark Navy / Charcoal |
| **Contenedores / Tarjetas** | `#243447` / `#222a37` | Slate Blue |
| **Acento / Botones (CTA)** | `#c51f5d` / `#d92759` | Crimson Magenta |
| **Texto Principal** | `#ffffff` | White |

---

## Tecnologías Utilizadas

* **React:** Librería principal de interfaz de usuario.
* **Vite:** Empaquetador y entorno de desarrollo de alto rendimiento.


* **Tailwind:** Framework de estilos para diseño adaptable e interactivo.


* **React Router DOM** Manejo de rutas del lado del cliente utilizando `HashRouter` para compatibilidad con GitHub Pages.



---



