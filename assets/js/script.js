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





//console.log(document.querySelectorAll(".col-10"));
//console.log(moment().format("H"));

// function to loop through planner by hour block
var plannerHours = document.querySelectorAll(".col-10");
for (let i = 0; i < plannerHours.length; i++) {
    
    if (parseInt(plannerHours[i].id.slice(4)) < parseInt(moment().format("H"))) {
        var pastEvent = function () {
            console.log("past");
        }
    } else if (parseInt(plannerHours[i].id.slice(4)) == parseInt(moment().format("H"))) {
        var presentEvent = function () {
            console.log("present");
        }
    } else {
        var futureEvent = function () {
            console.log("future");
        }
    }
console.log(parseInt(plannerHours[i].id.slice(4)));    
pastEvent();
//presentEvent();
//futureEvent();

}







printDate();