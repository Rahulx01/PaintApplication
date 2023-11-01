var optionState = 0;
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let drawing = false;

function setState(newState){
    optionState = newState;
    const optionClicked = document.getElementById("options").querySelectorAll("h4");
    if(optionState == 0){
        optionClicked[0].classList.add("highlight");
        optionClicked[1].classList.remove("highlight");
    }
    else{
        optionClicked[1].classList.add("highlight");
        optionClicked[0].classList.remove("highlight");
    }
}

let lastX, lastY;

canvas.addEventListener("mousedown", (e) => {
    drawing = true;
    lastX = e.clientX - canvas.getBoundingClientRect().left;
    lastY = e.clientY - canvas.getBoundingClientRect().top;
});

canvas.addEventListener("mousemove", (e) => {
    if (!drawing) return;

    let x = e.clientX - canvas.getBoundingClientRect().left;
    let y = e.clientY - canvas.getBoundingClientRect().top;

    context.beginPath();
    context.lineWidth = document.getElementById("brushSize").value;
    context.lineCap = "round";
    context.strokeStyle = optionState ? "white" : document.getElementById("selectedColour").value;
    context.moveTo(lastX, lastY);
    context.lineTo(x, y);
    context.stroke();

    lastX = x;
    lastY = y;
    
});

document.addEventListener("mouseup", () => (drawing = false));

function clearCanvas() {
    setState(0);
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function drawCircle(){
    context.beginPath();
    context.arc(200, 200, 50, 0, 2 * Math.PI);
    context.fillStyle = "green"; // Fill color
    context.fill();
    context.strokeStyle = "black"; // Border color
    context.lineWidth = 5; // Border width
    context.stroke();
    context.closePath();
}