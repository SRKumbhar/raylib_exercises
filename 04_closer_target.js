const r = require("raylib");
const windowWidth = 820;
const windowHeight = 650;

const sourceX = 250;
const sourceY = 350;
const sourceRadius = 25;
const dest1X = 500;
const dest1Y = 150;
const dest1Radius = 25;
const dest2X = 750;
const dest2Y = 600;
const dest2Radius = 25;

r.InitWindow(windowWidth, windowHeight, "myWindow");
r.SetTargetFPS(60);

function calculateDistance(sourceX, sourceY, destX, destY) {
    return Math.sqrt(
        (destX - sourceX) * (destX - sourceX) +
            (destY - sourceY) * (destY - sourceY),
    );
}

function checkCloser(sourceX, sourceY, dest1X, dest1Y, dest2X, dest2Y) {
    const firstDestiny = calculateDistance(sourceX, sourceY, dest1X, dest1Y);
    const secondDestiny = calculateDistance(sourceX, sourceY, dest2X, dest2Y);
    if (firstDestiny < secondDestiny) return "firstDestiny";
    return "secondDestiny";
}

while (!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    r.DrawCircle(sourceX, sourceY, sourceRadius, r.BLUE);
    r.DrawCircle(dest1X, dest1Y, dest1Radius, r.RED);
    r.DrawCircle(dest2X, dest2Y, dest2Radius, r.GREEN);
    if (
        checkCloser(sourceX, sourceY, dest1X, dest1Y, dest2X, dest2Y) ===
        "firstDestiny"
    ) {
        r.DrawLine(sourceX, sourceY, dest1X, dest1Y, r.BLACK);
    } else {
        r.DrawLine(sourceX, sourceY, dest2X, dest2Y, r.BLACK);
    }
    r.EndDrawing();
}

r.CloseWindow();
