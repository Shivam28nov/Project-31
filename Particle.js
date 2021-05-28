class Particle{

constructor(x, y,r) {

    var options = {

        restitution:1
    }

    this.r = r;
    this.color = color(random(0,225),random(0,225),random(0,225));
    this.body = Matter.Bodies.circle(x, y,this.r,options);
    
    World.add(world,this.body);

}

display() {

    var pos = this.body.position;

    push ()
    ellipseMode(CENTER);
    fill(this.color);
    ellipse(pos.x, pos.y, this.r, this.r);
    pop ()

}

}