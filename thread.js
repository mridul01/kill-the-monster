class Thread{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.5,
            length: 120
        }
        this.pointB = pointB ;
        this.thread = Constraint.create(options);
        World.add(world, this.thread);
    }

    fly(){
        this.thread.bodyA = null;
    }
    attach(body){
        this.thread.bodyA = body;
    }

    display(){
       push ()
        if (this.thread.bodyA){
        var pointA = this.thread.bodyA.position;
        var pointB = this.pointB ;
        strokeWeight(0);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop ()
        }
    }
}
