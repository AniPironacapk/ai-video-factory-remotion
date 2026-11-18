import React from 'react';
import {Composition} from 'remotion';
import {Video, type VideoProps} from './video';
import request from '../video-request.json';

const defaults: VideoProps = {
  title: request.title,
  subtitle: request.subtitle,
  accent: request.accent,
  scenes: request.scenes,
};

export const Root: React.FC = () => (
  <Composition
    id="Video"
    component={Video}
    durationInFrames={720}
    fps={30}
    width={1080}
    height={1920}
    defaultProps={defaults}
  />
);
