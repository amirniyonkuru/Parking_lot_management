var personCar = [];
var output = document.getElementById("itemTable");
var msgField = document.getElementById("msgField");
var owner = document.getElementById("owner");
var carModel = document.getElementById("carModel");
var numPlates = document.getElementById("numPlates");
var inDate = document.getElementById("inDate");
var outDate = document.getElementById("outDate");

//function to add new element and validation
document.getElementById("btnCar").addEventListener("click", function(){
    var inDateConverted = new Date(inDate.value).getTime();
    var outDateConverted = new Date(outDate.value).getTime();
    if(owner.value == "" || carModel.value == "" || numPlates.value == "" || inDate.value == "" || outDate.value == ""){
        msgField.style.display = "block";
        messageField("Please fill in the missing fields");
        return false;
    }else if(inDateConverted > outDateConverted){
        alert("CheckOut date must be greater than checkIn date")
        return false;
    }else{
        msgField.style.display = "none";
        personCar.push({Names:owner.value.toLowerCase(), carModel:carModel.value.toLowerCase(),numPlates:numPlates.value.toLowerCase(),inDate:inDate.value.toLowerCase(),outDate:outDate.value.toLowerCase()});
        output.innerHTML += "<tr><td>"+ personCar[personCar.length-1]["Names"] +"</td><td>"+ personCar[personCar.length-1]["carModel"] +"</td><td>"+ personCar[personCar.length-1]["numPlates"] +"</td><td>"+ personCar[personCar.length-1]["inDate"] +"</td><td>"+ personCar[personCar.length-1]["outDate"] +"</td><td><button type='button' id='btnDelete' onclick='deleteTr()'><i class='fa fa-trash'></i></button></td></tr>";
    }
    

    // console.log(personCar);
})

// function to give messages
function messageField(msg){
    msgField.innerHTML = msg;
}


// displays the result of a search box
document.getElementById("btnSearch").addEventListener("click", function(){
    var result = findArray();
    output.innerHTML = "<tr><td>"+ result.Names +"</td><td>"+ result.carModel +"</td><td>"+ result.numPlates +"</td><td>"+ result.inDate +"</td><td>"+ result.outDate +"</td><td><button type='button' id='btnDelete' onclick='deleteTr()'><i class='fa fa-trash'></i></button></td></tr>";
    
})


/* find the whole element records according to what you searched for */
function findArray(item){
    item = document.getElementById("searchBox").value.toLowerCase();
    for(var i = 0; i < personCar.length; i++){
        if(personCar[i]["Names"] === item || personCar[i]["carModel"] === item || personCar[i]["numPlates"] === item || personCar[i]["inDate"] === item || personCar[i]["outDate"] === item
        ){
            // console.log(item);
            return personCar[i];

            /*use this to get the property name by its value from function getValue()*/
            // console.log(getValue(prop,item));

            //use this to find the index in an array of objects 
            // console.log(personCar.findIndex(x => x.ersonCar[i] == item));

        }else if(personCar[i]["Names"] !== item || personCar[i]["carModel"] !== item || personCar[i]["numPlates"] !== item || personCar[i]["inDate"] !== item || personCar[i]["outDate"] !== item){
            alert("Nothing matches your search!");
        }else if(personCar[i]["Names"] === "" || personCar[i]["carModel"] === "" || personCar[i]["numPlates"] === "" || personCar[i]["inDate"] === "" || personCar[i]["outDate"] === ""){
            alert("Nothing matches your search!");
        }else{
            alert("Enter what to search for!");
        }
    }
}

// function to get the property name by its value
function getValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }


  //fcntion to delete the element of tr
 function deleteTr(){
    var faElem = window.event.target;
    var deletTr = faElem.parentElement.parentElement.parentElement;
    deletTr.style.display = "none";
    var item = deletTr.children[0].innerText;
    for(var i = 0; i < personCar.length; i++){
        if(personCar[i]["Names"] === item || personCar[i]["carModel"] === item || personCar[i]["numPlates"] === item || personCar[i]["inDate"] === item || personCar[i]["outDate"] === item
        ){
            var indeRmv = personCar.indexOf(personCar[i]);
            personCar.splice(indeRmv,1);
            
        }
    }
}