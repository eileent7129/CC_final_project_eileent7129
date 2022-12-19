let eyes;
let xPos;
let yPos;
let my_text;
let good_ending;
let bad_ending;
let best_ending;
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

let runEnding = false;
let nextChoice = 0;
let nextIdx = 0;
let waitTime = false;
let enterDown = false;
let enterReleased = false;
let run_good = false;
let run_ending = false;
let change = false;
let speakLine = false;
let disappear = false;
let spacePressed = false;
let ready = false;
let incScore = false;
let decScore = false;
let song;
let score = 1;

function preload() {
    my_text = loadStrings('data/dialogue_1.txt'); // array of strings // dialogue finishes at time = 51
    theFont = loadFont('data/font_1.ttf');

    good_ending = loadStrings('data/good_ending.txt'); // good ending dialogue
    bad_ending = loadStrings('data/bad_ending.txt'); //bad ending dialogue
    best_ending = loadStrings('data/best_dialogue.txt')

    imgA1 = loadImage('data/photo_a_1.jpeg');
    imgB1 = loadImage('data/photo_b_1.jpeg');

    imgA2 = loadImage('data/photo_a_2.jpeg');
    imgB2 = loadImage('data/photo_b_2.jpeg');

    imgA3 = loadImage('data/photo_a_3.jpeg');
    imgB3 = loadImage('data/photo_b_3.jpeg');

    imgA4 = loadImage('data/photo_a_4.jpeg');
    imgB4 = loadImage('data/photo_b_4.jpeg');

    imgA5 = loadImage('data/photo_a_5.jpeg');
    imgB5 = loadImage('data/photo_b_5.jpeg');

    song = loadSound('data/song.wav');
}

function setup() {
    createCanvas(windowWidth, 1000);
    textFont(theFont);
    background(0);
    xPos = round(width / 2 - 100);
    yPos = round(height / 2 - 100);
    eyes = new Eyes(xPos, yPos);
    my_dialogue = new Dialogue(my_text);
    my_dialogue.speechSetup();

    good_dialogue = new Dialogue(good_ending);
    good_dialogue.speechSetup();

    bad_dialogue = new Dialogue(bad_ending);
    bad_dialogue.speechSetup();

    best_dialogue = new Dialogue(best_ending);
    best_dialogue.speechSetup();

    //if (runEnding) {
    //    timer = 0;
    //}

    setInterval(incTime, 1000);
    setInterval(incWait, 1000);


    photoA = new Photo(imgA1, round(width / 6), round(height / 3), false); // real human, incorrect choice
    //photoA.buttonSetup();

    photoB = new Photo(imgB1, round(width * (3 / 6)), round(height / 3), true); // fake human, correct choice
    //photoB.buttonSetup();

    //switch
    photoC = new Photo(imgA2, round(width * (3 / 6)), round(height / 3), false); // real human, incorrect choice
    //photoC.buttonSetup();

    photoD = new Photo(imgB2, round(width / 6), round(height / 3), true); // fake human, correct choice
    //photoD.buttonSetup();

    //switch
    photoE = new Photo(imgA3, round(width * (3 / 6)), round(height / 3), false); //real human, incorrect choice
    //photoE.buttonSetup();

    photoF = new Photo(imgB3, round(width / 6), round(height / 3), true); // fake human, correct choice
    //photoF.buttonSetup();

    
    photoG = new Photo(imgA4, round(width / 6), round(height / 3), false); // real human, incorrect choice
    //photoG.buttonSetup();

    photoH = new Photo(imgB4, round(width * (3 / 6)), round(height / 3), true); // fake human, correct choice
    //photoH.buttonSetup();

    //switch
    photoI = new Photo(imgA5, round(width * (3 / 6)), round(height / 3), false); // real human, incorrect choice
    //photoI.buttonSetup();

    photoJ = new Photo(imgB5, round(width / 6), round(height / 3), true); // fake human, correct choice
    //photoJ.buttonSetup();

    song.play();
    song.loop();

}

function draw() {
    
    if (!ready) {
        noStroke();
        textSize(20);
        fill(255);
        text("Press Enter key", 575, 200);
       
    }

    
    // everytime enter is pressed eyes change 
    /*eyes.run(change);*/
    my_dialogue.run();

    eyes.run();


    if (my_dialogue.finished()) {
        /*good_dialogue.run();*/
        eyes.disappear();

        if (nextChoice == 0) {
            waitTime = true;
            nextChoice = 1;
        }

        else if (nextChoice == 1 && !waitTime) {
            //waitTime = true;
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

        else if (nextChoice == 6 && !waitTime) {
            run_ending = true;
        }
       
    }

    if (run_ending) {
        if (score == 5) {
            best_dialogue.run();
            eyes.side_look();

            if (best_dialogue.finished()) {
                eyes.disappear();
            }
        }
        else if (score > 0 && score != 5) {
            good_dialogue.run();
            eyes.side_look();

            if (good_dialogue.finished()) {
                eyes.disappear();
            }
        }
        else if (score < 0) {
            bad_dialogue.run();
            eyes.side_look();

            if (bad_dialogue.finished()) {
                eyes.disappear();
            }
        }
    }

    if (wait == 2) {
        waitTime = false;
        wait = 0;
    }
}

//stop doing things based on time

function choiceOne() {
    noStroke();
    textSize(40);
    fill(255);
    text("Which one is the imposter?", 220, 250);

    //choice A
    photoA.display();
    //choice B
    photoB.display();

    //when choice is pressed, light up green or red, 
    // press space bar to disappear and move on to next choice

    if (photoA.pressed()) {
        decScore = true;
        //score = -1;
        noStroke();
        textSize(30);
        fill(255);
        text("Press spacebar to continue", 350, 850);

        if (spacePressed) {
            nextChoice = 2;
            waitTime = true;
            photoA.disappear();
            photoB.disappear();
        }
 
    }
    else if (photoB.pressed()) {
        incScore = true;
        //score = 1;
        noStroke();
        textSize(30);
        fill(255);
        text("Press spacebar to continue", 350, 850);
        
        if (spacePressed) {
            nextChoice = 2;
            waitTime = true;
            photoA.disappear();
            photoB.disappear();
        }
    }
}
//create all choices 
function choiceTwo() {
    noStroke();
    textSize(40);
    fill(255);
    text("Which one is the imposter?", 220, 250);

    //choice A
    photoC.display();
   /* photoC.runButton();*/
    //choice B
    photoD.display();
  /*  photoD.runButton();*/

    if (photoC.pressed()) {
        decScore = true;
        noStroke();
        textSize(30);
        fill(255);
        text("Press spacebar to continue", 350, 850);
        if (spacePressed) {
            nextChoice = 3;
            waitTime = true;
            photoC.disappear();
            photoD.disappear();
        }
    }
    else if (photoD.pressed()) {
        incScore = true;
        noStroke();
        textSize(30);
        fill(255);
        text("Press spacebar to continue", 350, 850);
        if (spacePressed) {
            nextChoice = 3;
            waitTime = true;
            photoC.disappear();
            photoD.disappear();
        }
    }
}

function choiceThree() {
    noStroke();
    textSize(40);
    fill(255);
    text("Which one is the imposter?", 220, 250);

    //choice A
    photoE.display();
   /* photoE.runButton();*/
    //choice B
    photoF.display();
   /* photoF.runButton();*/

    if (photoE.pressed()) {
        decScore = true;
        noStroke();
        textSize(30);
        fill(255);
        text("Press spacebar to continue", 350, 850);

        if (spacePressed) {
            nextChoice = 4;
            waitTime = true;
            photoE.disappear();
            photoF.disappear();
        }

    }
    else if (photoF.pressed()) {
        incScore = true;
        noStroke();
        textSize(30);
        fill(255);
        text("Press spacebar to continue", 350, 850);

        if (spacePressed) {
            nextChoice = 4;
            waitTime = true;
            photoE.disappear();
            photoF.disappear();
        }
    }
   
}

function choiceFour() {
    noStroke();
    textSize(40);
    fill(255);
    text("Which one is the imposter?", 220, 250);

    //choice A
    photoG.display();
  /*  photoG.runButton();*/
    //choice B
    photoH.display();
  /*  photoH.runButton();*/

    if (photoG.pressed()) {
        decScore = true;
        noStroke();
        textSize(30);
        fill(255);
        text("Press spacebar to continue", 350, 850);
        if (spacePressed) {
            nextChoice = 5;
            waitTime = true;
            photoG.disappear();
            photoH.disappear();
        }
    }
    else if (photoH.pressed()) {
        incScore = true;
        noStroke();
        textSize(30);
        fill(255);
        text("Press spacebar to continue", 350, 850);
        if (spacePressed) {
            nextChoice = 5;
            waitTime = true;
            photoG.disappear();
            photoH.disappear();
        }
    }
}

function choiceFive() {
    noStroke();
    textSize(40);
    fill(255);
    text("Which one is the imposter?", 220, 250);

    //choice A
    photoI.display();
    /*photoI.runButton();*/
    //choice B
    photoJ.display();
   /* photoJ.runButton();*/

    if (photoI.pressed()) {
        decScore = true;
        noStroke();
        textSize(30);
        fill(255);
        text("Press spacebar to continue", 350, 850);
        if (spacePressed) {
            nextChoice = 6;
            waitTime = true;
            photoI.disappear();
            photoJ.disappear();
            
        }
    }
    else if (photoJ.pressed()) {
        incScore = true;
        noStroke();
        textSize(30);
        fill(255);
        text("Press spacebar to continue", 350, 850);
        if (spacePressed) {
            nextChoice = 6;
            waitTime = true;
            photoI.disappear();
            photoJ.disappear();
        }

    }
}

function mousePressed() {

    if (decScore) {
        print("dec working");
        score -= 1;
        print("score:"); print(score);
    //    decScore = false;
    }
    else if (incScore) {
        print("inc working");
        score += 1;
        print("score:"); print(score);
    //    incScore = false;
    }
}

function mouseReleased() {
    decScore = false;
    incScore = false;
}

function keyPressed() {
    //if enter key is pressed
    if (keyCode == 13) {
        enterDown = true;
    }

    if (enterDown) {
        ready = true;
        my_dialogue.inc_idx();
        enterReleased = false;
        if (run_ending) {
            print(score);
            if (score == 5) {
                print("best");
                best_dialogue.inc_idx();
            }
            else if (score > 0) {
                good_dialogue.inc_idx();
            }

            else if (score < 0) {
                bad_dialogue.inc_idx();
            }

        }
        idx++;
    }
    //if spacebar is pressed
    if (keyCode == 32) {
        spacePressed = true;
    }
}

function keyReleased() {
    if (enterDown) {
        enterReleased = true;
        enterDown = false;
    }

    if (enterReleased) {
        if (!my_dialogue.finished()) {
            my_dialogue.talk();
        }
        else {
            if (run_ending) {
                print(score);
                if (score == 5) {
                    print("best");
                    best_dialogue.talk();
                }
                else if (score < 0) {
                    bad_dialogue.talk();
                }
                else {
                    good_dialogue.talk();
                }
                
            }
        }
        
    }

    if (spacePressed) {
        spacePressed = false;
    }
}

function speechLoaded() {
    my_dialogue.loadSpeech();
}


function incTime() {
    timer++;
}

function incWait() {
    if (waitTime) {
        wait++;
        print(wait);
    }

}


// additional things I want to add
// a new cursor
//show animation of universe tear
//revamp all code so that it utlizes p5 play
// things for p5.play: A or B buttons, maybe eyes --> for button: display, check if on button
//      check if pressed, disappear
// start each dialoguw with ... to avoid speehc not playing at first

//things to finish tonight
// fix dialogue text files --> try again after bad ending
// create loading screen between choices 
// add background sound

// complete for project
// add key directions **
// fix eyes
// maybe try again button
// background graphics
// fix choices and colors **
// fix background music


//... 0
//Hello. 1
//Something terrible has happened. // eyes squint 2
//There's been a tear in the multiverse. 3
//Imposters of humanity have entered your world. // eyes look forward 4
//There are five pairs of suspects. 5
//You must figure out who the imposter is. 6
//Be careful. // eyes squint 7
//There will be consequences if you make the wrong choice. // eyes look forward 8
//Good luck. 9

