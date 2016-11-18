import React from 'react';
import { Entity } from 'aframe-react';
import { Visor } from './visor.jsx';

export const VisorCam = () =>
  <Entity camera look-controls>
    <Visor/>
  </Entity>;
