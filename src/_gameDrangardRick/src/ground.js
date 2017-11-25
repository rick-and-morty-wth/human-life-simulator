import * as materials from './materials.js';
import * as collisGr from './collisionGroups.js';

// Object
let plane = new p2.Body({
    position: [-1, 1.5 * 0]
});

// Shape
let planeShape = new p2.Plane()
planeShape.collisionGroup = collisGr.GROUND;
planeShape.collisionMask = collisGr.BODYPARTS | collisGr.OTHER;

// Connect Object with shape
plane.addShape(planeShape);

export {plane}