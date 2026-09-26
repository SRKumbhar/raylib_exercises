const r = require("raylib");

const c1X = 600;
const c1Y = 500;
const c1R = 70;
const c2X = 870;
const c2Y = 450;

//Non overallaping
// const c2R = 100;
//Overlapping
const c2R = 250;


function setup() {
    r.InitWindow(r.GetScreenWidth(), r.GetScreenHeight(), "myWindow");
    r.SetTargetFPS(60);
}

function calculateDistance() {
    const radiusDistance = c1R + c2R;
    const coordinatesDistance = (
        (c1X - c2X) * (c1X - c2X) +
        (c1Y - c2Y) * (c1Y - c2Y)
    ) ** 0.5;
    if (radiusDistance >= coordinatesDistance) return "red";
    return "black";
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    if (calculateDistance() === "red") {
        r.DrawCircle(c1X, c1Y, c1R, r.RED);
        r.DrawCircle(c2X, c2Y, c2R, r.RED);
    } else {
        r.DrawCircle(c1X, c1Y, c1R, r.BLACK);
        r.DrawCircle(c2X, c2Y, c2R, r.BLACK);
    }
    r.EndDrawing();
}

function loop() {
    while (!r.WindowShouldClose()) {
        draw();
    }
}

function main() {
    setup();
    loop();
}

main();
