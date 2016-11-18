import { connect } from 'react-redux';
import React from 'react';
import { Entity, Scene } from 'aframe-react';
import { VisorCam } from './visor-cam.jsx';
import { NavAnchor } from './nav-anchor.jsx';
import { Room } from './room.jsx';
import '../aframe/components/navigate-on-click';

const mapStateToProps = state => ({
  squares: state.squares
});

const component = ({ squares }) =>
  <Room skyTexture="assets/scala.jpg">
    <NavAnchor navigate-on-click="/room-b" position="0 0 5" />
  </Room>
export const RoomScala = connect(mapStateToProps)(component);

// const component = ({ squares }) =>
//   <Entity>
//     <VisorCam/>
//     <Entity primitive="a-sky" material="src: url(assets/scala.jpg)"/>
//     <NavAnchor navigate-on-click="/" />
//   </Entity>
// export default connect(mapStateToProps)(component);
