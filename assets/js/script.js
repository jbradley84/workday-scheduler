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
// empty array for event objects
var plannerObjects = [];


// function to display date in header
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
    // if event hour has passed, add class "past"
    if (parseInt(plannerHours[i].id.slice(4)) < parseInt(moment().format("H"))) {
        var pastEvent = function () {
            plannerHours[i].classList.add("past");
        }
        pastEvent();
    // if event hour is now, add class "present"
    } else if (parseInt(plannerHours[i].id.slice(4)) == parseInt(moment().format("H"))) {
        var presentEvent = function () {
            plannerHours[i].classList.add("present");
        }
        presentEvent();
    // if event hour is in the future, add class "future"
    } else {
        var futureEvent = function () {
            plannerHours[i].classList.add("future");
        }
        futureEvent();
    }
}


// function to convert event data into objects within plannerObjects array, and save to localStorage 
btnFunction = function () {
    var plannerInput = document.querySelectorAll(".col-10");
    for (let i = 0; i < plannerInput.length; i++) {
        
        if (plannerInput[i].value) {
            // create key/value variables for calendar events
            var eventKey = plannerInput[i].id;
            var eventValue = plannerInput[i].value;
            // add key/value pairs to localStorage
            localStorage.setItem(eventKey, eventValue);

            // make localStorage data persistent 
            for (let n = 0; n < localStorage.length; n++) {
                if (localStorage.getitem(key) == eventKey) {
                    console.log("we've got a match");
                } else {
                    console.log("no match");
                }
            }

          
        }
    }

// // turn calendar events into objects
// var eventObject = {
//     key: eventKey,
//     value: eventValue
// };
// // push eventObject to plannerObjects array
// plannerObjects.push(eventObject);

// // save plannerObjects array in localStorage
// localStorage.setItem(plannerObjects);    
//console.log(plannerObjects);

    
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