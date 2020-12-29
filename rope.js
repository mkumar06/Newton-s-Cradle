class Rope {
    constructor(body1, pointB)
    {
        var options ={
            bodyA: body1,
            pointB: pointB
        }
        //console.log(options);
        this.rope = Constraint.create(options)
        this.pointB = pointB
        World.add(world, this.rope)
    }

    display()
    {
        var pointA = this.rope.bodyA.position;

        strokeWeight(2);
        line(pointA.x, pointA.y, this.pointB.x, this.pointB.y);
    }
}