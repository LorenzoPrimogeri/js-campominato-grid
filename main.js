let righe = 10;
let colonne = 10;
let totCell = righe * colonne;
const numeriEstratti = [];
const difficolta = parseInt(console.log("scegli difficolta da 1 a 3"));

// if (difficolta == 1) {

// } else if (difficolta == 2) {

// }
function generateRandomNumber(min, max) {
    const range = (max - min) + 1;
    const numeroRandom = Math.floor(Math.random() * range + min);
    return numeroRandom;
}

function creazioneCelle() {
    const element = document.createElement("div");
    element.classList.add("cell")
    return element;
}
function controlloNumeri(min, max, registro) {
    let result = generateRandomNumber(min, max)
    while (registro.includes(result)) {
        result = generateRandomNumber(min, max)
    }
    return result;
}

for (let index = 0; index < totCell; index++) {
    const grid = document.getElementById("Grid");
    const cell = creazioneCelle();
    const random = controlloNumeri(1, totCell, numeriEstratti);
    numeriEstratti.push(random);
    cell.innerText = random;
    cell.id = random;
    cell.addEventListener('click', function () {
        cell.classList.add("bg-acqua");
    })
    grid.appendChild(cell);
}   