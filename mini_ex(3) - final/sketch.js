function setup(){
createCanvas(800,600);
smooth();  
}

function draw(){     

background(200);

push();    
textSize(50);
fill(0,102,153);
text("Wait a Minute",250,90);
pop();
    
translate(width/2,height/2);

strokeWeight(2);
ellipse(0,0,200,200);

strokeWeight(1); //Sekunder
var cir=360/60*(frameCount%360); 
rotate(radians(cir));
frameRate(20);
line(0, 0, 0, -95);


  
strokeWeight(2); //Minutter
var cir=360/60*(frameCount%360); 
rotate(radians(cir));
frameRate(10);
line(0, 0, 0, -90);

  
 
strokeWeight(4); //Timer
var cir=360/12*(frameCount%360); 
rotate(radians(cir));
frameRate(0,5);
line(0, 0, 0, -50);

    
}