const r = require("raylib");
const windowWidth = 1000;
const windowHeight = 500;
r.InitWindow(windowWidth, windowHeight, "myWindow");
r.SetTargetFPS(60);

while (!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);
    const centerRectangleWidth = windowWidth / 2;
    const centerRectangleHeight = windowHeight / 2;
    const centerRedRectangleWidth = centerRectangleWidth / 2;
    const centerRedRectangleHeight = centerRectangleHeight / 2;
    const centerRectangleX =
        windowWidth - centerRectangleWidth - centerRectangleWidth / 2;
    const centerRectangleY =
        windowHeight - centerRectangleHeight - centerRectangleHeight / 2;
    const centerRedRectangleX =
        centerRectangleWidth - centerRedRectangleWidth / 2;
    const centerRedRectangleY =
        centerRectangleHeight - centerRedRectangleHeight / 2;
    r.DrawRectangle(
        centerRectangleX,
        centerRectangleY,
        centerRectangleWidth,
        centerRectangleHeight,
        r.WHITE,
    );
    r.DrawRectangle(
        centerRedRectangleX,
        centerRedRectangleY,
        centerRedRectangleWidth,
        centerRedRectangleHeight,
        r.RED,
    );
    r.EndDrawing();
}

r.CloseWindow();
