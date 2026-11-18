# AI VIDEO FACTORY 2D

Fábrica de videos 2D con **React + Remotion + GitHub Actions**.

## Cómo funciona desde ChatGPT

El usuario describe el video en el chat. El asistente, cuando tiene acceso al repositorio, prepara el guion y actualiza `video-request.json` con las escenas, títulos y colores. **Cada cambio en ese archivo inicia automáticamente el render** mediante GitHub Actions.

No es necesario editar código ni ejecutar comandos para solicitar un nuevo video.

## Estado del MVP

- Video vertical 1080 × 1920 (9:16).
- 24 segundos a 30 FPS, divididos entre las escenas solicitadas.
- Texto animado, fondos con color, transiciones y barra de progreso.
- MP4 H.264 generado en GitHub Actions.
- Archivo de salida descargable desde la ejecución, sección **Artifacts**, como `ai-video-factory-mp4` (ZIP).
- Sin servicios de IA de pago ni claves API.

**Pendiente:** comprobar una ejecución exitosa y ampliar con ilustraciones/personajes 2D, voces y música. El MVP actual solo anima textos y fondos; no genera personajes ni voz automáticamente.

## Archivo de solicitud

`video-request.json` contiene:

```json
{
  "project": "AI VIDEO FACTORY",
  "title": "Tu historia cobra vida",
  "subtitle": "Videos animados creados con inteligencia artificial",
  "accent": "#7c3aed",
  "scenes": [
    {"title": "Una idea", "subtitle": "Todo comienza con una historia"},
    {"title": "Se convierte en animación", "subtitle": "Texto, movimiento y creatividad"},
    {"title": "Y llega a tu pantalla", "subtitle": "AI VIDEO FACTORY 2D"}
  ]
}
```

## Ver el video generado

1. Abrir [GitHub Actions](https://github.com/AniPironacapk/ai-video-factory-remotion/actions/workflows/render-video.yml).
2. Entrar en la ejecución más reciente.
3. Si está en verde, descargar **ai-video-factory-mp4** en **Artifacts**.
4. Descomprimir el ZIP y abrir `video.mp4`.

Si falla, revisar el registro del paso que aparece en rojo.

## Ejecutar localmente (opcional)

Requiere Node.js 20 o superior.

```bash
npm install
npm run studio
npm run render
```

El resultado queda en `out/video.mp4`.

## Costos y límites

GitHub Actions tiene cuotas, límites y políticas que dependen de la cuenta y del repositorio. El sistema no promete renders ilimitados ni ejecución sin costo en todos los casos.
