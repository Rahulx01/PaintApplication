var optionState = 0;

function setState(optionState){
    this.optionState = optionState;
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

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let drawing = false;

canvas.addEventListener("mousedown", () => drawing = true);
canvas.addEventListener("mouseup", () => drawing = false);
canvas.addEventListener("mousemove", draw);

// function draw(e) {
//     if (!drawing) return;
    
//     // if(!optionState) 
//     // else context.strokeStyle = "white";
//     context.strokeStyle = "black";
//     context.beginPath();
//     context.lineWidth = document.getElementById("brushSize").value;
//     context.lineCap = "square";
//     context.moveTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
//     context.lineTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
//     console.log(context.strokeStyle);
//     context.stroke();
// }

function draw(e) {
    if (!drawing) return;

    context.beginPath();
    context.lineWidth = 10;
    context.lineCap = "square";
    context.strokeStyle = "black";
    context.moveTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
    context.lineTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
    context.stroke();
}

function hexToCssColor(hex) {
    // Remove the "#" character if it's present
    hex = hex.replace("#", "");

    // If the hex value is shorthand (e.g., "#123"), expand it to the full form
    if (hex.length === 3) {
        hex = hex
            .split("")
            .map((char) => char + char)
            .join("");
    }

    // Convert the hex value to RGB format
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);

    return `rgb(${r}, ${g}, ${b})`;
}


function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}
