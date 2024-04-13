const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// obtiene las dimensiones de la pantalla actual
const window_height = window.innerHeight;
const window_width = window.innerWidth;

// el canvas tiene las mismas dimensiones que la pantalla
canvas.height = window_height;
canvas.width = window_width;

canvas.style.background = "#abcdef";

class Circle {
    constructor(x, y, radius, color, text) {
        this.posX = x;
        this.posY = y;
        this.radius = radius;
        this.color = color;
        this.text = text;
    }

    draw(context) {
        context.beginPath();
        context.lineWidth = 3;
        context.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI, false);
        context.strokeStyle = this.color;

        context.textAlign = "center";
        context.textBaseLine = "middle";
        context.font = "20px Verdana";

        context.fillText(this.text, this.posX, this.posY);

        context.stroke();
        context.closePath();
    }
}

let circles = [];
for (let i = 0; i < 10; i++) {
    let randomX = Math.random() * window_width;
    let randomY = Math.random() * window_height;
    let radius = Math.floor(Math.random() * 100) + 25;

    let circle = new Circle(randomX, randomY, radius, "#1c67fc", `${i + 1}`);
    circles.push(circle);
}

circles.forEach((circle) => {
    circle.draw(ctx);
});
