
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext("2d");
const bgGame = new Image();
bgGame.src = "images/background.png";


let ticTimer = 15;
let points = 0;

let bgReady = false;
bgGame.onload = function () {
    bgReady = true;
}

let catObj = {};
catObj.width = 128;
catObj.height = 120;
catObj.x = 0;
catObj.y = 40;
catObj.speed = 10;

let catReady = false;
let catImg = new Image();
catImg.src = "images/cat.png";
catImg.onload = function () {
    catReady = true;
}


let mouseObj = {};
mouseObj.width = 52;
mouseObj.height = 54;

mouseObj.x = Math.floor(Math.random() * 460);
mouseObj.y = 30 + Math.floor(Math.random() * 396);

let mouseReady = false;
const mouseImg = new Image();
mouseImg.src = 'images/mouse.png';
mouseImg.onload = function () {
    mouseReady = true;
}

function render() {
    if (bgReady) {
        ctx.drawImage(bgGame, 0, 0);
    }

    if (catReady) {
        ctx.drawImage(catImg, catObj.x, catObj.y);
    }

    if (mouseReady) {
        ctx.drawImage(mouseImg, mouseObj.x, mouseObj.y);
    }

    if (catObj.x > 500) {
        catObj.x = -50;
    }

    if (catObj.x < - 51) {
        catObj.x = 500;
    }


    if (catObj.y > 460) {
        catObj.y = -50;
    }

    if (catObj.y < -50) {
        catObj.y = 460;
    }

    if (
        (catObj.x + catObj.width) > mouseObj.x
        && (catObj.y + catObj.height) > mouseObj.y
        && (catObj.x + 15) < (mouseObj.x + mouseObj.width)
        && (catObj.y + 10) < (mouseObj.y + mouseObj.height)
    ) {
        mousePos();
        if (ticTimer != 0) {
            points++;
        }
    }

    if (ticTimer == 0) {
        mouseObj.x = 3000;

        if (points >= 3) {
            ctx.fillStyle = "white";
            ctx.fillText("You Win", 220, 200);
        }

        else {
            ctx.fillStyle = "red";
            ctx.fillText("You Loose", 220, 200);
        }

    }

    ctx.font = "20px Georgia";
    ctx.fillStyle = "white";
    ctx.fillText("Points:" + points, 10, 25);

    ctx.fillText("Timer:" + ticTimer, 400, 25);
}


addEventListener("keydown", function (e) {
    console.log(e.key);

    if ((e.key == 'ArrowRight') || (e.key == 'd')) {
        catObj.x += catObj.speed;
    }

    if ((e.key == 'ArrowLeft') || (e.key == 'a')) {
        catObj.x -= catObj.speed;
    }

    if ((e.key == 'ArrowDown') || (e.key == 's')) {
        catObj.y += catObj.speed;
    }

    if ((e.key == 'ArrowUp') || (e.key == 'w')) {
        catObj.y -= catObj.speed;
    }

});

function timer() {
    if (ticTimer == 0) {
        clearInterval(timerRunner);
    }
    else { ticTimer--; }
}

function mousePos() {
    mouseObj.x = Math.floor(Math.random() * 460);
    mouseObj.y = 30 + Math.floor(Math.random() * 396);
}


const renderFrame = setInterval(render, 1); //thirre render qdo 1/1000second
const timeRunner = setInterval(timer, 1000);