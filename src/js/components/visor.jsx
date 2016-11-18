import React from 'react';
import { Entity } from 'aframe-react';

export const Visor = () =>
  <Entity
    cursor="fuse: true; fuseTimeout: 500"
    position="0 0 -0.7"
    material="color: red; shader: flat;"
    geometry="primitive: ring; radiusOuter: 0.01; radiusInner: 0.005;"
  />;
