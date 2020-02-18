$(document).ready(function () {

    //on click function for the save button - when the save button is clicked you want to pull of values of the text box and id off of text box
    $(".saveBtn").on("click", function () {

        // store values in variables
        var hour = $(this)
            .parent()
            .attr("id");
        var text = $(this)
            .siblings(".description")
            .val()
            .trim();

        console.log("text: ", text);
        console.log("hour: ", hour);

        // set local storage with this values
        localStorage.setItem(hour, text);

    });

    //a function that updates the background colors 
    function updateBackground() {

        //get the time using moment.js
        $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
        var currentHour = moment().hour();
        console.log(currentHour);

        $(".time-block").each(function () {
            var hour = parseInt($(this).attr("id").split("-")[1]);
            if (hour < currentHour) {
                $(this).addClass("past");
            }
            else if (hour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    }

    updateBackground();


    //get values from local storage and set the text areas

    // console.log($("#hour-9 .description").siblings());
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

});






