# AI VIDEO FACTORY — instrucciones para agentes

## Objetivo
Crear videos verticales originales en español para redes sociales usando Remotion.

## Skill adjunto por el usuario
El paquete `claude-animated-shorts-main.zip` contiene el skill `cartoon-3d-short` (98 archivos extraídos) y se instaló en el entorno de trabajo de ChatGPT de la sesión en `/mnt/data/ai-video-factory-skills/cartoon-3d-short/`. **No está incorporado completo a este repositorio**. Para usarlo en otra máquina o sesión se debe suministrar de nuevo el ZIP o instalar el paquete.

## Adaptación
- Aprovechar la técnica de personajes 2D con contornos sobre entornos 3D con Three.js y Remotion.
- Conservar guiones, narración y textos en español, salvo que el usuario pida otro idioma.
- Los ejemplos históricos y personajes del skill son solo referencias técnicas; crear historias originales.
- No subir los fotogramas de referencia del skill a videos públicos.
- La versión actual de AI VIDEO FACTORY es un MVP de escenas con texto. La integración 3D, voz y audio requiere desarrollo y pruebas adicionales.
- Evitar servicios de pago y claves secretas por defecto.
- Mantener `video-request.json` como punto de entrada para solicitudes.
- Probar el render antes de afirmar que el MP4 está disponible.
