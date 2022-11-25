var x, y, r, s;


function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
    x = width/2;
    y = height/2;
    r = 200;
    s = 200;
}

function draw() {
    background(220);

    //y++;

    s = map(mouseY, 0, height, 5, 50)
    console.log(s)

    y = y + s

    //y = y + mouseX;
    //console.log(mouseX)
    
    if(y > height + r/2){
        y = -r/2
    }

    fill(255, 255, 255);
    ellipse(x, y, r);
}