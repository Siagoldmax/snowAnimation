class SnowFlack{
    constructor(x,y,width,height){
        var options={            
            'restitution':0.8,
            'friction':1,
            'density':0.05

        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width;
        this.height=height;
        this.image = loadImage("snow4.webp");
        World.add(world,this.body);
        
    }
    display(){
     var pos=this.body.position;
     var ang =this.body.angle;
     push()
     translate(pos.x,pos.y)
     rotate(ang)
     rectMode(CENTER);
     rect(0 , 0 , this.width,this.height);
     pop()
    }
}