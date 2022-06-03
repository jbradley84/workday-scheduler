elEightAm = document.querySelector("#time8");
elNineAm = document.querySelector("#time9"); 
elTenAm = document.querySelector("#time10"); 
elElevenAm = document.querySelector("#time11");
elTwelvePm = document.querySelector("#time12");
elOnePm = document.querySelector("#time13");
elTwoPm = document.querySelector("#time14");
elThreePm = document.querySelector("#time15");
elFourPm = document.querySelector("#time16");
elFivePm = document.querySelector("#time17");

var printDate = function () {
    // format date into string
    var calendarDate = moment().format("dddd" + ", " + "MMMM" + " Do");

    // print moment string in header
    document.querySelector("#currentDay").innerHTML = calendarDate;
}



// function to add class to input divs relative to moment
// console.log(moment().format("H"));
// if ($(input.id) < moment().format("H")) {
//     $(input.id).addClass("past");
// }

console.log(document.querySelector("input").id.slice(4));
console.log(moment().format("H"));

if (parseInt(document.querySelector("input").id.slice(4)) < parseInt(moment().format("H"))) {
    console.log("you're onto something");
} else {
    console.log("try again");
}



printDate();