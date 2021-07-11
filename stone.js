class Stone
{
    constructor(x,y)
    {
        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2

        }

        this.body = Bodies.circle(x,y,10, options)
        World.add(world,this.body)
        this.image = loadImage("Plucking+mangoes2/images/stone.png");
    }

    display()
    {
        image(this.image,this.body.position.x,this.body.position.y,50,50)
    }
}