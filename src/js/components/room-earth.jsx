import AFRAME from 'aframe';
import { connect } from 'react-redux';
import React from 'react';
import { Entity } from 'aframe-react';
import '../aframe/components/navigate-on-click';
import { VisorCam } from './visor-cam.jsx';

const mapStateToProps = state => ({
  tweets: state.tweets
});

const lonLatToVector3 = ( lng, lat ) =>
{    //flips the Y axis
    lat = Math.PI / 2 - lat;

    //distribute to sphere
    return [
      Math.sin( lat ) * Math.sin( lng ),
      Math.cos( lat ),
      Math.sin( lat ) * Math.cos( lng )
    ];

}

const component = ({ tweets }) =>
  <Entity>
    <VisorCam/>
    <Entity primitive="a-sky" material="src: url(assets/earth3_bw.png)"/>
    {
      tweets.map(tweet => {
        const vec3D = lonLatToVector3(tweet[0], tweet[1]).map(pos => pos);
        console.log(vec3D);
        return <Entity geometry="primitive: box; width: 0.05; height: 0.05; depth: 0.05;" material="color: red" position={`${vec3D[0]} ${vec3D[1]} ${vec3D[2]}`}/>;
      })
    }
  </Entity>;

export const RoomEarth = connect(mapStateToProps)(component);
