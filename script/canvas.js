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
    console.log("ded");
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
    context.lineCap = "round"; // You can use "round" for smoother lines
    context.strokeStyle = optionState ? "white" : document.getElementById("selectedColour").value;
    context.moveTo(lastX, lastY);
    context.lineTo(x, y);
    context.stroke();

    lastX = x;
    lastY = y;
});

document.addEventListener("mouseup", () => (drawing = false));


//

function hexToCssColor(hex) {
    // for Remove "#" char
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
    setState(0);
    context.clearRect(0, 0, canvas.width, canvas.height);
}
