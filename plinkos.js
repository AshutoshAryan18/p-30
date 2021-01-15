class plinko{
    constructor(x,y){
        var options ={
            restitution:0.4,
            isStatic:true
        }
        this.body = Bodies.circle(x,y,10,options);
        this.r=10;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate (pos.x,pos.y);
        noStroke();
        fill("white")
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop ();
    }
}