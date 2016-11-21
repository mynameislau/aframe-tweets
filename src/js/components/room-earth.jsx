import AFRAME from 'aframe';
import { connect } from 'react-redux';
import React from 'react';
import { Entity } from 'aframe-react';
import '../aframe/components/navigate-on-click';
import { VisorCam } from './visor-cam.jsx';

const mapStateToProps = state => ({
  tweets: state.tweets
});

// const lonLatToVector3 = ( lon, lat ) =>
// {    //flips the Y axis
//   const polar   = (90 - lat) * (Math.PI / 180);
//   const azimuth = (180 - lon) * (Math.PI / 180);
//   const radius = 1;
//
//   console.log(polar, azimuth, radius);
//
//     //distribute to sphere
//     return [
//       radius * Math.sin(polar) * Math.cos(azimuth),
//       radius * Math.cos(polar)
//       -radius * Math.sin(polar) * Math.sin(azimuth),
//     ];
//
// }

/**
	 * Converts a latlong to Vector3 for use in Three.js
	 */
	function lonLatToVector3 (lon, lat, radius = 1) {
	  const phi = (90 - lat) * Math.PI / 180;
	  const theta = (180 - lon) * Math.PI / 180;

    return [
      Math.sin(phi) * Math.cos(theta) * radius,
      Math.cos(phi) * radius,
      -Math.sin(phi) * Math.sin(theta) * radius
    ]
	};

const component = ({ tweets }) =>
  <Entity>
    <VisorCam/>
    <Entity primitive="a-sky" material="src: url(assets/earth3.jpg)"/>
    {
      tweets.map(tweet => {
        //console.log(tweet);
        const vec3D = lonLatToVector3(tweet[0], tweet[1], 10).map(pos => pos);
        console.log(vec3D);
        return <Entity geometry="primitive: sphere; radius: 0.05;" material="color: red; shader: flat" position={`${vec3D[0]} ${vec3D[1]} ${vec3D[2]}`}/>;
      })
    }
  </Entity>;

export const RoomEarth = connect(mapStateToProps)(component);
