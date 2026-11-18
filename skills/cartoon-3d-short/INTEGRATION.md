# Integración de cartoon-3d-short

El usuario proporcionó `claude-animated-shorts-main.zip`, un skill para Claude Code. El paquete completo incluye `SKILL.md`, `templates/bridge`, `templates/audio`, `templates/scripts` y `references`.

Este documento registra la integración planeada con AI VIDEO FACTORY; **no sustituye la instalación completa del skill**.

## Requisitos adicionales
- `three`, `@react-three/fiber`, `@remotion/three`, y Remotion compatibles.
- Python 3, FFmpeg, Node.js y espacio de almacenamiento suficiente.
- Un proyecto de composición 3D adaptado al guion de cada video.

## Flujo deseado
1. Recibir tema y duración en el chat.
2. Redactar guion en español con gancho, desarrollo y cierre.
3. Diseñar personajes y planos originales.
4. Renderizar animación 2D/3D con Remotion.
5. Añadir voz, música original y efectos si están disponibles.
6. Validar el MP4 y guardar el artefacto.

## Estado
El repositorio actual aún renderiza el MVP de texto animado. No activar el render 3D sin haber integrado y probado las dependencias.
