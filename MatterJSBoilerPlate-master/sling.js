class sling{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stifness: 0.004,
            length: 10
        }

        this.pointB=pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.throw.bodyA=null;
    }

    Launch(bodyA){
        this.sling.bodyA=bodyA;
    }

    display(){

    }
}