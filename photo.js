
class Photo {

    constructor(my_img, x, y, alpha) {
        this.img = my_img;
        this.xPos = x;
        this.yPos = y;
        this.myButton = new Button(this.xPos + 120, this.yPos + 350, alpha);
        this.buttonPressed = false;
    }

    display() {
        this.img.resize(256, 256);
        image(this.img, this.xPos, this.yPos);
        this.myButton.display();
        this.runButton();
    }

    //this needs to be called in setup fuction
    buttonSetup() {
        this.myButton.setup();
    }

    //check if button is pressed, if button is pressed return true
    runButton() {
        if (this.myButton.mouseOnButton() && mouseIsPressed) {
            this.buttonPressed = true;
        }
    }
    disappear() {
        background(0);
        this.myButton.disappear();
        this.buttonPressed = false;
    }

    pressed() {
        return this.buttonPressed;
    }

}

class Button {

    constructor(x, y, letter) {
        this.xPos = x; // x coordinate of center of sprite
        this.yPos = y; // y coordinate of center of sprite
        this.letter = letter;
        this.my_sprite;
        this.pressed = false;
    }

    setup() {
        this.my_sprite = new Sprite();
        this.my_sprite.visible = false;
    }

    display() {
        this.my_sprite.visible = true;
        this.my_sprite.pos = { x: this.xPos, y: this.yPos }; 
        this.my_sprite.width = 75;
        this.my_sprite.height = 100;
        this.my_sprite.textSize = 50;
        this.my_sprite.text = this.letter;
        this.my_sprite.textColor = 'black';
        this.my_sprite.color = color(255);
       
    }

    // if button pressed, disappear

    mouseOnButton() {
        
        if (mouseX > this.xPos - 37 & mouseX < this.xPos + 37 && mouseY > this.yPos - 50 && mouseY < this.yPos + 50) {
            print(true);
            return true;
        }

        else {
            return false;
        }
    }

    disappear() {
        this.my_sprite.visible = false;
        background(0);
    }

}


function incTime() {
    timer++;
    print(timer);
}

function incWait() {
    if (waitTime) {
        wait++;
    }
    print(wait);
}