"use strict";

const locationDropDown = document.getElementById("locationDropDown");
const parkTypeDropDown = document.getElementById("parkTypeDropDown");
const NationalParkID = document.getElementById("NationalParkID")


window.onload = () => {
    
    locationdropdown1();
    populateParkType();
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
    
    let choseState = locationDropDown.value;
    const parksFilter = nationalParksArray.filter(park => park.State === choseState); 
    console.log(parksFilter);
    
    NationalParkID.innerHTML ="";
    
    if (parksFilter.length > 0) {
        for (let park of parksFilter) {
            createNationalParkCard(park);
        }

    }

}

function createNationalParkCard(park) {
    //  ----- this one is for div national park -------//
    let divCol = document.createElement("div");

    //
    divCol.className = "col-5 px-5 ";
    //
    NationalParkID.appendChild(divCol);

    // -- ----- div for card-------------------------------------------------//
    let divCard = document.createElement("div");
    //
    divCard.className = "card";
    //
    divCol.appendChild(divCard);

    // ------- div for card-body ----------------------------------------------//
    
    let divCardBody = document.createElement("div");
    //
    divCardBody.className = "card-body";
    //
    divCard.appendChild(divCardBody);

    // ------- card- tittle--------------------------------------------------//
    
    let h5Name = document.createElement("h5");
    //
    h5Name.className = "card-title";
    //
    h5Name.innerHTML = park.LocationName;
    //
    divCardBody.appendChild(h5Name);

    // ------ card-list -----------------------------------------------//
    let unOrderedList = document.createElement("ul");
    //
    unOrderedList.className = "card-list";
    //
    h5Name.appendChild(unOrderedList);

    // ---------------------------------------------------------------//
    
    let listId = document.createElement("li");
    //
    listId.className = "parkId";
    //
    listId.innerHTML = "Id: " + park.LocationID;
    //
    unOrderedList.appendChild(listId);

     // ----------------------------------------------------------//
    
    let listCity = document.createElement("li");
    //
    listCity.className = "parkCity";

    //
    listCity.innerHTML = "City: " + park.City;
    //
    listId.appendChild(listCity);

     // --------------------------------------------------------//

    //
    let listZipCode = document.createElement("li");
    //
    listZipCode.className = "parkZipCode";
    //
    listZipCode.innerHTML = "Zipcode: " + park.ZipCode;
    //
    listCity.appendChild(listZipCode);

    // --------------------------------------------------------//
    
    let listAddress = document.createElement("li");
    //
    listAddress.className = "parkAddress";
    //
    listAddress.innerHTML = "Address: " + park.Address;
    //
    listZipCode.appendChild(listAddress);

    // --------------------------------------------------------//
    
    let listPhone = document.createElement("li");
    //
    listPhone.className = "parkPhone";
    //
    listPhone.innerHTML = "Phone number: " + park.Phone;
    //
    listAddress.appendChild(listPhone);

    // --------------------------------------------------------//
    
    let listFax = document.createElement("li");
    //
    listFax.className = "parkFax";
    //
    listFax.innerHTML = "Fax number: " + park.Fax;
    //
    listPhone.appendChild(listFax);

    // --------------------------------------------------------//
    
    let listLatitude = document.createElement("li");
    //
    listLatitude.className = "parkLatitude";
    //
    listLatitude.innerHTML = "Latitude: " + park.Latitude;

    //
    listFax.appendChild(listLatitude);

    // --------------------------------------------------------//
    
    let listLongitude = document.createElement("li");
    //
    listLongitude.className = "parkLongitude";
    //
    listLongitude.innerHTML = "Longitude: " + park.Longitude;
    //
    listLatitude.appendChild(listLongitude);


    // --------------------------------------------------------//
    
    let listVisit = document.createElement("li");
    //
    listVisit.className = "parkVisit";
    //
    listVisit.innerHTML = "Website: " + park.Visit;
    //
    listLongitude.appendChild(listVisit);

    // --------------------------------------------------------//
    
    let listLocation = document.createElement("li");
    //
    listLocation.className = "parkLoaction";
    //
    listLocation.innerHTML = "Location: " + park.Location.coordinates;

    //
    listVisit.appendChild(listLocation);

    // --------------------------------------------------------//

    let listState = document.createElement("li");
    //
    listState.className = "parkState";
    //
    listState.innerHTML = "State: " + park.State;

    //
    listLocation.appendChild(listState);
 

}




     





    