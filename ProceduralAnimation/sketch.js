let numberOfSegments = 10;
let restLength = 15;
let arms = [];
let paused = false;
function setup() {

  for (var i = 0; i < numberOfSegments; i++) {
    arms.push(new Seg(-i, height / 2, restLength));
  }
  c = createCanvas(400, 400);
  c.parent('sketchCont')
  arms[0].parent = arms[0]
}
function draw() {

  background(220);
  if (!paused) {


    for (var i = 0; i < arms.length; i++) {
      if (i === 0) {
        arms[0].moveTo(mouseX, mouseY);

      }

      else {
        arms[i].follow(arms[i - 1]);

      }

      arms[i].show(color(255), 2, color(0), 2);
    }
  } else {
    for (var i = 0; i < arms.length; i++) {
      arms[i].parent = arms[i - 1]
      arms[i].moveTo(map(i, 0, arms.length, 50, 300), height / 2)
      arms[i].show(color(255), 2, color(0), 2);

    }
  }
}

function refresh(n) {
  arms = [];
  n++;
  for (var i = 0; i < n; i++) {
    arms.push(new Seg(-i, height / 2, 250 / n));
  }
  if (arms.length > 0) {
    arms[0].parent = arms[0];
  }
}
function pause() {
  if (paused) {
    paused = false;
  }
  else {
    paused = true
  }
}