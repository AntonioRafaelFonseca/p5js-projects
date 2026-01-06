class ObjectWithG{
    
    constructor(x, y, r, vx=0, vy=0, c = undefined){

        if (c !== undefined){
            this.c = color(0, 0, 0)
        }
        else{
        this.c = color(255)    
        }
        this.radius = r;
        this.Vect = createVector(x, y);
        this.mass = this.radius/10;
        this.acc = createVector(0, 0);
        this.vel = createVector(vx, vy);
        this.b = color(100)  
        
    }

    getForce(other, G){

        let dir = p5.Vector.sub(other.Vect, this.Vect);

        let distance = dir.mag();
        distance = constrain(distance, 15, 30);
        
        let forceMag = G * ((this.mass * other.mass) / (distance * distance));
        
        dir.normalize();
        dir.mult(forceMag);

        let acc = p5.Vector.div(dir, this.mass);
        this.acc.add(acc);

    }

    update(){
        this.vel.add(this.acc)
        this.Vect.add(this.vel)
        
        this.acc.mult(0)
    }
    
    show(){
        stroke(this.b)
        strokeWeight(1)
        fill(this.c)
        circle(this.Vect.x, this.Vect.y, this.radius*2)
    }

    detectColision(other){
        if(p5.Vector.sub(other.Vect, this.Vect).mag()<this.radius + other.radius){
            return true
        }
        return false
    }
}