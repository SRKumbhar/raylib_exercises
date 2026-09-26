const r = require("raylib");

const WIDTH = 600;
const HEIGHT = 400;
const SCANNERWIDTH = 50;
const PARTICLEFIELD1START = 170;
const PARTICLEFIELD1END = PARTICLEFIELD1START + (SCANNERWIDTH * 2);
const PARTICLEFIELD2START = 400;
const PARTICLEFIELD2END = PARTICLEFIELD2START + (SCANNERWIDTH / 2);
const TOPY = 0;
const SPEED = 1;

let scannerX = 0;
let currentSpeed = SPEED;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(WIDTH, HEIGHT, "myWindow");
    r.SetTargetFPS(60);
}

function update() {
    scannerX += calcSpeed();
}

function calcSpeed() {
    if (scannerX === WIDTH - SCANNERWIDTH) {
        currentSpeed = -SPEED;
    }
    if (scannerX === 0) {
        currentSpeed = SPEED;
    }
    return currentSpeed;
}

function isOverlap(start1, end1, start2, end2) {
    return start1 <= end2 && end1 >= start2;
}

function selectColor() {
    return (isOverlap(scannerX, scannerX + SCANNERWIDTH, PARTICLEFIELD1START, PARTICLEFIELD1END) ||
        isOverlap(scannerX, scannerX + SCANNERWIDTH, PARTICLEFIELD2START, PARTICLEFIELD2END)) ? r.RED : r.WHITE;
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawRectangle(PARTICLEFIELD1START, TOPY, PARTICLEFIELD1END - PARTICLEFIELD1START, HEIGHT, r.SKYBLUE);
    r.DrawRectangle(PARTICLEFIELD2START, TOPY, PARTICLEFIELD2END - PARTICLEFIELD2START, HEIGHT, r.SKYBLUE);
    const COLOR = selectColor();
    r.DrawRectangle(scannerX, TOPY, SCANNERWIDTH, HEIGHT, COLOR);

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