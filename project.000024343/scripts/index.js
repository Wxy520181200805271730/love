let Heart = require("./heart.js");
let Vector = require("./vectory.js");
let Planet = require("./planet.js");

let canvas;
let ctx;
let w;
let h;
let hearts;
let planets;
let gravity;
let tick;

function setup() {
  tick = 0;
  canvas = document.querySelector("#canvas");
  ctx = canvas.getContext("2d");
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
	gravity = new Vector(0, -0.0001);
  initHearts();
  initPlanets();
  canvas.addEventListener("click", onClick);
}

function draw() {
  tick += 1;
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, w, h);
 
  planets.forEach(planet => {
    planet.draw(ctx, tick);
  });
  
  hearts.forEach(heart => { 
    planets.forEach(planet => {
      planet.applyGravityOn(heart);
    });
    heart.move(gravity);
    heart.draw(ctx);
  });
  requestAnimationFrame(draw);
}

function initHearts() {
  hearts = [];
  for(let i = 0; i < 400; i++) {
    hearts.push(new Heart());
  }
}

function initPlanets() {
  planets = [];
}

function onClick(event) {
  let x = event.clientX;
  let y = event.clientY;  
  let pos = new Vector(x, y);
  let p = new Planet(pos, tick);
  planets.push(p);
}

setup();
draw();