class Log extends BaseClass {
    constructor(x, y, height, angle) {

      //parent property
      super(x, y, 20, height, angle);
      this.image=loadImage("sprites/wood2.png");  
      
      //child property
      Matter.Body.setAngle(this.body, angle);
     
    }
  }
    