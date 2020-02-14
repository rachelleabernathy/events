let rectX = 0;
const rectHeight =75;
let rectY;
const rectWidth = 75;
let clickCount = 0;
function setup () {
    createCanvas(500, 500);
    rectY = random(height - rectHeight);

}

function draw () {
    background(155);
    drawShape();
    rectX += 1;
    if(rectX > width) {
        noLoop();
        text('Your score was ' + clickCount, 100, 300);
    }
}

function mousePressed() {
    if((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >= 0 && mouseY <= rectY + rectHeight)) {
        clickCount ++;
        console.log('hit', clickCount);
    }

}

function drawShape() {
    fill('purple');
    rect(rectX, rectY, rectWidth, rectHeight);
}