import { r, thickness } from './constants.js';
import * as rick from './body.js';
import * as materials from './materials.js';
import * as collisGr from './collisionGroups.js';
import * as ground from './ground.js';

var app = new p2.WebGLRenderer(function () {

    // Create the world
    var world = new p2.World({
        gravity: [0, -0.5]
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

    // // Bicycle
    // world.addBody(rick.bicycle);

    // // Pivot To Right Leg
    // world.addConstraint(rick.PivotToRightLeg);

    // // Pivot To Left Leg
    // world.addConstraint(rick.PivotToLeftLeg);


    // Create ground plane
    world.addBody(ground.plane);
    this.newShapeCollisionGroup = collisGr.OTHER;
    this.newShapeCollisionMask = collisGr.BODYPARTS | collisGr.OTHER | collisGr.GROUND;

    // Apply current engine torque after each step
    var left = 0;
    var right = 0;
    var up = 0;
    var bottom = 0;
    var isRight;
    var timers = {};
    var nextKick = true;
    var keylog = {};

    function convulsion(bodyPart, power) {
        bodyPart.force[0] = power[0];
        bodyPart.force[1] = power[1];
    }

    world.on("postStep", function (evt) {
        if (right && !keylog.right) {

            let name = 'right';
            console.log(name)
            clearTimeout(timers[name]);
            keylog[name] = true;
            timers[name] = setTimeout(() => { keylog[name] = undefined; }, 1300)

            convulsion(rick.upperRightLeg, [(right - left) * 800, 0])
        } else if (left && !keylog.left) {
            let name = 'left';
            console.log(name)
            clearTimeout(timers[name]);
            keylog[name] = true;
            timers[name] = setTimeout(() => { keylog[name] = undefined; }, 1300)

            convulsion(rick.upperLeftLeg, [0, (left - right) * 800])
        } else if (up && !keylog.up) {
            let name = 'up';
            console.log(name)
            clearTimeout(timers[name]);
            keylog[name] = true;
            timers[name] = setTimeout(() => { keylog[name] = undefined; }, 1300)

            convulsion(rick.pelvis, [0, 1300])
        }
    });


    this.on("keydown", function (evt) {
        switch (evt.keyCode) {
            case 39:
                right = 1;
                isRight = true;
                break;

            case 37:
                left = 1;
                isRight = false;
                break;

            case 32:
                up = 1;
                isRight = false;
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
            case 32:
                up = 0;
                break;

        }
    });

    this.followBody = rick.head; // Make camera follow
    this.frame(0, 0, 10, 10);
});