function setup(){
createCanvas(800,600);
}

function draw(){
background(230);
drawGrid();
stroke(0);
push();
translate(100,100);
fill (154,148,238);
ellipse(0,0,95,95);
pop();

push();
translate(196,250);
fill(148,238,181);
ellipse(0,0,95,95);
pop();

push();
translate(400,400);
fill(153,233,237);
ellipse(0,0,95,95);
pop();
}

function drawGrid() {
	stroke(200);
	fill(120);
	for (var x=-width; x < width; x+=40) {
		line(x, -height, x, height);
		text(x, x+1, +12);
	}
	for (var y=-height; y < height; y+=40) {
		line(-width, y, width, y);
		text(y, +1, y+12);
	}
}