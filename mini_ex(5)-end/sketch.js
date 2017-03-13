var title;
var button;


function preload() {
    title=loadStrings('assets/a-thousand-splendid-suns.txt');
    console.log('Preload check');
}

function setup() {
    createCanvas(windowWidth,windowHeight);
    lexicon = new RiLexicon();
    
    button = createButton('push');
    button.position(550,520);
    button.mousePressed(processRita);
}

function draw(){
    background(100);
    
    textSize(20);
    text(title,550,200,300,300);
    fill(255);
    
}

function processRita(){
    var rs = new RiString(title);
    var words = rs.words();
    var pos = rs.pos();
    console.log(pos);
    
    var output ='';
    for(var i = 0; i< words.length; i++){
        if (/nn.*/.test(pos[i])){
            output+= lexicon.randomWord(pos[i]);
    
    } else{
    output +=words[i];
    }
        
        output+=" ";
    }
    createP(output);
    
}
    
