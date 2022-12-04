let Vector = require('./vectory.js');

class Heart {
  constructor() {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    this.pos = new Vector(x, y);
    this.v = new Vector(Math.random()*2-1, Math.random()*2-1);
  }  
  
  move(gravity) {
    this.pos.addTo(this.v);
    this.v.addTo(gravity);
  }
  
  draw(ctx) {
    ctx.font = '32px serif';
    ctx.fillText("❤️", this.pos.x, this.pos.y);
  }
}

module.exports = Heart;