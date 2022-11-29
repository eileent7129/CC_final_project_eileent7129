let eyes;
let xPos;
let yPos;
let my_string;
let speech;

function setup() {
    createCanvas(800, 800);
    background(0);
    xPos = width / 2 - 100;
    yPos = height / 2 - 100;
    my_string = "Hello.";

    eyes = new Eyes(xPos, yPos);
    speech = new Dialogue(my_string);

}


function draw() {
    eyes.side_look();
    speech.display();
}


class Eyes {


    constructor(x,y) {
        this.x = x;
        this.y = y;
    }


    // eye pupils are supposed to move
    // eyes have to disapper or change position entirely

    //default display
    display() {
        noStroke();
        fill(255);
        ellipse(this.x, this.y, 100, 50); // left(50, 100), right(150,100)
        triangle(this.x - 60, this.y, this.x - 35, this.y - 18, this.x - 35, this.y + 18);
        triangle(this.x + 60, this.y, this.x + 35, this.y - 18, this.x + 35, this.y + 18);
        fill(0);
        ellipse(this.x, this.y, 55);

        noStroke();
        fill(255);
        ellipse(this.x + 150, this.y, 100, 50); // left(50, 100), right(150,100)
        triangle(this.x + 90, this.y, this.x + 115, this.y - 18, this.x + 115, this.y + 18);
        triangle(this.x+210, this.y, this.x + 185, this.y - 18, this.x + 185, this.y + 18);
        fill(0);
        ellipse(this.x + 150, this.y, 55);

        //stroke(255, 0, 0);
        //line(40,100, 160, 100);
    }

    // display eyes looking to the side
    side_look() {
        noStroke();
        fill(255);
        ellipse(this.x, this.y, 100, 50); // left(50, 100), right(150,100)
        triangle(this.x - 60, this.y, this.x - 35, this.y - 18, this.x - 35, this.y + 18);
        triangle(this.x + 60, this.y, this.x + 35, this.y - 18, this.x + 35, this.y + 18);
        fill(0);
        ellipse(this.x - 20, this.y, 55);

        noStroke();
        fill(255);
        ellipse(this.x + 150, this.y, 100, 50); // left(50, 100), right(150,100)
        triangle(this.x + 90, this.y, this.x + 115, this.y - 18, this.x + 115, this.y + 18);
        triangle(this.x + 210, this.y, this.x + 185, this.y - 18, this.x + 185, this.y + 18);
        fill(0);
        ellipse(this.x + 130, this.y, 55);
    }
}

// will display guide's dialogue across the screen
class Dialogue {

    // I want dialogue text to appear slowly on the screen, letter by letter, as if
    // guide is talking in real time

    //maybe also animate text as if its moving in space/ floating animation

    constructor(my_text) { // enter string as a paramter
        this.text = my_text;
    }

    display() {
        text(this.text, 50, 700);
    }

}

// random change to test Github repository
//another random change to test Github repository