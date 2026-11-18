# AI VIDEO FACTORY 2D

Proyecto para generar videos animados 2D con React, Remotion y GitHub Actions.

## Primera versión (MVP)

- Video vertical 1080 × 1920 (9:16), 30 FPS, 8 segundos.
- Título y subtítulo personalizables.
- Fondo animado, entrada de texto y barra de progreso.
- Exportación MP4 H.264 usando GitHub Actions, sin instalar programas en el celular.

## Crear un video desde GitHub

1. Abre la pestaña **Actions** del repositorio.
2. Selecciona **Renderizar video MP4** en el menú de la izquierda.
3. Pulsa **Run workflow**, escribe el título y subtítulo, y confirma.
4. Espera a que la ejecución termine con marca verde.
5. Abre esa ejecución y descarga **ai-video-factory-mp4** desde **Artifacts**. Descomprime el ZIP para obtener `video.mp4`.

> Nota: GitHub Actions puede tener límites de uso y la ejecución aún debe comprobarse. Si el flujo falla, revisa el registro de la ejecución.

## Ejecutar en una computadora (opcional)

Requiere Node.js 20 o superior.

```bash
npm install
npm run studio
```

Para exportar localmente:

```bash
npm run render
```

El video se guarda en `out/video.mp4`.

## Próximos pasos

- Crear escenas múltiples y personajes 2D.
- Añadir narración y subtítulos.
- Construir una interfaz web para iniciar renders desde el teléfono.
- Mejorar duración y formatos de exportación.
