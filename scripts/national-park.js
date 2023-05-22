"use strict";

let locationDropDown = document.getElementById("locationDropDown");
let parkTypeDropDown = document.getElementById("parkTypeDropDown");

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

