// AFRAME.registerComponent("nozzle", {
//   schema: {},

//   init: function () {
//     console.log(
//       "-------------------------------------------------------------------------------------"
//     );
//   },
// });

// AFRAME.registerComponent("test", {
//   schema: {},

//   init: function () {
//     console.log(
//       "..................................................................................."
//     );
//   },
// });
// AFRAME.registerComponent("rotation-reader", {
//   /**
//    * We use IIFE (immediately-invoked function expression) to only allocate one
//    * vector or euler and not re-create on every tick to save memory.
//    */
//   tick: (function () {
//     var position = new THREE.Vector3();
//     var quaternion = new THREE.Quaternion();

//     return function () {
//       var worldPosition = this.el.object3D.getWorldPosition(position);
//       var quaternion = this.el.object3D.getWorldQuaternion(quaternion);
//       this.object3D.Quaternion.applyQuaternion(quaternion);
//       //   console.log(this.el.object3D.getWorldPosition());
//       // position and rotation now contain vector and quaternion in world space.
//     };
//   })(),
// });

AFRAME.registerComponent("rotation-reader", {
  /**
   * We use IIFE (immediately-invoked function expression) to only allocate one
   * vector or euler and not re-create on every tick to save memory.
   */

  tick: (function () {
    var position = new THREE.Vector3();
    var quaternion = new THREE.Quaternion();
    var direction = new THREE.direction();

    return function () {
      var worldPosition = this.el.object3D.getWorldPosition(position);
      var worldDirection = this.el.object3D.getWorldDirection();
      var worldQuaternion = this.el.object3D.getWorldQuaternion(quaternion);
      this.el.object3D.applyQuaternion(worldQuaternion);
      this.el.object3D.lookAt(worldDirection);
      this.el.object3D.localToWorld(worldPosition);
    };
  })(),
});
