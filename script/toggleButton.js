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
