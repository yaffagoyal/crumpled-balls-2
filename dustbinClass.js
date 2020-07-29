class dustBin {
    constructor(x,y,width, height) {
      this.x=x,
        this.y=y
      var options = {
          isStatic:true,
           
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.body2= Bodies.rectangle(x, y, width, height, options);
      this.body3= Bodies.rectangle(x, y, width, height, options);
	
      this.width = width;
      this.height = height;
      this.image= loadImage("dustbingreen.png")
      World.add(world, this.body);
      World.add(world, this.body2);
      World.add(world, this.body3);
      
    }
    display(){
      //var pos =this.body.position;
      imageMode(CENTER);
      image(this.image,this.x, this.y, this.width, this.height);
      pop();
    }
  }