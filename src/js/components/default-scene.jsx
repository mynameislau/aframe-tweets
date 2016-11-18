import React from 'react';
import { Scene } from 'aframe-react';

export const DefaultScene = ({ children }) =>
  <Scene inspector="url: https://aframe.io/releases/0.3.0/aframe-inspector.min.js">
    {children}
  </Scene>;
