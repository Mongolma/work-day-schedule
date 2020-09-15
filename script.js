$(document).ready(function () {
  //save button event
  $(".saveBtn").on("click", function (e) {
    //selecting activite by id and assigning it to the var id
    var id = $(this).attr("id");
    //assigning value of the activity to var task
    var task = $(this).siblings(".description").children("textarea").val();
    //saving it to local storage
    localStorage.setItem(id, task);
  });
  // get date from moment.js
  var currentDay = moment().format("MMMM Do YYYY");
  //writing current date by selecting element of html id
  $("#currentDay").text(currentDay);

  //tracking hours by color
  function hourTracker() {
    //get current number of hours
    var currentHour = moment().format("H");

    //loop over time blocks
    $(".description").each(function () {
      var blockHour = $(this).attr("id");
      // console.log(blockHour, currentHour);

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

  //giving value to each block by their ids & element
  $("#09").children("textarea").val(localStorage.getItem("hour-9"));
  $("#10").children("textarea").val(localStorage.getItem("hour-10"));
  $("#11").children("textarea").val(localStorage.getItem("hour-11"));
  $("#12").children("textarea").val(localStorage.getItem("hour-12"));
  $("#13").children("textarea").val(localStorage.getItem("hour-13"));
  $("#14").children("textarea").val(localStorage.getItem("hour-14"));
  $("#15").children("textarea").val(localStorage.getItem("hour-15"));
  $("#16").children("textarea").val(localStorage.getItem("hour-16"));
  $("#17").children("textarea").val(localStorage.getItem("hour-17"));

  hourTracker();
});
