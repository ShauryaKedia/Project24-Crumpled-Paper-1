class Paper {
constructor(){

    var options = {

        isStatic: false,
        restitution: 0.3,
        friction: 0.5,
        density: 1.2

    }

    this.body = Bodies.circle(300,375,3,3,options)



}

  display(){
    var pos = this.body.position
    ellipseMode(CENTER)
    fill("purple")
    ellipse(pos.x,pos.y,3,3)

  }


}