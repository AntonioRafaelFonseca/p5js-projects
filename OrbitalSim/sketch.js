let bT = 10
let NumberOFBodies = 5;
function setup() {
  const c = createCanvas(min(windowWidth, windowHeight)-150, min(windowWidth, windowHeight)-150);
  c.parent("canvas-container");
  MainBody = new ObjectWithG(width/2, height/2, 8, 0, 0, (0, 0, 0));
  substeps = 3
  G = 10/substeps
  
  bodies =[]
  for (var i = 0;i < NumberOFBodies;i++){
    bodies.push(new ObjectWithG(random(50, width), random(50, height-50), 4, random(-1, 1), random(-1, 1)))
  }
}



function draw() {
  background(255, bT)
  for (let Iter = 0;Iter<substeps;Iter++){
    
    
    MainBody.show(color(255, 0, 0));
    
    for(var i = 0;i < bodies.length;i++){

      if (bodies[i] !== undefined){
      bodies[i].getForce(MainBody, G)
      bodies[i].update()
      bodies[i].show()
      
      if(bodies[i].detectColision(MainBody)){
        background(0, 255, 255)
        bodies[i] = undefined
        }
      }
    }
  }
}
