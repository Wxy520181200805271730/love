class Planet {
  constructor(pos, tickOffset) {
    this.pos = pos;
    this.tickOffset = tickOffset;
  }
  
  draw(ctx, tick) {
    ctx.strokeStyle = "red";
    ctx.lineWidth = 3;
    ctx.beginPath();
    let r = Math.sin(tick/10 + this.tickOffset)*10+20;
    ctx.arc(this.pos.x, this.pos.y, r, 0, Math.PI*2);
    ctx.stroke();
 	}
  
  /*
    "Every point mass attracts every single other point mass by a force pointing along the line intersecting both points. The force is proportional to the product of the two masses and inversely proportional to the square of the distance between them."
    Newton's law of universal gravitation
    https://en.wikipedia.org/wiki/Newton%27s_law_of_universal_gravitation
  */
  applyGravityOn(thing) {
    let dist = thing.pos.sub(this.pos);
    let lengthSq = dist.getLengthSq();
    let g = 40 / (lengthSq);
    if(g > 0.6) {
      g = 0.6;
    }
    // We keep the angle of the distance
    dist.setLength(g);
    thing.v.subFrom(dist);
  }
}

module.exports = Planet;