import AFRAME from 'aframe';

AFRAME.registerComponent('rotate-on-tick', {
  tick: function (t, dt) {
    if (this.el) {
      this.el.object3D.rotation.x += Math.random() * .002;
      this.el.object3D.rotation.y += Math.random() * .002;
      this.el.object3D.rotation.z += Math.random() * .002;
      this.el.object3D.position.y += .002;
    }
  }
});
