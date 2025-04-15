# Juego del Ahorcado

## Descripcion
El Juego del Ahorcado es un proyecto web interactivo desarrollado con HTML, CSS y JavaScript. El objetivo del juego es adivinar una palabra oculta ingresando letras una por una. Si el jugador adivina todas las letras antes de quedarse sin intentos, gana. De lo contrario, pierde y se revela la palabra completa.

Este proyecto incluye:
- Modo oscuro: Diseno moderno y minimalista.
- Palabras comunes en espanol: Cada palabra tiene una pista asociada.
- Interactividad avanzada: Envía letras presionando "Enter" y disfruta de botones intuitivos como "Reintentar" y "Siguiente".
- Animaciones y SVG: Representacion visual del ahorcado con graficos vectoriales.
- Responsivo: Se adapta perfectamente a dispositivos moviles y pantallas grandes.

## Caracteristicas Principales
1. Diseno Responsivo:
   - Compatible con dispositivos moviles, tablets y escritorios.
2. Modo Oscuro:
   - Paleta de colores oscura con detalles en morado para una experiencia visual atractiva.
3. Mensajes Temporales:
   - Los mensajes de victoria, derrota o errores desaparecen automaticamente despues de unos segundos.
4. Pistas Utiles:
   - Cada palabra tiene una pista asociada que ayuda al jugador a adivinarla.
5. Botones Intuitivos:
   - Boton "Siguiente" para pasar a una nueva palabra despues de ganar.
   - Boton "Reintentar" para reiniciar el juego despues de perder.
6. Lista Ampliada de Palabras:
   - Incluye mas de 40 palabras comunes en espanol con pistas utiles.

## Tecnologias Utilizadas
- HTML5: Estructura basica del sitio web.
- CSS3: Diseno responsivo y modo oscuro.
- JavaScript: Logica interactiva del juego.
- Google Fonts: Fuente personalizada (Poppins) para mejorar la legibilidad.
- SVG: Representacion visual dinamica del ahorcado.

## Estructura del Proyecto
proyecto-ahorcado/
├── index.html         (Pagina de inicio)
├── game.html          (Pagina del juego)
├── about.html         (Acerca de)
├── contact.html       (Contacto)
├── css/
│   ├── global.css     (Estilos globales)
│   ├── index.css      (Estilos especificos de la pagina de inicio)
│   ├── game.css       (Estilos especificos del juego)
│   ├── about.css      (Estilos especificos de "Acerca de")
│   └── contact.css    (Estilos especificos de "Contacto")
└── js/
    └── game.js        (Logica del juego)

## Como Jugar
1. Inicia el Juego:
   - Abre el archivo `index.html` en tu navegador.
   - Haz clic en el boton "Jugar" para comenzar.
2. Adivina la Palabra:
   - Ingresa una letra en el campo de texto y presiona "Enter".
   - Si la letra esta en la palabra, se mostrara en su posicion correspondiente.
   - Si no, se dibujara una parte del ahorcado y se reduciran tus intentos restantes.
3. Gana o Pierde:
   - Si adivinas todas las letras antes de quedarte sin intentos, ganaste.
   - Si te quedas sin intentos, se revelara la palabra completa y podras reintentar.

## Requisitos
- Un navegador moderno (Chrome, Firefox, Edge, etc.).
- No se requieren dependencias adicionales.

## Contribuciones
Si deseas contribuir a este proyecto, sigue estos pasos:
1. Haz un fork del repositorio.
2. Crea una rama para tu nueva funcionalidad: `git checkout -b feature/nueva-funcionalidad`.
3. Realiza tus cambios y haz commit: `git commit -m "Anadir nueva funcionalidad"`.
4. Sube tus cambios: `git push origin feature/nueva-funcionalidad`.
5. Abre un Pull Request describiendo tus cambios.


## Licencia
Este proyecto esta bajo la licencia [MIT](LICENSE). Puedes usar, modificar y distribuir este codigo libremente.

## Autores
- Nombre: Alejandro Cabana
- Nombre: Olga Ramos
- Nombre: Diego Mendoza

## Agradecimientos
- Inspirado en el clasico juego del Ahorcado.
- Gracias a Google Fonts por proporcionar fuentes gratuitas y modernas.
- Creditos a los colaboradores del equipo por su dedicacion y esfuerzo.


Gracias por jugar.
