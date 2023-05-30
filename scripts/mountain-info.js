"use strict"
const mountainsDropDown = document.getElementById("mountainsDropDown");
const mountainDetailRow = document.getElementById("mountainDetailRow");

window.onload = () => {
    populateMountains();
    mountainsDropDown.onchange = populateMountainsOnChange;
}

function populateMountains() {
    for (let mountain of mountainsArray) {
        let newOption = new Option(mountain.name);
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
   
    let divCol = document.createElement("div");

    
    divCol.className = "col-5 px-5 ";
    
    mountainDetailRow.appendChild(divCol);

    // -------------------------------------------------------------------------
    let divCard = document.createElement("div");
    //
    divCard.className = "card";
    //
    divCol.appendChild(divCard);


    //-----------------------------------------------------------------------------
    let divCardBody = document.createElement("div");
    
    divCardBody.className = "card-body";
    
    divCard.appendChild(divCardBody);


    //---------------------------------------------------------------------------------
    let h5Name = document.createElement("h5");
    
    h5Name.className = "card-title";
    
    h5Name.innerHTML = mountainFind.name;
    
    divCardBody.appendChild(h5Name);
    // ------------------------------------------------------------------------------------

    let mountainDesc =document.createElement("li");
    mountainDesc.className = "mountainDesc";
    mountainDesc.innerHTML = "Description: " + mountainFind.desc;
    h5Name.appendChild(mountainDesc);
    // --------------------------------------------------------------------------------

    let mountainElevation = document.createElement("li");
    mountainElevation.className ="mountainElevation";
    mountainElevation.innerHTML = "Elevation: " + mountainFind.elevation;
    mountainDesc.appendChild(mountainElevation);
    // ------------------------------------------------------------------------------------

    let mountainEffort = document.createElement("li");
    mountainEffort.className = "mountainEffort";
    mountainEffort.innerHTML = "Effort: " + mountainFind.effort;
    mountainElevation.appendChild(mountainEffort);
    // -------------------------------------------------------------------------------

    let mountainImage = document.createElement("img");
    mountainImage.className = "mountainImage";
    mountainImage.src ="images/" + mountainFind.img;
    mountainImage.alt = "mountain image";
    mountainEffort.appendChild(mountainImage);

    console.log(mountainImage);
}

