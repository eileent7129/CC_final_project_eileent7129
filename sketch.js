let eyes;
let xPos;
let yPos;
let my_text;
let good_ending;
let bad_ending;
let theFont;
let my_dialogue;
let good_dialogue;
let bad_dialogue;
let timer = 0;
let idx = 0;
let img1;
let img2;
let img3;
let img4;
let choiceA;
let choiceB;
let score = 0;
let displayTime = 3;
let disappearTime = 6;
let runEnding = false;

function preload() {
    my_text = loadStrings('data/dialogue_1.txt'); // array of strings // dialogue finishes at time = 51
    theFont = loadFont('data/font_1.ttf');

    good_ending = loadStrings('data/good_ending.txt'); // good ending dialogue
    bad_ending = loadStrings('data/bad_ending.txt'); //bad ending dialogue

    img1 = loadImage('data/photo_a_2.jpeg');
    img2 = loadImage('data/photo_b_2.jpeg');
}

function setup() {
    createCanvas(1000, 1000);
    background(0);
    xPos = width / 2 - 100;
    yPos = height / 2 - 100;   
    eyes = new Eyes(xPos, yPos);
    my_dialogue = new Dialogue(my_text);
    good_dialogue = new Dialogue(good_ending);
    bad_dialogue = new Dialogue(bad_ending);

    if (runEnding) {
        timer = 0;
    }

    setInterval(incTime, 1000);

    choiceA = new Photo(img1, width / 6, height / 3, "A"); // correct choice
    choiceB = new Photo(img2, width * (3 / 6), height / 3, "B"); // incorrent choice
    

}

function draw() {
    /*  my_dialogue.run();*/

    // I want dialogue to display for three seconds, disppear for one second

   
    my_dialogue.run();
    eyes.side_look();

    // after time= 51, present images

    // maybe give player a designmated amount of time to choose answer
    //create multiple timers for each scene and dialogue
    if (timer > 55) {
        eyes.disappear();
        textSize(50);
        fill(255);
        text("Which is one is the imposter?", 160, 250);

        //choice A
        choiceA.display();
        choiceA.buttonDisplay();
        //choice B
        choiceB.display();
        choiceB.buttonDisplay();

        if (choiceA.isPressed()) {
            score++;
            choiceA.disappear();
            choiceB.disappear();
            runEnding = true;
          
        }
        else if (choiceB.isPressed()) {
            score--;
            choiceA.disappear();
            choiceB.disappear();
           
        }
    }

    if (runEnding) {
        print("working");
        if (score > 0) {
            good_dialogue.run();
        }

        else if (score < 0) {
            bad_dialogue.run();
        }
    }
  


    //if (timer == 0) {
    //    my_dialogue.display();
    //}

    //else if (timer == 5) {
    //    my_dialogue.disappear();
    //}

    //else if (timer == 10) {
    //    my_dialogue.next_line(1);
    //    my_dialogue.display();
    //}

    //else if (timer == 15) {
    //    my_dialogue.disappear();
    //}

    //else if (timer == 20) {

    //    my_dialogue.next_line(2);
    //    my_dialogue.display();
    //}

    //eyes.side_look();

    //if (timer > 25) {
    //    eyes.disappear();

    //}
    //textSize(50);
    //fill(255);
    //text("Which is one is the imposter?", 160, 250);
    //choiceA.display();
    //choiceA.buttonDisplay();
    //choiceB.display();
    //choiceB.buttonDisplay();

    //if (choiceA.isPressed()) {
    //    score++;
    //    choiceA.disappear();
    //    choiceB.disappear();
    //}
    //else if (choiceB.isPressed()) {
    //    score--;
    //    choiceA.disappear();
    //    choiceB.disappear();
    //}

    //if (score > 0) {
    //    good_dialogue.run();
    //}

    //else if (score < 0) {
    //    bad_dialogue.run();
    //}
    
  /*  }*/

    //if (timer > 30) {
    //    eyes.disappear();
    //    // sceneOne
    //    choiceA.display();
    //}

  
    
}


class Eyes {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    // eye pupils are supposed to move
    // eyes have to disapper or change position entirely

    //default display

    run() {

        if (timer == displayTime) {
            this.side_look();
        }

        if (timer == 51) {
            this.disappear();
        }

    }
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

    disappear() {
        background(0);
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
        this.line = this.dialogue_arr[0]; // string from dialogue
    }

    // make each letter of text appear on screen
    // I want to make the dialogue disappear after some time

    // display text
    // hide text
    // timing for text

    run() {
        // frameCount is kinda difficult to use, let me tryh working with time (seconds)

        if (timer == displayTime) {
            this.display();
            displayTime += 5;
        }

        if (timer == disappearTime) {
            this.disappear();
            idx++;
            this.next_line(idx);
            disappearTime += 5; 
            
        }
    }
    // display new line every 5 seconds
    display() {
        textSize(50);
        fill(255);
        text(this.line, 100, 700);
    }

    //maybe try disappear by making background = 0 or resetting the background -->use matrix
    disappear() {
        background(0);
    }

    //maybe try using booleans

    next_line(my_idx) {
        this.line = this.dialogue_arr[my_idx];
    }
}


class Photo {

    constructor(my_img, x, y,alpha) {
        this.img = my_img;
        this.xPos = x;
        this.yPos = y;
        this.letter = alpha;
        this.buttonPressed = false;
    }

    display() {
        this.img.resize(256, 256);
        image(this.img, this.xPos, this.yPos);

    }

    buttonDisplay() {
        noStroke();
        fill(255);
        rect(this.xPos + 80, this.yPos + 300, 75, 100);
        textSize(50);
        fill(0);
        text(this.letter, this.xPos + 100, this.yPos + 365);
    }

    //if button is pressed return  true
    onButton() {
        if (mouseX > this.xPos + 80 & mouseX < this.xPos + 155
            && mouseY > this.yPos + 300 && mouseY < this.yPos + 400) {
            return true;
        }
        else {
            return false;
        }
    }

    setPressed(bool) {
        this.buttonPressed = bool;
    }

    isPressed() {
   
        return this.buttonPressed;
    }

    disappear() {
        background(0);
    }



}

function incTime() {
    timer++;
    print(timer);

}


function mousePressed() {
    if (choiceA.onButton()) {
        choiceA.setPressed(true);
    }
    if (choiceB.onButton()) {
        choiceB.setPressed(true);
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