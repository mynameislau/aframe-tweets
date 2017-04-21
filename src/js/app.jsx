import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Scene, Entity } from "aframe-react";

import { squaresReducer } from './reducers/squares';
import { tweetsReducer } from './reducers/tweets';

import { addTweet } from './actions/tweets';

import { RoomEarth } from './components/room-earth';
import io from 'socket.io-client';

import './aframe/components/display-life';
import './aframe/components/rotate-on-tick';
import 'kframe';

const store = createStore(combineReducers({
  squares: squaresReducer,
  tweets: tweetsReducer
}));

const socket = io.connect('localhost:1337');

socket.on('tweet', data => store.dispatch(addTweet(data)));

window.addEventListener('load', () => {
  ReactDOM.render(
    <Scene>
      <Provider store={store}>
          <RoomEarth/>
      </Provider>
    </Scene>

    , document.getElementById('app'));
});
