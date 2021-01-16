class Polygon   {                

    constructor(x,y,r){              
        var option=  {                         
    
            restitution:0.3,
            friction:0.5,
            density:1
            
        }
        
    this.x=x;
    this.y=y;
    this.r=r;
    this.body = Bodies.circle(x,y,r,option);
    this.image=loadImage("polygon.png");
    World.add(world,this.body);
    
    
    
    }
    display(){                                          

var Polygon=this.body.position;
push();
strokeWeight(3)
imageMode(CENTER);
image(this.image,Polygon.x,Polygon.y,60,60);
pop();
  }
}
