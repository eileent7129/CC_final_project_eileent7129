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
let wait = 0;
let idx = 0;

let imgA1;
let imgB1;
let imgA2;
let imgB2;
let imgA3;
let imgB3;
let imgA4;
let imgB4;
let imgA5;
let imgB5;

////could turn these arrays into a class
//let pairArray1 = [];
//let pairArray2 = [];
//let pairArray3 = [];
//let pairArray4 = [];
//let pairArray5 = [];
//let imgArray = [];

let photoA;
let photoB;
let photoC;
let photoD;
let photoE;
let photoF;
let photoG;
let photoH;
let photoI;
let photoJ;


let score = 0;
let displayTime = 3;
let disappearTime = 6;
let runEnding = false;
let nextChoice = 1;
let nextIdx = 0;
let waitTime = false;


function preload() {
    my_text = loadStrings('data/dialogue_1.txt'); // array of strings // dialogue finishes at time = 51
    theFont = loadFont('data/font_1.ttf');

    good_ending = loadStrings('data/good_ending.txt'); // good ending dialogue
    bad_ending = loadStrings('data/bad_ending.txt'); //bad ending dialogue

    imgA1 = loadImage('data/photo_a_1.jpeg');
    imgB1 = loadImage('data/photo_b_1.jpeg');

    imgA2 = loadImage('data/photo_a_2.jpeg');
    imgB2 = loadImage('data/photo_b_2.jpeg');

    imgA3 = loadImage('data/photo_a_3.jpg');
    imgB3 = loadImage('data/photo_b_3.jpeg');

    imgA4 = loadImage('data/photo_a_4.jpeg');
    imgB4 = loadImage('data/photo_b_4.jpeg');

    imgA5 = loadImage('data/photo_a_5.jpeg');
    imgB5 = loadImage('data/photo_b_5.jpeg');
}

function setup() {
    createCanvas(1500, 1000);
    background(0);
    xPos = round(width / 2 - 100);
    yPos = round(height / 2 - 100);
    eyes = new Eyes(xPos, yPos);
    my_dialogue = new Dialogue(my_text);
    good_dialogue = new Dialogue(good_ending);
    bad_dialogue = new Dialogue(bad_ending);

    //if (runEnding) {
    //    timer = 0;
    //}

    setInterval(incTime, 1000);
    setInterval(incWait, 1000);

    photoA = new Photo(imgA1, round(width / 6), round(height / 3), "A"); // real
    photoA.buttonSetup();

    photoB = new Photo(imgB1, round(width * (3 / 6)), round(height / 3), "B"); // fake
    photoB.buttonSetup();

    photoC = new Photo(imgA2, round(width / 6), round(height / 3), "A"); // real
    photoC.buttonSetup();

    photoD = new Photo(imgB2, round(width * (3 / 6)), round(height / 3), "B"); // fake
    photoD.buttonSetup();

    photoE = new Photo(imgA3, round(width / 6), round(height / 3), "A"); //real
    photoE.buttonSetup();

    photoF = new Photo(imgB3, round(width * (3 / 6)), round(height / 3), "B"); // fake
    photoF.buttonSetup();

    photoG = new Photo(imgA4, round(width / 6), round(height / 3), "A"); // real
    photoG.buttonSetup();

    photoH = new Photo(imgB4, round(width * (3 / 6)), round(height / 3), "B"); // fake
    photoH.buttonSetup();

    photoI = new Photo(imgA5, round(width / 6), round(height / 3), "A"); // real
    photoI.buttonSetup();

    photoJ = new Photo(imgB5, round(width * (3 / 6)), round(height / 3), "B"); // fake
    photoJ.buttonSetup();
   
}

function draw() {
    
    //background(0);
   
    /*  my_dialogue.run();*/

    // I want dialogue to display for three seconds, disppear for one second


    my_dialogue.run();
    eyes.side_look();

    // after time= 51, present images

    // maybe give player a designmated amount of time to choose answer
    //create multiple timers for each scene and dialogue

    //focus on choices for now 

    if (timer > 50) {
        eyes.disappear();
        if (nextChoice == 1) {
            choiceOne();
            // make some sort of marker for wait time to start 
        }

        else if (nextChoice == 2 && !waitTime) {
            choiceTwo();
        }

        else if (nextChoice == 3 && !waitTime) {
            choiceThree();
        }

        else if (nextChoice == 4 && !waitTime) {
            choiceFour();
        }

        else if (nextChoice == 5 && !waitTime) {
            choiceFive();
        }
  
    }
    
    if (wait == 5) {
        waitTime = false;
        wait = 0;
    }

    if (nextChoice = 6) {
        //run the ending

        if (score > 0) {
            //run good ending 
            good_dialogue.run()
        }
        else if (score < 0) {
            //run bad ending 
            bad_dialogue.run();
        }
    }
  
}


function choiceOne() {
    textSize(50);
    fill(255);
    text("Which is one is the imposter?", 160, 250);

    //choice A
    photoA.display();
    photoA.runButton();
    //choice B
    photoB.display();
    photoB.runButton();

    if (photoA.pressed()) {
        score--;
        photoA.disappear();
        photoB.disappear();
        nextChoice = 2;
        waitTime = true;
    }
    else if (photoB.pressed()) {
        score++;
        photoA.disappear();
        photoB.disappear();
       
       
    }
   
}
//create all choices 
function choiceTwo() {
    textSize(50);
    fill(255);
    text("Which is one is the imposter?", 160, 250);

    //choice A
    photoC.display();
    photoC.runButton();
    //choice B
    photoD.display();
    photoD.runButton();

    if (photoC.pressed()) {
        score--;
        photoC.disappear();
        photoD.disappear();
        nextChoice = 3;
        waitTime = true;
       
    }
    else if (photoD.pressed()) {
        score++;
        photoC.disappear();
        photoD.disappear();
    }

}

function choiceThree() {
    textSize(50);
    fill(255);
    text("Which is one is the imposter?", 160, 250);

    //choice A
    photoE.display();
    photoE.runButton();
    //choice B
    photoF.display();
    photoF.runButton();

    if (photoE.pressed()) {
        score--;
        photoE.disappear();
        photoF.disappear();
        nextChoice = 4;
        waitTime = true;

    }
    else if (photoF.pressed()) {
        score++;
        photoE.disappear();
        photoF.disappear();

    }

}

function choiceFour() {
    textSize(50);
    fill(255);
    text("Which is one is the imposter?", 160, 250);

    //choice A
    photoG.display();
    photoG.runButton();
    //choice B
    photoH.display();
    photoH.runButton();

    if (photoG.pressed()) {
        score--;
        photoG.disappear();
        photoH.disappear();
        nextChoice = 5;
        waitTime = true;


    }
    else if (photoH.pressed()) {
        score++;
        photoG.disappear();
        photoH.disappear();

    }
}

function choiceFive() {
    textSize(50);
    fill(255);
    text("Which is one is the imposter?", 160, 250);

    //choice A
    photoI.display();
    photoI.runButton();
    //choice B
    photoJ.display();
    photoJ.runButton();

    if (photoI.pressed()) {
        score--;
        photoI.disappear();
        photoJ.disappear();
        nextChoice = 6;
        waitTime = true;

       
    }
    else if (photoJ.pressed()) {
        score++;
        photoI.disappear();
        photoJ.disappear();

    }

}


// additional things I want to add
// a new cursor
//show animation of universe tear
//revamp all code so that it utlizes p5 play
// things for p5.play: A or B buttons, maybe eyes --> for button: display, check if on button
//      check if pressed, disappear