var r = 0;
var status = "up";

function setup() {
 createCanvas(windowWidth, windowHeight);   //create a drawing canvas
 noFill();
 //frameRate(6000);
}

function draw() {
  background(46,68,44);
  for (var xcor = 0; xcor < width-50; xcor += 50){   
    for (var ycor = 0; ycor < height-50; ycor += 50){  
       drawSomething(xcor, ycor);  
     }
  }   
  
  //to keep increasing or decreasing the ellipses
  
  if (status == "up") {
  	r+=0.03;   //increase the size at a time   
  }else{
  	r-=0.03;
  }
  
  //if it reaches certain size, change the direction
  if (r > 30){    //until r reaches a certain number, reset r
   status = "down";
  }else if (r < 0) {
   status = "up";
  }
   console.log(r);    
}

function drawSomething(x, y) {   // total horizontal ellipses (x axis = width/50); total vertical ellipses 19 (y axis = height/50) ) x2 ellipses (draw 2 ellipses at a time, see below) 
    stroke(173,244,164);
  line(x+50, y+25, 50*r, 50*r);  //try to change with rect to see the effect
  stroke(244,164,164);
  ellipse(x+25, y+50, 50*r, 50*r);
    stroke(248,175,97);
    rect(x+10, y+20, 60*r, 60*r);
stroke(154,118,243);
triangle(x+30,y+75,x+58,y+20,x+86,y+75,50*r,50*r);
stroke(239,243,118);
triangle(x+30,y+75,50*r,50*r); //this makes the lines yellow?
}