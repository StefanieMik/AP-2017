function setup(){
createCanvas(640,360);

}
var value=0;
function draw(){
background(255,204,0);
fill(247,236,163);
strokeWeight(5.0);
stroke(0);
rect(180,50,250,250,30,25,20,10);
fill(value);
ellipse(245,120,40,45);
ellipse(365,140,30,45);
triangle(277,195,305,160,333,195);
stroke(0);
strokeWeight(9.0);
strokeCap(ROUND);
line(245,210,277,240);
line(277,240,333,240);
line(333,240,365,230);
strokeWeight(5.0);
fill(247,236,163);
rect(125.2,115,55,75,23);
rect(429.8,130,55,75,23);
rect(257,300,90,80,15);
textSize(32);
text("GLITCH",255,35);
}
function mouseMoved(){
value=value+5;
if(value>255){
    value=0;
    }
}