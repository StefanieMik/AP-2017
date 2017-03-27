
var animal = [];
var button;
var bg;


function preload() {
  bg = loadImage("assets/racetrack.jpg");
}
function setup() {
 createCanvas(windowWidth, windowHeight);
 button = createButton('bet');
 button.mousePressed(bet);
	

 animal[0] = new Animal(color(255,0,0), 10, 10, 100, 20);
 animal[1] = new Animal(color(0,0,255), 15, 20, 300, 10);

}

function draw() {
 background(bg);
 button.position(0,0);
 
  

 for (var i = 0; i <animal.length; i++) {

  animal[i].drive();
  animal[i].display();
 }
}

function bet() {

  animal[animal.length] = new Animal(color(random(155,255)), random(2,10), random(10,20), random(10,500), random(30));


function Animal(getcolor, speed, xpos, ypos, size) {
   
	this.getcolor = getcolor;
	this.speed = speed;
	this.pos = new createVector(xpos, ypos);
	this.size = size;
	
	this.run = function() {

		this.pos.x = this.pos.x + this.speed;
		
 		if (this.pos.x > width) {
 			 this.pos.x = 0;
 		} 

	}
		
	this.display = function() {
		noStroke();
 		fill(this.getcolor);
  		rect(this.pos.x,this.pos.y,this.size,this.size);
	}
	
}