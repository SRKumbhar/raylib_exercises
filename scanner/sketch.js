const r = require("raylib");

const WIDTH = 600;
const HEIGHT = 400;
const RECTY = 0;
const SCANNERWIDTH = 50;
const SPEED = 5;

let rectX = 0;
let currentSpeed = 5;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(WIDTH, HEIGHT, "myWindow");
    r.SetTargetFPS(60);
}

function update() {
    rectX += calcSpeed();
}

function calcSpeed() {
    if (rectX === WIDTH - SCANNERWIDTH) {
        currentSpeed = -SPEED;
    }
    if (rectX === 0) {
        currentSpeed = SPEED;
    }
    return currentSpeed;
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawRectangle(rectX, RECTY, SCANNERWIDTH, HEIGHT, r.WHITE);
    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};