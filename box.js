class box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visible = 255;
    World.add(world, this.body);
    this.image=loadImage("box.png");
    
   
  }
  display(){
   // var pos =this.body.position;
   // var angle = this.body.angle;
   
    //push();
    //translate(pos.x, pos.y);
    //rotate(angle);
    //rectMode(CENTER);
    //box1.display();
    //stroke("black");
    //fill("violet");
    //rect(0, 0, this.width, this.height);
   // pop();
  
    if (this.body.speed<5){
     
      //console.log(this.body.speed);
      image(this.image, this.body.position.x, this.body.position.y, this.width,this.height);
    }
    else {
      World.remove(world, this.body);
      push();
      tint(255,this.visible);
      image(this.image, this.body.position.x, this.body.position.y, this.width,this.height);
      pop();
      this.visible = this.visible - 5;
    }
    }
  
}// dont remove this

