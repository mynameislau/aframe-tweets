import React from 'react';
import { Entity } from 'aframe-react';
import '../aframe/components/hoverable';

export const NavAnchor = props =>
  <Entity {...props} hoverable primitive="a-box" material="color: yellow;" animation__rot={{property: 'rotation', dur: 2000, loop: true, to: '360 360 360'}}
          animation__sca={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '1.1 1.1 1.1'}} />;
