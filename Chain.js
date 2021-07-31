class chain
{
constructor(BodyA ,BodyB)
{
    var options = {
 BodyA : BodyA,
 BodyB : BodyB,
 length : 10,
 stiffness: 0.1
    }
    this.chain = Matter.Constraint.create(options);
    World.add(world,this.chain);
}
display ()
{
 line(this.chain.BodyA.position.x,this.chain.BodyA.position.y,this.chain.BodyB.position.x,this.chain.BodyB.position.y);
}
}