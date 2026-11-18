import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export type VideoProps = {
  title: string;
  subtitle: string;
  accent: string;
};

export const Video: React.FC<VideoProps> = ({title, subtitle, accent}) => {
  const frame = useCurrentFrame();
  const {fps, durationInFrames} = useVideoConfig();
  const entrance = spring({frame, fps, config: {damping: 16, stiffness: 90}});
  const fadeOut = interpolate(frame, [durationInFrames - 20, durationInFrames], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const glow = interpolate(frame, [0, durationInFrames], [0, 180]);
  return (
    <AbsoluteFill style={{background: 'linear-gradient(160deg, #080b20, #191442 60%, #090c20)', color: 'white', fontFamily: 'Arial, sans-serif', overflow: 'hidden', opacity: fadeOut}}>
      <div style={{position: 'absolute', top: 270 - glow * 0.4, left: -240, width: 900, height: 900, borderRadius: '50%', background: accent, opacity: 0.23, filter: 'blur(150px)'}} />
      <div style={{position: 'absolute', bottom: 200 + glow * 0.2, right: -290, width: 820, height: 820, borderRadius: '50%', background: '#06b6d4', opacity: 0.2, filter: 'blur(150px)'}} />
      <div style={{position: 'absolute', top: 160, left: 90, fontSize: 34, fontWeight: 800, letterSpacing: 9, color: '#c4b5fd'}}>AI VIDEO FACTORY 2D</div>
      <div style={{position: 'absolute', top: 550, left: 95, right: 95, transform: `translateY(${(1 - entrance) * 130}px) scale(${0.92 + entrance * 0.08})`, opacity: entrance}}>
        <div style={{width: 140, height: 12, borderRadius: 8, background: accent, marginBottom: 62}} />
        <div style={{fontSize: 108, fontWeight: 900, lineHeight: 1.1, overflowWrap: 'anywhere'}}>{title}</div>
        <div style={{fontSize: 55, marginTop: 56, lineHeight: 1.3, color: '#d8d9f4'}}>{subtitle}</div>
      </div>
      <div style={{position: 'absolute', bottom: 170, left: 95, right: 95, height: 5, borderRadius: 10, background: '#ffffff30'}}>
        <div style={{height: '100%', width: `${(frame / (durationInFrames - 1)) * 100}%`, borderRadius: 10, background: accent}} />
      </div>
    </AbsoluteFill>
  );
};
