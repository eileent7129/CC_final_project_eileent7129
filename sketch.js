let eyes;
let xPos;
let yPos;
let my_text;
let theFont;
let my_dialogue;

function preload() {
    my_text = loadStrings('data/dialogue_1.txt'); // array of strings
    theFont = loadFont('data/font_1.ttf');
}

function setup() {
    createCanvas(1000, 1000);
    background(0);
    xPos = width / 2 - 100;
    yPos = height / 2 - 100;   
    eyes = new Eyes(xPos, yPos);
    my_dialogue = new Dialogue(my_text);

}

function draw() {
    my_dialogue.run();
    eyes.side_look();
    
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

    constructor(dialogue) { // array of strings for dialogue
        this.dialogue_arr = dialogue; // array dialogue
        this.idx = 0; 
        this.line = this.dialogue_arr[this.idx]; // string from dialogue
    }

    // make each letter of text appear on screen
    // I want to make the dialogue disappear after some time

    // display text
    // hide text
    // timing for text

    run() {

        // frameCount is kinda difficult to use, let me tryh working with time (seconds)
        let currFrameCount = 0;

        if (frameCount % 30 == 0) {
            currFrameCount = frameCount;
            this.display();
        }

        if (frameCount == currFrameCount + 100) {
            this.disappear();
            this.next_line();
        }
    }
   
    display() {
        textSize(50);
        fill(255);
        text(this.line, 100, 700);
    }

    //maybe try disappear by making background = 0 or resetting the background -->use matrix
    disappear() {
        background(0);
    }

    next_line() {
        this.idx++;
        this.line = this.dialogue_arr[this.idx];
    }

 
  
}

/*text(this.dialogue_arr[1], 100, 700);*/
        //let currFrameCount = 0;
        //let new_text;

        //let newLine = this.dialogue_arr[this.idx];
        //if (frameCount % 30 == 0) {
        //    currFrameCount = frameCount;
        //    textSize(50);
        //    fill(255);
        //    new_text = text(newLine, 100, 700);

        //}
        //print(currFrameCount);
        //if (frameCount == currFrameCount + 100) {
        //    print("working");
        //    fill(0);
        //    new_text;
        //    this.idx++;
        //    if (this.idx == this.dialogue_arr.length) {
        //        this.idx = this.dialogue_arr.length;
        //    }
        //}