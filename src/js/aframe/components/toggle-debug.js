import AFRAME from 'aframe';
import { browserHistory } from 'react-router';
import { createAnchorAction } from '../../actions/rooms';

export const initToggleDebug = store => AFRAME.registerComponent('toggle-debug', {
  schema: { type: 'string', defaultValue: null },
  init () {
    this.keyEvents = event => {
      if (event.key === 'u') {
        window.debugNavAnchors = !window.debugNavAnchors;
        console.log('debug toggled :', window.debugNavAnchors);
      }

      if (event.key === 'y') {
        browserHistory.push('/export');
      }

      if (event.key === 'h') {
        console.log('ok');
        store.dispatch(createAnchorAction(this.data));
      }
    };
    document.addEventListener('keyup', this.keyEvents);
  },
  remove () {
    document.removeEventListener('keyup', this.keyEvents);
  }
});
