const r = require("raylib");

const WIDTH = 600;
const HEIGHT = 400;
const SCANNERWIDTH = 50;
const PARTICLEFIELD1START = 170;
const PARTICLEFIELD1END = PARTICLEFIELD1START + (SCANNERWIDTH * 2);
const PARTICLEFIELD2START = 400;
const PARTICLEFIELD2END = PARTICLEFIELD2START + (SCANNERWIDTH / 2);
const TOPY = 0;
const SPEED = 3;

let scannerX1 = 0;
let scannerX2 = WIDTH / 2;
let currentSpeedScanner1 = SPEED;
let currentSpeedScanner2 = SPEED + 3;
function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(WIDTH, HEIGHT, "myWindow");
    r.SetTargetFPS(60);
}

function update() {
    scannerX1 += calcSpeed("Scanner1");
    scannerX2 += calcSpeed("Scanner2");
}

function calcSpeed(scanner) {
    if (scanner === "Scanner1") {
        if (scannerX1 >= WIDTH / 2 - SCANNERWIDTH) currentSpeedScanner1 = -SPEED;
        if (scannerX1 <= 0) currentSpeedScanner1 = SPEED;
        return currentSpeedScanner1;
    }
    if (scannerX2 >= WIDTH - SCANNERWIDTH) currentSpeedScanner2 = -(SPEED + 3);
    if (scannerX2 <= WIDTH / 2) currentSpeedScanner2 = SPEED + 3;
    return currentSpeedScanner2;
}

function isOverlap(start1, end1, start2, end2) {
    return start1 <= end2 && end1 >= start2;
}

function selectScannerColor(scanner) {
    return (isOverlap(scanner, scanner + SCANNERWIDTH, PARTICLEFIELD1START, PARTICLEFIELD1END) ||
        isOverlap(scanner, scanner + SCANNERWIDTH, PARTICLEFIELD2START, PARTICLEFIELD2END)) ? r.RED : r.WHITE;
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawRectangle(PARTICLEFIELD1START, TOPY, PARTICLEFIELD1END - PARTICLEFIELD1START, HEIGHT, r.SKYBLUE);
    r.DrawRectangle(PARTICLEFIELD2START, TOPY, PARTICLEFIELD2END - PARTICLEFIELD2START, HEIGHT, r.SKYBLUE);

    r.DrawRectangle(scannerX1, TOPY, SCANNERWIDTH, HEIGHT, selectScannerColor(scannerX1));
    r.DrawRectangle(scannerX2, TOPY, SCANNERWIDTH, HEIGHT, selectScannerColor(scannerX2));

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