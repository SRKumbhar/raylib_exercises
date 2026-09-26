const r = require("raylib");

let x = 100;
let y = 100;
let speed = 2;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(r.GetScreenWidth(), r.GetScreenHeight(), "myWindow");
    r.SetTargetFPS(60);
}

function update() {
    x += speed;
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    r.DrawRectangle(x, y, 200, 100, r.SKYBLUE);
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