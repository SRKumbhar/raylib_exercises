const r = require('raylib');

r.InitWindow(400, 400, 'moon');
r.SetTargetFPS(60);

const moonX = 200;
const moonY = 100;
const moonRadius = 50;

let shadowX = moonX + 50 + (2 * moonRadius);
const shadowSpeed = -1;

while (!r.WindowShouldClose()) {
  if (shadowX < (moonX - 2 * moonRadius))
    shadowX = moonX + 50 + (2 * moonRadius);
  shadowX += shadowSpeed;
  r.BeginDrawing()
  r.ClearBackground(r.DARKBLUE)
  r.DrawCircle(moonX, moonY, moonRadius, r.WHITE);
  r.DrawCircle(shadowX, moonY, moonRadius, r.DARKBLUE);
  r.EndDrawing()
}

r.CloseWindow()