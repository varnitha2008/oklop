class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.9,
            length: 10
        }
       
        this.pointB = pointB
        this.sling = Constraint.create(options);
        
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;

    }

    attach(body1){
        this.sling.bodyA = body1;
    }

    display(){
       
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            
            // push();
            
            // stroke(48,22,8);
            // if(pointA.x < 220) {
            //     strokeWeight(7);
            //     line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
            //     line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
                
            // }
            // else{
            //     strokeWeight(3);
            //     line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
            //     line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
                
            // }
           
            
            // pop();
        }
    }
    
}