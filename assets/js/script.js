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
btnEightAm = document.querySelector("#Btn8");
btnNineAm = document.querySelector("#Btn9");
btnTenAm = document.querySelector("#Btn10");
btnElevenAm = document.querySelector("#Btn11");
btnTwelvePm = document.querySelector("#Btn12");
btnOnePm = document.querySelector("#Btn13");
btnTwoPm = document.querySelector("#Btn14");
btnThreePm = document.querySelector("#Btn15");
btnFourPm = document.querySelector("#Btn16");
btnFivePm = document.querySelector("#Btn17");

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
//pastEvent();
//presentEvent();
//futureEvent();
}

// button function
btnFunction = function () {
    console.log("button click");
}

printDate();

// add event listenter to 8am button
btnEightAm.addEventListener("click", btnFunction);
btnNineAm.addEventListener("click", btnFunction);
btnTenAm.addEventListener("click", btnFunction);
btnElevenAm.addEventListener("click", btnFunction);
btnTwelvePm.addEventListener("click", btnFunction);
btnOnePm.addEventListener("click", btnFunction);
btnTwoPm.addEventListener("click", btnFunction);
btnThreePm.addEventListener("click", btnFunction);
btnFourPm.addEventListener("click", btnFunction);
btnFivePm.addEventListener("click", btnFunction);