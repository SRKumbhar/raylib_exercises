const r = require("raylib");
const windowWidth = 800;
const windowHeight = 800;
r.InitWindow(windowWidth, windowHeight, "myWindow");
r.SetTargetFPS(60);

while (!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);
    const centerRectangleWidth = windowWidth / 2;
    const centerRectangleHeight = windowHeight / 2;
    const centerRectangleX =
        windowWidth - centerRectangleWidth - centerRectangleWidth / 2;
    const centerRectangleY =
        windowHeight - centerRectangleHeight - centerRectangleHeight / 2;
    r.DrawRectangle(
        centerRectangleX,
        centerRectangleY,
        centerRectangleWidth,
        centerRectangleHeight,
        r.WHITE,
    );
    r.EndDrawing();
}

r.CloseWindow();
