"use strict";

let locationDropDown = document.getElementById("locationDropDown");
let parkTypeDropDown = document.getElementById("parkTypeDropDown");
let locationId = document.getElementById("parkId");
let city = document.getElementById("parkCity");
let state = document.getElementById("parkState");
let parkZipCode = document.getElementById("parkZipCode");

window.onload = () => {
    // kind like a onclick but for select elements :v 
    // locationDropDown.onchange = onByLocationClick;
    // parkTypeDropDown.onchange = onByParkTypeClick;
     
    // hidebylocation(); 
    // hidebyparkType();
    //onByLocationClick();

    populateLocationOptions();
    
    populateParkType(); 
}



//function onByLocationClick () {
function populateLocationOptions () {
        for (let locationAVariable of locationsArray){
         let newOption = new Option(locationAVariable);
         locationDropDown.appendChild(newOption);

        
        
        console.log(locationsArray);  
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
    
    let selectedState = locationDropDown.value;

    
    console.log(selectedState);

     
    const parksFilter = locationDropDown.filter(park => park.State === selectedState); //ask question regarding partytypedropdown

    console.log(parksFilter);


     parkDetailRow.innerHTML ="";


    
    if (parksFilter.length > 0) {

        for (let park of parksFilter) {
            createNationalParkcard(park);
        }

    }

}