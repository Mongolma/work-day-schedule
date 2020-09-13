var dayPlanner = JSON.parse(localStorage.getItem("dayPlanner")) || {};
var test = false;
$(".saveBtn").on("click", function (e) {
  var storedPlans = JSON.parse(localStorage.getItem("storedPlans"));
  if (test) {
    console.log(storedPlans);
  }

  if (storedPlans !== null) {
    planTextArr = storedPlans;
  } else {
    //this should only occur on first time the app is loaded in the browser
    planTextArr = new Array(9);
    planTextArr[4] = "Exercise";
  }

  if (test) {
    console.log("full array of plned text" + planTextArr);
  }

  var id = $(this).attr("id");
  var task = $(this).siblings(".description").children("textarea").val();
  console.log(task);
  dayPlanner[id] = task;
  localStorage.setItem("dayPlanner", JSON.stringify(dayPlanner));
});

var currentDay = moment().format("MMMM Do YYYY");
$("#currentDay").text(currentDay);

// var colorOfTime = [];

function hourTracker() {
  //get current number of hours
  var currentHour = moment().format("H");

  //loop over time blocks
  $(".description").each(function () {
    var blockHour = $(this).attr("id");
    // console.log("Here is $(this.attr('id'): ", $(this).attr("id"));
    // console.log("blockHour: ", blockHour);
    // console.log("currentHour", currentHour);
    console.log(blockHour, currentHour);

    if (blockHour < currentHour) {
      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present");
    } else if (blockHour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
    } else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  });
}
hourTracker();
