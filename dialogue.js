

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
        textSize(35);
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
