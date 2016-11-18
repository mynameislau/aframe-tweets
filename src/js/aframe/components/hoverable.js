import AFRAME from 'aframe';
import HSLToHex from 'hsl-to-hex';
import hexToHSL from 'hsl-to-hex';

AFRAME.registerComponent('hoverable', {
  schema: { type: 'color', default: '#FFFF00' },
  init: function () {
    this.el.addEventListener('mouseenter', () => {
      const color = this.el.getAttribute('material').color;
      console.log(this.data);
      this.el.setAttribute('material', 'color', this.data);
      this.el.addEventListener('mouseleave', () => {
        this.el.setAttribute('material', 'color', color);
      });
    });
  }
});
