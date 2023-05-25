"use strict";

const locationDropDown = document.getElementById("locationDropDown");
const parkTypeDropDown = document.getElementById("parkTypeDropDown");
const NationalParkID = document.getElementById("NationalParkID")


window.onload = () => {
    
    locationdropdown1();
    // populateLocationOptions();
    locationDropDown.onchange = locationDropDownChange;
}

 function locationdropdown1(){
    for(let parkState of locationsArray) {
    let newOption = new Option(parkState);
    locationDropDown.appendChild(newOption);       
}
 }


function populateParkType () {
    for (let parkTypeA of parkTypesArray){
        let newOption2 = new Option(parkTypeA);
        parkTypeDropDown.appendChild(newOption2);
          console.log (parkTypesArray); 
    }
 
}


// function filter

function locationDropDownChange() {
    
    let choseState = locationDropDownChange.value;
    const parksFilter = nationalParksArray.filter(park => park.State === choseState); 
    let partDetails = parksFilter;
    console.log(partDetails);
    
    NationalParkID.innerHTML ="";
    
    if (partDetails.length > 0) {
        for (let park of partDetails) {
            createNationalParkcard(park);
        }

    }

}

   
// end of filter function 

function createNationalParkcard(park) {
    // ---Col--//
    let divCol = document.createElement("div");
    divCol.className = "col" ;
    NationalParkID.appendChild(divCol);
    // -----Card---//
    let divCard = document.createElement("div");
    divCard.className = "card" ;
    divCol.appendChild(divCard);
    //---- card-body---//
    let divCardBody = document.createElement("div");
    divCardBody.className = "card-body" ;
    divCard.appendChild(divCardBody);
    //----card- tittle---//
    let h5Name = document.createElement("h5");
    h5Name.className = "card-title" ;
    h5Name.innerHTML = park.LocationName;
    divCardBody.appendChild(h5Name);


}

     





    