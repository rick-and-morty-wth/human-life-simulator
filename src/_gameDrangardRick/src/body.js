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
    lowerLegShapeRight = new p2.Box({ width: lowerLegSize, height: lowerLegLength }),
    some_shape = new p2.Circle({ radius: 0.3 });

    console.log(some_shape);
    some_shape.renderCanvas = function () {};

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
    lowerLegShapeRight,
    some_shape
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
    lowerLegShapeLeft,
    // some_shape
);

for (var i = 0; i < bodyPartShapes.length; i++) {
    var s = bodyPartShapes[i];
    s.collisionGroup = collisGr.BODYPARTS;
    s.collisionMask = collisGr.GROUND | collisGr.OTHER;
}

// Lower legs - Left
var lowerLeftLeg = new p2.Body({
    mass: 30,
    position: [-shouldersDistance / 2, lowerLegLength / 2],
});
lowerLeftLeg.addShape(shapes.lowerLegShapeLeft);
export {lowerLeftLeg}

// Lower legs - Right
var lowerRightLeg = new p2.Body({
    mass: 30 ,
    position: [shouldersDistance / 2, lowerLegLength / 2],
});
lowerRightLeg.addShape(shapes.lowerLegShapeRight);
export {lowerRightLeg}

// Upper legs - Left
var upperLeftLeg = new p2.Body({
    mass: 1,
    position: [-shouldersDistance / 2, lowerLeftLeg.position[1] + lowerLegLength / 2 + upperLegLength / 2],
});
upperLeftLeg.addShape(shapes.upperLegShapeLeft);
export {upperLeftLeg}

// Upper legs - Right
var upperRightLeg = new p2.Body({
    mass: 1,
    position: [shouldersDistance / 2, lowerRightLeg.position[1] + lowerLegLength / 2 + upperLegLength / 2],
});
upperRightLeg.addShape(shapes.upperLegShapeRight);
export {upperRightLeg}

// Pelvis
var pelvis = new p2.Body({
    mass: 1,
    position: [0, upperLeftLeg.position[1] + upperLegLength / 2 + pelvisLength / 2],
});
pelvis.addShape(shapes.pelvisShape);
export {pelvis}

// Upper body
var upperBody = new p2.Body({
    mass: 1,
    position: [0, pelvis.position[1] + pelvisLength / 2 + upperBodyLength / 2],
});
upperBody.addShape(shapes.upperBodyShape);
export {upperBody}

// Head
 var head = new p2.Body({
    mass: 1,
    position: [0, upperBody.position[1] + upperBodyLength / 2 + headRadius + neckLength],
});
head.addShape(shapes.headShape);
export {head}

// Upper arms Left
var upperLeftArm = new p2.Body({
    mass: 1,
    position: [-shouldersDistance / 2 - upperArmLength / 2, upperBody.position[1] + upperBodyLength / 2],
});
upperLeftArm.addShape(shapes.upperArmShapeLeft);
export {upperLeftArm}

// Upper arms Right
var upperRightArm = new p2.Body({
    mass: 1,
    position: [shouldersDistance / 2 + upperArmLength / 2, upperBody.position[1] + upperBodyLength / 2],
});
upperRightArm.addShape(shapes.upperArmShapeRight);
export {upperRightArm}

// lower arms Left
export var lowerLeftArm = new p2.Body({
    mass: 1,
    position: [upperLeftArm.position[0] - lowerArmLength / 2 - upperArmLength / 2,
    upperLeftArm.position[1]],
});
lowerLeftArm.addShape(shapes.lowerArmShapeLeft);

// lower arms Right
export var lowerRightArm = new p2.Body({
    mass: 1,
    position: [upperRightArm.position[0] + lowerArmLength / 2 + upperArmLength / 2,
    upperRightArm.position[1]],
});
lowerRightArm.addShape(shapes.lowerArmShapeRight);

// Neck joint
var neckJoint = new p2.RevoluteConstraint(head, upperBody, {
    localPivotA: [0, -headRadius - neckLength / 2],
    localPivotB: [0, upperBodyLength / 2],
});
neckJoint.setLimits(-Math.PI / 8, Math.PI / 8);
export {neckJoint}

// Knee joints - left
var leftKneeJoint = new p2.RevoluteConstraint(lowerLeftLeg, upperLeftLeg, {
    localPivotA: [0, lowerLegLength / 2],
    localPivotB: [0, -upperLegLength / 2],
});
leftKneeJoint.setLimits(-Math.PI / 8, Math.PI / 8);
export {leftKneeJoint}

// Knee joints - right
var rightKneeJoint = new p2.RevoluteConstraint(lowerRightLeg, upperRightLeg, {
    localPivotA: [0, lowerLegLength / 2],
    localPivotB: [0, -upperLegLength / 2],
});
rightKneeJoint.setLimits(-Math.PI / 8, Math.PI / 8);
export {rightKneeJoint}

// Hip joints - left
var leftHipJoint = new p2.RevoluteConstraint(upperLeftLeg, pelvis, {
    localPivotA: [0, upperLegLength / 2],
    localPivotB: [-shouldersDistance / 2, -pelvisLength / 2],
});
leftHipJoint.setLimits(-Math.PI / 8, Math.PI / 8);
export {leftHipJoint}

// Hip joints - right
var rightHipJoint = new p2.RevoluteConstraint(upperRightLeg, pelvis, {
    localPivotA: [0, upperLegLength / 2],
    localPivotB: [shouldersDistance / 2, -pelvisLength / 2],
});
rightHipJoint.setLimits(-Math.PI / 8, Math.PI / 8);
export {rightHipJoint}

// Spine
var spineJoint = new p2.RevoluteConstraint(pelvis, upperBody, {
    localPivotA: [0, pelvisLength / 2],
    localPivotB: [0, -upperBodyLength / 2],
});
spineJoint.setLimits(-Math.PI / 8, Math.PI / 8);
export {spineJoint}

// Shoulders - left
var leftShoulder = new p2.RevoluteConstraint(upperBody, upperLeftArm, {
    localPivotA: [-shouldersDistance / 2, upperBodyLength / 2],
    localPivotB: [upperArmLength / 2, 0],
});
leftShoulder.setLimits(-Math.PI / 3, Math.PI / 3);
export {leftShoulder}

// Shoulders - right
var rightShoulder = new p2.RevoluteConstraint(upperBody, upperRightArm, {
    localPivotA: [shouldersDistance / 2, upperBodyLength / 2],
    localPivotB: [-upperArmLength / 2, 0],
});
rightShoulder.setLimits(-Math.PI / 3, Math.PI / 3);
export {rightShoulder}

// Elbow joint - left
var leftElbowJoint = new p2.RevoluteConstraint(lowerLeftArm, upperLeftArm, {
    localPivotA: [lowerArmLength / 2, 0],
    localPivotB: [-upperArmLength / 2, 0],
});
leftElbowJoint.setLimits(-Math.PI / 8, Math.PI / 8);
export {leftElbowJoint}

// Elbow joint - right
var rightElbowJoint = new p2.RevoluteConstraint(lowerRightArm, upperRightArm, {
    localPivotA: [-lowerArmLength / 2, 0],
    localPivotB: [upperArmLength / 2, 0],
});
rightElbowJoint.setLimits(-Math.PI / 8, Math.PI / 8);
export {rightElbowJoint}

// // Bicycle
// var bicycle = new p2.Body({
//     mass: 2,
//     position: [1, 1],
// });
// bicycle.addShape(shapes.some_shape);
// export {bicycle}

// Pivot to right
// var PivotToRightLeg = new p2.RevoluteConstraint(bicycle, lowerRightLeg, {
//     localPivotA: [1 / 2, -1],
//     localPivotB: [1 / 2, -1],
// });
// PivotToRightLeg.setLimits(-Math.PI / 8, Math.PI / 8);
// export {PivotToRightLeg}

// // Pivot to left
// var PivotToLeftLeg = new p2.RevoluteConstraint(bicycle, lowerLeftLeg, {
//     localPivotA: [1, 1],
//     localPivotB: [1, 1],
// });
// PivotToLeftLeg.setLimits(-Math.PI / 8, Math.PI / 8);
// export {PivotToLeftLeg}