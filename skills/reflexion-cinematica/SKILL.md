---
name: reflexion-cinematica
description: Producción de Shorts originales de reflexión y motivación en español, con personajes 2D integrados en escenarios 3D, diálogo, música original y QA audiovisual.
---

# Reflexión cinematográfica — AI VIDEO FACTORY

## Origen y licencia
Adaptación de técnicas del archivo suministrado por el usuario `claude-animated-shorts-main.zip` (skill original `cartoon-3d-short`). Revisar su LICENSE antes de redistribuir plantillas. No copiar guiones, personajes, fotogramas de referencia ni videos privados. Esta adaptación es un flujo de trabajo, no un motor 3D ya instalado.

## Contrato creativo
- Español latinoamericano; narración y diálogos originales.
- Gancho emocional en los primeros 0–2 segundos; sin introducción de marca.
- Tres actos: pregunta que duele → conflicto humano → transformación y cierre memorable.
- Escenas visuales, no solo texto: personajes consistentes, gestos, miradas, manos y acciones con significado.
- Evitar frases genéricas repetidas y melodrama artificial; mostrar una decisión concreta del protagonista.
- Cierre que responda al gancho y motive a compartir, sin promesas falsas.
- Subtítulos legibles opcionales y preferidos para redes sociales; el skill original los prohíbe, pero aquí se permiten por elección del usuario.

## Estándar visual
- Vertical 9:16, composición base 1080x1920, 30 fps; entrega opcional 1440x2560 con escala 1.3333.
- Personajes 2D tipo ilustración con contornos expresivos y sombreado por iluminación de escena; fondos 3D pintados.
- Siluetas reconocibles y consistencia de vestuario, altura, proporciones y paleta en todos los planos.
- Luz cálida para esperanza, sombras frías para conflicto, niebla del color del horizonte, profundidad de campo centrada en ojos.
- Cámara con push-ins suaves y desplazamientos motivados; evitar planos totalmente estáticos por más de cuatro segundos.
- Transiciones al cambiar de lugar o tiempo; evitar destellos innecesarios.
- Contraste y texto compatibles con visualización en teléfono.

## Narrativa y actuación
1. Escribir logline y guion original con tiempos estimados y lista de personajes.
2. Preparar hoja de personajes: apariencia, voz, expresiones, postura, vestuario y continuidad.
3. Dividir en beats y planos; alinear reacción visual con cada frase.
4. Crear storyboard y animática antes del render final.
5. Validar que cada escena cambie algo en la historia; no usar personajes que solo abren y cierran la boca.

## Audio
- Diálogo en español con voces diferenciadas y pronunciación comprensible; usar TTS de calidad solo si está disponible y autorizado.
- Música original y emocional, con progresión armónica que acompañe el arco narrativo; nunca copiar canciones comerciales.
- Efectos diegéticos moderados y sincronizados.
- Mezcla objetivo: -14 LUFS integrados, picos verdaderos no superiores a -1 dBTP; voz inteligible, música atenuada durante el diálogo.
- Guardar stems de voz, música y efectos; no afirmar voces naturales cuando sean sintéticas rudimentarias.

## Tecnología propuesta
- Remotion + React + Three.js + @react-three/fiber + @remotion/three, versiones compatibles y probadas.
- Reutilizar como referencias de implementación las plantillas originales: toon.ts, cast.ts, world.ts, lights.ts, shade.ts, ink.ts, lensblur.ts, grade.ts y story.ts.
- Audio: sintetizador de música y SFX original o biblioteca con licencia adecuada; FFmpeg para mezcla y empaquetado.
- No copiar el ejemplo de puente como si fuera una composición genérica lista para cualquier historia: contiene geometría, personajes y timings específicos.

## Puertas de calidad
1. Guion: gancho, claridad, emoción, final con sentido.
2. Diseño: personajes consistentes, perspectiva, iluminación, ausencia de recortes.
3. Audio: voces claras, sincronización, niveles correctos, sin silencios accidentales.
4. Render: sin fotogramas negros/blancos inesperados, congelaciones, saltos ni flashes.
5. Archivo: MP4 H.264, audio AAC, duración correcta, formato 9:16, reproducción verificada.
6. Solo declarar «video terminado» después de verificar archivo y QA.

## Modo de trabajo
El usuario solo describe la idea en ChatGPT. El asistente genera el guion, actualiza los archivos de solicitud y ejecuta herramientas disponibles. Si una herramienta de voz, 3D o render no está disponible, señalar la limitación y producir una alternativa sin fingir calidad cinematográfica.
