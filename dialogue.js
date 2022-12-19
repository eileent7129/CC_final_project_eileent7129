

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
        this.speech;
       
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
            //when line is displayed, speech should be played


            if (this.idx == 0) {
                this.display();
            }

            else if (this.idx != 0 && enterReleased) {
                this.disappear();
                this.display();
            }


            if (this.idx == this.dialogue_arr.length) {
                this.done = true;
                this.disappear();
            }
        }
      
    }

    display() {
        textSize(25);
        fill(255);
        text(this.line, 70, 700);
    }

    //maybe try disappear by making background = 0 or resetting the background -->use matrix
    disappear() {
        background(0);
    }

    inc_idx() {
        if (this.idx != this.dialogue_arr.length) {
            this.idx++;
        }
        
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

    //speech for dialogue, cannot be in draw loop
    talk() {
        if (this.idx == 0) {
            this.speech.speak(this.line);
        }

        this.next_line(this.idx);

        if (this.idx != this.dialogue_arr.length) {
            this.speech.speak(this.line);
        }
       
    }

    speechSetup() {
        this.speech = new p5.SpeechRec('en-US');
        this.speech = new p5.Speech();  
    }

    loadSpeech() {
        this.speech.speak(this.line);
    }


}