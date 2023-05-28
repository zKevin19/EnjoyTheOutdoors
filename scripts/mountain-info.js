"use strict"
const mountainsDropDown = document.getElementById("mountainsDropDown");
const mountainDetailRow = document.getElementById("mountainDetailRow");

window.onload = () => {
    populateMountains();
    mountainsDropDown.onchange = populateMountainsOnChange;
}

function populateMountains() {
    for (let mountain of mountainsArray) {
        let newOption = new Option(mountain);
        mountainsDropDown.appendChild(newOption);
        console.log(mountain)
    }
}

function populateMountainsOnChange(){
    let mountainName = mountainsDropDown.value;
    const mountainFind = mountainsArray.find (mountain => mountain.name === mountainName)
    console.log(mountainFind);

    mountainDetailRow.innerHTML = "";

    if (mountainFind) {
        createMountainCard(mountainFind);
      }
}

function createMountainCard(mountainFind) {
    
}