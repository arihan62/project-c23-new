class Package{
  constructor  (x,y,width,height){

  var options={
restitution:3
  }
this.body=Bodies.circle(x,y,width,height,options)
world.add(world,this.body)
  }
display(){
  var position=this.body.position
 circle(position.x,position.y,this.width,this.height)

}
}