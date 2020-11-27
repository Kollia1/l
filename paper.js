class Paper{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,30,options)
        this.radius=200;
        World.add(world,this.body)
        this.image=loadImage("paper.png")
    }
    fly(){
        this.body.isStatic=false;
        
    } 
    display(){
        
        push()
        translate(this.body.position.x,this.body.position.y)
        
        imageMode(CENTER)
        image(this.image,0,0,50,50)
        pop()
    }
}