import React from 'react';
import {Composition} from 'remotion';
import {Video, type VideoProps} from './video';

const defaults: VideoProps = {
  title: 'AI VIDEO FACTORY',
  subtitle: 'Tu historia cobra vida',
  accent: '#7c3aed',
};

export const Root: React.FC = () => (
  <Composition
    id="Video"
    component={Video}
    durationInFrames={240}
    fps={30}
    width={1080}
    height={1920}
    defaultProps={defaults}
  />
);
