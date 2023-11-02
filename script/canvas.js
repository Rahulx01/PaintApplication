var optionState = 1;
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let drawing = false;

setTimeout(() => {
    const dataURL = localStorage.getItem("canvasState");
    if (dataURL) {
        const img = new Image();
        img.src = dataURL;
        img.onload = function () {
            const context = canvas.getContext("2d");
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(img, 0, 0);
        };
    }
}, 0)


const spotLight = [
    document.getElementById("CircleShape"), document.getElementById("brush"),
    document.getElementById("eraser"), document.getElementById("SquareShape")
];
spotLight.forEach((headingElement) => {
    headingElement
    headingElement.addEventListener('click', () => setState(headingElement));
});
function setState(newState) {
    spotLight.forEach((headingElement) => {
        headingElement.classList.remove("highlight");
    });
    newState.classList.add("highlight");
    switch (newState.id) {
        case "eraser":
            optionState = 0;
            break;
        case "brush":
            optionState = 1;
            break;
        case "CircleShape":
            optionState = 2;
            break;
        case "SquareShape":
            optionState = 3;
            break;
        default:
            console.log("Default state", newState.id, optionState);

    }
}

let lastX, lastY;

canvas.addEventListener("mousedown", (e) => {
    drawing = true;
    lastX = e.clientX - canvas.getBoundingClientRect().left;
    lastY = e.clientY - canvas.getBoundingClientRect().top;
});

canvas.addEventListener("mousemove", (e) => {
    if (optionState < 2 && drawing) drawAndRub(e);
});

document.addEventListener("mouseup", (e) => {
    if (optionState == 2) {
        drawCircle();
    }
    else if (optionState == 3) {
        drawSquare();
    }
    drawing = false;
});



function drawAndRub(e) {
    let x = e.clientX - canvas.getBoundingClientRect().left;
    let y = e.clientY - canvas.getBoundingClientRect().top;

    context.beginPath();
    context.lineWidth = document.getElementById("brushSize").value;
    context.lineCap = "round";
    context.strokeStyle = optionState == 0 ? "white" : document.getElementById("selectedColour").value;
    context.moveTo(lastX, lastY);
    context.lineTo(x, y);
    context.stroke();

    lastX = x;
    lastY = y;
}

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    setState(document.getElementById("brush"));
    saveCanvasState();
}

function drawCircle(r = 20) {
    console.log("circle radius " + r);
    context.beginPath();

    context.arc(lastX, lastY, document.getElementById("brushSize").value * 2, 0, 2 * Math.PI);
    context.fillStyle = "white";
    context.fill();
    context.strokeStyle = document.getElementById("selectedColour").value;
    context.lineWidth = 5;
    context.stroke();
    context.closePath();
}

function drawSquare() {
    const a = 50;
    context.strokeStyle = document.getElementById("selectedColour").value;
    context.fillStyle = "white";

    // Draw the square
    context.beginPath();
    context.rect(lastX, lastY, a, a);
    context.closePath();
    context.stroke();
    context.fill();

}


function saveCanvasState() {
    const dataURL = canvas.toDataURL();
    localStorage.setItem("canvasState", dataURL);
}

// Asynchronus function
setInterval(saveCanvasState, 5000);

//This above function i used for saving canvas state every 5 seconds