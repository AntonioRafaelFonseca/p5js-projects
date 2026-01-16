class Seg {
  constructor(x = width / 2, y = height / 2, rest) {
    this.VectA = createVector(x, y);
    this.parent = null;
    this.rest = rest ?? 10;
  }
  show(circleColor, circleRadius, lineColor, lineWidth) {
    stroke(lineColor);
    strokeWeight(lineWidth);
    try {
      line(this.VectA.x, this.VectA.y, this.parent.VectA.x, this.parent.VectA.y);
    } catch (err) {

    }
    strokeWeight(2);
    stroke(0);
    fill(circleColor);
    circle(this.VectA.x, this.VectA.y, circleRadius * 2);
  }
  moveTo(px, py) {
    let target = createVector(px, py);
    let dirVec = p5.Vector.sub(target, this.VectA);

    let dist = dirVec.mag();

    // orientação

    // CORREÇÃO PROPORCIONAL (não velocidade fixa)
    dirVec.normalize();
    dirVec.mult(dist);

    this.VectA.add(dirVec);
  }
  follow(parent) {
    this.parent = parent;
    let dirVec = p5.Vector.sub(parent.VectA, this.VectA);
    let dist = dirVec.mag();

    this.dir = dirVec.heading();

    let error = dist - this.rest;

    dirVec.normalize();
    dirVec.mult(error);

    this.VectA.add(dirVec);
  }
}
