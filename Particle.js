class Particles {
    constructor(x, y) {
        var options = {
            restitution: 0.5,
            friction: 0,
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        this.color = color(random(0,220),random(10,150),color(150,150))
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

};