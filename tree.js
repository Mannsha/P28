class Tree
{

    constructor(x,y)
    {
        var options=
        {
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,50,50); 
        World.add(world,this.body)
    this.image = loadImage("Plucking+mangoes2/images/tree.png");
    
}
display()
{
image(this.image, this.body.position.x,this.body.position.y,500, 500);
}
}
