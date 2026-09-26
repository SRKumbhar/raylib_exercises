const r = require("raylib");

const WIDTH = 600;
const HEIGHT = 400;
const SCANNERWIDTH = 50;
const SCANNERHEIGHT = 50;
const PARTICLEFIELD1START = 170;
const PARTICLEFIELD1END = PARTICLEFIELD1START + (SCANNERWIDTH * 2);
const PARTICLEFIELD2START = 400;
const PARTICLEFIELD2END = PARTICLEFIELD2START + (SCANNERWIDTH / 2);
const PARTICLEFIELD3YSTART = 250;
const PARTICLEFIELD3YEND = 300;
const TOPY = 0;
const TOPX = 0;
const SPEED = 1;

let scannerX1 = 0;
let scannerX2 = WIDTH / 2;
let scannerY3 = 0;
let currentSpeedScanner1 = SPEED;
let currentSpeedScanner2 = SPEED + 2;
let currentSpeedScanner3 = SPEED;

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
    scannerY3 += calcSpeed("Scanner3");
}

function calcSpeed(scanner) {
    if (scanner === "Scanner1") {
        if (scannerX1 >= WIDTH / 2 - SCANNERWIDTH) currentSpeedScanner1 = -SPEED;
        if (scannerX1 <= TOPX) currentSpeedScanner1 = SPEED;
        return currentSpeedScanner1;
    }
    if (scanner === "Scanner2") {
        if (scannerX2 >= WIDTH - SCANNERWIDTH) currentSpeedScanner2 = -(SPEED + 2);
        if (scannerX2 <= WIDTH / 2) currentSpeedScanner2 = SPEED + 2;
        return currentSpeedScanner2;
    }
    if (scannerY3 >= HEIGHT - SCANNERHEIGHT) currentSpeedScanner3 = -SPEED;
    if (scannerY3 <= TOPY) currentSpeedScanner3 = SPEED;
    return currentSpeedScanner3;
}

function isOverlap(start1, end1, start2, end2) {
    return start1 <= end2 && end1 >= start2;
}

function selectHorizontalScannerColor(scanner) {
    return (isOverlap(scanner, scanner + SCANNERWIDTH, PARTICLEFIELD1START, PARTICLEFIELD1END) ||
        isOverlap(scanner, scanner + SCANNERWIDTH, PARTICLEFIELD2START, PARTICLEFIELD2END))
        ? r.RED
        : r.WHITE;
}

function selectVerticalScannerColor(scanner) {
    return (isOverlap(scanner, scanner + SCANNERHEIGHT, PARTICLEFIELD3YSTART, PARTICLEFIELD3YEND))
        ? r.RED
        : r.WHITE;
}

function drawParticleFields() {
    r.DrawRectangle(PARTICLEFIELD1START, TOPY, PARTICLEFIELD1END - PARTICLEFIELD1START, HEIGHT, r.SKYBLUE);
    r.DrawRectangle(PARTICLEFIELD2START, TOPY, PARTICLEFIELD2END - PARTICLEFIELD2START, HEIGHT, r.SKYBLUE);
    r.DrawRectangle(TOPX, PARTICLEFIELD3YSTART, WIDTH, PARTICLEFIELD3YEND - PARTICLEFIELD3YSTART, r.SKYBLUE);
}

function drawScanners() {
    r.DrawRectangle(scannerX1, TOPY, SCANNERWIDTH, HEIGHT, selectHorizontalScannerColor(scannerX1));
    r.DrawRectangle(scannerX2, TOPY, SCANNERWIDTH, HEIGHT, selectHorizontalScannerColor(scannerX2));
    r.DrawRectangle(TOPX, scannerY3, WIDTH, SCANNERHEIGHT, selectVerticalScannerColor(scannerY3));
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    drawParticleFields();
    drawScanners();
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