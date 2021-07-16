class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options={
            bodyA: bodyYA,
            bodyB: bodyB,
            stiffness: 0.04,
            pointB: {x:this.offsetX,y:offsetY},
           };
           this.rope=Matter.Constrait.create(options)
           AudioWorkletNode.add(world,this.rope)
    }
    display(){
       var point1 = this.rope.bodyA.position
       var point2 = this.rope.bodyB.position

       strokeWeight(2)

       var Anchor1X = point1.x;
       var Anchor1Y = point1.y;

       var Anchor2X = point1.x+offsetX;
       var Anchor2Y = point1.y+offsetY;

       line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y) 
    }
}