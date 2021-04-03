class Drop
{
    constructor()
    {
        var option1=
	{    	
		isStatic:false,
		restitution:0.1,
		friction:0.1,
    
    }
       this.body=Bodies.circle(random(0,600),random(0,700),3,option1)

       World.add(world,this.body);
    }
     
    display()
    {
        var pos =this.body.position;
       
        ellipseMode(RADIUS)
        fill("blue")
        ellipse(pos.x,pos.y,3)
        
        if(pos.y>height)
        {
            Matter.Body.setPosition(this.body,{x:random(0,600),y:-1})
        }
        
       
    }

}