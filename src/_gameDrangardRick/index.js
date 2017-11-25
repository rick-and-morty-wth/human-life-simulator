var N = 3, // Number of capsules in a wheel
    r = 1, // Radius of the wheel
    thickness = 0.18; // Thickness of the wheel capsules

var shouldersDistance = 0.5,
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


var app = new p2.WebGLRenderer(function () {

    // Create the world
    var world = new p2.World({
        gravity: [0, -5]
    });
    this.setWorld(world);

    var OTHER = Math.pow(2, 1),
        BODYPARTS = Math.pow(2, 2),
        GROUND = Math.pow(2, 3),
        OTHER = Math.pow(2, 4),
        bodyPartShapes = [];

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
        s.collisionGroup = BODYPARTS;
        s.collisionMask = GROUND | OTHER;
    }
    // Create a contact material between ground and wheels
    // We need to do this to add some extra friction
    var groundMaterial = new p2.Material();
    var wheelMaterial = new p2.Material();

    var groundWheelContactMaterial = new p2.ContactMaterial(groundMaterial, wheelMaterial, {
        friction: 30
    });
    // Lower legs
    var lowerLeftLeg = new p2.Body({
        mass: 1,
        position: [-shouldersDistance / 2, lowerLegLength / 2],
    });

    var lowerRightLeg = new p2.Body({
        mass: 1,
        position: [shouldersDistance / 2, lowerLegLength / 2],
    });

    lowerLeftLeg.addShape(lowerLegShapeLeft);
    lowerRightLeg.addShape(lowerLegShapeRight);
    world.addBody(lowerLeftLeg);
    world.addBody(lowerRightLeg);
    // Upper legs
    var upperLeftLeg = new p2.Body({
        mass: 1,
        position: [-shouldersDistance / 2, lowerLeftLeg.position[1] + lowerLegLength / 2 + upperLegLength / 2],
    });

    var upperRightLeg = new p2.Body({
        mass: 1,
        position: [shouldersDistance / 2, lowerRightLeg.position[1] + lowerLegLength / 2 + upperLegLength / 2],
    });

    upperLeftLeg.addShape(upperLegShapeLeft);
    upperRightLeg.addShape(upperLegShapeRight);
    world.addBody(upperLeftLeg);
    world.addBody(upperRightLeg);

    // Pelvis
    var pelvis = new p2.Body({
        mass: 1,
        position: [0, upperLeftLeg.position[1] + upperLegLength / 2 + pelvisLength / 2],
    });

    pelvis.addShape(pelvisShape);
    world.addBody(pelvis);

    // Upper body
    var upperBody = new p2.Body({
        mass: 1,
        position: [0, pelvis.position[1] + pelvisLength / 2 + upperBodyLength / 2],
    });

    upperBody.addShape(upperBodyShape);
    world.addBody(upperBody);

    // Head
    var head = new p2.Body({
        mass: 1,
        position: [0, upperBody.position[1] + upperBodyLength / 2 + headRadius + neckLength],
    });
    head.addShape(headShape);
    world.addBody(head);

    // Upper arms
    var upperLeftArm = new p2.Body({
        mass: 1,
        position: [-shouldersDistance / 2 - upperArmLength / 2, upperBody.position[1] + upperBodyLength / 2],
    });
    var upperRightArm = new p2.Body({
        mass: 1,
        position: [shouldersDistance / 2 + upperArmLength / 2, upperBody.position[1] + upperBodyLength / 2],
    });

    upperLeftArm.addShape(upperArmShapeLeft);
    upperRightArm.addShape(upperArmShapeRight);
    world.addBody(upperLeftArm);
    world.addBody(upperRightArm);

    // lower arms
    var lowerLeftArm = new p2.Body({
        mass: 1,
        position: [upperLeftArm.position[0] - lowerArmLength / 2 - upperArmLength / 2,
        upperLeftArm.position[1]],
    });
    var lowerRightArm = new p2.Body({
        mass: 1,
        position: [upperRightArm.position[0] + lowerArmLength / 2 + upperArmLength / 2,
        upperRightArm.position[1]],
    });
    lowerLeftArm.addShape(lowerArmShapeLeft);
    lowerRightArm.addShape(lowerArmShapeRight);
    world.addBody(lowerLeftArm);
    world.addBody(lowerRightArm);

    // Neck joint
    var neckJoint = new p2.RevoluteConstraint(head, upperBody, {
        localPivotA: [0, -headRadius - neckLength / 2],
        localPivotB: [0, upperBodyLength / 2],
    });
    neckJoint.setLimits(-Math.PI / 8, Math.PI / 8);
    world.addConstraint(neckJoint);

    // Knee joints
    var leftKneeJoint = new p2.RevoluteConstraint(lowerLeftLeg, upperLeftLeg, {
        localPivotA: [0, lowerLegLength / 2],
        localPivotB: [0, -upperLegLength / 2],
    });
    var rightKneeJoint = new p2.RevoluteConstraint(lowerRightLeg, upperRightLeg, {
        localPivotA: [0, lowerLegLength / 2],
        localPivotB: [0, -upperLegLength / 2],
    });
    leftKneeJoint.setLimits(-Math.PI / 8, Math.PI / 8);
    rightKneeJoint.setLimits(-Math.PI / 8, Math.PI / 8);
    world.addConstraint(leftKneeJoint);
    world.addConstraint(rightKneeJoint);
    // Hip joints
    var leftHipJoint = new p2.RevoluteConstraint(upperLeftLeg, pelvis, {
        localPivotA: [0, upperLegLength / 2],
        localPivotB: [-shouldersDistance / 2, -pelvisLength / 2],
    });
    var rightHipJoint = new p2.RevoluteConstraint(upperRightLeg, pelvis, {
        localPivotA: [0, upperLegLength / 2],
        localPivotB: [shouldersDistance / 2, -pelvisLength / 2],
    });
    leftHipJoint.setLimits(-Math.PI / 8, Math.PI / 8);
    rightHipJoint.setLimits(-Math.PI / 8, Math.PI / 8);
    world.addConstraint(leftHipJoint);
    world.addConstraint(rightHipJoint);
    // Spine
    var spineJoint = new p2.RevoluteConstraint(pelvis, upperBody, {
        localPivotA: [0, pelvisLength / 2],
        localPivotB: [0, -upperBodyLength / 2],
    });
    spineJoint.setLimits(-Math.PI / 8, Math.PI / 8);
    world.addConstraint(spineJoint);
    // Shoulders
    var leftShoulder = new p2.RevoluteConstraint(upperBody, upperLeftArm, {
        localPivotA: [-shouldersDistance / 2, upperBodyLength / 2],
        localPivotB: [upperArmLength / 2, 0],
    });
    var rightShoulder = new p2.RevoluteConstraint(upperBody, upperRightArm, {
        localPivotA: [shouldersDistance / 2, upperBodyLength / 2],
        localPivotB: [-upperArmLength / 2, 0],
    });
    leftShoulder.setLimits(-Math.PI / 3, Math.PI / 3);
    rightShoulder.setLimits(-Math.PI / 3, Math.PI / 3);
    world.addConstraint(leftShoulder);
    world.addConstraint(rightShoulder);

    // Elbow joint
    var leftElbowJoint = new p2.RevoluteConstraint(lowerLeftArm, upperLeftArm, {
        localPivotA: [lowerArmLength / 2, 0],
        localPivotB: [-upperArmLength / 2, 0],
    });
    var rightElbowJoint = new p2.RevoluteConstraint(lowerRightArm, upperRightArm, {
        localPivotA: [-lowerArmLength / 2, 0],
        localPivotB: [upperArmLength / 2, 0],
    });

    leftElbowJoint.setLimits(-Math.PI / 8, Math.PI / 8);
    rightElbowJoint.setLimits(-Math.PI / 8, Math.PI / 8);
    world.addConstraint(leftElbowJoint);
    world.addConstraint(rightElbowJoint);
    world.addContactMaterial(groundWheelContactMaterial);

    // Create wheels
    var wheelBodyA = createWheel(world, [-2.2 * r, 0], wheelMaterial);

    // Create chassis
    var chassisBody = new p2.Body({ mass: 1, position: [-0.3 * r, 2.2 * r] });

    world.addBody(chassisBody);

    // Constrain wheels to chassis: let them move vertically and rotate using a prismatic
    var c1 = new p2.PrismaticConstraint(chassisBody, wheelBodyA, {
        localAnchorB: [0, 0],
        localAxisA: [0, 1],
        disableRotationalLock: true
    });


    world.addConstraint(c1);



    // Create ground plane
    groundBody = new p2.Body({
        position: [0, -r * 2]
    });

    groundBody.addShape(new p2.Plane({ material: groundMaterial }));
    world.addBody(groundBody);

    circleBody = new p2.Body({
        position: [6 + 6 + Math.random() * 3, -2] // Set initial position
    });

    circleBody.addShape(new p2.Circle({ radius: 5 * Math.random(), material: groundMaterial }));
    world.addBody(circleBody);
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

    this.followBody = wheelBodyA; // Make camera follow
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