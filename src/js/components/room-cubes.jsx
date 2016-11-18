import AFRAME from 'aframe';
import { connect } from 'react-redux';
import React from 'react';
import { Entity } from 'aframe-react';
import '../aframe/components/navigate-on-click';
import { VisorCam } from './visor-cam.jsx';

const mapStateToProps = state => ({
  squares: state.squares
});

const component = ({ squares }) =>
  <Entity>
    <VisorCam/>
    <Entity primitive="a-sky" material="color: #313131"/>
    {squares.map(squarePos =>
      <Entity className="cube" display-life rotate-on-tick key={squares.indexOf(squarePos)} id={squares.indexOf(squarePos)} life={squares[squares.indexOf(squarePos)].life} geometry={{primitive: 'box'}} material="color: white; opacity: 0.8" position={[squarePos.position[0], squarePos.position[1], squarePos.position[2]]}/>
      )}
    </Entity>

export const RoomCubes = connect(mapStateToProps)(component);
