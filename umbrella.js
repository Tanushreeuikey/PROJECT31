class Umbrella
{
    constructor(x,y,radius)
    {
        var option1=
	{    	
		isStatic:true,
		restitution:1,
		friction:0.1
    }
       this.body=Bodies.circle(x,y,radius,option1)

       World.add(world,this.body);
    }
     
    display()
    {
        var pos =this.body.position;
       
        ellipseMode(RADIUS)
        fill("black")
        ellipse(pos.x,pos.y,70,10)
        
       
    }

}