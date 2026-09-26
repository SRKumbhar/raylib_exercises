const r = require("raylib");
const windowWidth = 800;
const windowHeight = 800;
const x = 0;
const y = r.InitWindow(windowWidth, windowHeight, "myWindow");
r.SetTargetFPS(50);

while (!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.DrawRectangle(0, 300, 100, 100, r.WHITE);
    r.EndDrawing();
}
