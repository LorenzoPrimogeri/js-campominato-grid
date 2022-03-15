let righe;
let colonne;

const numeriEstratti = [];
let difficolta = parseInt(prompt("scegli difficolta da 1 a 3"));
while (difficolta < 1 || difficolta > 3 || isNaN(difficolta)) {
    difficolta = parseInt(prompt("scegli difficolta da 1 a 3"));
}
if (difficolta == 1) {
    //con difficoltà 1 => tra 1 e 100
    righe = 10;
    colonne = 10;
} else if (difficolta == 2) {
    //con difficoltà 2 => tra 1 e 81
    righe = 9;
    colonne = 9;
} else if (difficolta == 3) {
    //con difficoltà 3 => tra 1 e 49
    righe = 7;
    colonne = 7;
}
let totCell = righe * colonne;
function generateRandomNumber(min, max) {
    const range = (max - min) + 1;
    const numeroRandom = Math.floor(Math.random() * range + min);
    return numeroRandom;
}
function creazioneCelle(difficolta) {
    const element = document.createElement("div");
    element.classList.add("cell")
    if (difficolta == 1) {
        element.classList.add("difficolta-1");
    } else if (difficolta == 2) {
        element.classList.add("difficolta-2");
    } else if (difficolta == 3) {
        element.classList.add("difficolta-3");
    }
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
    const cell = creazioneCelle(difficolta);
    const random = controlloNumeri(1, totCell, numeriEstratti);
    numeriEstratti.push(random);
    cell.innerText = random;
    cell.id = random;
    cell.addEventListener('click', function () {
        cell.classList.add("bg-acqua");
    })
    grid.appendChild(cell);
}   