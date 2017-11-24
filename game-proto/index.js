var N = 3, // Number of capsules in a wheel
    r = 1, // Radius of the wheel
    thickness = 0.18; // Thickness of the wheel capsules

var app = new p2.WebGLRenderer(function () {

    // Create the world
    var world = new p2.World({
        gravity: [0, -5]
    });
    this.setWorld(world);

    // Create a contact material between ground and wheels
    // We need to do this to add some extra friction
    var groundMaterial = new p2.Material();
    var wheelMaterial = new p2.Material();

    var groundWheelContactMaterial = new p2.ContactMaterial(groundMaterial, wheelMaterial, {
        friction: 30
    });

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