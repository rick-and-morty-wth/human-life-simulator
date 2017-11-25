import * as materials from './materials.js';
import * as collisGr from './collisionGroups.js';

const shouldersDistance = 0.5,
    upperArmLength = 0.4,
    lowerArmLength = 0.4,
    upperArmSize = 0.2,
    lowerArmSize = 0.2,
    neckLength = 0.1,
    headRadius = 0.25,
    upperBodyLength = 0.6,
    pelvisLength = 0.4,
    upperLegLength = 0.5,
    upperLegSize = 0.2,
    lowerLegSize = 0.2,
    lowerLegLength = 0.5;

var bodyPartShapes = [];


var headShape = new p2.Circle({ radius: headRadius }),
    upperArmShapeLeft = new p2.Box({ width: upperArmLength, height: upperArmSize }),
    upperArmShapeRight = new p2.Box({ width: upperArmLength, height: upperArmSize }),
    lowerArmShapeLeft = new p2.Box({ width: lowerArmLength, height: lowerArmSize }),
    lowerArmShapeRight = new p2.Box({ width: lowerArmLength, height: lowerArmSize }),
    upperBodyShape = new p2.Box({ width: shouldersDistance, height: upperBodyLength }),
    pelvisShape = new p2.Box({ width: shouldersDistance, height: pelvisLength }),
    upperLegShapeLeft = new p2.Box({ width: upperLegSize, height: upperLegLength }),
    upperLegShapeRight = new p2.Box({ width: upperLegSize, height: upperLegLength }),
    lowerLegShapeLeft = new p2.Box({ width: lowerLegSize, height: lowerLegLength }),
    lowerLegShapeRight = new p2.Box({ width: lowerLegSize, height: lowerLegLength });

export let shapes = {
    headShape,
    upperArmShapeLeft,
    upperArmShapeRight,
    lowerArmShapeLeft,
    lowerArmShapeRight,
    upperBodyShape,
    pelvisShape,
    upperLegShapeLeft,
    upperLegShapeRight,
    lowerLegShapeLeft,
    lowerLegShapeRight
}

bodyPartShapes.push(
    headShape,
    upperArmShapeRight,
    upperArmShapeLeft,
    lowerArmShapeRight,
    lowerArmShapeLeft,
    upperBodyShape,
    pelvisShape,
    upperLegShapeRight,
    upperLegShapeLeft,
    lowerLegShapeRight,
    lowerLegShapeLeft
);

for (var i = 0; i < bodyPartShapes.length; i++) {
    var s = bodyPartShapes[i];
    s.collisionGroup = collisGr.BODYPARTS;
    s.collisionMask = collisGr.GROUND | collisGr.OTHER;
}

// Lower legs
export var lowerLeftLeg = new p2.Body({
    mass: 1,
    position: [-shouldersDistance / 2, lowerLegLength / 2],
});

export var lowerRightLeg = new p2.Body({
    mass: 1,
    position: [shouldersDistance / 2, lowerLegLength / 2],
});

// Upper legs
export var upperLeftLeg = new p2.Body({
    mass: 1,
    position: [-shouldersDistance / 2, lowerLeftLeg.position[1] + lowerLegLength / 2 + upperLegLength / 2],
    material: materials.wheelMaterial
});

export var upperRightLeg = new p2.Body({
    mass: 1,
    position: [shouldersDistance / 2, lowerRightLeg.position[1] + lowerLegLength / 2 + upperLegLength / 2],
});

// Pelvis
export var pelvis = new p2.Body({
    mass: 1,
    position: [0, upperLeftLeg.position[1] + upperLegLength / 2 + pelvisLength / 2],
});

// Upper body
export var upperBody = new p2.Body({
    mass: 1,
    position: [0, pelvis.position[1] + pelvisLength / 2 + upperBodyLength / 2],
});

// Head
export var head = new p2.Body({
    mass: 1,
    position: [0, upperBody.position[1] + upperBodyLength / 2 + headRadius + neckLength],
});

// Upper arms
export var upperLeftArm = new p2.Body({
    mass: 1,
    position: [-shouldersDistance / 2 - upperArmLength / 2, upperBody.position[1] + upperBodyLength / 2],
});
export var upperRightArm = new p2.Body({
    mass: 1,
    position: [shouldersDistance / 2 + upperArmLength / 2, upperBody.position[1] + upperBodyLength / 2],
});

// lower arms
export var lowerLeftArm = new p2.Body({
    mass: 1,
    position: [upperLeftArm.position[0] - lowerArmLength / 2 - upperArmLength / 2,
    upperLeftArm.position[1]],
});

export var lowerRightArm = new p2.Body({
    mass: 1,
    position: [upperRightArm.position[0] + lowerArmLength / 2 + upperArmLength / 2,
    upperRightArm.position[1]],
});

// Neck joint
export var neckJoint = new p2.RevoluteConstraint(head, upperBody, {
    localPivotA: [0, -headRadius - neckLength / 2],
    localPivotB: [0, upperBodyLength / 2],
});

// Knee joints
export var leftKneeJoint = new p2.RevoluteConstraint(lowerLeftLeg, upperLeftLeg, {
    localPivotA: [0, lowerLegLength / 2],
    localPivotB: [0, -upperLegLength / 2],
});

export var rightKneeJoint = new p2.RevoluteConstraint(lowerRightLeg, upperRightLeg, {
    localPivotA: [0, lowerLegLength / 2],
    localPivotB: [0, -upperLegLength / 2],
});

// Hip joints
export var leftHipJoint = new p2.RevoluteConstraint(upperLeftLeg, pelvis, {
    localPivotA: [0, upperLegLength / 2],
    localPivotB: [-shouldersDistance / 2, -pelvisLength / 2],
});

export var rightHipJoint = new p2.RevoluteConstraint(upperRightLeg, pelvis, {
    localPivotA: [0, upperLegLength / 2],
    localPivotB: [shouldersDistance / 2, -pelvisLength / 2],
});

// Spine
export var spineJoint = new p2.RevoluteConstraint(pelvis, upperBody, {
    localPivotA: [0, pelvisLength / 2],
    localPivotB: [0, -upperBodyLength / 2],
});

// Shoulders
export var leftShoulder = new p2.RevoluteConstraint(upperBody, upperLeftArm, {
    localPivotA: [-shouldersDistance / 2, upperBodyLength / 2],
    localPivotB: [upperArmLength / 2, 0],
});

export var rightShoulder = new p2.RevoluteConstraint(upperBody, upperRightArm, {
    localPivotA: [shouldersDistance / 2, upperBodyLength / 2],
    localPivotB: [-upperArmLength / 2, 0],
});

// Elbow joint
export var leftElbowJoint = new p2.RevoluteConstraint(lowerLeftArm, upperLeftArm, {
    localPivotA: [lowerArmLength / 2, 0],
    localPivotB: [-upperArmLength / 2, 0],
});

export var rightElbowJoint = new p2.RevoluteConstraint(lowerRightArm, upperRightArm, {
    localPivotA: [-lowerArmLength / 2, 0],
    localPivotB: [upperArmLength / 2, 0],
});
