    class Paper{
        constructor(x, y, radius) {
            var options = {
                'restitution':0.5,
                'friction':1.0,
                'density':1.0
            }
            this.body = Bodies.circle(x, y, radius/2,options);
            this.radius = radius;
            World.add(world, this.body);
          }
          display(){
            ellipseMode(RADIUS);
            ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);

          }
    }