import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import { Entity, Scene } from 'aframe-react';
import { getRoomsFromFileAction } from './actions/rooms';

import { squaresReducer } from './reducers/squares';
import { roomsReducer } from './reducers/rooms';
import { tweetsReducer } from './reducers/tweets';

import { addTweet } from './actions/tweets';

import { DefaultScene } from './components/default-scene';
import { ExportPage } from './components/export-page';
import { RoomCubes } from './components/room-cubes';
import { RoomEarth } from './components/room-earth';
import { Room } from './components/room';
import io from 'socket.io-client';

import { initEditablePos } from './aframe/components/editable-pos';
import { initToggleDebug } from './aframe/components/toggle-debug';
import './aframe/components/display-life';
import './aframe/components/rotate-on-tick';
import 'kframe';

// console.log('nope');

const store = createStore(combineReducers({
  squares: squaresReducer,
  rooms: roomsReducer,
  tweets: tweetsReducer
}));

const socket = io.connect('localhost:1337');

socket.on('tweet', data => store.dispatch(addTweet(data)));

window.fetch('assets/data.json')
.then(response => {
  if (response.ok) {
    return response.text();
  }

  return Promise.reject();
})
.then(text => {
  const roomsData = JSON.parse(text);

  store.dispatch(getRoomsFromFileAction(roomsData));
})
.catch(reason => console.log(reason));

initEditablePos(store);
initToggleDebug(store);

window.addEventListener('load', () => {
  ReactDOM.render(
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/">
            <IndexRedirect to="/room/devs"/>
          </Route>
          <Route path="/room" component={DefaultScene}>
            <Route path="/room/cubes" component={RoomCubes}/>
            <Route path="/room/earth" component={RoomEarth}/>
            <Route path="/room/:roomName" component={Room}/>
          </Route>
          <Route path="/export" component={ExportPage}/>
        </Router>
      </Provider>

    , document.getElementById('app'));
});

    // document.body.innerHTML = `
    // <a-scene
      //   inspector="url: https://aframe.io/releases/0.3.0/aframe-inspector.min.js"
      // >
      //   <a-sky color="#9ae1ff" src=""></a-sky>
      //   <a-sphere radius="2" position="0.03 2.32 -10.99" src="assets/texture.jpg" rotation="0 24.27 0">
      //     <a-animation attribute="rotation" dur="10000" fill="forwards" to="0 360 0" repeat="indefinite">
      //     </a-animation>
      //   </a-sphere>
      //   <a-entity
      //     geometry="primitive: plane; height: 100; width: 100"
      //     material="side:back;shader:flat;color:#75ba18"
      //     rotation="90 0 0"
      //   >
      //   </a-entity>
      // </a-scene>
      // `

      //       var scene = document.querySelector('a-scene');
      // if (scene.hasLoaded) {
      //   run();
      // } else {
      //   scene.addEventListener('loaded', run);
      // }
      // function run () {
      //   console.log('ok')
      //   var entity = scene.querySelector('a-entity');
      //   //entity.setAttribute('material', 'color', 'red');
      //   document.querySelectorAll('.cube').forEach(cube => {
      //     console.log(cube);
      //     cube.addEventListener('mouseenter', function () {
      //
      //       const intervalID = setInterval(() => {
      //         const data = squares[Number(cube.id)];
      //         data.life = data.life - 0.1;
      //       }, 50);
      //
      //       cube.addEventListener('mouseleave', () => clearInterval(intervalID));
      //     });
      //   });
      // }
