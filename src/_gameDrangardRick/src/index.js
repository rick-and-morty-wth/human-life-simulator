import { r, thickness } from './constants.js';
import * as rick from './body.js';
import * as materials from './materials.js';
import * as collisGr from './collisionGroups.js';

var app = new p2.WebGLRenderer(function () {

    // Create the world
    var world = new p2.World({
        gravity: [0, -5]
    });

    this.setWorld(world);

    /**
     * Закидываем тело в сцену
     */

    // Lower legs
    world.addBody(rick.lowerLeftLeg);
    world.addBody(rick.lowerRightLeg);

    // Upper legs
    world.addBody(rick.upperLeftLeg);
    world.addBody(rick.upperRightLeg);

    // Pelvis
    world.addBody(rick.pelvis);

    // Upper body
    world.addBody(rick.upperBody);

    // Head
    world.addBody(rick.head);

    //Some
    world.addBody(rick.some_1);

    // Some_pivot
    world.addConstraint(rick.some_1_pivot);

    // Upper arms
    world.addBody(rick.upperLeftArm);
    world.addBody(rick.upperRightArm);

    // Lower arms
    world.addBody(rick.lowerLeftArm);
    world.addBody(rick.lowerRightArm);

    // Neck joint
    world.addConstraint(rick.neckJoint);

    // Knee joints
    world.addConstraint(rick.leftKneeJoint);
    world.addConstraint(rick.rightKneeJoint);

    // Hip joints
    world.addConstraint(rick.leftHipJoint);
    world.addConstraint(rick.rightHipJoint);

    // Spine
    world.addConstraint(rick.spineJoint);

    // Shoulders
    world.addConstraint(rick.leftShoulder);
    world.addConstraint(rick.rightShoulder);

    // Elbow joint
    world.addConstraint(rick.leftElbowJoint);
    world.addConstraint(rick.rightElbowJoint);

    // Create ground plane
    let plane = new p2.Body({
        position: [0, -r * 2]
    });

    let planeShape = new p2.Plane({ material: materials.groundMaterial })
    plane.addShape(planeShape);

    planeShape.collisionGroup = collisGr.GROUND;
    planeShape.collisionMask = collisGr.BODYPARTS | collisGr.OTHER;
    world.addBody(plane);
    this.newShapeCollisionGroup = collisGr.OTHER;
    this.newShapeCollisionMask = collisGr.BODYPARTS | collisGr.OTHER | collisGr.GROUND;

    world.addBody(plane);

    this.newShapeCollisionGroup = collisGr.OTHER;
    this.newShapeCollisionMask = collisGr.BODYPARTS | collisGr.OTHER | collisGr.GROUND;


    // Some staff
    let circleBody = new p2.Body({
        position: [6 + 6 + Math.random() * 3, -2] // Set initial position
    });

    circleBody.addShape(new p2.Circle({ radius: 5 * Math.random(), material: materials.groundMaterial }));
    world.addBody(circleBody);

    // Apply current engine torque after each step
    var left = 0, right = 0;
    world.on("postStep", function (evt) {
        rick.some_1.angularForce += (left - right) * 30;
    });

    this.on("keydown", function (evt) {
        switch (evt.keyCode) {
            case 39:
                right = 1;
                break;
            case 37:
                left = 1;
                break;
        }
    }).on("keyup", function (evt) {
        switch (evt.keyCode) {
            case 39:
                right = 0;
                break;
            case 37:
                left = 0;
                break;
        }
    });

    this.followBody = rick.head; // Make camera follow
    this.frame(0, 0, 10, 10);
});