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

console.log(document.querySelector("input").id);
console.log(moment().format("H"));

if (document.querySelector("input").id < moment().format("H")) {
    console.log("you're onto something");
} else {
    console.log("try again");
}



printDate();