
class Eyes {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    // eye pupils are supposed to move
    // eyes have to disapper or change position entirely

    //default display

    run(bool) {
        this.side_look();

        if (bool) {
            this.display();
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
        triangle(this.x + 210, this.y, this.x + 185, this.y - 18, this.x + 185, this.y + 18);
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





