
class Photo {

    constructor(my_img, x, y, choice) {
        this.img = my_img;
        this.xPos = x;
        this.yPos = y;
       /* this.myButton = new Button(this.xPos + this.img.width/4, this.yPos + 600, alpha);*/
        this.imgPressed = false;
        this.correct = choice; // bool
        this.color = color(255);
    }

    display() {

        applyMatrix();
        noStroke();
        this.img.resize(450, 450);
        image(this.img, this.xPos, this.yPos);
       /* this.myButton.display();*/
        /*this.runButton();*/
        resetMatrix();

        applyMatrix();
        this.lightUp();
        this.chosen();
        /*this.set_score(); */// might need to change // 
        resetMatrix();
    }

    chosen() {
        if (this.mouseOver() && mouseIsPressed) {
            if (this.correct == false) {
                print("working");
                this.color = color(255, 0, 0); //red;
            }
            else if (this.correct == true) {
                this.color = color(27, 223, 53); // green
            }
            this.imgPressed = true;
        }
    }

    disappear() {
        background(0);
        //this.myButton.disappear();
        //this.buttonPressed = false;
    }

    pressed() {
        return this.imgPressed;
    }

    set_score() {
        if (this.pressed()) {
            if (this.correct == false) {
                decScore = true;
            }
            else if (this.correct == true) {
                incScore = true;
            }
        }
    }

    lightUp() {
        if (this.mouseOver() && !this.imgPressed) {
            this.choiceDisplay();
        }
        else {
            this.noChoice();
        }
    }

    mouseOver() {
        if (mouseX > this.xPos && mouseX < this.xPos + 450
            && mouseY > this.yPos && mouseY < this.yPos + 450) {
            return true;
        }
        else {
          
            return false;
        }
    }

    choiceDisplay() {
        noFill();
        strokeWeight(5);
        stroke(255, 247, 0);
        rect(this.xPos, this.yPos, this.img.width, this.img.height);
    }

    noChoice() {
        noFill();
        strokeWeight(5);
        stroke(this.color);
        rect(this.xPos, this.yPos, this.img.width, this.img.height);
    }

    isCorrect() {
        return this.correct;
    }
   
}
