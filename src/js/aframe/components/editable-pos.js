import AFRAME from 'aframe';
import { browserHistory } from 'react-router';
import { editPosAction } from '../../actions/rooms';

export const initEditablePos = store => AFRAME.registerComponent('editable-pos', {
  schema: {
    id: { default: null },
    name: { default: null }
  },
  init () {
    window.navAnchors = window.navAnchors || [];
    window.navAnchors.push(this.el);

    this.el.addEventListener('click', () => {
      if (window.debugNavAnchors) {
        document.addEventListener('keydown', event => {
          const editPosition = () => {
            const key = event.key;
            const prevPos = this.el.getAttribute('position');

            const add = val => val + 0.1;
            const substract = val => val - 0.1;

            const mapping = {
              'o': { coord: 'x', 'func': substract },
              'l': { coord: 'x', 'func': add },
              'k': { coord: 'z', 'func': substract },
              'm': { coord: 'z', 'func': add },
              'i': { coord: 'y', 'func': add },
              'p': { coord: 'y', 'func': substract }
            };

            if (!mapping[key]) {
              return;
            }

            const toMerge = {};
            const coord = mapping[key].coord;
            const func = mapping[key].func;


            toMerge[coord] = func(prevPos[coord]);

            const newPos = Object.assign({}, prevPos, toMerge);

            // console.log(newPos);
            // this.el.setAttribute('position', newPos);

            store.dispatch(editPosAction(this.data.name, this.data.id, Object.values(newPos)));
          };

          const intervalID = window.setInterval(editPosition, 20);

          document.addEventListener('keyup', () => window.clearInterval(intervalID));
        });
      }
    });
  }
});
