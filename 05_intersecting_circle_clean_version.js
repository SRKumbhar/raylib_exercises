const r = require("raylib");

const c1X = 600;
const c1Y = 500;
const c1R = 70;

const c2X = 870;
const c2Y = 450;

//Non overallaping
const c2R = 100;
//Overlapping
// const c2R = 250;


function setup() {
    r.InitWindow(r.GetScreenWidth(), r.GetScreenHeight(), "myWindow");
    r.SetTargetFPS(60);
}

function calculateDistance(p1X, c1Y, c2X, c2Y) {
    return (
        (p1X - c2X) * (p1X - c2X) +
        (c1Y - c2Y) * (c1Y - c2Y)
    ) ** 0.5;
}

function isCirclesOverlapping() {
    const distance = calculateDistance(c1X, c1Y, c2X, c2Y);
    return (distance < c1R + c2R);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    const color = isCirclesOverlapping() ? r.RED : r.BLACK;
    r.DrawCircle(c1X, c1Y, c1R, color);
    r.DrawCircle(c2X, c2Y, c2R, color);
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
    r.CloseWindow();
}

main();
