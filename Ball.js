class Ball{

    constructor(x,y,r){

        var options={
            restitution:1
        }
        
            this.body=Bodies.rectangle(this.x,this.y,this.r/2,options)
            World.add(world,this.body)
        }
        display(){
        var pos=this.body.position;
        //var angle=this.body.angle;
        push()
        translate(pos.x,pos.y)
        //rotate(angle)
        ellipseMode(CENTER)
        fill(255)
        ellipse(0,0,this.r,this.r)
        pop()
        
        
        }
        
        }
