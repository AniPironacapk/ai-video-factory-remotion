import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

type Scene = {title: string; subtitle: string};
export type VideoProps = {
  title: string;
  subtitle: string;
  accent: string;
  scenes: Scene[];
};

export const Video: React.FC<VideoProps> = ({title, subtitle, accent, scenes}) => {
  const frame = useCurrentFrame();
  const {fps, durationInFrames} = useVideoConfig();
  const safeScenes = scenes?.length ? scenes : [{title, subtitle}];
  const framesPerScene = durationInFrames / safeScenes.length;
  const sceneIndex = Math.min(safeScenes.length - 1, Math.floor(frame / framesPerScene));
  const localFrame = frame - sceneIndex * framesPerScene;
  const scene = safeScenes[sceneIndex];
  const entrance = spring({frame: localFrame, fps, config: {damping: 18, stiffness: 80}});
  const sceneOpacity = interpolate(localFrame, [0, 12, framesPerScene - 16, framesPerScene], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const fadeOut = interpolate(frame, [durationInFrames - 12, durationInFrames], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const glow = interpolate(frame, [0, durationInFrames], [0, 200]);
  return (
    <AbsoluteFill style={{background: 'linear-gradient(160deg, #080b20, #191442 60%, #090c20)', color: 'white', fontFamily: 'Arial, sans-serif', overflow: 'hidden', opacity: fadeOut}}>
      <div style={{position: 'absolute', top: 250 - glow * 0.4, left: -240, width: 900, height: 900, borderRadius: '50%', background: accent, opacity: 0.23, filter: 'blur(150px)'}} />
      <div style={{position: 'absolute', bottom: 180 + glow * 0.2, right: -290, width: 820, height: 820, borderRadius: '50%', background: '#06b6d4', opacity: 0.2, filter: 'blur(150px)'}} />
      <div style={{position: 'absolute', top: 160, left: 90, fontSize: 34, fontWeight: 800, letterSpacing: 9, color: '#c4b5fd'}}>AI VIDEO FACTORY 2D</div>
      <div style={{position: 'absolute', top: 550, left: 95, right: 95, transform: `translateY(${(1 - entrance) * 130}px) scale(${0.92 + entrance * 0.08})`, opacity: entrance * sceneOpacity}}>
        <div style={{width: 140, height: 12, borderRadius: 8, background: accent, marginBottom: 62}} />
        <div style={{fontSize: 104, fontWeight: 900, lineHeight: 1.1, overflowWrap: 'anywhere'}}>{scene.title}</div>
        <div style={{fontSize: 54, marginTop: 56, lineHeight: 1.3, color: '#d8d9f4'}}>{scene.subtitle}</div>
      </div>
      <div style={{position: 'absolute', bottom: 170, left: 95, right: 95, height: 5, borderRadius: 10, background: '#ffffff30'}}>
        <div style={{height: '100%', width: `${(frame / Math.max(1, durationInFrames - 1)) * 100}%`, borderRadius: 10, background: accent}} />
      </div>
    </AbsoluteFill>
  );
};
