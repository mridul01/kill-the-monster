class Monster {
    constructor(x, y, width, height){
      var options = {
        'friction':9,
        'stiffness':9,
        'density':1.0
      }
      this.image = loadImage ("Monster-01.png")
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.x = x
      this.y = y
      this.width = width 
      this.height = height
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,this.width, this.height);
    }
  }
  