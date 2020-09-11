//get date and time from moment.js
//loop for 9-5 template (function)
//description function
//savebtn event listener to save coming task || clear it out ||make some changes
//display time
//display current time by color
//display past event by color
//display coming event by color
//

var dayPlanner = JSON.parse(localStorage.getItem("dayPlanner")) || {};

$(".saveBtn").on("click", function (e) {
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
  $(".hour").each(function () {
    var blockHour = parseInt($(this).attr("id").split("hour")[1]);
    console.log(blockHour, currentHour);
  });

  //   if (moment.isMoment(moment())) {
  //     $(".description").change($(".present"));
  //   }
}
