

// will display guide's dialogue across the screen
class Dialogue {
    // I want dialogue text to appear slowly on the screen, letter by letter, as if
    // guide is talking in real time

    //maybe also animate text as if its moving in space/ floating animation

    constructor(dialogue) { // array of strings for dialogue
        this.dialogue_arr = dialogue; // array dialogue
        this.idx = 0;
        this.line = this.dialogue_arr[0]; // string from dialogue
        this.done = false;
        this.stop = false;
       
    }

    // make each letter of text appear on screen
    // I want to make the dialogue disappear after some time

    // display text
    // hide text
    // timing for text

    run() {
        // no more time, display text by pressing enter key

        //if enter key is pressed, display line
        if (!(this.finished())) {
            this.display();
          
           /* this.talk();*/
        
            if (enterDown) {
                this.disappear();
                this.next_line(this.idx);
                this.display();
            }

            if (this.idx == this.dialogue_arr.length) {
                this.done = true;
            }
        }

    }

    display() {
        textSize(30);
        fill(255);
        text(this.line, 90, 700);
    }

    //maybe try disappear by making background = 0 or resetting the background -->use matrix
    disappear() {
        background(0);
    }

    inc_idx() {
        this.idx++;
    }

    next_line(my_idx) {
        this.line = this.dialogue_arr[my_idx];
    }

    finished() {
        return this.done;
    }

    get_idx() {
        return this.idx;
    }

    talk() {
        this.speech.speak(this.line);
       
    }

   stop_talk() {
        this.speech.stop();
    }
    speechSetup() {
        this.speech = new p5.SpeechRec('en-US');
        this.speech = new p5.Speech();
        
    }
}