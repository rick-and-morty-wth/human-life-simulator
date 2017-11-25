import {r, thickness} from './constants.js';
import * as rick from './body.js';
import * as materials from './materials.js';
import * as collisGr from './collisionGroups.js';

var app = new p2.WebGLRenderer(function () {

    // Create the world
    var world = new p2.World({
        gravity: [0, -5]
    });

    this.setWorld(world);

    // Create wheels
    var wheelBodyA = createWheel(world, [-2.2 * r, 0], materials.wheelMaterial);

    // // Create chassis
    // var chassisBody = new p2.Body({ mass: 1, position: [-0.3 * r, 2.2 * r] });
    // world.addBody(chassisBody);

    // // Constrain wheels to chassis: let them move vertically and rotate using a prismatic
    // var c1 = new p2.PrismaticConstraint(chassisBody, wheelBodyA, {
    //     localAnchorB: [0, 0],
    //     localAxisA: [0, 1],
    //     disableRotationalLock: true
    // });
    // world.addConstraint(c1);

/**
 * Соединяем части тела между собой и закидываем в сцену
 */
    // Lower legs
    rick.lowerLeftLeg.addShape(rick.shapes.lowerLegShapeLeft);
    rick.lowerRightLeg.addShape(rick.shapes.lowerLegShapeRight);
    world.addBody(rick.lowerLeftLeg);
    world.addBody(rick.lowerRightLeg);

    // Upper legs
    rick.upperLeftLeg.addShape(rick.shapes.upperLegShapeLeft);
    rick.upperRightLeg.addShape(rick.shapes.upperLegShapeRight);
    world.addBody(rick.upperLeftLeg);
    world.addBody(rick.upperRightLeg);

    // Pelvis
    rick.pelvis.addShape(rick.shapes.pelvisShape);
    world.addBody(rick.pelvis);

    // Upper body
    rick.upperBody.addShape(rick.shapes.upperBodyShape);
    world.addBody(rick.upperBody);

    // Head
    rick.head.addShape(rick.shapes.headShape);
    world.addBody(rick.head);

    // Upper arms
    rick.upperLeftArm.addShape(rick.shapes.upperArmShapeLeft);
    rick.upperRightArm.addShape(rick.shapes.upperArmShapeRight);
    world.addBody(rick.upperLeftArm);
    world.addBody(rick.upperRightArm);

    // lower arms
    rick.lowerLeftArm.addShape(rick.shapes.lowerArmShapeLeft);
    rick.lowerRightArm.addShape(rick.shapes.lowerArmShapeRight);
    world.addBody(rick.lowerLeftArm);
    world.addBody(rick.lowerRightArm);

    // Neck joint
    rick.neckJoint.setLimits(-Math.PI / 8, Math.PI / 8);
    world.addConstraint(rick.neckJoint);

    // Knee joints
    rick.leftKneeJoint.setLimits(-Math.PI / 8, Math.PI / 8);
    rick.rightKneeJoint.setLimits(-Math.PI / 8, Math.PI / 8);
    world.addConstraint(rick.leftKneeJoint);
    world.addConstraint(rick.rightKneeJoint);

    // Hip joints
    rick.leftHipJoint.setLimits(-Math.PI / 8, Math.PI / 8);
    rick.rightHipJoint.setLimits(-Math.PI / 8, Math.PI / 8);

    world.addConstraint(rick.leftHipJoint);
    world.addConstraint(rick.rightHipJoint);

    // Spine
    rick.spineJoint.setLimits(-Math.PI / 8, Math.PI / 8);
    world.addConstraint(rick.spineJoint);

    // Shoulders

    rick.leftShoulder.setLimits(-Math.PI / 3, Math.PI / 3);
    rick.rightShoulder.setLimits(-Math.PI / 3, Math.PI / 3);
    world.addConstraint(rick.leftShoulder);
    world.addConstraint(rick.rightShoulder);

    // Elbow joint
    rick.leftElbowJoint.setLimits(-Math.PI / 8, Math.PI / 8);
    rick.rightElbowJoint.setLimits(-Math.PI / 8, Math.PI / 8);
    world.addConstraint(rick.leftElbowJoint);
    world.addConstraint(rick.rightElbowJoint);

    //

world.addContactMaterial(materials.groundWheelContactMaterial);

    // Create ground plane
    let plane = new p2.Body({
        position: [0, -r * 2]
    });

    let planeShape = new p2.Plane({ material: materials.groundMaterial })
    plane.addShape(planeShape);

    planeShape.collisionGroup = collisGr.GROUND;
    planeShape.collisionMask =  collisGr.BODYPARTS|collisGr.OTHER;
    world.addBody(plane);
    this.newShapeCollisionGroup = collisGr.OTHER;
    this.newShapeCollisionMask =  collisGr.BODYPARTS|collisGr.OTHER|collisGr.GROUND;

    world.addBody(plane);

    this.newShapeCollisionGroup = collisGr.OTHER;
    this.newShapeCollisionMask = collisGr.BODYPARTS|collisGr.OTHER|collisGr.GROUND;

    // let circleBody = new p2.Body({
    //     position: [6 + 6 + Math.random() * 3, -2] // Set initial position
    // });

    // circleBody.addShape(new p2.Circle({ radius: 5 * Math.random(), material: materials.groundMaterial }));
    // world.addBody(circleBody);

    // Add circle bumps along the ground

    // Apply current engine torque after each step
    var left = 0, right = 0;
    world.on("postStep", function (evt) {
        wheelBodyA.angularForce += (left - right) * 30;
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

// Creates a soft wheel in the given world at the given position.
// Returns the center body.
function createWheel(world, position, material) {

    // Create the center circle body
    var wheelBody = new p2.Body({
        mass: 50,
        position: position
    });

    wheelBody.addShape(new p2.Circle({ radius: r / 3 }));
    world.addBody(wheelBody);

    return wheelBody;
}