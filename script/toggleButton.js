// Find the label element by its class name
const labelElement = document.querySelector('.switch');

if (labelElement) {
    const inputElement = document.createElement('input');
    const spanElement = document.createElement('span');

    // Set attributes, styles, or content for the div as needed
    inputElement.type = 'checkbox';

    spanElement.classList.add('slider');
    spanElement.classList.add('round');



    // Append the div element to the label
    labelElement.appendChild(inputElement);
    labelElement.appendChild(spanElement);
}


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
