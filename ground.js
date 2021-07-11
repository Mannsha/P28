class Ground {
  constructor(x, y, width, height) {

    //creating properties
    this.width = width
    this.height = height

    var options = {
      isStatic: true,
    };

    this.body = Bodies.rectangle(x, y, width, height);
    World.add(world,this.body)

    console.log(this.body)
  }

  display() {
    fill("green")
    rectMode(CENTER)

    //using properties (final 2 parameters)
    //you can't access body's properties like width and height because they aren't properties
    rect(this.body.position.x, this.body.position.y,this.width,this.height)

  }
}
