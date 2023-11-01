const colourDetail = [["#F08784","#EB3324","#774342","#efa70b","#9FFCFD","#3282F6"],
["#FFFD55", "#F09B59","#784315", "#817F26", "#20df40", "#EA3680"],
["#000000", "#7F7F7F", "#9822d8", "#58135E", "#808080", "#FFFFFF"]
];

const colourSection = document.getElementById("colourSection");

colourDetail.forEach(i => {
    const colourRow = document.createElement('div');
    colourRow.classList.add("coloursRow");
    i.forEach(cellColour => {
        const colourCell = document.createElement('div');
        colourCell.id = cellColour;
        colourCell.classList.add("cell");
        colourCell.style.backgroundColor = cellColour;
        colourCell.onclick = () => {
            document.getElementById('selectedColour').value = cellColour;
        };
        colourRow.appendChild(colourCell);
    })
    colourSection.appendChild(colourRow);
});